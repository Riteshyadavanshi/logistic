"use server"
import * as nodemailer from "nodemailer"
import { MailOptions } from "nodemailer/lib/smtp-transport"
type mailData={
    message:string,
    name:string,
    mobileNumber:string,
    email:string,
}
export const actionHandle=async(data:mailData)=>{
    try{
     const {email,name,message,mobileNumber} =data
    const mail= await nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"riteshyadav4122@gmail.com",
            pass:"joqo urka cezd hcei"
        },
        
    }) 
    const option:MailOptions={
        from:email,
        to:"riteshyadav4122@gmail.com",
        subject:"Contact Us",
        html:`<p>${name} ${message} ${mobileNumber} ${email}</p>`
    }
  
   await mail.sendMail(option)
}catch(err){
     throw err
}
  
}