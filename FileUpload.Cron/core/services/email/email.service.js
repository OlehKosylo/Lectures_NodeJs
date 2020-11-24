const nodemailer = require('nodemailer')
const EmailTemplates = require('email-templates')
const path = require('path')
const {statuses} = require("../../config");

const {ErrorHandler} = require("../../Errors");
const htmlTemplates = require('../../email-templates')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ottonewslettersite@gmail.com',
        pass: 'jhpqtgqmnrcypuxj'
    }
})

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates', 'templates'),
        options: {
            extension: 'ejs'
        }
    },
    juiceResources: {
        preserveImportant: true,
        webResources: {
            relativeTo: path.join(process.cwd(), 'email-templates', 'css')
        }
    }
})

class EmailService {
    async sendMail(userEmail, action, context) {
        const template = htmlTemplates[action];
        const html = await emailTemplates.render(template.templateFileName, {...context})

        const mailOptions = {
            from: 'ottonewslettersite@gmail.com',
            to: userEmail,
            subject: template.subject,
            html,
        }

        return transporter.sendMail(mailOptions, (err,info) => {
            if(err) {
                throw new ErrorHandler(err.message, statuses.BAD_REQUEST, 4000)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }
}

module.exports = new EmailService;
