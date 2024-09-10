const cheerleader = (lines, cheers) => {
	for (let i = 0; i < lines; i++) {
		const currentIndent = " ".repeat(i * 3);

		let cheerLine = "Go";
		for (let j = 1; j < cheers; j++) {
			cheerLine += " Team Go";
		}

		console.log(currentIndent + cheerLine);
	}
};

cheerleader(2, 4);
