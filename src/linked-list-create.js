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
		let tail = head
		while (tail.next !== null) {
			tail = tail.next
		}
		return tail
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

	return {
		insertHead,
		printList,
		getHead,
		getTail,
		getSize,
		findIndexByData,
		findWithCallback,
	}
}

const numberLinkedList = createLinkedList()

numberLinkedList.insertHead(1)
numberLinkedList.insertHead(2)
numberLinkedList.insertHead(3)
numberLinkedList.insertHead(4)
numberLinkedList.insertHead(5)

numberLinkedList.printList()

console.log('HEAD', numberLinkedList.getHead())
console.log('TAIL', numberLinkedList.getTail())
console.log('SIZE', numberLinkedList.getSize())
console.log('FIND', numberLinkedList.findIndexByData(5))
console.log(
	'CALLBACK',
	numberLinkedList.findWithCallback((x) => x % 2 === 0)
)
