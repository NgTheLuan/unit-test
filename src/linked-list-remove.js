function removeLinkedList() {
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

	function removeHead() {
		if (head !== null) head = head.next
		return head
	}

	function removeTail() {
		if (head == null) return null

		if (head.next == null) {
			head = null
			return head
		}

		let secondLast = head
		while (secondLast.next.next != null) {
			secondLast = secondLast.next
		}

		secondLast.next = null
		return head
	}

	function removeAtPosition(position) {
		if (position <= 0 || head == null) return removeHead()

		if (head.next == null) {
			head = null
			return head
		}

		let prev = head
		let curr = head
		let i = 0

		while (curr.next != null && i < position) {
			prev = curr
			curr = curr.next
			i++
		}

		prev.next = curr.next
		return head
	}

	return { insertHead, printList, removeHead, removeTail, removeAtPosition }
}

const numberLinkedList = removeLinkedList()

numberLinkedList.insertHead(1)
numberLinkedList.insertHead(2)
numberLinkedList.insertHead(3)

numberLinkedList.removeAtPosition(0)

numberLinkedList.printList()
