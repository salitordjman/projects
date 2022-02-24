const express = require("express");
//*טעינת אקספרס
const app = express();
// Creates an Express application.
// The express() function is a top-level function exported by the express module.
// express() return core.Express;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// app.use is a middleware
// middleware is a function the invokes before that the controller function (the function that return the resposne to the client) and change things accrodding to the the middleware pupose
// this middleware app.use(express.json()) is a middleware that parse the language of the request and let the body of the requset to read a json language (req.body(Some json))

const PORT = 8080;

// PORT is the station of the server in the cloud or in the local machine something like a http://localhost:8080

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));

// app.listen is the last line of code in the server this is the function that take all the what that server function and all the connections and make a connection between the server to the browser something like http://localohst:8080
// why we need it?
// if we wont do that the sever will not come into life we cant send request from the client or postman if we dont have a address(http://localhost:somePort) to send it to

// so we can understand that this line of code is to invoke the address of the server that we could send a request from the client

//!שרת אינטרנט-server
//*   בין המחשב ללקוח ע"י בקשות/קריאות  HTTP תוכנה המתקשרת בכתובת

//!EXPRESS
//* NODEJS מערכת אינטרנט עבור

//!const express = require("express");
//*טעינת אקספרס

//!const app = express();
//* יוצר אקספרס אפליקציה/יישום
//* EXPRESS מיוצאת ע"י
// express() return core.Express;

//!app.use
//*app.use is תוכנת ביניים
//*  תוכנת ביניים זו תוכנה שמופעלת לפני פונקצית הבקר/קונטרולר (הפונקציה שמחזירה את התגובה לקליינט) ומשנה דברים בהתאם לפונקצית התיווך/ביניים
// middleware is a function the invokes before that the controller function (the function that return the resposne to the client) and change things accrodding to the the middleware pupose

//!app.use(express.json());
//* תוכנת ביניים זו מאפשרת לתוכנה לקרוא שפת גסון
// this middleware app.use(express.json()) is a middleware that parse the language of the request and let the body of the requset to read a json language (req.body(Some json))

//!app.use(express.urlencoded({ extended: false }));
//* כדי שיהיה ניתן לעשות אוביקט מקונן

//!const PORT = 8080;
//*PORT is the station of the server in the cloud or in the local machine something like a http://localhost:8080
//*פורט זה התחנה של השרת בענן או במכונה המקומית

//! app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));

// app.listen is the last line of code in the server this is the function that take all the what that server function and all the connections and make a connection between the server to the browser something like http://localohst:8080
// why we need it?
// if we wont do that the sever will not come into life we cant send request from the client or postman if we dont have a address(http://localhost:somePort) to send it to

// so we can understand that this line of code is to invoke the address of the server that we could send a request from the client

//* זה השורת קוד האחרונה בשרת, זו הפונ' שלוקחת את כל פונק' השרת ואת החיבורים ועושה חיבור בין השרת לדפדפן  app.listen
// why we need it?
//*   (http://localhost:somePort) אם השרת מת אז לא נוכל לשלוח בקשות מקליינט או פוסטמן אם אין לנו כתובת אינטרנט לשלוח אליה , לדוג
//* כדי שנוכל להבין ששורת הקוד הזו היא להפעיל את הכתובת של השרת שנוכל לשלוח בקשה מהלקוח
//*app.listen([port], [host], [backlog], [callback])

//!package.json
//* "start":"node (./)app.js"=> npm start
//*or from terminal node app.js
