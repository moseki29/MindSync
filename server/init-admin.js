const fs = require('fs');
const path = require('path');

const adminData = {
  role: 'admin',
  created_at: new Date().toISOString(),
  version: '1.0.0'
};

const adminPath = path.join(__dirname, '../local-admin.json');
fs.writeFileSync(adminPath, JSON.stringify(adminData, null, 2));

console.log('✅ Local admin file created at', adminPath);
