@echo off
cd /d "%~dp0"
echo Starte Apato Sport Website...
echo.
if not exist "node_modules" (
  echo Installiere zuerst die Pakete ^(einmalig^)...
  call npm install
)
echo Server startet - im Browser oeffnen: http://localhost:4321
echo Zum Beenden dieses Fenster schliessen oder STRG+C druecken.
echo.
call npm run dev
pause
