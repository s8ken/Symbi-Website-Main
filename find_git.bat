@echo off
echo Searching for Git installation...
echo.

REM Check common Git installation locations
echo Checking common installation paths...

REM Check Program Files
if exist "C:\Program Files\Git\cmd\git.exe" (
    echo Found Git at: C:\Program Files\Git\cmd\git.exe
    "C:\Program Files\Git\cmd\git.exe" --version
    goto :found
)

if exist "C:\Program Files\Git\bin\git.exe" (
    echo Found Git at: C:\Program Files\Git\bin\git.exe
    "C:\Program Files\Git\bin\git.exe" --version
    goto :found
)

REM Check Program Files (x86)
if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
    echo Found Git at: C:\Program Files (x86)\Git\cmd\git.exe
    "C:\Program Files (x86)\Git\cmd\git.exe" --version
    goto :found
)

if exist "C:\Program Files (x86)\Git\bin\git.exe" (
    echo Found Git at: C:\Program Files (x86)\Git\bin\git.exe
    "C:\Program Files (x86)\Git\bin\git.exe" --version
    goto :found
)

REM Check AppData local
if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
    echo Found Git at: %LOCALAPPDATA%\Programs\Git\cmd\git.exe
    "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" --version
    goto :found
)

if exist "%LOCALAPPDATA%\Programs\Git\bin\git.exe" (
    echo Found Git at: %LOCALAPPDATA%\Programs\Git\bin\git.exe
    "%LOCALAPPDATA%\Programs\Git\bin\git.exe" --version
    goto :found
)

REM Check if Git is in PATH but not recognized
echo.
echo Git not found in standard locations. Checking PATH...
where git 2>nul
if %errorlevel% equ 0 (
    echo Git found in PATH but may have issues
) else (
    echo Git not found in PATH
)

echo.
echo Searching entire C: drive for git.exe (this may take a while)...
dir C:\git.exe /s /b 2>nul | findstr /i git.exe
if %errorlevel% equ 0 (
    echo Found git.exe files listed above
) else (
    echo No git.exe found on C: drive
)

echo.
echo Git installation not found. Please install Git or check your installation.
goto :end

:found
echo.
echo Git installation found successfully!
goto :end

:end
echo.
pause