let d = new Date();


console.log(d); // 2026-02-17T18:35:08.362Z
console.log(d.toDateString()); // Wed Feb 18 2026
console.log(d.toString()); // Wed Feb 18 2026 00:07:51 GMT+0530 (India Standard Time)
console.log(d.toISOString()); // 2026-02-17T18:39:00.806Z
console.log(typeof d); // object


// Date is calculated in milliseconds from Jan 1 1970 12:00:00

let d1 = new Date(1000);
let d2 = new Date(2000);
console.log(d1); // 1970-01-01T00:00:01.000Z
console.log(d2); // 1970-01-01T00:00:02.000Z


console.log(d.getDate()); // 18
// Sun, Mon, Tue, Wed, Thu, Fri, Sat
// 0, 1, 2, 3, 4, 5, 6
console.log(d.getDay()); // 3 because today is Wed
// Here also index 0 for Jan then 1 for Feb and so on
console.log(d.getMonth()); // 1 because current month is Feb
console.log(d.getFullYear()); // 2026 current year is 2026
console.log(d.getMilliseconds()); // 244
console.log(d.getMinutes()); // 55 current time is 12:55 AM
console.log(d.getTime()); // 1771442815895 gives total milliseconds from Jan 1 1970 12:00:00
const now = Date.now(); // this also gives total milliseconds from Jan 1 1970 12:00:00
// There is a difference of 6 milliseconds between these two because here code is exicuted line by line
console.log(now); // 1771442815901




// Format "Year-Month-DateTHour:Minute:Second:Millisecond"
// Here normal format no 0 based indexing
const newDate = new Date("2006-10-13T10:10:10");
console.log(newDate.toString()); // Fri Oct 13 2006 10:10:10 GMT+0530 (India Standard Time)


// Format Year,Month,Date,Hour,Minute,Second,Millisecond
// Here 0 based indexing will be followed
const newDate1 = new Date(2006,9,13,10,12,45,231);
console.log(newDate1.toString()); // Fri Oct 13 2006 10:12:45 GMT+0530 (India Standard Time)



const date = new Date();
date.setDate(13);
date.setFullYear(2006);
date.setMonth(9);
console.log(date.toString()); // Fri Oct 13 2006 01:46:06 GMT+0530 (India Standard Time)



// Date Calculation

const date1 = new Date(); // current date
const date2 = new Date("2027-04-21");
console.log(date2-date1); // 36819335092 gives answer in milliseconds
console.log(date2>date1); // true
console.log(date2<date1); // false



// Countdown Timer for Olympics 2028

const date3 = new Date();
const date4 = new Date("2028-07-14T00:00:00");
const date5 = date4-date3; // total milliseconds

const days = Math.floor(date5/(1000*60*60*24));
const hour = Math.floor(date5/(1000*60*60))%24;
const min = Math.floor(date5/(1000*60))%60;
const sec = Math.floor(date5/(1000))%60;

// Current date and time 19-02-2026 2:26AM
console.log(`Olympics CountDownTime: Days:${days} Hour:${hour} Minute:${min} Second:${sec}`); // Olympics CountDownTime: Days:875 Hour:21 Minute:33 Second:51