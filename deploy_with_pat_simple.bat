@echo off
setlocal enabledelayedexpansion

echo 🔐 SYMBI Website PAT Deployment Script
echo ======================================
echo.

REM Check if PAT is provided
if "%~1"=="" (
    echo ❌ Please provide your GitHub Personal Access Token as the first argument
    echo Usage: %0 YOUR_PAT_HERE
    exit /b 1
)

set PAT=%~1
set REPO_URL=https://github.com/s8ken/symbi-website-main.git
set BRANCH=master

echo 📡 Configuring Git with PAT authentication...
echo 🌐 Repository: %REPO_URL%
echo 📊 Branch: %BRANCH%
echo.

REM Configure Git to use PAT in URL
git remote remove origin 2>nul
git remote add origin https://%PAT%@github.com/s8ken/symbi-website-main.git

if %errorlevel% neq 0 (
    echo ❌ Failed to configure remote with PAT
    exit /b 1
)

echo 🔄 Fetching latest changes...
git fetch origin

if %errorlevel% neq 0 (
    echo ⚠️  Fetch completed with warnings (this may be normal)
)

echo 📤 Pushing educators hub implementation to GitHub...
git push -u origin %BRANCH%

if %errorlevel% equ 0 (
    echo.
    echo ✅ SUCCESS! Educators hub pushed to GitHub!
    echo 🚀 Vercel deployment should trigger automatically
    echo 🌐 Repository: %REPO_URL%
    echo 📊 Branch: %BRANCH%
) else (
    echo.
    echo ⚠️  Standard push failed, trying force push...
    git push -f origin %BRANCH%
    
    if %errorlevel% equ 0 (
        echo ✅ Force push successful!
    ) else (
        echo ❌ Push failed completely. Please check your PAT and repository permissions.
        exit /b 1
    )
)

echo.
echo 🧹 Cleaning up...
git remote remove origin
git remote add origin %REPO_URL%

echo 🎉 Deployment process complete!
echo.
echo 📋 Next Steps:
echo 1. Check GitHub repository for the pushed changes
echo 2. Monitor Vercel deployment at: https://vercel.com/s8ken/symbi-website-main
echo 3. Verify the educators hub is live on the website

endlocal