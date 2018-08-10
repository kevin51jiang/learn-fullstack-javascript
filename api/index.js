import express from 'express';
import data from '../src/testData';
const router = express.Router();

router.get('/contests', (req, res) => {
    res.send({ contests: data.contests});
    console.log('Request for /api/contests recieved.');
    
});

export default router;