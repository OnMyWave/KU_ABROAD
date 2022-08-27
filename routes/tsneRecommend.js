var Univ = require('./mongodb');
var express = require('express');
var router = express.Router();
const tSNE = require('./tsne.json');
router.get('/', (req,res) => {
    if (!req.query.name){
        return res.status(404).send({ err: 'Univ not found' })
    };
    let x = 0 ; 
    let y = 0 ;
    for (let i = 0; i < tSNE.length ; i++) {
        if (tSNE[i].name === req.query.name) {
                x = tSNE[i]['x'];
                y = tSNE[i]['y']; }
            };
    for (let i = 0; i < tSNE.length ; i++) { 
        dist = ((tSNE[i]['x'] - x) ** 2 + (tSNE[i]['y'] -y) ** 2 ) ; 
        tSNE[i].dist = dist;
    };
    result = tSNE.sort(function (a, b) {
        return a.dist - b.dist;
        });
    Univ.find({'name': result[1].name})
        .then((data) => {
        if (!data) return res.status(404).send({ err: 'Univ not found' });
        res.send(data);
        })
        .catch(err => res.status(500).send(err));
});


module.exports = router;