const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req,res)=>{
  const { email, coupon, diamond } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ffi93195@gmail.com",
      pass: "GMAIL_APP_PASSWORD"
    }
  });

  await transporter.sendMail({
    from: "Diamond Request",
    to: "ffi93195@gmail.com",
    subject: "New Diamond Request",
    text:
`User Email: ${email}
Diamond: ${diamond}
Coupon: ${coupon}`
  });

  res.json({ message:"Request sent. Processing..." });
});

app.listen(3000);
