function createLinkedList() {
	let head = null

	function insertHead(newData) {
		const newNode = { data: newData, next: null }
		if (head == null) {
			head = newNode
		} else {
			newNode.next = head
			head = newNode
		}
		return head
	}

	function insertTail(newData) {
		const newNode = { data: newData, next: null }
		if (head == null) {
			head = newNode
		} else {
			const tail = getTail()
			tail.next = newNode
		}
		return head
	}

	function printList() {
		if (head == null) return
		let current = head
		while (current != null) {
			console.log(current.data)
			current = current.next
		}
	}

	function getHead() {
		return head.data
	}

	function getTail() {
		if (head == null) return null
		let current = head
		while (current.next !== null) {
			current = current.next
		}
		return current.data
	}

	function getSize() {
		if (head == null) return 0
		let current = head
		let count = 0
		while (current !== null) {
			count++
			current = current.next
		}
		return count
	}

	function findIndexByData(data) {
		if (head == null) return -1
		let current = head
		let i = 0
		while (current !== null) {
			if (current.data === data) return i
			i++
			current = current.next
		}
		return -1
	}

	function findWithCallback(callback) {
		if (head == null) return undefined
		let current = head
		let i = 0
		while (current !== null) {
			if (callback(current.data, i)) return current.data
			i++
			current = current.next
		}
		return undefined
	}

	function insertBeforePosition(newData, position) {
		if (position <= 0 || head == null) {
			insertHead(newData)
			return head
		}
		let prev = head
		let curr = head
		let i = 0
		while (curr != null && i < position) {
			prev = curr
			curr = curr.next
			i++
		}
		// found node to insert
		const newNode = { data: newData, next: curr }
		prev.next = newNode
		return head
	}

	return {
		insertHead,
		insertTail,
		printList,
		getHead,
		getTail,
		getSize,
		findIndexByData,
		findWithCallback,
		insertBeforePosition,
	}
}

const numberLinkedList = createLinkedList()

numberLinkedList.insertTail(20)
numberLinkedList.insertHead(1)
numberLinkedList.insertHead(2)
numberLinkedList.insertHead(3)
numberLinkedList.insertHead(4)
numberLinkedList.insertHead(5)

numberLinkedList.insertBeforePosition(23, 4)
numberLinkedList.printList() // 5 -> 4 -> 3 -> 2 -> 1

console.log('HEAD', numberLinkedList.getHead())
console.log('TAIL', numberLinkedList.getTail())
console.log('SIZE', numberLinkedList.getSize())
console.log('FIND', numberLinkedList.findIndexByData(5))
console.log(
	'CALLBACK',
	numberLinkedList.findWithCallback((x) => x % 2 === 0)
)
