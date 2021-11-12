import React from 'react';
//var mandrill = require('node-mandrill')('3e9567b65802062d0aacd488e9865961-us5');
// var nodemailer = require("nodemailer");
// var mandrillTransport = require('nodemailer-mandrill-transport');

// var smtpTransport = nodemailer.createTransport(mandrillTransport({
//     auth: {
//       apiKey : '<< 3e9567b65802062d0aacd488e9865961-us5 >>'
//     }
// }));

// let mailOptions={
//    from : document.getElementById('email'),
//    to : 'ethanryanroldan@gmail.com',
//    subject : "This is from Mandrill",
//    html : "Hello, Sending this email using Node and Mandrill"
//};
//var axios = require("axios").default;

// var options = {
//   method: 'POST',
//   url: 'https://d7sms.p.rapidapi.com/secure/send',
//   headers: {
//     'content-type': 'application/json',
//     authorization: 'Basic VGhlQ2Fwbi1NRUM6TWFoYWxzMDUh',
//     'x-rapidapi-host': 'd7sms.p.rapidapi.com',
//     'x-rapidapi-key': '330d3197f0msh56513affc75bbc5p19f2a0jsn977d57a37bb2'
//   },
//   data: {content: 'Test Message', from: 'D7-Rapid', to: 6508890144}
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const Contact = () => {
    const sendEmail = () => {
        // mandrill('/messages/send', {
        //     message: {
        //         to: [{email: 'ethanryanroldan@gmail.com', name: 'Ethan Roldan'}],
        //         from_email: document.getElementById('email'),
        //         subject: document.getElementById('subject'),
        //         text: document.getElementById('body')
        //     }
        // }, function(error, response)
        // {
        //     //uh oh, there was an error
        //     if (error) console.log( JSON.stringify(error) );

        //     //everything's good, lets see what mandrill said
        //     else console.log(response);
        // });
        // smtpTransport.sendMail(mailOptions, function(error, response){
        // if(error) {
        //     throw new Error("Error in sending email");
        // }
        // console.log("Message sent: " + JSON.stringify(response));
        // })
    }

    return (
        <div id='contactDiv'>
            <div id='emailForm'>
                <input type='text' placeholder='Email' id='email' />
                <input type='text' placeholder='Subject' id='subject' />
                <textarea placeholder='Body' id='body'></textarea>
                <button onClick={() => sendEmail()}>Send!</button>
            </div>
        </div>
    )
}

export default Contact
