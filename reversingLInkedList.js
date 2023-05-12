class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor(head = null){
        this.head = head
      
    }
}
 let node1 = new ListNode(2)
 let node2 = new ListNode(5)
 let node3 = new ListNode(8)
 node1.next = node2
//  let list = new LinedL
let list = new LinkedList(node1)
console.log(list.head.next.data)
// console.log(node1)