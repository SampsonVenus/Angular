Step to setup Node.js/express and execute a AngularJS   To see if update

1. Create eclipse workspace (i.e. AngularJSJQ) for Angular, JavaScript, and JQuery
2. Start eclipse(i.e. 2018-12) using the above workspace
3. Install Nodeclipse plugin (i.e. old Nodeclipse PhantomJS 0.12)into eclipse using Help, Eclipse, Marketplace (picture)

4.  Restart eclipse to enable the plugin
5. Create Node Project (File->New-->Project-->Node --> Node.js Project  then Next>
6. Project Name: LearningJavaScript  then Finish

7. Create an Express Web Server Using Node.js from the command line in the LearningJavaScript project folder (i.e angularJSJQ\LearningJavaScript> npm install express

8. Install the body-parser model in the LearningJavaScript project folder
   angularJSJQ\LearningJavaScript> npm install body-parser

9. Go back to Eclipse, right-click the project, and select Refresh.  You should see the node_modules folder with body-parser and express subfolders.

9. create a file named server.js in the root of the project directory from the contents from List 1.5 inside of it, and save it. This is a basic Node.js/Express web server that will serive static files using the the root of your project directory as the website root location.

10. Verify that your Node.js web server will run correctly. Start the web server by right-clicking the server.js file and selecting Run As, Node Application from the menu. See output in console window.
  
11. create a source folder under the LearningJavaScript project folder 
12. create a first.html file under the source folder and code in Listing  2.0 and save it
13. create js folder under the source folder 
14. create first.js file in the js folder and add the code in list 2.1 and save it.
15. download angular library file (i.e. "https://ajax.googleapis.com/ajax/libs/angularjs/1.7.7/angular.min.js) and save it in js folder

16.  Go back to Eclipse and Refresh the source folder

17.  In a web browser enter (http://localhost:7777/source/first.html)


Test load from local machine
 