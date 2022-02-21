

// 연습 -1
const name ="euiseong",
age = 29,
gender="male"

const sayHi = (name:string,age:number,gender:string):void =>{
    console.log(`hello ${name}, you are ${age}, you are ${gender}`)

}

// sayHi(name,age,gender)

// ------------------------------------------------------------------//

// 연습 -2 인터페이스 활용
interface Human{
    name:string
    age: number
    gender: string
}

const person ={
   name: "euiseong",
   gender: "male",
   age : 29
}

const sayHi2 = (person:Human):void =>{
    console.log(`hello ${name}, you are ${age}, you are ${gender}`)
}

const sayHi2_str = (person:Human):string =>{
    return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}`
}

//console.log(sayHi2(person))
//console.log(sayHi2_str(person))

// ------------------------------------------------------------------//

// 연습 -3 

class Human_c{
    public name : string
    public age : number
    public gender : string

    constructor(name: string, age: number, gender: string){
        this.name = name
        this.age = age;
        this.gender = gender
    }
}

const jeongyeong = new Human_c("jeongyeon",24,"female")


const sayHi3_str = (person:Human_c):string =>{
    return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}`
}

console.log(sayHi3_str(jeongyeong))
// ------------------------------------------------------------------//

export {};

