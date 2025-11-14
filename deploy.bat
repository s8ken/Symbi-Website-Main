@echo off
REM SYMBI Platform Deployment Script for Windows
REM This script deploys the unified SYMBI platform to all four repositories

echo 🚀 Starting SYMBI Platform Deployment
echo ======================================

REM Check if GitHub token is provided
if "%GITHUB_TOKEN%"=="" (
    echo ❌ GitHub Personal Access Token (PAT) is required!
    echo Please set the GITHUB_TOKEN environment variable
    echo Example: set GITHUB_TOKEN=your-personal-access-token-here
    exit /b 1
)

echo ✅ GitHub token found

REM Deploy to symbi-symphony
echo.
echo === Deploying to symbi-symphony ===
echo Cloning repository...
git clone https://github.com/s8ken/symbi-symphony.git temp_symphony
cd temp_symphony

REM Create directories
mkdir src 2>nul
mkdir api 2>nul
mkdir api\utils 2>nul
mkdir api\services 2>nul
mkdir api\routes 2>nul
mkdir shared 2>nul
mkdir docs 2>nul

REM Copy core protocol files
echo Copying core protocol files...
copy ..\api\utils\crypto.ts api\utils\
copy ..\api\services\trustScoring.ts api\services\
copy ..\api\services\advancedTrustScoring.ts api\services\
copy ..\api\routes\trust.js api\routes\
copy ..\api\routes\did.js api\routes\
copy ..\shared\types.ts shared\
copy ..\shared\constants.ts shared\
copy ..\ARCHITECTURE.md docs\
copy ..\README.md .
copy ..\FINAL_SUMMARY.md docs\

REM Configure git
git config user.name "SYMBI Deploy Bot"
git config user.email "deploy@symbi.platform"

REM Add and commit
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Deploy unified SYMBI platform with enhanced features"
echo Pushing to remote...
git push "https://%GITHUB_TOKEN%@github.com/s8ken/symbi-symphony.git" main
if %errorlevel% neq 0 (
    echo Trying master branch...
    git push "https://%GITHUB_TOKEN%@github.com/s8ken/symbi-symphony.git" master
)

cd ..
echo ✅ Successfully deployed to symbi-symphony!

REM Deploy to symbi-synergy
echo.
echo === Deploying to symbi-synergy ===
echo Cloning repository...
git clone https://github.com/s8ken/symbi-synergy.git temp_synergy
cd temp_synergy

REM Create directories
mkdir src 2>nul
mkdir src\pages 2>nul
mkdir src\components 2>nul
mkdir src\components\ui 2>nul
mkdir api 2>nul
mkdir api\routes 2>nul
mkdir api\middleware 2>nul
mkdir api\services 2>nul
mkdir docs 2>nul

REM Copy production platform files
echo Copying production platform files...
copy ..\api\server.ts api\
copy ..\api\routes\ai.js api\routes\
copy ..\api\routes\compliance.js api\routes\
copy ..\api\middleware\*.js api\middleware\
copy ..\api\services\aiOrchestration.ts api\services\
copy ..\src\App.tsx src\
copy ..\src\pages\EnhancedDashboard.tsx src\pages\
copy ..\src\components\ui\enhanced.tsx src\components\ui\
copy ..\package.json .
copy ..\vite.config.ts .
copy ..\README.md .
copy ..\DEPLOYMENT_GUIDE.md docs\
copy ..\FINAL_SUMMARY.md docs\

REM Configure git
git config user.name "SYMBI Deploy Bot"
git config user.email "deploy@symbi.platform"

REM Add and commit
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Deploy unified SYMBI platform with enhanced features"
echo Pushing to remote...
git push "https://%GITHUB_TOKEN%@github.com/s8ken/symbi-synergy.git" main
if %errorlevel% neq 0 (
    echo Trying master branch...
    git push "https://%GITHUB_TOKEN%@github.com/s8ken/symbi-synergy.git" master
)

cd ..
echo ✅ Successfully deployed to symbi-synergy!

REM Deploy to YCQ-Sonate
echo.
echo === Deploying to YCQ-Sonate ===
echo Cloning repository...
git clone https://github.com/s8ken/YCQ-Sonate.git temp_sonate
cd temp_sonate

REM Create directories
mkdir api 2>nul
mkdir api\routes 2>nul
mkdir shared 2>nul
mkdir docs 2>nul

REM Copy specification files
echo Copying specification files...
copy ..\api\routes\compliance.js api\routes\
copy ..\api\routes\vc.js api\routes\
copy ..\shared\types.ts shared\
copy ..\README.md .
copy ..\FINAL_SUMMARY.md docs\

REM Configure git
git config user.name "SYMBI Deploy Bot"
git config user.email "deploy@symbi.platform"

REM Add and commit
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Deploy unified SYMBI platform with enhanced features"
echo Pushing to remote...
git push "https://%GITHUB_TOKEN%@github.com/s8ken/YCQ-Sonate.git" main
if %errorlevel% neq 0 (
    echo Trying master branch...
    git push "https://%GITHUB_TOKEN%@github.com/s8ken/YCQ-Sonate.git" master
)

cd ..
echo ✅ Successfully deployed to YCQ-Sonate!

REM Deploy to symbi-resonate
echo.
echo === Deploying to symbi-resonate ===
echo Cloning repository...
git clone https://github.com/s8ken/symbi-resonate.git temp_resonate
cd temp_resonate

REM Create directories
mkdir src 2>nul
mkdir src\pages 2>nul
mkdir src\stores 2>nul
mkdir api 2>nul
mkdir api\routes 2>nul
mkdir api\utils 2>nul
mkdir docs 2>nul

REM Copy analytics files
echo Copying analytics files...
copy ..\api\routes\monitoring.js api\routes\
copy ..\api\utils\logger.ts api\utils\
copy ..\src\pages\Dashboard.tsx src\pages\
copy ..\src\stores\trustStore.ts src\stores\
copy ..\README.md .
copy ..\FINAL_SUMMARY.md docs\

REM Configure git
git config user.name "SYMBI Deploy Bot"
git config user.email "deploy@symbi.platform"

REM Add and commit
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Deploy unified SYMBI platform with enhanced features"
echo Pushing to remote...
git push "https://%GITHUB_TOKEN%@github.com/s8ken/symbi-resonate.git" main
if %errorlevel% neq 0 (
    echo Trying master branch...
    git push "https://%GITHUB_TOKEN%@github.com/s8ken/symbi-resonate.git" master
)

cd ..
echo ✅ Successfully deployed to symbi-resonate!

REM Cleanup
echo.
echo Cleaning up temporary directories...
rd /s /q temp_symphony 2>nul
rd /s /q temp_synergy 2>nul
rd /s /q temp_sonate 2>nul
rd /s /q temp_resonate 2>nul

echo.
echo 🎉 SYMBI Platform deployment completed!
echo All repositories have been updated with the unified platform.
echo.
echo Next steps:
echo 1. Check the deployment status in each repository
echo 2. Run the demo script to verify functionality
echo 3. Monitor the real-time dashboard for live updates

pause