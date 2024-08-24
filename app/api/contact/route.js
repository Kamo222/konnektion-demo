import { NextResponse, NextRequest } from "next/server"
import { transporter } from "@/config/nodemailer";

// const CONTACT_MESSAGE_FIELDS = {
//   name: "Name",
//   email: "Email",
//   subject: "Subject",
//   message: "Message"
// }

// const generateEmailContent = (data) => {

//   const stringData = Object.entries(data).reduce((str, [key, value]) => {
//     return str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value} \n`;
//   }, "")



//   return {
//     text: stringData,
//     html: 
//   }
// }

const email = process.env.EMAIL;

export const POST = async (request) => {
    const body = await request.json();

    if(body.firstname === "" | body.lastname === "" | body.email === "" | body.phonenumber === "" | body.text === ""){
      return Response.json({message: "Bad request"}, {status: 400});
    }

   const mailOptions = {
      from: email,
      to: `${email}, ${body.email}`
  }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Konnektion Message Recieved",
        text: "NodeMailer is working",
        html: `<div style="background: black;"><p style="text-color: white;">${body.firstname}</p><p style="text-color: white;">${body.lastname}</p></div>`
      })

      return Response.json({success: true}, {status: 200});
    } catch(error){
      console.log(error);
      return Response.json({message: error.message}, {status: 400});
    }
    console.log(body);

    // return NextResponse.json({name: "Mamaregane"}, {status: 200})
    // return Response.json({message: "Bad request"}, {status: 400});
  }