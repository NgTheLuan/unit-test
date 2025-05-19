import { checkIfAllEven, classifyStudent } from './main'

/***************** Unit-test with Linked List *****************/
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
		const numberLinkedList = insertLinkedList()
		const head = numberLinkedList.insertTail(5)

		expect(head).toEqual({ data: 5, next: null })
	})

	it('should return head with two node if list has one node', () => {
		const numberLinkedList = insertLinkedList()
		const head = numberLinkedList.insertTail(10)

		expect(head).toEqual({ data: 5, next: { data: 10, next: null } })
	})
})

describe('insertBorePosition(data,position)', () => {
	it('should insert head if position <= 0', () => {
		expect(insertLinkedList().insertBeforePosition(5, -1)).toEqual({ data: 5, next: null })
		expect(insertLinkedList().insertBeforePosition(5, 0)).toEqual({ data: 5, next: null })
	})

	it('should insert tail if position >= size', () => {
		const numberLinkedList = insertLinkedList()
		numberLinkedList.insertBeforePosition(5, -1)
		const head = numberLinkedList.insertBeforePosition(10, 5)
		expect(head).toEqual({ data: 5, next: { data: 10, next: null } })
	})

	it('should insert before position if 0 <= position < size', () => {
		const numberLinkedList = insertLinkedList()
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

describe('removeHead()', () => {
	it('should return null if list is empty', () => {
		const numberLinkedList = createLinkedList()
		const head = numberLinkedList.removeHead()
		expect(head).toBeNull()
	})
	it('should return null if list has one item', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(5)
		const head = numberLinkedList.removeHead()
		expect(head).toBeNull()
	})
	it('should return one item if list has two items', () => {
		// 5 -> 10
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(10)
		numberLinkedList.insertHead(5)
		const head = numberLinkedList.removeHead()
		expect(head).toEqual({ data: 10, next: null })
	})
})

describe('removeTail()', () => {
	it('should return null if list is empty', () => {
		const numberLinkedList = createLinkedList()
		const head = numberLinkedList.removeTail()
		expect(head).toBeNull()
	})
	it('should return null if list has one item', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(5)
		const head = numberLinkedList.removeTail()
		expect(head).toBeNull()
	})
	it('should return one item if list has two items', () => {
		// 5 -> 10
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(10)
		numberLinkedList.insertHead(5)
		const head = numberLinkedList.removeTail()
		expect(head).toEqual({ data: 5, next: null })
	})
})

describe('removeAtPosition(position)', () => {
	it('should return null if list is empty', () => {
		const numberLinkedList = createLinkedList()
		const head = numberLinkedList.removeAtPosition(0)
		expect(head).toBeNull()
	})
	it('should return null if list has one item', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(5)
		const head = numberLinkedList.removeAtPosition(1)
		expect(head).toBeNull()
	})
	it('should remove correctly item at 0 <= position < n - 1', () => {
		// 0 -> 5 -> 10
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(10)
		numberLinkedList.insertHead(5)
		numberLinkedList.insertHead(0)
		const head = numberLinkedList.removeAtPosition(1)
		expect(head).toEqual({ data: 0, next: { data: 10, next: null } })
	})
})

describe('some(isValidFn)', () => {
	it('should return false if list is empty', () => {
		const numberLinkedList = createLinkedList()
		expect(numberLinkedList.some((x) => x > 0)).toBe(false)
	})
	it('should return false if not existed in list', () => {
		// 1 -> 2 -> 3
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(3)
		numberLinkedList.insertHead(2)
		numberLinkedList.insertHead(1)
		expect(numberLinkedList.some((x) => x > 3)).toBe(false)
		expect(numberLinkedList.some((x) => x % 5 === 0)).toBe(false)
		expect(numberLinkedList.some((x) => x < 0)).toBe(false)
	})
	it('should return true if existed in list', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(3)
		numberLinkedList.insertHead(2)
		numberLinkedList.insertHead(1)
		expect(numberLinkedList.some((x) => x % 2 === 0)).toBe(true)
		expect(numberLinkedList.some((x) => x > 1)).toBe(true)
		expect(numberLinkedList.some((x) => x < 3)).toBe(true)
	})
})

describe('every(isValidFn)', () => {
	it('should return false if list is empty', () => {
		const numberLinkedList = createLinkedList()
		expect(numberLinkedList.every((x) => 0)).toBe(false)
	})
	it('should return false if not all nodes match condition', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(15)
		numberLinkedList.insertHead(10)
		numberLinkedList.insertHead(5)
		expect(numberLinkedList.every((x) => x % 3 === 0)).toBe(false)
		expect(numberLinkedList.every((x) => x <= 10)).toBe(false)
	})
	it('should return true if all nodes match condition', () => {
		const numberLinkedList = createLinkedList()
		numberLinkedList.insertHead(15)
		numberLinkedList.insertHead(10)
		numberLinkedList.insertHead(5)
		expect(numberLinkedList.every((x) => x % 5 === 0)).toBe(true)
		expect(numberLinkedList.every((x) => x > 1)).toBe(true)
	})
})

/***************** Unit-test with Stack *****************/
describe('createStack()', () => {
	it('all in one', () => {
		const stack = createStack()
		expect(stack.getSize()).toBe(0)
		expect(stack.isEmpty()).toBe(true)
		expect(stack.getTop()).tobeUndefined()

		//push
		stack.push(5)
		expect(stack.getSize()).toBe(1)
		expect(stack.isEmpty()).toBe(false)
		expect(stack.getTop()).toBe(5)

		//push
		stack.push(10)
		expect(stack.getSize()).toBe(2)
		expect(stack.isEmpty()).toBe(false)
		expect(stack.getTop()).toBe(10)

		const value = stack.pop()

		//pop
		expect(value).toBe(10)
		expect(stack.getSize()).toBe(1)
		expect(stack.isEmpty()).toBe(false)
		expect(stack.getTop()).toBe(5)

		//pop
		expect(value).toBe(5)
		expect(stack.getSize()).toBe(0)
		expect(stack.isEmpty()).toBe(true)
		expect(stack.getTop()).tobeUndefined()
	})
})
