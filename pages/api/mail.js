const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
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

    mail
      .send(data)
      .then(() => {
        res.status(200).json({ status: 'Ok' });
        res.end();
      })
      .catch((error) => {
        console.log(error);
        res.status(error).json({ status: 'something went wrong' });
      });
  } else {
    res.status(405);
    res.end();
  }
};
