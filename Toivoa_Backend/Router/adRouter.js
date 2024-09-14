const express = require('express');
const router = express.Router();
const {
    getAllAds,
    getAdbyID,
    createAd,
    updateAd,
    deleteAd
} = require('../Controller/adController');

//GET /Ads
router.get('/',getAllAds);

//GET /Ads/:AdID
router.get('/:adID',getAdbyID);

//POST /Ads
router.post('/',createAd);

//PUT /Ads/:AdID
router.put('/:adID',updateAd);

//DELETE /Ads/:AdID
router.delete('/:adID',deleteAd);

module.exports = router;