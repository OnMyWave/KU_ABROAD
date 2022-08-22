var Univ = require('./mongodb');
var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    Univ.find({})
        .then((data) => {
            if (!data) return res.status(404).send({ err: 'Univ not found' });
            res.send(data);
        })
        .catch(err => res.status(500).send(err));
});


module.exports = router;