var Univ = require('./mongodb');
var express = require('express');
var router = express.Router();

// router.get('/', (req, res) => {
//     Univ.findOne({'name' : req.query.name})
//       .then((data) => {
//         if (!data) return res.status(404).send({ err: 'Univ not found' });
//         res.send(data);
//       })
//       .catch(err => res.status(500).send(err));
//   });
    
router.get('/', (req, res) => {
  const dictCollege = {
    'h' : 's1',
    'm' : 's5',
    't' : 's2',
    'n' : 's4',
    'l' : 's3'
  };
  const userQuery = []
   Univ.find({'continent' : req.query.continent});
  });

module.exports = router;