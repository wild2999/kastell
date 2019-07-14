const nodemailer = require('nodemailer');
const validator = require('email-validator');

const sendLetter = (req, res) => {

  const errorRes = {
    title: 'Contact',
    err: true,
    type: 'empty',
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  if (!req.body.name || !req.body.email || !req.body.message) {

    res.send(errorRes);
    return;

  }

  const isValidEmail = validator.validate(req.body.email);

  if (!isValidEmail) {

    errorRes.type = 'Invalid email';
    res.status(500);
    res.send(errorRes);
    return;

  }

  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    auth: {
      user: 'info@kastell-projekt.de',
      password: '56fdfklsp'
    }
  });

  const mailOpts = {
    from: `${req.body.name} ${req.body.email}`,
    to: 'info@kastell-projekt.de',
    subject: 'Webseite contakt',
    text: `${req.body.message}`
  };

  smtpTrans.sendMail(mailOpts, (err, info) => {

    if (err) {

      res.status(500);
      res.send({
        title: 'Contact',
        type: 'error',
        description: 'Email was not sent'
      });

    } else {

      res.send({
        title: 'Contact',
        type: 'success',
        description: 'Email was sent successfully'
      });

    }

  });

};

module.exports = {
  sendLetter
};
