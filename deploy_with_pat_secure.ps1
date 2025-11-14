# Secure PAT Deployment Script for SYMBI Website
# This script handles GitHub authentication using Personal Access Token

param(
    [Parameter(Mandatory=$true)]
    [string]$PAT,
    
    [string]$RemoteUrl = "https://github.com/s8ken/symbi-website-main.git",
    [string]$Branch = "master"
)

Write-Host "🔐 Setting up secure Git authentication..." -ForegroundColor Green

# Configure Git to use the PAT for authentication
$patAuthUrl = $RemoteUrl -replace "https://", "https://$PAT@"

# Set up Git configuration for this session
$env:GIT_ASKPASS = "echo"
$env:GIT_USERNAME = $PAT
$env:GIT_PASSWORD = $PAT

Write-Host "📡 Configuring remote with PAT authentication..." -ForegroundColor Yellow

# Remove existing remote and add with PAT
git remote remove origin 2>$null
$addResult = git remote add origin $patAuthUrl 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to add remote: $addResult" -ForegroundColor Red
    exit 1
}

Write-Host "🔄 Fetching latest changes..." -ForegroundColor Blue
$fetchResult = git fetch origin 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Fetch issues (may be normal for new repos): $fetchResult" -ForegroundColor Yellow
}

Write-Host "📤 Pushing educators hub implementation to GitHub..." -ForegroundColor Cyan

# Push with PAT authentication
$pushResult = git push -u origin $Branch 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Repository: $RemoteUrl" -ForegroundColor White
    Write-Host "📊 Branch: $Branch" -ForegroundColor White
    Write-Host "🚀 Vercel deployment should trigger automatically" -ForegroundColor Magenta
} else {
    Write-Host "❌ Push failed: $pushResult" -ForegroundColor Red
    
    # Try alternative approach
    Write-Host "🔄 Trying alternative push method..." -ForegroundColor Yellow
    
    # Reset and try force push if needed
    git reset --hard HEAD
    $forcePushResult = git push -f origin $Branch 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Force push successful!" -ForegroundColor Green
    } else {
        Write-Host "❌ Force push also failed: $forcePushResult" -ForegroundColor Red
        exit 1
    }
}

# Clean up sensitive data
$env:GIT_ASKPASS = ""
$env:GIT_USERNAME = ""
$env:GIT_PASSWORD = ""

Write-Host "🧹 Cleaned up authentication credentials" -ForegroundColor Green
Write-Host "🎉 Deployment process complete!" -ForegroundColor Green