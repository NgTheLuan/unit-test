function insertLinkedList() {
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

	function getTail() {
		if (head == null) return null
		let tail = head
		while (tail.next !== null) {
			tail = tail.next
		}
		return tail
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

	function printList() {
		if (head == null) return
		let current = head
		while (current != null) {
			console.log(current.data)
			current = current.next
		}
	}

	return {
		insertHead,
		insertTail,
		insertBeforePosition,
		printList,
	}
}

const numberLinkedList = insertLinkedList()

numberLinkedList.insertHead(1)
numberLinkedList.insertHead(2)
numberLinkedList.insertHead(3)
numberLinkedList.insertHead(4)
numberLinkedList.insertHead(5)

numberLinkedList.insertTail(20)
numberLinkedList.insertBeforePosition(23, 4)

numberLinkedList.printList()
