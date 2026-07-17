#  Market Analysis Agent - Setup Script
# This script helps you configure your GROK API key

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Market Analysis Agent - Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env.local exists
$envFile = ".env.local"
$envExists = Test-Path $envFile

if ($envExists) {
    Write-Host "Found existing .env.local file" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to update your GROK API key? (y/n)"
    if ($overwrite -ne 'y') {
        Write-Host "Setup cancelled." -ForegroundColor Red
        exit
    }
}

Write-Host ""
Write-Host "Please enter your GROK API key from https://x.ai" -ForegroundColor Green
Write-Host "If you don't have one, visit: https://x.ai to get started" -ForegroundColor Yellow
Write-Host ""

$apiKey = Read-Host "Enter your GROK API Key"

if ([string]::IsNullOrWhiteSpace($apiKey)) {
    Write-Host "Error: API key cannot be empty!" -ForegroundColor Red
    exit
}

# Create .env.local file
$envContent = @"
# GROK API Configuration
# Your GROK API key from https://x.ai
GROK_API_URL=https://api.x.ai/v1/chat/completions
GROK_API_KEY=$apiKey
"@

$envContent | Out-File -FilePath $envFile -Encoding UTF8

Write-Host ""
Write-Host "✓ Configuration saved successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run 'npm install' if you haven't already" -ForegroundColor White
Write-Host "2. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host "3. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host ""
Write-Host "For Docker deployment:" -ForegroundColor Cyan
Write-Host "1. Copy .env.local to .env" -ForegroundColor White
Write-Host "2. Run 'docker-compose up -d'" -ForegroundColor White
Write-Host ""
Write-Host "Happy analyzing! 📊" -ForegroundColor Green
