# NodeJS_React_Password_SQL_DB
NodeJS password application using SHA-256 and local MySQL DB for validation and persistance.

# Author: 
  - Krzysztof Dawid Tomaszewski
  
# GitHub: 
  - KrzysztofDTomaszewski 
  
# GitHub URL: 
  - https://github.com/KrzysztofDTomaszewski/

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

# Dependencies (change directory into /server")
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
