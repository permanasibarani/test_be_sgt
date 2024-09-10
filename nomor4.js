const graduation = (gpa, totalCredits, honorsCredits) => {
	if (totalCredits < 180 || gpa < 2.0) {
		return "not graduating";
	}

	if (gpa >= 2.0 && gpa < 3.6) {
		return "graduating";
	}

	if (gpa >= 3.6 && gpa < 3.8) {
		if (honorsCredits < 15) {
			return "cum laude";
		}
		return "magna cum laude";
	}

	if (gpa >= 3.8) {
		if (honorsCredits < 15) {
			return "magna cum laude";
		}
		return "summa cum laude";
	}
};

console.log(graduation(1.5, 199, 30));
