function insertLinkedList() {
	let head = null

	function getTail() {
		if (head == null) return null
		let current = head
		while (current.next !== null) {
			current = current.next
		}
		return current.data
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

	return {
		insertTail,
		insertBeforePosition,
	}
}

const numberLinkedList = insertLinkedList()

numberLinkedList.insertTail(20)
numberLinkedList.insertBeforePosition(23, 4)
