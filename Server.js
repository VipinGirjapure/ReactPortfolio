const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.use('/',router)
app.listen(5000,()=>console.log('Server Is Running'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service:'gmail',auth:{
        user:"",pass:''
    }
});

contactEmail.verify((error)=>{
    if(error){
        console.log
    }
})