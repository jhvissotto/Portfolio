import os
from dotenv import load_dotenv
import smtplib
import email


load_dotenv()
ENV_SMTP_HOST   = os.getenv('ENV_SMTP_HOST')
ENV_SMTP_PORT   = os.getenv('ENV_SMTP_PORT')
ENV_SMTP_USER   = os.getenv('ENV_SMTP_USER')
ENV_SMTP_PASS   = os.getenv('ENV_SMTP_PASS')


_from    = 'from@mail.com'
_to      =   'to@mail.com'
_subject = 'Headline'
_body    = 'Welcome'

msg = email.mime.MIMEMultipart()
msg['From']    = _from
msg['To']      = _to
msg['Subject'] = _subject
msg.attach(email.MIMEText(_body, 'plain'))

server = smtplib.SMTP(ENV_SMTP_HOST, ENV_SMTP_PORT)
server.starttls()
server.login(ENV_SMTP_USER, ENV_SMTP_PASS)
server.sendmail(_from, _to, msg.as_string())
server.quit()