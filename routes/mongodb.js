// 1. mongoose 모듈 가져오기
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
const uri = "mongodb+srv://root:root@cluster0.8dxdgxg.mongodb.net/db?retryWrites=true&w=majority";

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
    name: String,
    continent: String,
    country: String,
    city: String,
    univ_image: String,
    r1: String,
    s1: Number,
    e1: Number,
    r2: String,
    s2: Number,
    e2: Number,
    r3: String,
    s3: Number,
    e3: Number,
    r4: String,
    s4: Number,
    e4: Number,
    r5: String,
    s5: Number,
    e5: Number,
    sem1_weather: String,
    sem1_temp_mean: Number,
    sem1_rain_mean: Number,
    sem2_temp_mean: Number,
    sem2_rain_mean: Number,
    domi: Number,
    domi_0: Number,
    per_domi: Number,
    travel_idx: Number,
    title1: String,
    image1: String,
    title2: String,
    image2: String,
    title3: String,
    image3: String,
    trip_link: String,
    living_num: Number,
    living_idx: Number,
    crime_idx: Number,
    inter_stu_ratio: Number,
    traffic_score: Number,
    bus: Number,
    train: Number,
    gvi_idx: Number,
    sdg_idx: Number,
    gpa: Number,
    language: String,
    TOEFL: String,
    IELTS: String,
    etc: String,
    hashtag1: String,
    hashtag2: String,
    hashtag3: String,
    recommend_place1: String,
    recommend_place2: String,
    score: Number,
    wordcloud1_url: String,
    wordcloud2_url: String,
    wordcloud3_url: String,
    wordcloud4_url: String,
    wordcloud5_url: String,
    wordcloud6_url: String,
    wordcloud7_url: String,
    wordcloud8_url: String,
    wordcloud9_url: String,
}, { collection: 'univ_data' });

var Univ = mongoose.model('univ_data', UnivSchema);


module.exports = Univ;