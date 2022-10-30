const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&oq="+ input +"&aqs=chrome..69i57j0i67i433j0i67l3j69i60l3.4223j0j7&sourceid=chrome&ie=UTF-8"

}

