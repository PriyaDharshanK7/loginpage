import { spawn } from 'child_process';

const port = process.env.PORT || 4173;

console.log(`Starting Vite preview server on port ${port}`);

const child = spawn('npx', ['vite', 'preview', '--port', port, '--host', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  child.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  child.kill('SIGINT');
});