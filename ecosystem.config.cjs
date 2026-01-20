module.exports = {
  apps: [{
    name: 'drprotein-prod',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/drprotein',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: '/var/log/drprotein/prod-error.log',
    out_file: '/var/log/drprotein/prod-out.log',
    log_file: '/var/log/drprotein/prod-combined.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    kill_timeout: 5000,
    listen_timeout: 3000,
    shutdown_with_message: true,
    restart_delay: 4000,
    max_restarts: 10,
    min_uptime: '10s'
  }, {
    name: 'drprotein-dev',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/drprotein-',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 5001
    },
    error_file: '/var/log/drprotein/dev-error.log',
    out_file: '/var/log/drprotein/dev-out.log',
    log_file: '/var/log/drprotein/dev-combined.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    kill_timeout: 5000,
    listen_timeout: 3000,
    shutdown_with_message: true,
    restart_delay: 4000,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};