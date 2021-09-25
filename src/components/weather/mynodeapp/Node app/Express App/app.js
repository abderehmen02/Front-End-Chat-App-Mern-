// npm i -D nodemon (when we install this dependency we don't 
// have to run node every time we change the file
const express = require('express')
const path = require('path')
const app = express()
const members = require('./public/members.json')
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
let appUse = 2;
// app.use(express.static(path.join(__dirname, 'pages')))
let ussingJson = 3;
// const users = [{
//     id: 1, name: 'mohamed'
// }, { id: 2, name: 'ahmed' }, { id: 3, name: 'david' }]
// app.get('/users', (req, res) => {
//     res.json(users)
// })
// // ussing req params and diffrent file
// app.get('/users/:id' , (req , res)=>{
//     res.json(members.filter(item => item.id == req.params.id))
// }) 
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    else console.log('server is running at port :' + PORT)
})