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

describe('insertTail(data)', () => {
	it('should return head with one node if list is empyty', () => {
		const numberLinkedList = createLinkedList()
		const head = numberLinkedList.insertTail(5)

		expect(head).toEqual({ data: 5, next: null })
	})

	it('should return head with two node if list has one node', () => {
		const numberLinkedList = createLinkedList()
		const head = numberLinkedList.insertTail(10)

		expect(head).toEqual({ data: 5, next: { data: 10, next: null } })
	})
})

describe('insertBorePosition(data,position)', () => {
	it('should insert head if position <= 0', () => {
		expect(createLinkedList().insertBeforePosition(5, -1)).toEqual({ data: 5, next: null })
		expect(createLinkedList().insertBeforePosition(5, 0)).toEqual({ data: 5, next: null })
	})

	it('should insert tail if position >= size', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertBeforePosition(5, -1)
		const head = numberLinkedList.insertBeforePosition(10, 5)
		expect(head).toEqual({ data: 5, next: { data: 10, next: null } })
	})

	it('should insert before position if 0 <= position < size', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertBeforePosition(5, 1)
		numberLinkedList.insertBeforePosition(10, 2)
		numberLinkedList.insertBeforePosition(15, 3)
		const head = numberLinkedList.insertBeforePosition(0, 1)

		expect(head).toEqual({
			data: 5,
			next: { data: 0, next: { data: 10, next: { data: 15, next: null } } },
		})
	})
})
