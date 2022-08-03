// dynamically changing background images

let imagePaths = { day: [], night: [] };

function getImagePaths(timeOfDay, numberOfImages) {
	const imagePathsArray = [];

	for (let index = 1; index <= numberOfImages; index++) {
		const directory = "assets";
		const extension = "jpg";

		const imagePath = `${directory}/bg-${timeOfDay}-${index}.${extension}`;

		imagePathsArray.push(imagePath);
	}

	return imagePathsArray;
}

imagePaths.day = getImagePaths("day", 7);
imagePaths.night = getImagePaths("night", 3);

let previousIndex = null;

function loadImage() {
	function getRandomImage(timeOfDay) {
		const getRandomIndex = () => Math.floor(Math.random() * imagePaths[timeOfDay].length);

		let newIndex = getRandomIndex();

		for (; newIndex === previousIndex; ) {
			newIndex = getRandomIndex();
		}

		previousIndex = newIndex;

		return imagePaths[timeOfDay][newIndex];
	}

	let hour = new Date().getHours();

	let imageFile = hour >= 20 || hour <= 5 ? getRandomImage("night") : getRandomImage("day");

	document.body.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url(${imageFile})`;
}

loadImage();

document.getElementById("js-changebg").addEventListener("click", loadImage);
