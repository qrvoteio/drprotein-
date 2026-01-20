#!/bin/bash

# Dr.Protein Production Update Script
# This script updates the application on the production server

echo "🔄 Starting Dr.Protein update..."

# Set the project directory
PROJECT_DIR="/var/www/drprotein"

# Check if we're in the right directory
if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ Error: Project directory $PROJECT_DIR does not exist!"
    exit 1
fi

cd $PROJECT_DIR

echo "📍 Current directory: $(pwd)"
echo "🌿 Current branch: $(git branch --show-current)"

# Save PM2 process list
echo "💾 Saving PM2 process list..."
pm2 save

# Stop the application
echo "⏹️  Stopping application..."
pm2 stop drprotein

# Check if stop was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to stop application!"
    exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Check if pull was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to pull changes!"
    echo "🔄 Restarting application..."
    pm2 start drprotein
    exit 1
fi

# Install/update dependencies
echo "📦 Installing dependencies..."
npm install

# Check if npm install was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies!"
    echo "🔄 Restarting application..."
    pm2 start drprotein
    exit 1
fi

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to build project!"
    echo "🔄 Restarting application..."
    pm2 start drprotein
    exit 1
fi

# Start the application
echo "▶️  Starting application..."
pm2 start drprotein

# Check if start was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to start application!"
    exit 1
fi

# Wait a moment for the application to fully start
sleep 3

# Check application status
echo "✅ Checking application status..."
pm2 status

# Check application logs (last 10 lines)
echo "📋 Recent logs:"
pm2 logs drprotein --lines 10 --nostream

# Test if the application is responding
echo "🧪 Testing application health..."
sleep 2
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000 || echo "000")

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Application is responding successfully (HTTP $HTTP_STATUS)"
else
    echo "⚠️  Application returned HTTP $HTTP_STATUS - please check logs"
fi

echo ""
echo "🎉 Update completed successfully!"
echo "🌐 Website: https://dev.vdbot1.store"
echo "📊 Monitor: pm2 monit"
echo "📋 Logs: pm2 logs drprotein"
echo ""

# Show helpful commands
echo "💡 Helpful commands:"
echo "  • Check status: pm2 status"
echo "  • View logs: pm2 logs drprotein --lines 50 -f"
echo "  • Monitor: pm2 monit"
echo "  • Restart: pm2 restart drprotein"
echo "  • Stop: pm2 stop drprotein"
echo "  • Start: pm2 start drprotein"
echo ""