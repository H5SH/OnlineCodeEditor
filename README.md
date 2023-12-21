# Project - CodeEditor/onlineCompiler
An online Code Editor project with backend in **java** using **springboot** and Frontend in **React.js**. Made in 2 days by someone who has never used java as a language and has 0 exprience in using springboot.

# Files

## CodeEditor
CodeEditor file contains my App.js which when hosted will run on loclhost:3000. The app gives user 3 textareas html, css and javasript, user can use all or leave any blank if he wants to. On top an input field for file name is given. Code Output is actively displayed on the output box present on right side of the screen. on *Submit* users code is submitted and a saved massege is displayed. User must go back and refresh to see the saved files. Clicking on the file name will open that file and clicking on delete will delete that file but the page must be refreshed to update the screen.

## code
code is a springboot file which when hosted on localhost:8080 will function as a rest api for **CodeEditor**. 
*code/src/main/java/com/example/Controller* consist my main Controller, *code/src/main/java/com/example/dao* consist Jparepository and finally 
*code/src/main/java/com/example/Model* consist a class which act as table for my data base. This api can handle Post request to save data, Get request to fetch all the present data from the database and delete request to delete based on the id given.

# Problems that I face
Prior to this project I have no knowledge of java as a language and zero experience in SpringBoot as a frame work. So the learning curve was steep and at times frustratinng. I spent my first day trying to display hello world on browser's screen and then connecting my application with an sql server which in its own was long and tiring process with many issues. At the end I completed my application in single day and came out with alot more knowledge about java and springboot then I had a day before.

# Run properly
To make sure that the application runs properly fallowing things must be kept in mind
- SpringBoot surver when hosted must be on localhost:8080
- SpringBoot must be connected with a database to host the application for this *code/src/main/java/com/example/resource* application.properties must be given required properties.

# Some tiny problems in the application
Due to shortage of time, I am disappointed to say there are still couple of small unfinished things in the application.
I have not used UseNavigation function which reloads the page, so user has to do it manually atleast for now.
- After pressing submit user must go back to previous page and reload so his file can be displayed.
- After clicking on delete user must reload his page so the data on the page can be updated.
- And finally Put request is not functional and will be added in the next update so stay tunned.
- Ouput function runs on onkeyup so some key must be pressed

# Dependacies 
I have used following dependacies in this SpringBoot project
- JPA
- spring-boot web
- devtools *for auto rerun of the serve*
- lombok
- musql
- thymeleaf

# Technologies used
- JPA
- Hibernate
- JpaRepository
- React
- Mysql

# Display
![Screenshot 2023-08-08 210403](https://github.com/H5SH/OnlineCodeEditor/assets/108005824/b975c979-dc3d-4438-a1c5-0f6655c83353)

