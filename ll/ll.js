class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
        
    }
    cleanUp(){
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        else if(this.length===1){
            this.tail=null
        }
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
            this.cleanUp()
            return current.value
        }
    }
    shift(){
        if(!this.length){
            return undefined
        }
        else{
            let current = this.head
            this.head=this.head.next
            this.length--
            this.cleanUp()
            return current.value
        }
    }
    unshift(value){
        let newNode= new Node(value)
        if(!this.head){
            this.head=newNode
        }
        else{
            let current=this.head
            this.head=newNode
            this.head.next=current
        }
        this.length++
        return this

    }
    get(idx){
        if(idx<0 || idx>=this.length){
            return undefined
        }
        else{
            let current= this.head
            let count=0
            while(count!=idx){
                current=current.next
                count++
            }
            return current
        }
        
    }
    set(idx,value){
        let fvalue= this.get(idx)
        if(fvalue){
            fvalue.value=value
            return true
        }
        return false
        
    }
}
let ll=new LinkedList()
ll.push("how")
ll.push("are")
ll.push("you")
ll.pop()