//primitive
//7types:string,number,boolean,null,undefined,symbol,bigINT
const score=100
const scorevalue=100.3
const isLoggeddIN=true
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const bignumber=123456788999n

//reference(non primitive)
//Array,objects,functions
const heros=["shaktiman","maan"];
let myobj={
    name:"meenu",
    age:22,
}
const myfunction=function(){
    console.log("hello world");
}
console.log(typeof myfunction)
console.log(typeof myobj)
console.log(typeof heros)
console.log(typeof bignumber)
console.log(typeof id)
console.log(typeof userEmail)
console.log(typeof outsideTemp)
console.log(typeof isLoggeddIN)
console.log(typeof scorevalue)
console.log(typeof score)

