function OthersLinkedList() {
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

	function some(isValidFn) {
		if (head == null) return false
		let current = head
		while (current != null) {
			if (isValidFn(current.data)) return true
			// move to the next item
			current = current.next
		}
		return false
	}

	function every(isValidFn) {
		if (head == null) return false
		let current = head
		while (current != null) {
			if (!isValidFn(current.data)) return false
			// move to the next item
			current = current.next
		}
		return true
	}

	return { insertHead, printList, some, every }
}

const numberLinkedList = OthersLinkedList()

numberLinkedList.insertHead(3)
numberLinkedList.insertHead(2)
numberLinkedList.insertHead(1)

numberLinkedList.printList()

console.log(
	'SOME',
	numberLinkedList.some((e) => e < 3)
)
console.log(
	'EVERY',
	numberLinkedList.every((e) => e > 1)
)
