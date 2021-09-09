const {food} = require("./food")
const {order_detail,priceCal} = require("./order_detail")
const {cus} = require("./cus")
order = []
status_order = []
status_order.push({status_id: 1,status_name: 'Cooking'})
status_order.push({status_id: 2,status_name: 'Sending'})
status_order.push({status_id: 3,status_name: 'Received'})

order.push({order_id:1,customer_id:1,address: 'cm',total_price: 0,status_id: 1})

let regOid = /^[0-9]{0,4}$/
let cOid
let regCid = /^[0-9]{0,4}$/
let cCid
let regAs = /^[A-Za-z0-9]{0,50}$/
let cAs
let regQty = /^[0-9]{0,2}$/
let cQty
let regFid = /^[0-9]{0,4}$/
let cFid


orderFood = (order_ids,food_ids,qtys) =>{
    cOid = regOid.test(order_ids)
    cFid = regFid.test(food_ids)
    cQty = regQty.test(qtys)
    
    let message = 'error'
    if(cOid == false || cFid == false || cQty == false){
        message = 'Please enter only number'
    }else{
        food.forEach((foods) => {
            order.forEach((orders) => {
                if(foods.food_id == food_ids && orders.order_id == order_ids){
                    order_detail.push({order_id: order_ids,food_id: food_ids,qty: qtys,price: 0})
                    priceCal()
                    message = `order id: ${order_ids} food id: ${food_ids} qty: ${qtys}`
                    console.table(order_detail)
                }
            });
        });
    }
    return message
    
}

CreateOrder = (Oid,CusId,address) =>{
    let i = 1;
    cOid = regOid.test(Oid)
    cCid = regCid.test(CusId)
    cAs = regAs.test(address)
    
    let message = 'error'
    
    if(cOid == false){
        message = 'Please enter only number'
    }else if(cCid == false){
        message = 'Please enter only number'
    }else if(cAs == false){
        message = 'Please enter only a-z'
    }else{
        order.forEach((orders) =>{
            cus.forEach((cuss) =>{
                if(orders.order_id != Oid && cuss.id == CusId){
                    if(i == order.length){
                        order.push({order_id: Oid,customer_id: CusId,address: address,total_price: 0,status_id: 1})
                        message = `Create Order id: ${Oid} customer id: ${CusId} status id: 1`
                    }
                    console.table(order)
                    
                }
            })
        i++
    })
    }
    console.log(address)
    return message
}

ChangeStatus = (id,status) =>{
    order.forEach((orders) =>{
        if(orders.order_id == id){
            orders.status_id = status
        }
    })
}

totalPrice = () =>{
    order.forEach((orders) => {
        orders.total_price = 0
        order_detail.forEach((order_d) =>{
            if(orders.order_id == order_d.order_id){
                orders.total_price += order_d.price 
            }
        }) 
    })
    
}

//orderFood(1,1,1)
CreateOrder(2,1,'cm')
//ChangeStatus(2,2)
totalPrice()

/*console.table(order_detail)
console.table(order)*/

module.exports ={
    orderFood: orderFood,
    CreateOrder: CreateOrder
}


