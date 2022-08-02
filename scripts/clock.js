// grabbing the pieces of the clock

const timeElement = document.getElementById("js-clock-time");
const dateElement = document.getElementById("js-clock-date");

// prefixing single-digit numbers with a zero

const addZero = (dayOfMonth) => (dayOfMonth >= 10 ? "" : "0") + dayOfMonth;

// the actual update function

function updateTimeAndDate() {
	let timeAndDate = new Date();

	let hour = addZero(timeAndDate.getHours());
	let minute = addZero(timeAndDate.getMinutes());
	let day = timeAndDate.toLocaleString("default", { weekday: "short" });
	let date = addZero(timeAndDate.getDate());
	let month = timeAndDate.toLocaleString("default", { month: "short" });
	let year = timeAndDate.getFullYear();

	timeElement.textContent = `${hour}:${minute}`;
	dateElement.textContent = `${day}, ${date} ${month} ${year}`;
}

// initial clock ui update

updateTimeAndDate();

// updating the clock every second

setInterval(updateTimeAndDate, 1000);
