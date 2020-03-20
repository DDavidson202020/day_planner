$(document).ready(function() {
// Display current time using Moment.js
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

// Click event to save text area content to local storage
$(".saveBtn").on("click", function() {
    // get nearby values using siblings()
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save in localStorage
    localStorage.setItem(time, value);
});
// Declare variables of arrays to hook into the Id and class in HTML
let textarea = ["#text9", "#text10", "#text11","#text12","#text1","#text2","#text3","#text4","#text5"];
let key = ["nine","ten","eleven", "twelve","one","two","three","four","five"];
// Loop through the key array which is hooked into id of html element to get saved content for the text area
for (let i= 0; i < key.length; i++) {
    let savedContent = localStorage.getItem(key[i]);
    // If there is some input saved, show that input saved to that text area which is hooked into the the time block for that 
    if (savedContent != null) {
        $(textarea[i]).text(savedContent);
    }
}
// Declare an array of hours from 9 to 17 hours(24 hour- clock)
 var timeline =["9","10","11","12","13","14","15","16","17"];
 // Call the function that's declared below it
 updateColor();
// This function goes through the timeline array and see if the current time is matched with any of the hour in timeline array, and change the background-color of the text area according to the time
 function updateColor() {
     var currentTime = moment().format("H");
     for( let index=0; index < timeline.length; index++) {
         if (currentTime == parseInt(timeline[index])) {
             // Add class to style color for the text area
             $("." + timeline[index]).addClass("present");
         } else if (currentTime < parseInt(timeline[index])) {
            $("." + timeline[index]).addClass("future");
         } else if (currentTime > parseInt(timeline[index])) {
             $("." + timeline[index]).addClass("past");
         }
     }
 }

} )








