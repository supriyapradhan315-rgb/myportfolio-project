const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));

app.use('/api/projects', projectRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Portfolio API is running.' });
});

const createAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ username: 'admin' });
    if (!existingAdmin) {
      const password = process.env.ADMIN_PASSWORD || 'admin123';
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await User.create({ username: 'admin', password: hashedPassword });
      console.log('Default admin user created. Username: admin');
    }
  } catch (error) {
    console.error('Admin creation failed:', error.message);
  }
};

app.listen(PORT, async () => {
  await createAdminUser();
  console.log(`Server running on port ${PORT}`);
});
