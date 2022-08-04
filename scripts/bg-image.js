// background images

let imagePaths = { day: [], night: [] };

// returns an array with the paths of the required image type

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

// actually getting the paths for all the images

imagePaths.day = getImagePaths("day", 7);
imagePaths.night = getImagePaths("night", 3);

// index of the path of the previous image - used in getRandomImage()

let previousIndex = null;

// setting background image depending on the time of day

function loadImage() {
	function getRandomImage(timeOfDay) {
		const getRandomIndex = () => Math.floor(Math.random() * imagePaths[timeOfDay].length);

		let newIndex = getRandomIndex();

		for (; newIndex === previousIndex; ) newIndex = getRandomIndex(); // to avoid reloading the same image

		previousIndex = newIndex;

		return imagePaths[timeOfDay][newIndex];
	}

	let hour = new Date().getHours();

	let imageFile = hour >= 20 || hour <= 5 ? getRandomImage("night") : getRandomImage("day");

	document.body.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url(${imageFile})`;
}

// initial loading

loadImage();

// setting new image when button's been clicked

document.getElementById("js-changebg").addEventListener("click", loadImage);
