                            // CHAPTER 16 !

//   Question 1 !                                  

var studentName = [];

//   Question 2 !

var studentNames = new Array();

//   Question 3 !                                  

var cities = ["karachi", "Quetta", "lahore"];


//   Question 4 !                                  

var numbers = [5, 7, 8, 9, 11];

//   Question 5 !                                  

var boolean = [true, false];

//   Question 6 !                                  

var mixedArrays = [10, true, null, "Hasni"];

//   Question 7 !  

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write("<h2>Qualifications in Pakistan:</h2>");

document.write("<ul>");

for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ul>");

//   Question 8 !  

var student_names = ["sufyan", "hasni", "baloch"];

var score = [480, 375, 280];

var total_marks = 500;

document.write("<h2>Student Scores:</h2>");

for (var i = 0; i < student_names.length; i++) {
    var percent = (score[i] / total_marks) * 100;
    document.write(student_names[i] + " scored " + score[i] + " (" + percent + "%)<br>");
};

//   Question 9 !  

var colors = ["Red", "Green", "Blue"];
document.write("<h3>Original Colors: </h3>" + colors.join(", ") + "<br>");

// a. 
var addStart = prompt("Enter color to add at start:");
colors.unshift(addStart);
document.write("After adding at start: " + colors.join(", ") + "<br>");

// b. 
var addEnd = prompt("Enter color to add at end:");
colors.push(addEnd);
document.write("After adding at end: " + colors.join(", ") + "<br>");

// c. 
colors.unshift("Purple", "Orange");
document.write("After adding 2 at start: " + colors.join(", ") + "<br>");

// d. 
colors.shift();
document.write("After removing first color: " + colors.join(", ") + "<br>");

// e. 
colors.pop();
document.write("After removing last color: " + colors.join(", ") + "<br>");

// f. 
var indexAdd = prompt("Enter index to add color:");
var colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
document.write("After adding at index: " + colors.join(", ") + "<br>");

// g. 
var indexDel = prompt("Enter index to delete color(s):");
var countDel = prompt("How many colors to delete?");
colors.splice(indexDel, countDel);
document.write("After deleting color(s): " + colors.join(", ") + "<br>");

// Question 10 !

var scoreList = [320, 230, 480, 120];
scoreList.sort();
document.write("<h3>Sorted Scores:</h3>" + scoresList.join(", ") + "<br>");

// Question 11 !

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selected = cities.slice(1, 4);
document.write("<h2>Selected Cities:</h2>" + selected.join(", ") + "<br>");

// Question 12 !

var words = ["This", " is", " my", " cat"];
var sentence = words.join("");
document.write("<h3>Joined Sentence:</h3>" + sentence + "<br>");

// Question 13 !

var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");
fifo.push("Monitor");
document.write("<h3>FIFO Output:</h3>");
while (fifo.length > 0) {
    document.write(fifo.shift() + "<br>");
};

// Question 14 !

var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");
lifo.push("Monitor");
document.write("<h3>LIFO Output:</h3>");
while (lifo.length > 0) {
    document.write(lifo.pop() + "<br>");
};

// Question 15 !

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    document.write("<h3>Phone Brands:</h3>");
    document.write("<select>");
    for (var i = 0; i < phones.length; i++) {
      document.write("<option>" + phones[i] + "</option>");
    }
    document.write("</select>");

