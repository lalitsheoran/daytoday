class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null,
        this.tail=null,
        this.length=0
    }
    push(value){
        let newNode= new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.head){
            let current=this.head
            let prev
            while(current.next){
                prev=current
                current=current.next
            }
            this.tail=prev
            this.tail.next=null
            this.length--
            if(this.length===0){
                this.head=null
                this.tail=null
            }
            return current.value
        }
    }
}
let ll=new LinkedList()
ll.push("how")
ll.push("are")
ll.push("you")
ll.pop()