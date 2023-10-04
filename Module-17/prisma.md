### What is `prisma`?

`prisma` is a database toolkit that includes Prisma CLient, which is an auto-generated query builder.

#### What is `ORM`?

ORM = Object Relational Mapping

The relation between object and data table is called ORM. It is a technique that allows you to query and manipulate data from a database using an object-oriented paradigm.

-----------------------------------------------------

Install `prisma` like regular npm package

1. create next.js project `npx create-next-app@latest ./`
2. `npm install prisma --save-dev`
3. Inititate prisma: `npx prisma init --datasource-provider mysql`


Additional:

- install **xampp** for MySQL

- `localhost/phpmyadmin` is a web-based administration tool that is used to manage MySQL and MariaDB databases. It is written in PHP and provides a user-friendly graphical interface for managing database CRUD operations such as creating, modifying, and deleting databases, tables, and records.

*to use `localhost/phpmyadmin`, a web server(PHP, MySql or MariaDB) is needed to install in the local machine. Software package like -* **XAMPP** *can be used to set up a local web server environment.*

Run `XAMPP Control Panel`, now run `Apache` and then `MySQL`. If get error like this:

```
Problem detected!
7:37:48 PM  [mysql] 	Port 3306 in use by "Unable to open process"!
7:37:48 PM  [mysql] 	MySQL WILL NOT start without the configured ports free!
7:37:48 PM  [mysql] 	You need to uninstall/disable/reconfigure the blocking application
7:37:48 PM  [mysql] 	or reconfigure MySQL and the Control Panel to listen on a different port
7:37:48 PM  [mysql] 	Attempting to start MySQL app...
```

1. Open the XAMPP Control Panel.
2. Click on the Netstat button.
3. Look for the PID (Process ID) of the service that is using the same port as MySQL (3306 by default). You can find it under the Local Address column.
4. Open the Task Manager and go to the Details tab.
5. Find the process with the same PID as the one you found in step 3.
6. Right-click on it and select End task.
7. Restart XAMPP and try starting MySQL again.

*solution from ChatGPT*