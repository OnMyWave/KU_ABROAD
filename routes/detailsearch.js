var Univ = require('./mongodb');
var express = require('express');
const { find } = require('./mongodb');
var router = express.Router();
router.get('/', (req, res) => {
    const arr = [{ 'name': { '$regex': req.query.name, '$options': 'i' } }, { 'continent': req.query.continent }, { 'sem1_weather': req.query.weather }, { 'language': { '$regex': req.query.language, '$options': 'i' } }, { 'domi': req.query.domi }]
    const searcharray = []
    const condition = req.query.condition
    for (let i = 0; i < 5; i++) {
        if (condition[i] === 'true') {
            searcharray.push(arr[i])
        }
    }
    const order = req.query.order
    const college = req.query.college
    const orderarray = [{ [college]: -1 }, { 'traffic_score': -1 }, { 'living_num': -1 }]
    const orderobject = []
    if (order === 'qs') {
        orderobject[0] = orderarray[0]
    } else if (order === 'trans') {
        orderobject[0] = orderarray[1]
    } else if (order === 'money') {
        orderobject[0] = orderarray[2]
    }
    console.log(orderobject[0])
    if (condition[5] === 'true') {
        if (searcharray.length === 0) {
            Univ.find().sort(orderobject[0])
                .then((data) => {
                    if (!data) return res.status(404).send({ err: 'Univ not found' });
                    res.send(data);
                })
                .catch(err => res.status(500).send(err));
        } else {
            Univ.find({ $and: searcharray }).sort(orderobject[0])
                .then((data) => {
                    if (!data) return res.status(404).send({ err: 'Univ not found' });
                    res.send(data);
                })
                .catch(err => res.status(500).send(err));
        }
    } else {
        if (searcharray.length === 0) {
            Univ.find()
                .then((data) => {
                    if (!data) return res.status(404).send({ err: 'Univ not found' });
                    res.send(data);
                })
                .catch(err => res.status(500).send(err));
        } else {
            Univ.find({ $and: searcharray })
                .then((data) => {
                    if (!data) return res.status(404).send({ err: 'Univ not found' });
                    res.send(data);
                })
                .catch(err => res.status(500).send(err));
        }
    }
});

module.exports = router;