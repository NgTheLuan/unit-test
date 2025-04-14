export function classifyStudent(mark) {
	if (mark < 0 || mark > 10) return 'Invalid mark'
	if (mark > 8) return 'Excellent'
	if (mark >= 7) return 'Good'
	if (mark >= 4) return 'Not Good'
	return 'Bad'
}

export function checkIfAllEven(numberList) {
	if (!Array.isArray(numberList) || numberList.length <= 0) return false
	for (let i = 0; i < numberList.length; i++) {
		if (numberList[i] % 2 !== 0) return false
	}
	return true
}
