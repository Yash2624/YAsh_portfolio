// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs').promises;

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(express.static('public'));

// app.post('/submit-feedback', async (req, res) => {
//     try {
//         const { email, answer } = req.body;
//         if (!email || !answer) {
//             throw new Error('Email and answer are required.');
//         }

//         // Simulate saving to a JSON file
//         const feedbackData = await fs.readFile('feedback.json', 'utf-8');
//         const parsedData = JSON.parse(feedbackData);
//         parsedData.push({ email, answer, timestamp: new Date().toLocaleString() });
//         await fs.writeFile('feedback.json', JSON.stringify(parsedData, null, 2));

//         res.json({ message: 'Feedback submitted successfully!' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs').promises;
// const excel = require('excel4node');
// const nodemailer = require('nodemailer');

// const path = require('path');


// const app = express();
// let port = 8081;

// app.use(express.static(path.join(__dirname, 'public')));

// // Always serve the main HTML file for any other requests
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// //app.use(bodyParser.json());
// //app.use(express.static('public'));

// app.use(express.static('/public'));


// // Helper function to create Excel file
// function createExcelFile(feedbackData) {
//     const wb = new excel.Workbook();
//     const ws = wb.addWorksheet('Feedback');

//     // Add headers
//     const headers = ['Email', 'Feedback Answer', 'Timestamp'];
//     headers.forEach((header, index) => {
//         ws.cell(1, index + 1).string(header);
//     });

//     // Add data
//     feedbackData.forEach((feedback, index) => {
//         ws.cell(index + 2, 1).string(feedback.email);
//         ws.cell(index + 2, 2).string(feedback.answer);
//         ws.cell(index + 2, 3).string(feedback.timestamp);
//     });

//     return wb.writeToBuffer();
// }

// Helper function to send email
// async function sendEmail(dataBuffer) {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'yashportfolio.server@gmail.com', // Replace with your Gmail email
//             pass: 'Jaibhole@26' // Replace with your Gmail password or an app-specific password
//         }
//     });

//     const mailOptions = {
//         from: 'yashportfolio.server@gmail.com', // Replace with your Gmail email
//         to: 'yashportfolio.server@gmail.com', // Replace with the recipient's email
//         subject: 'Feedback Data',
//         text: 'Feedback Data is attached.',
//         attachments: [{
//             filename: 'feedback_data.xlsx',
//             content: dataBuffer,
//             encoding: 'base64'
//         }]
//     };

//     return transporter.sendMail(mailOptions);
// }

// app.post('/submit-feedback', async (req, res) => {
//     try {
//         const { email, answer } = req.body;
//         if (!email || !answer) {
//             throw new Error('Email and answer are required.');
//         }

//         // Simulate saving to a JSON file
//         const feedbackData = await fs.readFile('feedback.json', 'utf-8');
//         const parsedData = JSON.parse(feedbackData);
//         parsedData.push({ email, answer, timestamp: new Date().toLocaleString() });
//         await fs.writeFile('feedback.json', JSON.stringify(parsedData, null, 2));

//         // Create Excel file
//         const excelBuffer = createExcelFile(parsedData);

//         // Send email with Excel attachment
//         await sendEmail(excelBuffer);

//         res.json({ message: 'Feedback submitted successfully and email sent!' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });



// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'yashportfolio.server@gmail.com',
//         pass: 'Jaibhole@26'
//     }
// });


// let port1 = 8082;

// app.post('/submit-form', (req, res) => {
//     const { NAME, email, message } = req.body;

//     const mailOptions = {
//         from: 'yashportfolio.server@gmail.com',
//         to: 'yashportfolio.server@gmail.com',
//         subject: 'Form Submission',
//         text: `Name: ${NAME}\nEmail: ${email}\nMessage: ${message}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }

//         res.send('Message sent successfully!');
//     });
// });

// app.listen(port1, () => {
//     console.log(`Server is running at http://localhost:${port1}`);
// });

// const app = express();
// const port = 8081;

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended: true }));


// // Helper function to create Excel file
// function createExcelFile(feedbackData) {
//     const wb = new excel.Workbook();
//     const ws = wb.addWorksheet('Feedback');

//     // Add headers
//     const headers = ['Email', 'Feedback Answer', 'Timestamp'];
//     headers.forEach((header, index) => {
//         ws.cell(1, index + 1).string(header);
//     });

