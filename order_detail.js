var order_detail = []
const{food} = require('./food')
order_detail.push({order_id: 1,food_id: 1,qty: 2,price: 0})
order_detail.push({order_id: 1,food_id: 2,qty: 5,price: 0})
order_detail.push({order_id: 1,food_id: 3,qty: 1,price: 0})
order_detail.push({order_id: 2,food_id: 1,qty: 1,price: 0})
order_detail.push({order_id: 2,food_id: 2,qty: 1,price: 0})
order_detail.push({order_id: 2,food_id: 3,qty: 1,price: 0})


priceCal = () =>{
    order_detail.forEach((order) => {
        food.forEach((price) =>{
            if(order.food_id == price.food_id){
                order.price = order.qty * price.price;
            }
        })
    })
}
priceCal();

module.exports = {
    order_detail: order_detail,
    priceCal: priceCal
}

