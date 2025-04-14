import { checkIfAllEven, classifyStudent } from './main'
describe('classifyStudent()', () => {
	test('should return Invalid mark ! when n < 0', () => {
		const value = classifyStudent(-1)
		expect(value).toBe('Invalid mark')
	})

	test('should return Invalid mark ! when n > 10', () => {
		const value = classifyStudent(11)
		expect(value).toBe('Invalid mark')
	})

	test('should return Excellent when n > 8', () => {
		expect(classifyStudent(9)).toBe('Excellent')
		expect(classifyStudent(10)).toBe('Excellent')
	})

	test('should return Good when n [7,8]', () => {
		expect(classifyStudent(7)).toBe('Good')
		expect(classifyStudent(8)).toBe('Good')
	})

	test('should return Not Good when n in [4-6]', () => {
		;[(4, 5, 6)].forEach((n) => expect(classifyStudent(n)).toBe('Not Good'))
	})

	test('should return Bad when n in [1-3]', () => {
		;[1, 2, 3].forEach((n) => expect(classifyStudent(n)).toBe('Bad'))
	})
})

describe('checkIfAllEven()', () => {
	test('should return false when n is not an array', () => {
		expect(checkIfAllEven(1)).toBe(false)
		expect(checkIfAllEven('')).toBe(false)
		expect(checkIfAllEven({})).toBe(false)
		expect(checkIfAllEven(null)).toBe(false)
		expect(checkIfAllEven(undefined)).toBe(false)
	})

	test('should return false when array is empty', () => {
		expect(checkIfAllEven([])).toBe(false)
	})

	test('should return false when array has no even number', () => {
		expect(checkIfAllEven([1, 3, 5, 7])).toBe(false)
	})

	test('should return false when array has some even number', () => {
		expect(checkIfAllEven([1, 2, 4, 7])).toBe(false)
	})

	test.only('should return true when array has all even number', () => {
		expect(checkIfAllEven([2, 4, 6, 8])).toBe(true)
	})
})
