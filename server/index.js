const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'MindSync running' });
});

// Study endpoints
app.get('/api/study/modules', (req, res) => {
  res.json({ message: 'Get study modules' });
});

app.post('/api/study/modules', (req, res) => {
  res.json({ message: 'Create study module' });
});

// Wellness endpoints
app.get('/api/wellness/checkins', (req, res) => {
  res.json({ message: 'Get wellness check-ins' });
});

app.post('/api/wellness/checkins', (req, res) => {
  res.json({ message: 'Log wellness check-in' });
});

// Dashboard endpoint
app.get('/api/dashboard', (req, res) => {
  res.json({
    studyMetrics: {},
    wellnessMetrics: {},
    recommendations: []
  });
});

// Serve main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`🧠 MindSync running on http://localhost:${PORT}`);
});
