var Univ = require('./mongodb');
var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    Univ.findOne({'name' : req.query.name})
      .then((data) => {
        if (!data) return res.status(404).send({ err: 'Univ not found' });
        res.send(data);
      })
      .catch(err => res.status(500).send(err));
  });
    

module.exports = router;

// // 1. mongoose 모듈 가져오기
// var mongoose = require('mongoose');
// var express = require('express');
// var router = express.Router();
// var fs = require('fs');
// // router.get('/', function(request, response, next) {
// //     var con = "tcp://whyiedwromfnme:5791c0ed420ea1dbf2f6bce17a176a9ecc9b5932c575901770525fd9b1b92a28@ec2-34-239-241-121.compute-1.amazonaws.com:5432/d6g79vk92ma405";
// //     pg.connect(con, function(err, client) {
// //         var query = client.query('select * from univ_data;');
// //         var rows = [];
// //         query.on('row', function(row) {
// //             rows.push(row);
// //         });
// //         query.on('end', function(row,err) {
// //             response.render('index', { 
// //                 title: 'Express',
// //                 data:rows
// //             });
// //         });
// //         query.on('error', function(error) {
// //             console.log("ERROR!!" + error);
// //             response.render('index', {
// //                 title: title,
// //                 data: null,
// //                 message: "ERROR is occured!"
// //             });
// //         });
// //     });
// // });

// // 2. testDB 세팅

// mongoose.connect('mongodb://localhost:27017/db');
// // 3. 연결된 testDB 사용
// var db = mongoose.connection;
// // 4. 연결 실패
// db.on('error', function(){
//     console.log('Connection Failed!');
// });
// // 5. 연결 성공
// db.once('open', function() {
//     console.log('2022 KOREA UNIVERSITY DATATHON : KU-ABROAD Project');
//     console.log('');
//     console.log('MongoDB 데이터 베이스가 연결되었습니다.');
//     console.log('');
// });

// // Collection 연결
// var UnivSchema = mongoose.Schema({
//     name : String,
//     country : String,
//     city : String,
//     univ_image : String,
//     r1 : Number,
//     s1 : Number,
//     e1 : Number,
//     r2 : Number,
//     s2 : Number,
//     e2 : Number,
//     r3 : Number,
//     s3 : Number,
//     e3 : Number,
//     r4 : Number,
//     s4 : Number,
//     e4 : Number,
//     r5 : Number,
//     s5 : Number,
//     e5 : Number,    
//     sem1_temp_mean : Number,
//     sem1_rain_mean : Number,
//     sem2_temp_mean : Number,
//     sem2_rain_mean : Number,
//     domi : Number,
//     per_domi : Number,
//     title1 : String,
//     image1 : String,
//     title2 : String,
//     image2 : String,
//     title3 : String,
//     image3 : String,
//     living_idx : Number,
//     crime_idx : Number,
//     bus : Number,
//     train : Number,
//     gvi_idx : Number,
//     sdg_idx : Number,
//     gpa : Number,
//     language : String,
//     TOEFL : String,
//     IELTS : String,
//     etc : String,
//     hashtag1 : String,
//     hashtag2 : String,
//     hashtag3 : String,
// }, {collection : 'univ_data'});

// var Univ = mongoose.model('univ_data', UnivSchema);

// // router.get('/:name', function (req,res, next) {
// //     if(error){
// //         console.log(error);
// //     }else{
// //     const univName = req['params']['name']
// //     const data = Univ.findOne({'name':univName});
// //     Univ.find(function(error, univ){
// //     console.log('--- Log History ---');
// //     console.log('');
// //     if(error){
// //         console.log(error);
// //     }else{
// //         var data = JSON.stringify(univ);
// //         fs.writeFileSync('data.json', data, null, '\t')
// //         router.get('/', function (req, res, next) {
// //             res.send(data)
// //         });
// //     };})
// //     res.send(data);
//     // }
// // router.get('?:name', function (req,res, next) {
// //     console.log(req);
// //     const univName = req['params']['name'];
// //     console.log(univ_Name);
// //     res.send(Univ.findOne({'name':univName}));
// // })
// // router.get('/:name', function (req, res) {
// //     console.log("name : " + req.query.name);
// //     // res.send("name : " + req.query.name)
// //   });
// // router.get("/", async (req, res) => {
// //     console.log(req.query.name);
// //     // console.log('hi');
// //   });
  
  
// // })
// // Univ.findOne(function(error, univ){
// //     console.log('--- Log History ---');
// //     console.log('');
// //     if(error){
// //         console.log(error);
// //     }else{
// //         // var data = JSON.stringify(univ);
// //         // fs.writeFileSync('data.json', data, null, '\t')
// //         router.get('/', function (req, res, next) {
// //             req['params']['name']a
// //             res.send(data)
// //         });
// //     };})
// router.get('/', (req, res) => {
//     Univ.findOne({'name' : req.query.name})
//       .then((data) => {
//         if (!data) return res.status(404).send({ err: 'Univ not found' });
//         res.send(data);
//       })
//       .catch(err => res.status(500).send(err));
//   });
    



// module.exports = router;