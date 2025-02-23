const fs         = require('fs')
const path       = require('path')
const dotenv     = require('dotenv')
const moment     = require('moment')
const Express    = require('express')
const Knex       = require('knex')
const bcrypt     = require('bcrypt')
const jwt        = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const twilio     = require('twilio')


// =========================================================== # 
// ======================== VARIABLES ======================== # 
// =========================================================== # 
dotenv.config()

const ENV = {
    'SERVER_HOST':  process.env.SERVER_HOST,
    'SERVER_PORT':  process.env.SERVER_PORT,
    'JWT_SECRET':   process.env.JWT_SECRET,

    'SMTP_HOST':    process.env.SMTP_HOST,
    'SMTP_PORT':    process.env.SMTP_PORT,
    'SMTP_USER':    process.env.SMTP_USER,
    'SMTP_PASS':    process.env.SMTP_PASS,

    'SMS_USER':     process.env.SMS_USER,
    'SMS_PASS':     process.env.SMS_PASS,
}

const PATHS = {
    'STATIC':   path.join(__dirname, 'static'), 
    'VIEWS':    path.join(__dirname, 'views'), 
}

const server = Express()
const dbase  = Knex({ client:'sqlite3', connection:{ filename:'./dbase.db' } })


// ========================================================== # 
// ======================== 1) START ======================== # 
// ========================================================== # 
server.get('/', (req, res) => {
    return res.send('Welcome')
})


// ======================================================== # 
// ======================== 2) URL ======================== # 
// ======================================================== # 
server.get('/url/:slug1/:slug2', (req, res) => {
    const {  slug1,  slug2 } = req.params
    const { param1, param2 } = req.query
    return res.json({ slug1, slug2, param1, param2 })
})


// ======================================================== # 
// ======================== 3) API ======================== # 
// ======================================================== # 
server.get('/api-response', (req, res) => {
    const mock = [{ id:1, item:'Item1' }, { id:2, item:'Item2' }]
    return res.json(mock)
})

server.get('/api-consume', async (req, res) => {
    const data = await fetch(`${ENV.SERVER_HOST}/api-response`).then(x => x.json())
    return res.json(data)
})


// ============================================================= # 
// ======================== 4) DATABASE ======================== # 
// ============================================================= # 
server.get('/dbase-read', async (req, res) => {
    const data = await dbase.raw('SELECT * FROM "Table"')
    return res.json(data)
})

server.get('/dbase-bind', async (req, res) => {
    const { search } = req.query
    const SQL = `
        SELECT * 
        FROM "Table" 
        WHERE "ColA" = :search
    `
    const data = await dbase.raw(SQL, { search })
    return res.json(data)
})


// ========================================================= # 
// ======================== 5) AUTH ======================== # 
// ========================================================= # 
server.get('/auth/password-code', (req, res) => {
    const password = 'ABC123'
    const hashed   = bcrypt.hashSync(password, bcrypt.genSaltSync())
    return res.json({ hashed })
})

server.get('/auth/password-check', (req, res) => {
    const password = 'ABC123'
    const hashed   = '$2b$10$NFKQeHl6jtiSfIGGmhbH3uJR9UnZG3MBwR2AMkXAIv8uWNAuN2aqS'
    const check    = bcrypt.compareSync(password, hashed)
    return res.json({ check })
})

server.get('/auth/token-code', (req, res) => {
    const payload = { user:'user@mail', exp:moment().add(1,'weeks').unix() }
    const token   = jwt.sign(payload, ENV.JWT_SECRET)
    return res.json({ ...payload, token })
})

server.get('/auth/token-check', (req, res) => {
    try {
        const token   = 'abc.xyz.123'
        const payload = jwt.verify(token, ENV.JWT_SECRET)
        return res.json({ status:'VALID', payload })
    } catch (E) {
        return (E instanceof jwt.TokenExpiredError) 
        ? res.json({ status:'EXPIRED', payload:null }) 
        : res.json({ status:'INVALID', payload:null }) 
    }
})


// ============================================================= # 
// ======================== 6) MESSAGES ======================== # 
// ============================================================= # 
server.get('/email-send', async (req, res) => {
    const mailer = nodemailer.createTransport({ 
                 'host':ENV.SMTP_HOST, 'port':ENV.SMTP_PORT, 
        'auth':{ 'user':ENV.SMTP_USER, 'pass':ENV.SMTP_PASS, } 
    })
    const info = await mailer.sendMail({ from:'from@mail', to:'to@mail', subject:'Headline', text:'Message' })
    return res.json(info)
})

server.get('/sms-send', (req, res) => {
    const sms  = twilio(ENV.SMS_USER, ENV.SMS_PASS)
    const info = sms.messages.create({ from:'+123456789', to:'+987654321', body:'Message' })
    return res.json(info)
})


// ========================================================== # 
// ======================== 7) FILES ======================== # 
// ========================================================== # 
server.use(Express.static(PATHS.STATIC))

server.get('/static', (req, res) => {
    const files = fs.readdirSync('static')
    return res.json(files)
})

server.get('/static-reader/:filename', (req, res) => {
    const filename = req.params.filename
    return res.sendFile(path.join(PATHS.STATIC, filename))
})

server.get('/static-download/:filename', (req, res) => {
    const filename = req.params.filename
    return res.download(path.join(PATHS.STATIC, filename))
})


// =========================================================== # 
// ======================== 8) RENDER ======================== # 
// =========================================================== # 
server.set('view engine', 'ejs')
server.set('views', PATHS.VIEWS)
server.get('/page', (req, res) => {
    return res.render('page', { prop1:'Headline', prop2:['Item1','Item2','Item3'] })
})
  

// =============================================================== # 
// ======================== 9) EXCEPTIONS ======================== # 
// =============================================================== # 
server.use((req, res) => {
    return res.status(404).json({ Exception:'NOT_FOUND' })
})


// ====================================================== # 
// ======================== MAIN ======================== # 
// ====================================================== # 
server.listen(ENV.SERVER_PORT, () => '>> Server Listening')
