/*let function People(name,gender,occupation,maritalstatus,yob){
    this.name=name
    this.gender=gender
    this.occupation=occupation
    this.maritalstatus=maritalstatus
    this.yob=yob
     
    this.calage=function(){
let age=new Date().getFullYear() - this.yob
console.log(`You are currently ${age} years old`)
}
}
let person1=new People("Mercy","Female","Manager","Single",2004)
let person2=new People("Esther","Female","Auditor","Married",1975)
let person3=new People("Hellen","Female","Nurse","Single",2003)
let person4=new People("Celine","Female","Doctor","Single",2001)
let person5=new People("Vivian","Female","CEO","Single",1994)
person1.calage()
console.log(person1)*/


/*function fullName(fname,lname){
    return fname+lname
}

let fullName2=(fname,lname)=> fname+lname

console.log("Mercy","Muthoni")
fullName2()*/

/*function num1(number){
    return number>=0
}
console.log(5)
num1()


let num2=(number)=>number>=0
console.log(1)
num2()*/

//synchronous

/*console.log("I")

console.log("eat")

console.log("ice cream")

console.log("with")

console.log("cookies")*/

//asynchronous

/*console.log("I");

console.log("eat");

setTimeout(()=>{
    
    console.log("ice cream");
},4000)

console.log("with");

console.log("cookies");*/


/*function one(){
console.log("Step one");
}

function two(cb){
    console.log("Step two")
    cb()
}
two(one)*/ 

//cb

let stocks={
    flavours:["Strawberry","Blueberry","Vanilla","Chocolate","Mango"],
    holders:["Stick","Cone","Cup"],
    liquid:["Yoghurt","Ice"],
    toppings:["Oreo","Sprinkles","Chocolate chips"]
    
}
/*let order=(Flavour_name,cb)=>{
    setTimeout(()=>{
       console.log(`You have ordered ${stocks.flavours[Flavour_name]}`) 
       cb()
    },2000)

}

let production=()=>{
    setTimeout(()=>{
console.log(`Production has started`)

setTimeout(()=>
{console.log(`The flavours have been prepared`)

setTimeout(()=>{
    console.log(`Yoghurt and ice have been added`)

    setTimeout(()=>{
console.log(`Machine has started`)

setTimeout(()=>{
    console.log(`You have selected ${stocks.holders[2]} as your holder`)

    setTimeout(()=>{ 
        console.log(`You have selected ${stocks.toppings[2]} as your toppings`)
    
        setTimeout(()=>{
            console.log(`Order complete. Your frozen yoghurt is served`)

        },2000)
      },3000)
     },2000)
    },1000)
   },1000)
  },2000)
},0o00)
}
order(2,production)*/

let is_shop_open=true

/*let order=(time,work)=>{
 return new Promise((resolve,reject)=>{
  
    if(is_shop_open){
        setTimeout(()=>{
            resolve(work())
        },time)
      
    }
    else{
        reject(console.log('Our shop is closed')
        )
    }
})

}
 
order(2000,()=>console.log(`${stocks.flavours[3]} was selected`))


.then(()=>{
    return order(0o00,()=>console.log(`Production has started`))
})

.then(()=>{
    return order(2000,()=>console.log(`The flavours have been prepared`))
})

.then(()=>{
    return order(1000,()=>console.log(`Yoghurt and ice have been added`))
})

.then(()=>{
    return order(1000,()=>console.log(`Machine has started`))
})

.then(()=>{
    return order(2000,()=>console.log(`Frozen yoghurt has been placed on ${stocks.holders[1]}`))
})

.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[1]} have been added to your  frozen yoghurt`))
})

.then(()=>{
    return order(1000,()=>console.log(`Production is complete. Your frozen yoghurt is served`))
})
.catch(()=>{
    console.log(`Customer left`)
})

.finally(()=>{
    console.log(`The day has ended. Shop closed`)
})

*/

/*async function order(){
    try{ 
        await abc
    }
    catch(error){
        console.log(`abc does not exist`,error)
    }

    finally{
        console.log(`Run code anyway`)
    }
}
order()*/

/*let toppings_choice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( console.log("Which toppings would you like on your frozen yoghurt?"))
        },3000)
    })
}

async function kitchen(){
console.log("A")
console.log("B")
console.log("C")

await toppings_choice()

console.log("D")
console.log("E")
}

kitchen()

console.log("Doing the dishes")
console.log("Cleaning the tables")
console.log("Taking other orders")*/

function time(ms){
    return new Promise((resolve,reject)=>{
            if(is_shop_open){ 
                setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Our shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.flavours[0]} has been picked`)

        await time(0o00)
        console.log(`Production has started`)

        await time(2000)
        console.log(`The flavours have been prepared`)

        await time(1000)
        console.log(`Yoghurt and ice have been added`)

        await time(1000)
        console.log(`Machine has started`)

        await time(2000)
        console.log(`Frozen yoghurt has been placed on ${stocks.holders[2]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} have been added to your frozen yoghurt`)

        await time(1000)
        console.log(`Production is complete.Please pick your order`)
    }

    catch(error){

        console.log("Our shop is closed",error)
    }
    finally{
        console.log("Day ended. Shop is closed.")
    }
}
kitchen()