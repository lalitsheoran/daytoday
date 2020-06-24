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
    insert(idx,value){
        let newNode=new Node(value)
        if(idx===0){
            newNode.next=this.head
            this.head=newNode
            this.length++
            return true
        }
        else if(idx===this.length){
            this.tail.next=newNode
            this.tail=newNode
            this.length++
            return true
        }
        else if(idx>0 && idx<this.length){
            let current = this.head
            let prev
            let count=0
            while(count!=idx){
                prev=current
                current=current.next
                count++
            }
            prev.next=newNode
            newNode.next=current
            this.length++
            return true
        }
        return false
    }
    remove(idx){
        if(idx >= this.length || idx < 0){return false}
        if(idx-1===0){
            this.shift()
            return true
        }
        let prev=this.get(idx-1)
        if(prev){
            let temp=prev.next.next
            prev.next=temp
            this.length--
            return true
        }
    }
    reverse(){
        if(this.head){
            let current=this.head
            this.tail=this.head
            let after=null
            let before=null
            while(current){
                after=current.next
                current.next=before
                before=current
                current=after
            }   
            this.head=before
            return this
        }
        return false
    }
}
let ll=new LinkedList()
ll.push("how")
ll.push("are")
ll.push("you")
// ll.pop()
ll.reverse()