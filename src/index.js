import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGODB_URI;

const app = express()

app.use(cors({
  origin: 'https://tech-showcase-store.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.urlencoded({ extended: true }));



mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT))
  } catch (e) {
    console.log(e)
  }
}

startApp()
