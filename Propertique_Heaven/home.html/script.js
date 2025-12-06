
const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const result = document.getElementById("searchResult");


btn.addEventListener("click", function () {
    const city = input.value.trim(); // text typed by user

    if (city === "") {
        result.innerHTML = "<b>Please enter a city to search.</b>";
        result.style.color = "red";
    } else {
        result.innerText = `Searching properties in: ${city}`;
        result.style.color = "white";
    }
});
