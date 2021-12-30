document.getElementById("animal").onclick = function get_animal_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
        let joke = JSON.parse(this.response);
	     // Access the result here
	     document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=animal", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send(); 
}

document.getElementById("blonde").onclick = function get_blonde_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
        let joke = JSON.parse(this.response);
	     // Access the result here
	     document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=blonde", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send(); 
}

document.getElementById("knockKnock").onclick = function get_knock_knock_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
        let joke = JSON.parse(this.response);
	     // Access the result here
	     document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=knock-knock", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send(); 
}
