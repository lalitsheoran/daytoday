class HashTable{
    constructor(size=50){
        this.keyMap=new Array(size)
    }
    hash(key){
        let len=key.length
        let sum=0
        let prime=37
        for(let i=0;i<Math.min(len,50);i++){
            let charValue=key[i].charCodeAt(0)
            sum=(sum * prime + charValue) % this.keyMap.length
        }
        return sum
    }
    set(key,value){
        let idx=this.hash(key)
        if(!this.keyMap[idx]){
            this.keyMap[idx]=[]
        }
        else{
            for(let i of this.keyMap[idx]){
                if(i[0]===key){
                    return new Error("Duplicate key is not allowed")
                }
            }
        }
        this.keyMap[idx].push([key,value])
    }
    get(key){
        let idx=this.hash(key)
        if(this.keyMap[idx]){
            for(let i of this.keyMap[idx]){
                if(i[0]===key){
                    return i[1]
                }
            }
        }
        return undefined
    }
    keys(){
        let keysArr=[];
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j of this.keyMap[i]){
                    keysArr.push(j[0])
                }
            }
        }
        return keysArr

    }
    values(){
        let valuesArr=[];
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j of this.keyMap[i]){
                    valuesArr.push(j[1])
                }
            }
        }
        return valuesArr

    }
}

const ht=new HashTable(20)
ht.set("name","xyz")
ht.set("obj","clear")
ht.set("sign","done")

console.log(ht.keys())
console.log(ht.values())

