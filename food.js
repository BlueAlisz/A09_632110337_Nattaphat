food = []
food.push({food_id: 1,food_name: 'ramen',price: 100})
food.push({food_id: 2,food_name: 'miso',price: 50})
food.push({food_id: 3,food_name: 'sushi',price: 10})
food.push({food_id: 4,food_name: 'salmon',price: 200})

let regFid = /^[0-9]{0,4}$/
let cFid
let regFn = /^[A-Za-z]{0,50}$/
let cFn
let regFp = /^[0-9]{0,4}$/
let cFp

Addfood = (id,name,price) =>{
    cFid = regFid.test(id)
    cFn = regFn.test(name)
    cFp = regFp.test(price)

    let message = 'error'

    if(cFid == false){
        message = 'Please enter only number'
    }else if(cFn == false){
        message = 'Please enter only a-z'
    }else if(regFp == false){
        message = 'Please enter only number'
    }else{
        let i = 1
        food.forEach((foods) => {
            if(foods.food_id != id /*|| foods.food_name != name*/){
                if(i == food.length){
                    food.push({food_id: id,food_name: name,price: price})
                    console.log('ok')
                    console.table(food)
                    message =  'success'
                }
                i++;
            }
        });
    
    
    }
    console.log(message)
    return message
}

GetAllFood = () =>{
    message1 = ''
    food.forEach((item) =>
    {   
        message1 += `id: ${item.food_id} name: ${item.food_name} price: ${item.price} `
            
    })
    console.log(message1)
    return message1
     
}

//Addfood(5,'chicken',100)
//console.table(food)

module.exports = {
    Addfood: Addfood,
    GetAllFood: GetAllFood,
    food: food
}

