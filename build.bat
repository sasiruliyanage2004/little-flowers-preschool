@echo off
chcp 65001 >nul
title Little Flowers Preschool - Production Build
cd /d "%~dp0"

echo ========================================================
echo   🌸 LITTLE FLOWERS PRESCHOOL - PRODUCTION BUILD
echo ========================================================
echo.

call npm run build

echo.
echo [DONE] Build completed successfully!
pause
