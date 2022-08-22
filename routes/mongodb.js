// 1. mongoose 모듈 가져오기
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var fs = require('fs');
const uri = "mongodb+srv://root:root@cluster0.8dxdgxg.mongodb.net/db?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// router.get('/', function(request, response, next) {
//     var con = "tcp://whyiedwromfnme:5791c0ed420ea1dbf2f6bce17a176a9ecc9b5932c575901770525fd9b1b92a28@ec2-34-239-241-121.compute-1.amazonaws.com:5432/d6g79vk92ma405";
//     pg.connect(con, function(err, client) {
//         var query = client.query('select * from univ_data;');
//         var rows = [];
//         query.on('row', function(row) {
//             rows.push(row);
//         });
//         query.on('end', function(row,err) {
//             response.render('index', { 
//                 title: 'Express',
//                 data:rows
//             });
//         });
//         query.on('error', function(error) {
//             console.log("ERROR!!" + error);
//             response.render('index', {
//                 title: title,
//                 data: null,
//                 message: "ERROR is occured!"
//             });
//         });
//     });
// });

// 2. testDB 세팅

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
// 3. 연결된 testDB 사용
var db = mongoose.connection;
// 4. 연결 실패
db.on('error', function(){
    console.log('Connection Failed!');
});
// 5. 연결 성공
db.once('open', function() {
    console.log('2022 KOREA UNIVERSITY DATATHON : KU-ABROAD Project');
    console.log('');
    console.log('MongoDB 데이터 베이스가 연결되었습니다.');
    console.log('');
});

// Collection 연결
var UnivSchema = mongoose.Schema({
    name : String,
    country : String,
    city : String,
    univ_image : String,
    r1 : Number,
    s1 : Number,
    e1 : Number,
    r2 : Number,
    s2 : Number,
    e2 : Number,
    r3 : Number,
    s3 : Number,
    e3 : Number,
    r4 : Number,
    s4 : Number,
    e4 : Number,
    r5 : Number,
    s5 : Number,
    e5 : Number,    
    sem1_temp_mean : Number,
    sem1_rain_mean : Number,
    sem2_temp_mean : Number,
    sem2_rain_mean : Number,
    domi : Number,
    per_domi : Number,
    title1 : String,
    image1 : String,
    title2 : String,
    image2 : String,
    title3 : String,
    image3 : String,
    living_idx : Number,
    crime_idx : Number,
    bus : Number,
    train : Number,
    gvi_idx : Number,
    sdg_idx : Number,
    gpa : Number,
    language : String,
    TOEFL : String,
    IELTS : String,
    etc : String,
    hashtag1 : String,
    hashtag2 : String,
    hashtag3 : String,
}, {collection : 'univ_data'});

var Univ = mongoose.model('univ_data', UnivSchema);



module.exports = Univ;