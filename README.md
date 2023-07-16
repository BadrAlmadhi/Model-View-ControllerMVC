# Model-View-ControllerMVC


## Description 

Writing a tech blog can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebase, but most developers also spend their time reading and writing about technical concepts. recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

in this task I have build a CMS-style blog site that is not completed yet. However, some of the application is working now and I will spend the future time making them much better by adding more styling and make the homepage, blog, comments handlebars to work. So far I have learned so much about handlebars and how it works and also creating the database by using SQL and models that save the data. Also, I have learned a lot of controllers and and api routes to connect our data. 

My motivation form this is to learn about handlebars and see how it work to understand other tools such as react. 


## Table of Contents (Optional)


- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [Image](#image)

## Image 

![Here is what I have done so far](<images/Screenshot (141).png>)


# Installation

1. Open Visual Studio Code (VS Code) on your computer.

2. Clone the project repository using a version control system like Git. Open the terminal within VS Code and run the following command:
bash
``````
git clone <repository_url>
``````
Replace <repository_url> with the actual URL of the project repository.

3. Once the project is cloned, navigate to the project folder in VS Code.

4. In VS Code, open a new terminal.

5. Change the current directory to the db folder of the project by running the following command:
bash
``````
cd db
``````

6. To connect to the MySQL database, run the following command in the terminal:

``````
mysql -u root -p
``````

You'll be prompted to enter the password for the MySQL root user.

7. After logging in to MySQL, execute the SQL file to create the database. Assuming the SQL file is named database.sql and located in the db folder, run the following command:

``````
SOURCE database.sql
``````

Replace database.sql with the actual name of the 
SQL file if it's different.

8. Once the database is created, exit the MySQL shell by running:

``````
exit
``````

9. Go back to the project's root directory by running the following command in the terminal:

``````
cd ..
``````

10. Open either the server.js or package.json file in VS Code.
In the terminal, start the Node.js server by running the following command:

``````
node server.js
``````

11. f you see a message indicating that the app is listening on port 3001, it means the server is running successfully.

12. Open a web browser, such as Chrome, on the same machine or any other machine connected to the network.

13. In the browser's address bar, type http://localhost:3001 and press Enter.

14. The app's homepage should be displayed.

15. Click on the login button to create an account and access the app.

16. Please note that since the application is incomplete, you will only see the login page.


Make sure you have Node.js and MySQL installed on your machine, and that any required npm packages have been installed. These instructions assume you have the necessary dependencies and configurations in place for running a Node.js and MySQL-based application.


## Credits

- AskABS
- google

## License


This project is licensed under the MIT license. Click [here](https://opensource.org/licenses/MIT) for more information.

MIT License

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software...