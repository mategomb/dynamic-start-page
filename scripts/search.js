// grabbing the elements

const searchFormElement = document.getElementById("js-search");
const searchBarElement = document.getElementById("js-search-bar");

// search it at submit events

searchFormElement.addEventListener("submit", (event) => {
	event.preventDefault();
	window.open(`https://duckduckgo.com/?q=${searchBarElement.value}`, "_self");
});
