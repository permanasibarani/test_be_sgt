const result = (arr) => {
	const rows = arr.length;
	const cols = arr[0].length;
	const arrResult = [];

	// Buat array kosong dengan rows dan cols yang sama dengan arr
	for (let i = 0; i < rows; i++) {
		const row = [];
		for (let j = 0; j < cols; j++) {
			row.push(0);
		}
		arrResult.push(row);
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let sum = 0;

			// Horizontal
			for (let k = 0; k < cols; k++) {
				if (k !== j) {
					sum += arr[i][k];
				}
			}

			// Vertical
			for (let k = 0; k < rows; k++) {
				if (k !== i) {
					sum += arr[k][j];
				}
			}

			// Diagonal
			// Atas kiri ke bawah kanan
			for (
				let k = -Math.min(i, j);
				k <= Math.min(rows - i - 1, cols - j - 1);
				k++
			) {
				if (k !== 0) {
					sum += arr[i + k][j + k];
				}
			}

			// Atas kanan ke bawah kiri
			for (
				let k = -Math.min(i, cols - j - 1);
				k <= Math.min(rows - i - 1, j);
				k++
			) {
				if (k !== 0) {
					sum += arr[i + k][j - k];
				}
			}

			arrResult[i][j] = sum + arr[i][j];
		}
	}

	return arrResult;
};

console.log(
	result([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
);
