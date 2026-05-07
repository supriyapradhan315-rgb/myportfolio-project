const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ message: 'Message received', contact });
  } catch (error) {
    res.status(400).json({ message: 'Unable to save message', error: error.message });
  }
};
