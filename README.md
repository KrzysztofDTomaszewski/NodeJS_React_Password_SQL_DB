# NodeJS_React_Password_SQL_DB
NodeJS password application using SHA-256 and local MySQL DB for validation and persistance.

# Author: 
  - Krzysztof Dawid Tomaszewski
  
# GitHub: 
  - KrzysztofDTomaszewski 
  
# GitHub URL: 
  - https://github.com/KrzysztofDTomaszewski/NodeJS_React_Password_SQL_DB

# Current_Features
  - Send user input (password && title into MySQL DB)
  - Vault encryption handled by AES-256 (MySQL over Axios)
  - Stores and retrieves encrypted data from MySQL (React-Native/passwords && users tables)

# Screenshots
<img width="2560" alt="Entered_Password" src="https://user-images.githubusercontent.com/62775389/124303443-5d130800-db5a-11eb-875e-a720ea6e44cc.png">

![image](https://user-images.githubusercontent.com/62775389/124303616-90ee2d80-db5a-11eb-8789-99cdfda2c3a3.png)

# Development
  - Terminal - git clone https://github.com/KrzysztofDTomaszewski/NodeJS_React_Password_SQL_DB.git
  - Visual_Studio_Code - open root directory (NodeJS_React_Password_SQL_DB)

# Installation (Windows_10)
  -  MySQL_server - https://dev.mysql.com/downloads/installer/
  -  MySQL_Workbench - https://dev.mysql.com/downloads/workbench/  
  -  NodeJS_14 - https://nodejs.org/en/
  -  Visual_Studio_Code - https://code.visualstudio.com/download

# Installation (MacOS - Catalina 10.15)
  - Homebrew - https://brew.sh
  - NodeJS (Yarn && NPM) https://reactnative.dev/docs/environment-setup
  - Visual_Studio_Code - https://code.visualstudio.com/download
  - (WARNING please download 8.0.22, if on Catalina 10.15, it will not work otherwise) MySQL Workbench - https://downloads.mysql.com/archives/workbench/

# Installation (GNU/Linux Ubuntu 20.04 LTS)
  -	MySQL Workbench – Ubuntu Store / MySQL Workbench Community
  -	MySQL Server – (sudo apt-get update sudo apt-get install mysql-server && sudo mysql_secure_installation utility && sudo systemctl start mysql &&     sudo systemctl enable mysql)
  -	NodeJS_14 – sudo apt install nodejs && sudo apt install npm && sudo npm install -g yarn
  -	Visual Studio Code – Ubuntu Store / Visual Studio Code
  -	Git - sudo apt install git

# Dependencies 
  - npm i axios
  - npm i mysql
  - npm i cors
  - npm i nodemon
  
# Known_Issues

Windows_10 - Powershell might say "profile.ps1 cannot be loaded because the execution of scripts is   disabled on this system." *FIX | Enter the following command from elevated powershell prompt: "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser" -> Quick way to do so, WIN+R, then type "powershell" and press SHIFT + WIN + ENTER, say "Yes" to prompt.

Windows_10 - Powershell might say "yarn" command does not exist. In that case if you used NodeJS installer as prompted above, it should have installed "chocolatey" from the powershell prompt which you had to say "Y" for yes etc. 
![image](https://user-images.githubusercontent.com/62775389/124305001-62715200-db5c-11eb-8d26-cec3f54f46ea.png)

Open powershell (WIN+R, powershell, ENTER) and type: "choco install nodejs". This should install NPM to the PATH, after this process is done, type in CMD or Powershell: "npm install --global yarn".
![image](https://user-images.githubusercontent.com/62775389/124304979-5ab1ad80-db5c-11eb-8605-eb6df13c3c7e.png)

Windows_10 - CMD/Powershell might print following error: "react-scripts' command is not found. *FIX | Change directory into /client, then, type in: "npm install" or "npm i", this will install all missing dependencies from "package.json". Same should be done in /server, just incase any files are missing from NodeJS' initial installation.

MacOS - MySQL Workbench might crash, or not open after installation. This is an issue with Catalina 10.15, the fix for me (and others on stackoverflow) was to install following version: MySQL 8.0.22 - https://downloads.mysql.com/archives/workbench/




