const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const stringFix = JSON.stringify(req.body);
  const body = JSON.parse(stringFix);
  // const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: 'studiofromtheashes.studio@gmail.com',
    from: 'hello@fromtheashes.studio',
    subject: 'New web form message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  mail.send(data);

  res.status(200).json({ status: 'Ok' });
};
