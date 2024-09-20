const Ads = require('../Models/adModel');
const mongoose = require("mongoose");

const {vendorCheck} = require('../Middleware/verificationHandling');

//GET /Ads
const getAllAds = async (req, res) => {
    try {
        const AdList = await Ads.find({}).sort({ createdAt: -1 });
        res.status(200).json(AdList);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to retrieve Ads." });
    }
};

//GET /Ads/:adID

const getAdbyID = async (req, res) => {
    const adID = req.params.adID;
    if (!mongoose.Types.ObjectId.isValid(adID)) {
        return res.status(400).json({ message: "Invalid adID" })
    }
    try {
        const Ad = await Ads.findById(adID);
        if (Ad) {
            res.status(200).json(Ad);
        }
        else {
            res.status(404).json({ message: "Ad not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to retrieve Ad." });
    }
}

//POST /Ads

const createAd = async (req, res) => {
    try
    {
        if(await vendorCheck(req.body.vendorID,2))
            {
                const newAd = await Ads.create({...req.body});
                res.status(201).json(newAd);
            }
        else
        {
            res.status(403).json({message: "Access not allowed to create product. User is not a marketer."})
        }
    }
    catch (error) {
        res.status(400).json({ message: "Failed to create Ad", error: error.message });
    }
}

//PUT /Ads/:adID

const updateAd = async (req, res) => {
    const adID = req.params.adID;
    if (!mongoose.Types.ObjectId.isValid(adID)) {
        return res.status(400).json({ message: "Invalid adID" })
    }
    try {
            const updatedAd = await Ads.findOneAndUpdate(
                {_id:adID},
                {...req.body},
                {new: true,overwrite:true},
            )
            if (updatedAd) {
                res.status(200).json(updatedAd);
            }
            else {
                res.status(404).json({ message: "Ad not found." });
            }
        }
    catch (error) {
            res.status(500).json({ message: "Failed to update Ad." });
        }
}

//PATCH /Ads/:adID

//DELETE /Ads/:adID

const deleteAd = async (req, res) => {
    const adID = req.params.adID;
    if (!mongoose.Types.ObjectId.isValid(adID)) {
        return res.status(400).json({ message: "Invalid adID" })
    }
    try {
        const deletedAd = await Ads.findOneAndDelete({_id:adID})
        if (deletedAd) {
            res.status(200).json({message:"Ad deleted successfully."});
        }
        else {
            res.status(404).json({ message: "Ad not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update Ad." });
    }
}

module.exports =
{
    getAllAds,
    getAdbyID,
    createAd,
    updateAd,
    deleteAd
}