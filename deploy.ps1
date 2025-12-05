# GitHub Pages Deployment Script
# Run this script after Git is installed

Write-Host "🚀 Starting GitHub Pages Deployment..." -ForegroundColor Cyan

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Initialize Git repository if needed
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Cyan
    git init
}

# Add all files
Write-Host "📝 Adding files to Git..." -ForegroundColor Cyan
git add .

# Check if remote exists
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "🔗 Adding GitHub remote..." -ForegroundColor Cyan
    git remote add origin https://github.com/Yassine92-cyber/portfolio.git
} else {
    Write-Host "✅ Remote already configured: $remoteExists" -ForegroundColor Green
}

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Cyan
$commitMessage = "Deploy portfolio with dark mode to GitHub Pages"
git commit -m $commitMessage

# Set branch to main
Write-Host "🌿 Setting branch to main..." -ForegroundColor Cyan
git branch -M main

# Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "⚠️  You may be prompted for GitHub credentials" -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/Yassine92-cyber/portfolio/settings/pages" -ForegroundColor White
    Write-Host "2. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
    Write-Host "3. Save" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 Your site will be live at: https://Yassine92-cyber.github.io/portfolio" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Please check:" -ForegroundColor Red
    Write-Host "1. GitHub credentials are correct" -ForegroundColor Yellow
    Write-Host "2. Repository exists at: https://github.com/Yassine92-cyber/portfolio" -ForegroundColor Yellow
    Write-Host "3. You have push permissions" -ForegroundColor Yellow
}

