@echo off
echo Creating clean push without problematic files...
echo.

REM Set the Git executable path
set GIT_PATH=C:\Users\Stephen\AppData\Local\Programs\Git\cmd\git.exe

REM Check if Git exists
if not exist "%GIT_PATH%" (
    echo Git not found at expected location: %GIT_PATH%
    exit /b 1
)

echo Using Git from: %GIT_PATH%
echo.

REM Reset to previous commit to remove problematic files
echo Resetting to clean state...
"%GIT_PATH%" reset --hard HEAD~1
echo.

REM Remove deployment guide files that contain example API keys
echo Removing files with example API keys...
if exist DEPLOYMENT_GUIDE.md del DEPLOYMENT_GUIDE.md
if exist MANUAL_DEPLOYMENT.md del MANUAL_DEPLOYMENT.md
if exist DEPLOYMENT_SUMMARY.md del DEPLOYMENT_SUMMARY.md
if exist verify-deployment.ps1 del verify-deployment.ps1
if exist deploy-enhanced.ps1 del deploy-enhanced.ps1
if exist deploy.bat del deploy.bat
if exist demo.js del demo.js
echo.

REM Show current Git status
echo Current Git status:
"%GIT_PATH%" status
echo.

REM Add only the core educators hub files
echo Adding core educators hub files...
"%GIT_PATH%" add src/pages/EducatorsHub.tsx
"%GIT_PATH%" add src/pages/CaseStudyDetail.tsx
"%GIT_PATH%" add src/components/PDFViewer.tsx
"%GIT_PATH%" add src/components/TeacherResources.tsx
"%GIT_PATH%" add api/routes/educators.ts
"%GIT_PATH%" add public/educators/
echo.

REM Check if there are changes to commit
"%GIT_PATH%" diff --cached --quiet
if %errorlevel% neq 0 (
    echo Committing educators hub changes...
    "%GIT_PATH%" commit -m "Add comprehensive educators hub with case studies, session plans, rubrics, and teacher resources"
    echo.
) else (
    echo No changes to commit. Proceeding with push...
    echo.
)

REM Push to the remote repository (using master branch)
echo Pushing educators hub to remote repository...
"%GIT_PATH%" push origin master

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS! Educators hub pushed successfully!
    echo Your educators hub should now be deployed to Vercel.
    echo.
    echo You can check the deployment status at:
    echo https://vercel.com/s8ken/symbi-website-main
    echo.
    echo The educators hub includes:
    echo - 6 comprehensive case studies covering AI trust topics
    echo - Session plans with detailed lesson structures
    echo - Assessment rubrics for student evaluation
    echo - Downloadable worksheets and activities
    echo - PDF viewer for in-browser document viewing
    echo - Teacher resource management system
) else (
    echo.
    echo ERROR: Push failed. Please check the error messages above.
    echo Common issues:
    echo - Authentication required (check your Git credentials)
    echo - Network connectivity issues
    echo - Remote repository permissions
)

echo.
pause