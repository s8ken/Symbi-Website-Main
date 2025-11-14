@echo off
echo Creating completely clean push with new commit history...
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

REM Reset to before the problematic commit
echo Resetting to clean commit history...
"%GIT_PATH%" reset --hard HEAD~2
echo.

REM Show current Git status
echo Current Git status:
"%GIT_PATH%" status
echo.

REM Add only the essential educators hub files
echo Adding essential educators hub files...
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
    echo Committing educators hub implementation...
    "%GIT_PATH%" commit -m "Add comprehensive educators hub with case studies, session plans, rubrics, and teacher resources"
    echo.
) else (
    echo No changes to commit. Proceeding with push...
    echo.
)

REM Force push to override the problematic commit (use with caution!)
echo Force pushing educators hub to remote repository...
echo WARNING: This will override previous commits!
"%GIT_PATH%" push --force-with-lease origin master

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
    echo ERROR: Force push failed. Please check the error messages above.
    echo You may need to resolve conflicts or contact repository administrator.
)

echo.
pause