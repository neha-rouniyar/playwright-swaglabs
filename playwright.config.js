// this file is used for configuring the behaviour of test files and is highly customizable
module.exports = {
    use: {
      headless: false, 
    },
  };
  
  const path = require('path');

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); 
  
  const config = {
    reporter: [['html', { outputFolder: path.join(__dirname, 'reports', `report-${timestamp}`) }]],
  };
  
  module.exports = config;
  