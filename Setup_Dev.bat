@echo off

REM Create directories for client and server
mkdir client
mkdir server

REM Navigate to the server directory and set up the Python environment
cd server
python -m venv env
call env\Scripts\activate.bat
pause
pip install -r requirements.txt
pause
call env\Scripts\deactivate.bat
pause

REM Navigate to the client directory and set up the Python environment
cd ..\client
python -m venv env
call env\Scripts\activate.bat
pip install -r requirements.txt
call env\Scripts\deactivate.bat

REM Install NPM packages in the client directory
call npm init -y
call npm install

REM Navigate back to the root directory
cd ..

@echo on
