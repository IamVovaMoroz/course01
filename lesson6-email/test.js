const sendEmail = require('./helpers/sendEmail'); // Путь к вашему файлу app.js

// Данные для отправки письма
const emailData = {
    to: "jasam64420@viperace.com",
    subject: "Verify email",
    html: "<p>Verify email UKR function</p>"
};

// Вызов функции sendEmail
sendEmail(emailData)
    .then(() => {
        console.log("Email sent successfully!");
    })
    .catch(error => {
        console.error("Error sending email:", error);
    });