//     // Add data
//     feedbackData.forEach((feedback, index) => {
//         ws.cell(index + 2, 1).string(feedback.email);
//         ws.cell(index + 2, 2).string(feedback.answer);
//         ws.cell(index + 2, 3).string(feedback.timestamp);
//     });

//     return wb.writeToBuffer();
// }

// // Helper function to send email
// async function sendEmail(dataBuffer) {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'yashportfolio.server@gmail.com', // Replace with your Gmail email
//             pass: 'Jaibhole@26' // Replace with your Gmail password or an app-specific password
//         }
//     });

//     const mailOptions = {
//         from: 'yashportfolio.server@gmail.com', // Replace with your Gmail email
//         to: 'yashportfolio.server@gmail.com', // Replace with the recipient's email
//         subject: 'Feedback Data',
//         text: 'Feedback Data is attached.',
//         attachments: [{
//             filename: 'feedback_data.xlsx',
//             content: dataBuffer,
//             encoding: 'base64'
//         }]
//     };

//     return transporter.sendMail(mailOptions);
// }

// app.post('/submit-form', async (req, res) => {
//     try {
//         const { NAME, email, message } = req.body;
//         if (!NAME || !email || !message) {
//             throw new Error('Name, email, and message are required.');
//         }

//         // Simulate saving to a JSON file
//         const feedbackData = await fs.readFile('feedback.json', 'utf-8');
//         const parsedData = JSON.parse(feedbackData);
//         parsedData.push({ email, answer: message, timestamp: new Date().toLocaleString() });
//         await fs.writeFile('feedback.json', JSON.stringify(parsedData, null, 2));

//         // Create Excel file
//         const excelBuffer = createExcelFile(parsedData);

//         // Send email with Excel attachment
//         await sendEmail(excelBuffer);

//         res.json({ message: 'Feedback submitted successfully and email sent!' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const excel = require('excel4node');
const nodemailer = require('nodemailer');

const app = express();
const port = 8081;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Helper function to create Excel file
function createExcelFile(feedbackData) {
    const wb = new excel.Workbook();
    const ws = wb.addWorksheet('Feedback');

    // Add headers
    const headers = ['Email', 'Feedback Answer', 'Timestamp'];
    headers.forEach((header, index) => {
        ws.cell(1, index + 1).string(header);
    });

    // Add data
    feedbackData.forEach((feedback, index) => {
        ws.cell(index + 2, 1).string(feedback.email);
        ws.cell(index + 2, 2).string(feedback.answer);
        ws.cell(index + 2, 3).string(feedback.timestamp);
    });

    return wb.writeToBuffer();
}

// Helper function to send email
async function sendEmail(dataBuffer) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yashportfolio.server@gmail.com', // Replace with your Gmail email
            pass: 'ctcq gbfy klvs rjbd' // Replace with your Gmail password or an app-specific password
        }
    });

    const mailOptions = {
        from: 'yashportfolio.server@gmail.com', // Replace with your Gmail email
        to: 'yashportfolio.server@gmail.com', // Replace with the recipient's email
        subject: 'Feedback Data',
        text: 'Feedback Data is attached.',
        attachments: [{
            filename: 'feedback_data.xlsx',
            content: await dataBuffer,
            encoding: 'base64'
        }]
    };

    return transporter.sendMail(mailOptions);
}

app.post('/submit-form', async (req, res) => {
    try {
        const { NAME, email, message } = req.body;
        if (!NAME || !email || !message) {
            throw new Error('Name, email, and message are required.');
        }

        // Simulate saving to a JSON file
        const feedbackData = await fs.readFile('feedback.json', 'utf-8');
        const parsedData = JSON.parse(feedbackData);
        parsedData.push({ NAME, email, message, timestamp: new Date().toLocaleString() });
        await fs.writeFile('feedback.json', JSON.stringify(parsedData, null, 2));

        // Create Excel file
        const excelBuffer = createExcelFile(parsedData);

        // Send email with Excel attachment
        await sendEmail(excelBuffer);

        res.redirect('/index.html');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

    //     res.json({ message: 'Feedback submitted successfully and email sent!' });
    // } catch (error) {
    //     res.status(400).json({ message: error.message });
    // }



});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
