const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const{check,validationResult} = require('express-validator');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password:'password',
    database:'stud_database'
})

app.post('/register', (req,res) => {
    console.log('in register route')
    const sql = `INSERT INTO user (fullname,dob,emailid,password,
        role,roleid,uin) VALUES(?)`;
    const values =[
        req.body.fullname,
        req.body.dob, 
        req.body.emailid, 
        req.body.password, 
        'Student', 
        1, 
        req.body.uin, 
    ]
    console.log(values)
    db.query(sql,[values], (err,data) => {
        if(err){
            console.log(err)
            return res.status(500).json({ error: "Database error" });
        }
        return res.json(values);
    })
})

app.post('/login',[
    check('emailid',"Email Length Error").isEmail().isLength({min:10,max:30}),
    check('password',"Password length 8-10").isLength({min:8,max:20})
]
, (req,res) => {
    console.log('in login route')
    const sql = `SELECT * FROM user WHERE emailid=? AND password=?`;
    //console.log("response", res)
    console.log("request", req.body)

    db.query(sql,[req.body.emailid,req.body.password], (err,data) => {
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            return res.json(errors)
        }else{
            if(err){
                return res.status(500).json({ error: "Database error" });
            }
            console.log(data)
            if(data.length>0){
                
                return res.json('Success')
            }
            else{
                return res.json('Failure')
            }
        }
        
    })
})

app.get('/',(req,res)=>{
    const sql = `SELECT * FROM user`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(err);
    })
})

app.listen(8080, ()=>
    console.log('Server Started on 8080')

)



