function sayHello(){
// alert("Hello");

let helloBox = document.querySelector("#hello");    // it chooses the element IN html with #hello ID
helloBox.innerHTML = "Bonjour!";    // variable helloBox will changed in HTML to "Bonjour"

}
setTimeout(sayHello, 3000);  // ! it will run the function 1000 milisek (=1sek) after reload the page

function displayDate(){
    let date = document.querySelector("#date");
    date.innerHTML = new Date();    // variable date will now show the current date
}

setInterval(displayDate, 1000);      // this function will show the date every second => we will have the digital clock with real-time
// for minutes we should use 60000ms instead of 1000ms