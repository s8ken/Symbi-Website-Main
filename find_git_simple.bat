@echo off
echo Searching for Git installation...

REM Check if git is available in current directory
if exist git.exe (
    echo Found git.exe in current directory
    git.exe --version
    goto :found
)

REM Check common Git installation locations
echo Checking Program Files...
if exist "C:\Program Files\Git\cmd\git.exe" echo Found: C:\Program Files\Git\cmd\git.exe
if exist "C:\Program Files\Git\bin\git.exe" echo Found: C:\Program Files\Git\bin\git.exe

echo Checking Program Files x86...
if exist "C:\Program Files (x86)\Git\cmd\git.exe" echo Found: C:\Program Files (x86)\Git\cmd\git.exe
if exist "C:\Program Files (x86)\Git\bin\git.exe" echo Found: C:\Program Files (x86)\Git\bin\git.exe

echo Checking AppData...
if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" echo Found: %LOCALAPPDATA%\Programs\Git\cmd\git.exe
if exist "%LOCALAPPDATA%\Programs\Git\bin\git.exe" echo Found: %LOCALAPPDATA%\Programs\Git\bin\git.exe

echo.
echo Checking if Git is in PATH...
where git 2>nul
if %errorlevel% equ 0 (
    echo Git found in PATH
) else (
    echo Git not found in PATH
)

echo.
echo Script completed.
pause