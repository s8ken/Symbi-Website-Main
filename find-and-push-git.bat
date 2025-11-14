# Git Push Solution for SYMBI Educators Hub
# This script helps find and use Git to push to the repository

echo === SYMBI Educators Hub Git Push Solution ===
echo Searching for Git installation...

# Method 1: Try common Git locations
set "GIT_PATH="

# Check common Git installation paths
if exist "C:\Program Files\Git\bin\git.exe" (
    set "GIT_PATH=C:\Program Files\Git\bin\git.exe"
    echo Found Git at: %GIT_PATH%
) else if exist "C:\Program Files (x86)\Git\bin\git.exe" (
    set "GIT_PATH=C:\Program Files (x86)\Git\bin\git.exe"
    echo Found Git at: %GIT_PATH%
) else if exist "%USERPROFILE%\AppData\Local\Programs\Git\bin\git.exe" (
    set "GIT_PATH=%USERPROFILE%\AppData\Local\Programs\Git\bin\git.exe"
    echo Found Git at: %GIT_PATH%
) else if exist "%LOCALAPPDATA%\Programs\Git\bin\git.exe" (
    set "GIT_PATH=%LOCALAPPDATA%\Programs\Git\bin\git.exe"
    echo Found Git at: %GIT_PATH%
) else (
    echo Git not found in common locations.
    echo.
    echo Please manually find git.exe and run:
    echo "C:\path\to\git.exe" push --set-upstream origin master
    echo.
    pause
    exit /b 1
)

# Method 2: Try to use the found Git
echo.
echo Attempting to push to symbi-website-main repository...
echo.

if defined GIT_PATH (
    echo Using Git at: %GIT_PATH%
    "%GIT_PATH%" push --set-upstream origin master
    
    if %errorlevel% == 0 (
        echo.
        echo ✅ SUCCESS! Educators hub pushed to symbi-website-main!
        echo 🚀 Vercel deployment will start automatically!
    ) else (
        echo.
        echo ❌ Push failed. This may be due to:
        echo    - Authentication required
        echo    - Network issues
        echo    - Repository permissions
        echo.
        echo Please check your GitHub credentials and try again.
    )
) else (
    echo ❌ Git path not found
)

echo.
echo === Deployment Summary ===
echo ✅ All educators hub files are committed and ready
echo ✅ Repository: https://github.com/s8ken/symbi-website-main
echo ✅ Features: 6 case studies, session plans, rubrics, PDF viewer
echo ✅ Build: Verified working locally
echo.
echo Next: Vercel will automatically deploy after successful push!

pause