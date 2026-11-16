@echo off
chcp 65001 >nul
title Little Flowers Preschool - Web Server
cd /d "%~dp0"

echo ========================================================
echo   🌸 LITTLE FLOWERS PRESCHOOL (Est. 2010 - Makola)
echo   Starting Local Server...
echo ========================================================
echo.

:: Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

:: Check dependencies
if not exist "node_modules\" (
    echo [INFO] Installing packages, please wait...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed!
        pause
        exit /b 1
    )
)

echo.
echo [INFO] Opening website in your default browser...
start http://localhost:3000

echo [INFO] Starting Next.js server on http://localhost:3000
echo [INFO] To stop the server, press Ctrl + C
echo.

call npm run dev
pause
