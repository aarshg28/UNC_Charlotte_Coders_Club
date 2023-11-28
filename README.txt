To run the software system, make sure there is stable internet connection.

Note: For executing the web application, the server needs to be running.

To run the server:
Make sure that 'go' and 'mysql' are installed in the system. The sqlCommands.txt file has all the commands that are to be executed to setup the database.
Update line 50 in the backend/main.go file with the correct mysql credentials. 
Install the below listed libraries by using the following commands:
go get -u github.com/gin-gonic/gin
go get -u github.com/go-sql-driver/mysql

You can navigate to the location where the main.go file is and execute the following command:
go run main.go

The data associated with the application is stored securely in the MySQL database and the REST APIs ensure the access to this data.


To install the web application, the following software must be installed:
• Node
• VS Code(optional but preferred)
Once the setup is done, the web application can be accessed using the following links: (will be seen in the console once the app is running)
➜ Local:   http://localhost:5173/
➜ Network: http://192.168.56.1:5173/
➜ Network: http://192.168.1.152:5173/ 

To run the frontend, always ensure that the server is running.
Check if the node modules folder is present, otherwise run the following command:
npm install

After that step, execute this command:
npm run dev
Note: This will give you the list of urls that can be used to access the web app that are as listed above.
