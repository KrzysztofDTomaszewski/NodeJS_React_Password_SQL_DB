# NodeJS_React_Password_SQL_DB
NodeJS password application using SHA-256 and local MySQL DB for validation and persistance.

# Author: 
  - Krzysztof Dawid Tomaszewski
  
# GitHub: 
  - KrzysztofDTomaszewski 
  
# GitHub URL: 
  - https://github.com/KrzysztofDTomaszewski/NodeJS_React_Password_SQL_DB.git

# Current_Features
  - Send user input (password && title into MySQL DB)
  - Vault encryption handled by AES-256 (MySQL over Axios)
  - Stores and retrieves encrypted data from MySQL (React-Native/passwords && users tables)

# Screenshots
<img width="2560" alt="Entered_Password" src="https://user-images.githubusercontent.com/62775389/124303443-5d130800-db5a-11eb-875e-a720ea6e44cc.png">

![image](https://user-images.githubusercontent.com/62775389/124303616-90ee2d80-db5a-11eb-8789-99cdfda2c3a3.png)

# Development
  - Once you install [Git, Atom|VS-Code, MySQL Workbench/Server, NodeJS_14] then use the following commands to begin cloning the repository.
  - Terminal - git clone https://github.com/KrzysztofDTomaszewski/NodeJS_React_Password_SQL_DB.git
  - Visual_Studio_Code - open root directory (NodeJS_React_Password_SQL_DB)
  - Open two terminal windows one for /server, other for /client. Inside /server, install dependencies required and run "npm i && npm i", inside /client, run just "npm i && npm i". Finally, use "yarn start" in both terminal windows to start the back-end and front-end.
  - Upon opening MySQL Workbench, make sure that you set the password to: "reactPass123" and save it in vault, as this is the hard-coded password inside index.js. 
  - Furthermore, make sure your MySQL Server is A: running and, B: MySQL Port is allowed through firewall.

# Installation (Windows_10)
  -  MySQL_server - https://dev.mysql.com/downloads/installer/
  -  MySQL_Workbench - https://dev.mysql.com/downloads/workbench/  
  -  NodeJS_14 - https://nodejs.org/en/
  -  Visual_Studio_Code - https://code.visualstudio.com/download
  -	For additional help, please look for the Instuctions_Guide file in the root of NodeJS_React_Password_SQL_DB
  
# Installation (MacOS - Catalina 10.15)
  - Homebrew - https://brew.sh
  - NodeJS (Yarn && NPM) https://reactnative.dev/docs/environment-setup
  - Visual_Studio_Code - https://code.visualstudio.com/download
  - MySQL Workbench - (WARNING please download 8.0.22, if on Catalina 10.15, it will not work otherwise) MySQL Workbench - https://downloads.mysql.com/archives/workbench/
  - MySQL Server After homebrew is installed, use the following command to install MySQL Server: "brew install mysql"

# Installation (GNU/Linux Ubuntu 20.04 LTS)
  -	MySQL Workbench – Ubuntu Store / MySQL Workbench Community
  -	MySQL Server – "sudo apt-get update sudo apt-get install mysql-server && sudo mysql_secure_installation utility && sudo systemctl start mysql &&     sudo systemctl enable mysql"
  -	NodeJS_14 – "sudo apt install nodejs && sudo apt install npm && sudo npm install -g yarn"
  -	Visual Studio Code – Ubuntu Store / Visual Studio Code
  -	Git - "sudo apt install git"
  -	For additional help, please look for the Instuctions_Guide file in the root of NodeJS_React_Password_SQL_DB

# Dependencies 
Execute the following from a Terminal shell in /server folder.
  - "npm i axios"
  - "npm i mysql"
  - "npm i cors"
  - "npm i nodemon"

In order to use the project Yarn will need to be installed, after NodeJS is installed.
  - "npm install --global yarn"

Check that Yarn is installed, by running in terminal.
  - "yarn --version"
  
# Known_Issues

Windows_10 - Powershell might say "profile.ps1 cannot be loaded because the execution of scripts is   disabled on this system." *FIX | Enter the following command from elevated powershell prompt: "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser" -> Quick way to do so, WIN+R, then type "powershell" and press SHIFT + WIN + ENTER, say "Yes" to prompt.

Windows_10 - Powershell might say "yarn" command does not exist. In that case if you used NodeJS installer as prompted above, it should have installed "chocolatey" from the powershell prompt which you had to say "Y" for yes etc. 
![image](https://user-images.githubusercontent.com/62775389/124305001-62715200-db5c-11eb-8d26-cec3f54f46ea.png)

Open powershell (WIN+R, powershell, ENTER) and type: "choco install nodejs". This should install NPM to the PATH, after this process is done, type in CMD or Powershell: "npm install --global yarn".
![image](https://user-images.githubusercontent.com/62775389/124304979-5ab1ad80-db5c-11eb-8605-eb6df13c3c7e.png)

Windows_10 - CMD/Powershell might print following error: "react-scripts' command is not found. *FIX | Change directory into /client, then, type in: "npm install" or "npm i", this will install all missing dependencies from "package.json". Same should be done in /server, just incase any files are missing from NodeJS' initial installation.

MacOS - MySQL Workbench might crash, or not open after installation. This is an issue with Catalina 10.15, the fix for me (and others on stackoverflow) was to install following version: MySQL 8.0.22 - https://downloads.mysql.com/archives/workbench/




