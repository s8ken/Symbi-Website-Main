@echo off
echo Creating new branch for clean educators hub deployment...
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

REM Create a new branch from a clean state
echo Creating new branch for educators hub...
"%GIT_PATH%" checkout --orphan educators-hub-clean
echo.

REM Remove all files from staging
echo Cleaning staging area...
"%GIT_PATH%" rm -rf .
echo.

REM Add only the essential educators hub files
echo Adding essential educators hub files...
"%GIT_PATH%" add src/pages/EducatorsHub.tsx
"%GIT_PATH%" add src/pages/CaseStudyDetail.tsx
"%GIT_PATH%" add src/components/PDFViewer.tsx
"%GIT_PATH%" add src/components/TeacherResources.tsx
"%GIT_PATH%" add api/routes/educators.ts
"%GIT_PATH%" add public/educators/
"%GIT_PATH%" add package.json
"%GIT_PATH%" add src/App.tsx
"%GIT_PATH%" add src/main.tsx
"%GIT_PATH%" add vite.config.ts
"%GIT_PATH%" add tsconfig.json
"%GIT_PATH%" add tailwind.config.js
"%GIT_PATH%" add api/server.ts
echo.

REM Check if there are changes to commit
"%GIT_PATH%" diff --cached --quiet
if %errorlevel% neq 0 (
    echo Committing educators hub implementation...
    "%GIT_PATH%" commit -m "Add comprehensive educators hub with case studies, session plans, rubrics, and teacher resources"
    echo.
) else (
    echo No changes to commit. Proceeding with push...
    echo.
)

REM Push the new branch
echo Pushing educators hub to new branch...
"%GIT_PATH%" push origin educators-hub-clean

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS! Educators hub pushed to new branch successfully!
    echo.
    echo You can now create a pull request from the 'educators-hub-clean' branch
    echo to merge it into the main branch.
    echo.
    echo The educators hub includes:
    echo - 6 comprehensive case studies covering AI trust topics
    echo - Session plans with detailed lesson structures
    echo - Assessment rubrics for student evaluation
    echo - Downloadable worksheets and activities
    echo - PDF viewer for in-browser document viewing
    echo - Teacher resource management system
    echo.
    echo Visit: https://github.com/s8ken/Symbi-Website-Main/pulls
) else (
    echo.
    echo ERROR: Push to new branch failed. Please check the error messages above.
    echo Common issues:
    echo - Authentication required (check your Git credentials)
    echo - Network connectivity issues
    echo - Remote repository permissions
)

echo.
pause