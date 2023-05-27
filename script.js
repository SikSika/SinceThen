addEventListener("DOMContentLoaded", (event) => {
	// Set the date for which you want to calculate the number of days that have passed
	const startDate = new Date('2022-05-07');

	// Get the current date
	const currentDate = new Date();

	// Calculate the difference in time between the start date and the current date
	const timeDiff = currentDate.getTime() - startDate.getTime();

	// Calculate the number of days that have passed
	const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24) - 58);

	// Print the result
	document.getElementById('e').innerHTML = daysPassed + " Days :)"
});