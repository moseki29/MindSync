# 🧠 MindSync

**Integrated Personal Productivity & Wellness Platform**

MindSync combines smart study planning with mental health tracking to help you balance your academic goals with your overall wellness. It's built by combining the best features from StudyFlow and PinkBack.

## ✨ Features

### Study Planning (from StudyFlow)
- 📚 Smart study planner with module weighting
- 📅 Personalized study timetables
- ⏰ Daily reminder system
- 📱 Offline-first support with localStorage

### Wellness Tracking (from PinkBack)
- 💚 Mental wellness check-ins (mood, stress, anxiety)
- 💤 Sleep tracking
- 💡 Personalized recommendations
- 📊 Wellness analytics

### Combined Features
- 📈 Study load vs. wellness balance dashboard
- 🎯 Integrated recommendations based on both metrics
- 📊 Progress analytics combining academic & wellness data
- 💾 Data persistence with localStorage and Supabase

## 🚀 Quick Start

### Local Run (No Supabase Required)

```bash
# Install dependencies
npm install

# Create local admin file
npm run init-admin

# Start the server
npm start
```

Open http://localhost:3000 and you're ready to go!

The app stores data in your browser's localStorage for full offline support.

## 🔗 With Supabase Backend

### Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the schema:
   ```sql
   -- Copy contents of supabase/schema.sql into your Supabase SQL editor
   ```
3. Create `.env` file:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   PORT=3000
   ```
4. Implement server-side API routes in `server/` to proxy Supabase operations

## 📁 Project Structure

```
MindSync/
├── public/
│   ├── index.html          # Main UI
│   ├── styles.css          # Styling
│   └── app.js              # Frontend logic
├── server/
│   ├── index.js            # Express server
│   └── init-admin.js       # Admin initialization
├── supabase/
│   └── schema.sql          # Database schema
├── package.json
├── .env.example
└── README.md
```

## 🎯 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js + Express.js
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Storage:** localStorage (offline) + PostgreSQL (cloud)

## 🗄️ Database Schema

### Core Tables
- `profiles` - User profiles
- `study_modules` - Study modules with weights
- `study_sessions` - Individual study sessions
- `wellness_checkins` - Mood, stress, anxiety logs
- `timetable_entries` - Weekly study schedule
- `recommendations` - AI-generated recommendations

## 📝 Usage

### Dashboard
View your study progress and wellness status at a glance with personalized recommendations.

### Study Planner
Create study modules, set target hours, and assign weights to prioritize your learning.

### Wellness Check-in
Log your daily mood, stress levels, sleep hours, and get recommendations to maintain balance.

### Timetable
Manage your weekly study schedule and receive notifications about upcoming sessions.

## 🔒 Privacy & Data

All data is stored locally in your browser by default. Enable Supabase sync to back up your data securely in the cloud.

## 📈 Future Enhancements

- [ ] AI-powered study recommendations
- [ ] Push notifications for study reminders
- [ ] Pomodoro timer integration
- [ ] Analytics dashboard
- [ ] Social sharing & accountability partners
- [ ] Mobile app (React Native)
- [ ] Dark mode

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit PRs.

## 📄 License

MIT

---

**Made by combining StudyFlow + PinkBack** ✨
