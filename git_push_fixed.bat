@echo off
echo Using Git from AppData to push to repository...
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

REM Show current Git status
echo Current Git status:
"%GIT_PATH%" status
echo.

REM Add all changes
echo Adding all changes...
"%GIT_PATH%" add .
echo.

REM Check if there are changes to commit
"%GIT_PATH%" diff --cached --quiet
if %errorlevel% neq 0 (
    echo Committing changes...
    "%GIT_PATH%" commit -m "Add comprehensive educators hub with case studies, session plans, rubrics, and teacher resources"
    echo.
) else (
    echo No changes to commit. Proceeding with push...
    echo.
)

REM Push to the remote repository (using master branch)
echo Pushing to remote repository (github.com/s8ken/symbi-website-main)...
"%GIT_PATH%" push origin master

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS! Push completed successfully.
    echo Your educators hub should now be deployed to Vercel.
    echo.
    echo You can check the deployment status at:
    echo https://vercel.com/s8ken/symbi-website-main
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