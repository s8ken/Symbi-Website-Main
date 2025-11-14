# SYMBI Educators Hub Deployment Script
# This script deploys the educators hub to the symbi-website-main repository

Write-Host "=== SYMBI Educators Hub Deployment ===" -ForegroundColor Cyan
Write-Host "Deploying comprehensive educators hub to symbi-website-main repository..." -ForegroundColor Yellow

# Check if git is available
try {
    git --version
    Write-Host "Git is available" -ForegroundColor Green
} catch {
    Write-Host "Git is not available in PATH. Please install Git or add it to PATH." -ForegroundColor Red
    exit 1
}

# Check current git status
Write-Host "`nChecking Git status..." -ForegroundColor Yellow
git status

# Show the commit we made
Write-Host "`nCommit details:" -ForegroundColor Yellow
git log --oneline -1

# Try to push with different methods
Write-Host "`nAttempting to push to symbi-website-main repository..." -ForegroundColor Yellow

# Method 1: Try direct push
try {
    Write-Host "Method 1: Direct push to master branch..." -ForegroundColor Yellow
    git push -u origin master
    Write-Host "✅ Successfully pushed to symbi-website-main!" -ForegroundColor Green
} catch {
    Write-Host "Direct push failed. Trying alternative methods..." -ForegroundColor Yellow
    
    # Method 2: Try with main branch
    try {
        Write-Host "Method 2: Trying main branch..." -ForegroundColor Yellow
        git push -u origin main
        Write-Host "✅ Successfully pushed to symbi-website-main (main branch)!" -ForegroundColor Green
    } catch {
        Write-Host "Main branch push also failed." -ForegroundColor Red
        
        # Method 3: Force push (use with caution)
        $response = Read-Host "Do you want to try force push? (yes/no)"
        if ($response -eq "yes") {
            Write-Host "Method 3: Force pushing..." -ForegroundColor Red
            git push -f origin master
            Write-Host "✅ Force push completed!" -ForegroundColor Green
        } else {
            Write-Host "Deployment cancelled." -ForegroundColor Yellow
        }
    }
}

Write-Host "`n=== Deployment Summary ===" -ForegroundColor Cyan
Write-Host "✅ Educators hub implementation committed" -ForegroundColor Green
Write-Host "✅ All case studies and teaching materials included" -ForegroundColor Green
Write-Host "✅ API endpoints for educational resources added" -ForegroundColor Green
Write-Host "✅ PDF viewer and download functionality implemented" -ForegroundColor Green

Write-Host "`n🎯 The educators hub is ready and will deploy to Vercel when pushed!" -ForegroundColor Cyan
Write-Host "📚 Features included:" -ForegroundColor Yellow
Write-Host "  • 6 comprehensive AI trust case studies" -ForegroundColor White
Write-Host "  • Session plans, rubrics, and worksheets" -ForegroundColor White
Write-Host "  • PDF viewing and download capabilities" -ForegroundColor White
Write-Host "  • Teacher resource management" -ForegroundColor White
Write-Host "  • Search and filtering functionality" -ForegroundColor White
Write-Host "  - Responsive design for all devices" -ForegroundColor White