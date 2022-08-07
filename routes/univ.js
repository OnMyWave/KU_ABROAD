// 1. mongoose 모듈 가져오기
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var movies = require('../movies.json');
// 2. testDB 세팅
mongoose.connect('mongodb://localhost:27017/db');
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


Univ.find(function(error, univ){
    console.log('--- Log History ---');
    console.log('');
    if(error){
        console.log(error);
    }else{
        var data = JSON.stringify(univ);
        router.get('/', function (req, res, next) {
            res.send(data)
        });
    };})
    


module.exports = router;