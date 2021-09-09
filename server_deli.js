var http = require('http');
var url = require('url');


const {Addfood,GetAllFood} = require('./food');
const {GetInfo,GetAllInfo} = require('./cus');
const {orderFood,CreateOrder} = require('./order')


//loadCustomer();

http.createServer(function (req,res){
    var request_path = url.parse(req.url, true);
    var message = '';
    var status = 200;

    switch(request_path.pathname){
        case '/customer_info/':
            try{
            let desc = GetInfo(parseInt(request_path.query.id))
            message += `${desc}`;
            }catch(err){
                status = 400;
                message += err;
                console.log(err);
            }
            break;
        case '/CreateOrder/':
            try{
            let desc = CreateOrder(parseInt(request_path.query.Oid),parseInt(request_path.query.CusId),request_path.query.address)
            message += `${desc}`;
            }catch(err){
                status = 400;
                message += err;
                console.log(err);
            }
            break;
            
        case '/add_menu/':
            try{
                let desc = Addfood(parseInt(request_path.query.id),request_path.query.name,parseInt(request_path.query.price))
                message += `${desc}`;
            }catch(err){
                status = 400;
                message += err;
                console.log(err);
            }
            break;
        case '/food_menu/':
            try{
                let desc = GetAllFood()
                message += `${desc}`;
            }catch(err){
                status = 400;
                message += err;
                console.log(err);
            }
            break;
        case '/order_food/':
            try{
                let desc = orderFood(parseInt(request_path.query.order_ids),parseInt(request_path.query.food_ids),parseInt(request_path.query.qtys))
                message += `${desc}`;
            }catch(err){
                status = 400;
                 message += err;
                console.log(err);
            }
            break;
        default:
            status = 400
            message = 'path not found!';
            break;

    }

    let response_object = {
        status: status,
        message: message
    };

    res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_object));

}).listen(8080);
console.log('Inventory system is running on port 8080.');
