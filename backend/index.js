const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(cors());

app.get('/get/customer/:id', (req, res) => {
    let id = Number(req.params.id)
    if (id === 1) {
      let customer = [ 
          {id:1,name:'สมหมาย',lastName:'สมดี',age:30},  
          {id:2,name:'สมศรี',lastName:'ศรีสมัย',age:25},
          {id:3,name:'สมไทย',lastName:'ใสดี',age:27},        
          {id:4,name:'หทัย',lastName:'ใจดี',age:22},
          {id:5,name:'หัศดี',lastName:'สีใส',age:23}, 
          {id:6,name:'อันนา',lastName:'ดาดา',age:24},
          {id:7,name:'ลูกตา',lastName:'พาชม',age:30},
          {id:8,name:'กังหัน',lastName:'หมุ่นดี',age:27},
       ] 
   res.status(200).json({ status: 200, msg: "get customer success", success: true, data: customer })
}else{
   res.status(200).json({ status: 200, msg: "get customer fail", success: false, data: [] })}
})

app.post('/add/customer', (req, res) => {
    if (Object.values(req.body).length > 0) {
        res.status(200).json({ status: 200, msg: "add customer  success", success: true})
    }else{
        res.status(200).json({ status: 200, msg: "add customer fail", success: false})
    }
})

app.listen(port, () => {
    console.log('Start server at port 3000.')
  })