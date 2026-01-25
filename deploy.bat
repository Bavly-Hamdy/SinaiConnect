@echo off
echo ===================================
echo Building Sinai Connect for GitHub Pages
echo ===================================
echo.

echo Step 1: Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b %errorlevel%
)

echo.
echo Step 2: Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo Deployment failed!
    pause
    exit /b %errorlevel%
)

echo.
echo ===================================
echo Deployment successful!
echo Your site will be available at:
echo https://bavly-hamdy.github.io/SinaiConnect/
echo ===================================
pause
