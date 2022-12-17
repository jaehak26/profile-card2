const express = require('express')
const app = express()
const fs = require("fs");
const mysql = require("mysql");
const cors = require("cors");
const port = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//database.json 읽기
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

//connection 객체 생성
//mysql 연결(database.json에 있는 데이터 사용)
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
//db 연결 수행
connection.connect();

const corsOptions = {
    origin:'http://localhost:3000',
    credentials: true,
}

app.use(cors());

//upload
const multer = require('multer');
const { stringify } = require('querystring');
//업로드 파일 지정
const upload = multer({dest: './upload'})
app.use('/image',express.static('./upload'));

app.post('/api/profile/insert', 
(req, res) => {
  
  //console.log(req.body)
  let userId = req.body.userId;
  let userName = req.body.userName;
  let moreInfo = req.body.moreInfo;
  let userPhone = req.body.gender;
  let userEmail = req.body.job;
  let profileBlob =  req.body.profileBlob;
  let sql = "INSERT INTO profile_info VALUES (?,?,?,?,?,?)"
  let params = [userId, userName, moreInfo, userPhone, userEmail ,profileBlob];
  connection.query(sql,params,
    (err,rows,fields) => {
        if(err){
            if(err.code=="ER_DUP_ENTRY"){
                res.send({error: err.code})
                res.end();
            }
        }
        if(rows!==null){
            res.send(rows);
        }
    })
})

app.post('/api/profile/update', 
    (req,res)=>{
        //console.log(req.body)
        let addSql = "UPDATE profile_info SET "+
        "userName = ?, moreInfo = ?, userPhone = ?, userEmail = ?, profileBlob = ? "
        +"WHERE userId = ? "
        let userId = req.body.userId;
        let userName = req.body.userName;
        let moreInfo = req.body.moreInfo;
        let userPhone = req.body.gender;
        let userEmail = req.body.job;
        let profileBlob =  req.body.profileBlob;
        let params = [userName, moreInfo, userPhone, userEmail ,profileBlob, userId];
        connection.query(addSql, params,
            (err, rows, fields) =>{
                if(err){
                    console.log(err)
                    res.send(err)
                }
                if(rows){
                    res.send(rows)
                }
            
            })
    })

//api만들기

app.get('/api/profiles', 
  (req,res)=>{
    console.log(data);
    connection.query(
      "SELECT * FROM profile_info",
      (err, rows, fields) =>{
        res.send(rows);
      }
    )
  })

  //api만들기 (json 파일형식)
app.get('/api/hello', 
(req,res) => {
    res.send({message: "hello express!"});
});

app.listen(port,function(){
    console.log('listening on port on 5000');
});

