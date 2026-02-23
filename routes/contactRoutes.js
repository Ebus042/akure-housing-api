const express = require("express");
const router = express.Router();

// POST /api/contact
router.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Name, email and message are required.",
    });
  }

  console.log("New Contact Message:");
  console.log(req.body);

  res.status(200).json({
    message: "Message received successfully!",
  });
});

module.exports = router;
