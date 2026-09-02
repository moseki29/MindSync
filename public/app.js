// MindSync Application

const API_BASE = '/api';
let modules = [];
let wellnessLogs = [];

// Tab Navigation
function showTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Show selected tab
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Update nav buttons
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Study Module Functions
function addModule(event) {
  event.preventDefault();

  const name = document.getElementById('moduleName').value;
  const weight = document.getElementById('moduleWeight').value;
  const targetHours = document.getElementById('targetHours').value;

  const module = {
    id: Date.now(),
    name,
    weight: parseInt(weight),
    targetHours: parseInt(targetHours),
    createdAt: new Date().toLocaleDateString()
  };

  modules.push(module);
  localStorage.setItem('modules', JSON.stringify(modules));

  // Clear form
  event.target.reset();

  // Refresh display
  displayModules();

  // Send to server
  fetch(`${API_BASE}/study/modules`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(module)
  }).catch(err => console.log('Server not available, using localStorage'));
}

function displayModules() {
  const modulesList = document.getElementById('modulesList');
  modulesList.innerHTML = '';

  modules.forEach(module => {
    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <h4>${module.name}</h4>
      <p>Weight: ${module.weight}/10</p>
      <p>Target: ${module.targetHours} hours</p>
      <p style="font-size: 0.8em; color: #999;">Added: ${module.createdAt}</p>
    `;
    modulesList.appendChild(card);
  });
}

// Wellness Functions
function setupWellnessSliders() {
  const moodSlider = document.getElementById('moodScore');
  const stressSlider = document.getElementById('stressLevel');
  const anxietySlider = document.getElementById('anxietyLevel');

  if (moodSlider) {
    moodSlider.addEventListener('input', (e) => {
      document.getElementById('moodValue').textContent = e.target.value;
    });
  }

  if (stressSlider) {
    stressSlider.addEventListener('input', (e) => {
      document.getElementById('stressValue').textContent = e.target.value;
    });
  }

  if (anxietySlider) {
    anxietySlider.addEventListener('input', (e) => {
      document.getElementById('anxietyValue').textContent = e.target.value;
    });
  }
}

function logWellness(event) {
  event.preventDefault();

  const wellness = {
    id: Date.now(),
    moodScore: parseInt(document.getElementById('moodScore').value),
    stressLevel: parseInt(document.getElementById('stressLevel').value),
    anxietyLevel: parseInt(document.getElementById('anxietyLevel').value),
    sleepHours: parseFloat(document.getElementById('sleepHours').value) || 0,
    notes: document.getElementById('wellnessNotes').value,
    checkinDate: new Date().toLocaleString()
  };

  wellnessLogs.push(wellness);
  localStorage.setItem('wellnessLogs', JSON.stringify(wellnessLogs));

  // Clear form
  event.target.reset();
  document.getElementById('moodValue').textContent = '5';
  document.getElementById('stressValue').textContent = '5';
  document.getElementById('anxietyValue').textContent = '5';

  alert('✅ Wellness check-in logged!');

  // Send to server
  fetch(`${API_BASE}/wellness/checkins`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(wellness)
  }).catch(err => console.log('Server not available, using localStorage'));
}

// Initialize app
function initApp() {
  // Load from localStorage
  const savedModules = localStorage.getItem('modules');
  const savedWellness = localStorage.getItem('wellnessLogs');

  if (savedModules) modules = JSON.parse(savedModules);
  if (savedWellness) wellnessLogs = JSON.parse(savedWellness);

  // Setup UI
  setupWellnessSliders();
  displayModules();

  // Load timetable
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timetableBody = document.getElementById('timetableBody');
  if (timetableBody) {
    daysOfWeek.forEach(() => {
      const slot = document.createElement('div');
      slot.className = 'timetable-slot';
      slot.textContent = 'Add session...';
      timetableBody.appendChild(slot);
    });
  }

  console.log('🧠 MindSync initialized');
}

// Start app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
