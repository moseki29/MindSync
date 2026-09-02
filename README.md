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

### Option 1: Deploy to Vercel (Access by Name) ⭐ RECOMMENDED

Deploy directly to Vercel for FREE and access your app via a URL like `mindsync.vercel.app`:

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import this GitHub repository (`moseki29/MindSync`)
4. Click **"Deploy"**
5. Your app is live! Access it via the Vercel URL (e.g., `mindsync-abc123.vercel.app`)

**Benefits:**
- ✅ No localhost port needed
- ✅ Accessible from any device
- ✅ Auto-deploys on every push to main
- ✅ Free tier (unlimited deployments)
- ✅ Custom domain support

**Add Custom Domain:**
After deployment, in Vercel dashboard:
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Access via your domain (e.g., `mindsync.com`)

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Create local admin file
npm run init-admin

# Start the server
npm start
```

Open http://localhost:3000

### Option 3: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Click **"Deploy site"**
5. Access your app via Netlify URL

## 🌍 Using Supabase Backend (Optional)

### Setup
1. Create account at [supabase.com](https://supabase.com) (free tier)
2. Run the schema:
   - Copy contents of `supabase/schema.sql`
   - Paste into your Supabase SQL editor
   - Execute
3. Get credentials:
   - `SUPABASE_URL` from project settings
   - `SUPABASE_ANON_KEY` from API keys
4. Add to environment variables:
   - **For Vercel:** Project Settings → Environment Variables
   - **For local:** Create `.env` file

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

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
├── vercel.json             # Vercel deployment config
├── package.json
├── .env.example
└── README.md
```

## 🎯 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js + Express.js
- **Database:** Supabase (PostgreSQL) - Optional
- **Hosting:** Vercel or Netlify - Free tier
- **Storage:** localStorage (offline) + PostgreSQL (cloud)

## 🗄️ Database Schema (Optional)

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

- **Local:** All data stored in your browser's localStorage
- **Cloud:** Optional Supabase sync to back up data securely
- **No tracking:** Zero analytics or data collection

## 📈 Future Enhancements

- [ ] AI-powered study recommendations
- [ ] Push notifications for study reminders
- [ ] Pomodoro timer integration
- [ ] Analytics dashboard
- [ ] Social sharing & accountability partners
- [ ] Mobile app (React Native)
- [ ] Dark mode
- [ ] Export reports (PDF/CSV)

## 🤝 Contributing

Contributions welcome! Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests
- Fork and adapt for your needs

## 📄 License

MIT

---

**Made by combining StudyFlow + PinkBack** ✨

**Need help?** Check the [GitHub Issues](https://github.com/moseki29/MindSync/issues) or create a new one!
