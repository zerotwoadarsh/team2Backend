const { spawn } = require('child_process');

// Path to your Python script
const pythonScriptPath = './reddit_scrap.py';

// Function to run the Python script
function runPythonScript() {
  const pythonProcess = spawn('python', [pythonScriptPath]);

  // Capture output from the Python script
  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python output: ${data}`);
  });

  // Capture any errors
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
  });

  // Handle process exit
  pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
  });
}

// Run the Python script every hour
function scheduleTask() {
  runPythonScript();
  setInterval(runPythonScript, 3600000); // 3600000 ms = 1 hour
}

// Start the task scheduling
scheduleTask();
