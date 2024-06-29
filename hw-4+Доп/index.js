function fetchQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.quotable.io/random", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response); 
        }
    };
    xhr.send();
}