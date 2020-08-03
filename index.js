// const myModule = require("./myModule.js");
// const fs = require("fs");
// const http = require("http")

// fs.readFile("story.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("error reading file");
//     } else {
//         console.log(data);
//     }
// })

//
// http.createServer((req, res) => {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(3033);
//
// console.log("ya mama's a hoe");
// console.log(myModule.beBasic());
// myModule.count();

// const express = require('express');
// const app = express();
//
// const PORT = 4001;
//
// app.listen(PORT, () => {
//     console.log(`Server is listening on ${PORT}`);
// });

// let i =0;
// function count() {
//     console.log(i);
//     i++;
// }
// const myTimer = setInterval(count, 1000);
const moment = require("moment");
// moment('12.17.1993', moment().format("dddd [the] Do [of] MMMM [in the year] YYYY"));
// moment().date(17);
// moment().day("Friday");
// moment().year(1993);
// moment().month("December");

console.log(moment("12171993", "MMDDYYYY").format("dddd [the] Do [of] MMMM [in the year] YYYY"));


