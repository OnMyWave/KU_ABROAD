var Univ = require('./mongodb');
var express = require('express');
var router = express.Router();

// 단과대 매칭 부분
const existCollege = {
    'h': 'e1',
    'm': 'e5',
    't': 'e2',
    'n': 'e4',
    'l': 'e3'
};

const scoreCollege = {
    'h': 's1',
    'm': 's5',
    't': 's2',
    'n': 's4',
    'l': 's3'
};

// 스코어 계산에 필요한 Matrix 및 Constants
const weight = {
    'ranking': [1.2, 0.99, 0.98, 0.96, 0.93, 0.89],
    'money': [-1, -0.98, -0.96, -0.93, -0.89, -0.84],
    'weather': [1, 0.94, 0.88, 0.8, 0.7, 0.58],
    'transportation': [1, 0.94, 0.88, 0.8, 0.7, 0.58],
    'dormitory': [1, 0.94, 0.88, 0.8, 0.7, 0.58],
    'language': [1, 1, 1, 1, 1, 1]
};

const weatherMatching = {
    'A1': '1',
    'A2': '2',
    'B1': '3',
    'B2': '4',
    'C1': '5',
    'C2': '6',
    'D1': '7',
    'D2': '8'
};

const weatherMatrix = {
    '1': [100, 95, 90, 85, 83, 78, 73, 68],
    '2': [95, 100, 85, 90, 78, 83, 68, 73],
    '3': [90, 85, 100, 95, 93, 88, 83, 78],
    '4': [85, 90, 95, 100, 88, 93, 78, 83],
    '5': [83, 78, 93, 88, 100, 95, 90, 85],
    '6': [78, 83, 88, 93, 95, 100, 85, 90],
    '7': [73, 68, 83, 78, 90, 85, 100, 95],
    '8': [68, 73, 78, 83, 85, 90, 95, 100]
};


// String 형태에서 Array 형태로 재선언 해주는 함수
function toArray(sentence) {
    let sent = sentence.split(',');
    let arr = Array();
    for (let comp of sent) {
        arr.push(comp.replace('[', '').replace(']', '').replace('"', '').replace('"', ''));
    }
    return arr
};

router.get('/', (req, res) => {
    // 넘어온 쿼리 변수 설정
    const userSelect = req.query;
    console.log(userSelect);
    // 필터용 쿼리
    //
    let defaultUserQuery = [{ 'continent': userSelect.country }, { [existCollege[userSelect.college]]: 1 }];
    if (userSelect.country === 'none') {
        defaultUserQuery = [{ [existCollege[userSelect.college]]: 1 }];
    }
    // 다중 선택하는 언어 관련 쿼리
    let languageQuery = [];
    const languageArray = toArray(userSelect.language);
    const languageNum = languageArray.length;

    for (let i = 0; i < languageNum; i++) {
        languageQuery.push({ 'language': { '$regex': languageArray[i], '$options': 'i' } });
    };

    // Client가 고른 순서대로 가중치 설정
    let weightObject = {
        'ranking': 0,
        'money': 0,
        'weather': 0,
        'transportation': 0,
        'dormitory': 0
    };

    const clientCriteria = toArray(userSelect.criteria);

    for (let i = 0; i < 6; i++) {
        let component = clientCriteria[i];
        weightObject[component] = weight[component][i];
    }
    // 언어, 단과대학, 대륙으로 먼저 Query 실행
    Univ.find({ $and: [{ $and: defaultUserQuery }, { $or: languageQuery }] })
        .then((data) => {
            if (!data) return res.status(404).send({ err: 'Univ not found' });
            for (let i = 0; i < data.length; i++) {
                // const obj = data[i];
                let score = 0;
                // QS 랭킹 
                score += data[i][scoreCollege[userSelect.college]] * weightObject['ranking'];
                // 물가
                score += data[i]['living_num'] * weightObject['money'];
                // 날씨
                let weatherNum = weatherMatching[userSelect.weather];
                score += weatherMatrix[weatherNum][parseInt(weatherNum) - 1] * weightObject['weather'];
                // 기숙사 존재 및 1인 기숙사
                score += (55 + 10 * data[i]['domi']) * weightObject['dormitory'];
                // 교통 편리함
                score += (50 + 5 * data[i]['bus'] + 5 * data[i]['train']) * weightObject['transportation'];
                // 사회적 가치 반영 부분
                // Crime INDEX
                score += data[i]['crime_idx'];
                // SDGs INDEX
                score += (data[i]['sdg_idx'] / 33);
                // GVI INDEX
                if (data[i]['gvi_idx'] === 1) {
                    score += 1;
                } else {
                    score += (data[i]['gvi_idx'] / 33);
                }
                // travel_idx
                score += (data[i]['travel_idx'] / 33);
                // 국제학생 비율 
                score += (data[i]['inter_stu_ratio']) * 5;

                data[i].score = score;

            };
            // 내림차순으로 정렬
            const result = data.sort(function (a, b) {
                return b.score - a.score;
            });
            // 스코어 제일 큰 값 보냄
            res.send(result[0]);

        })
        .catch(err => res.status(500).send(err));
});

module.exports = router;