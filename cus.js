var cus = []
cus.push({id: 1,name: 'blue',email:'natta@gmail.com',tel: '0801334044'})
cus.push({id: 2,name: 'red',email:'red@gmail.com',tel: '084854544'})
cus.push({id: 3,name: 'reds',email:'reds@gmail.com',tel: '084854544'})

let regCid = /^[0-9]{0,4}$/
let cCid

GetInfo = (id) =>{
    cCid = regCid.test(id)
    let message = 'no this customerID'
    if(cCid == false){
        message = 'Please enter only number'
    }else{
        cus.forEach((item) =>{
        if(item.id == id){
           message = `id: ${item.id} name: ${item.name} email: ${item.email} tel: ${item.tel}`
           console.log(message)
        } 
    })
    }
    console.log(id)
    return message
}

GetAllInfo = () =>{
    message1 = ''
    cus.forEach((item) =>
    {   
        message1 += `id: ${item.id} name: ${item.name} tel: ${item.tel} `
        
    })
    console.log(message1)
    return message1
 }


module.exports = {
    GetInfo : GetInfo,
    GetAllInfo: GetAllInfo,
    cus: cus
};


