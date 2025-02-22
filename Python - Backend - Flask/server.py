import os
from dotenv import load_dotenv
import datetime as dt
import requests as req
import flask
from flask import Flask
import sqlalchemy as Alchemy
import bcrypt
import jwt
import yagmail
import twilio


# =========================================== # 
# ================ VARIABLES ================ # 
# =========================================== # 
load_dotenv()

ENV_HOST        = os.getenv('HOST') 
ENV_DEBUG       = os.getenv('DEBUG') 
ENV_JWT_SECRET  = os.getenv('JWT_SECRET') 
ENV_JWT_ALGO    = os.getenv('JWT_ALGO') 

ENV_SMTP_HOST   = os.getenv('ENV_SMTP_HOST')
ENV_SMTP_PORT   = os.getenv('ENV_SMTP_PORT')
ENV_SMTP_USER   = os.getenv('ENV_SMTP_USER')
ENV_SMTP_PASS   = os.getenv('ENV_SMTP_PASS')

ENV_SMS_USER    = os.getenv('ENV_SMS_USER')
ENV_SMS_PASS    = os.getenv('ENV_SMS_PASS')


server = Flask(__name__)
dbase  = Alchemy.create_engine('sqlite:///dbase.db')


# ========================================== # 
# ================ 1) START ================ # 
# ========================================== # 
@server.route('/')
def get_started():
    return 'Welcome'


# ======================================== # 
# ================ 2) URL ================ # 
# ======================================== # 
@server.route('/url/<slug1>/<slug2>')
def url_parser(slug1, slug2):
    param1 = flask.request.args.get('param1')  
    param2 = flask.request.args.get('param2')  
    return { 'slug1':slug1, 'slug2':slug2, 'param1':param1, 'param2':param2 }


# ======================================== # 
# ================ 3) API ================ # 
# ======================================== # 
@server.route('/api-response')
def api_response():
    return [{ 'id':1, 'item':'Item1' }, { 'id':2, 'item':'Item2' }]

@server.route('/api-consume')
def api_consume():
    return req.get(f'{ENV_HOST}/api-response').json()


# ============================================= # 
# ================ 4) DATABASE ================ # 
# ============================================= # 
def _query(SQL, bind={}):
    con   = dbase.connect()
    query = con.execute(Alchemy.text(SQL), bind)
    data  = [dict(x) for x in query]
    con.close()
    return data

@server.route('/dbase-read')
def dbase_read():
    return _query('SELECT * FROM "Table"')

@server.route('/dbase-bind')
def dbase_bind():
    search = flask.request.args.get('search')  
    SQL = '''
        SELECT * 
        FROM "Table" 
        WHERE "ColA" = :search
    '''
    return _query(SQL, { 'search':search })


# ========================================= # 
# ================ 5) AUTH ================ # 
# ========================================= # 
@server.route('/auth/password-code')
def auth_password_code():
    password = 'ABC123'
    hashed   = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return dict(hashed=hashed)

@server.route('/auth/password-check')
def auth_password_check():
    password = 'ABC123'
    hashed   = b'$2b$12$7S3a.AbEJOyECNmSLtKvDO2zEYxPoPaASyZBJyw6RE81IA8pOxNYG'
    check    = bcrypt.checkpw(password.encode(), hashed)
    return dict(check=check)

@server.route('/auth/token-code')
def auth_token_code():
    payload = dict(user='user@mail', exp=dt.datetime.utcnow() + dt.timedelta(weeks=1))
    token   = jwt.encode(payload, ENV_JWT_SECRET)
    return { **payload, 'token':token }

@server.route('/auth/token-check')
def auth_token_check():
    token = 'abc.xyz.123'
    try:                                return dict(status='VALID',   payload=jwt.decode(token, ENV_JWT_SECRET, ENV_JWT_ALGO))
    except jwt.ExpiredSignatureError:   return dict(status='EXPIRED', payload=None)
    except jwt.InvalidTokenError:       return dict(status='INVALID', payload=None)


# ============================================= # 
# ================ 6) MESSAGES ================ # 
# ============================================= # 
@server.route('/email-send')
def email_send():
    to      = 'to@mail'
    subject = 'Headline'
    body    = 'Message'
    mailer  =  yagmail.SMTP(ENV_SMTP_USER, ENV_SMTP_PASS)
    res     =  mailer.send(to, subject, body)
    return res

@server.route('/sms-send')
def sms_send():
    sms = twilio.rest.Client(ENV_SMS_USER, ENV_SMS_PASS)
    res = sms.messages.create(from_='+123456789', to='+987654321', body='Message')
    return res


# ========================================== # 
# ================ 7) FILES ================ # 
# ========================================== # 
@server.route('/static')
def static_dir():
    return os.listdir('static')

@server.route('/static-reader/<filename>')
def static_reader(filename):
    return flask.send_from_directory('static', filename)

@server.route('/static-download/<filename>')
def static_download(filename):
    return flask.send_from_directory('static', filename, as_attachment=True)


# =========================================== # 
# ================ 8) RENDER ================ # 
# =========================================== # 
@server.route('/page')
def page_render():
    return flask.render_template('page.html', prop1='Headline', prop2=['Item1','Item2','Item3'])


# =============================================== # 
# ================ 9) EXCEPTIONS ================ # 
# =============================================== # 
@server.errorhandler(404)
def not_found(error):
    return ({ 'Exception':'NOT_FOUND' }, 404)



# ====================================== # 
# ================ MAIN ================ # 
# ====================================== # 
if __name__ == '__main__':
    server.run(debug=ENV_DEBUG)
