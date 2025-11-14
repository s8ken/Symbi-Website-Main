@echo off
echo === SYMBI Educators Hub Deployment ===
echo Pushing educators hub to symbi-website-main repository...
echo.

REM Try to find git installation
where git >nul 2>nul
if %errorlevel% == 0 (
    echo Git found in PATH
    git push --set-upstream origin master
    if %errorlevel% == 0 (
        echo SUCCESS: Educators hub pushed to symbi-website-main!
    ) else (
        echo Push failed - may need authentication
    )
) else (
    echo Git not found in PATH
    echo Please push manually using:
    echo   git push --set-upstream origin master
    echo.
    echo Or use GitHub Desktop/VS Code Git integration
)

echo.
echo === Deployment Ready ===
echo All educators hub files are committed and ready to push
echo Repository: https://github.com/s8ken/symbi-website-main
echo.
echo Features included:
echo - 6 comprehensive AI trust case studies
echo - Session plans, rubrics, and worksheets
echo - PDF viewer and download functionality
echo - Teacher resource management
echo - Search and filtering capabilities
echo - Responsive design for all devices

pause