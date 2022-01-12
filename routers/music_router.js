const express = require('express');
const router = express.Router();

const Music = require('../models/music_model');

router.get('/',(req , res) =>{
    res.json({
        message: "music's page",
    });
});

// insert music
router.post('/insert', async (req, res) => {
    try {
        const tempMusic = Music(req.body);
        console.log(tempMusic);
        const result = await tempMusic.save();
    
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "insert failed" });
    }
});

// get all musics
router.get('/getall/', async(req, res) => {

    try {
        const musics = await Music.find();
        res.status(200).json(musics);
    } catch (err) {
        res.status(400).json({ error: "get failed" });
    }
});


// get one user
router.get('/:musicID', async (req, res) => {
    try{
        const music = await Music.findById(req.params.musicID);
        if(music){
            return res.status(200).json(music);
        }
        else{
            return res.status(400).json({message: "music not found"})
        }
    } catch(err){
        res.status(400).json({ error: "something went wrong" })
    }
});

//delete music
router.delete('/:musicID', async (req, res) => {
    try{
        const result = await Music.findByIdAndDelete({_id: req.params.musicID});
        if(result){
            return res.status(200).json({message: "music deleted"});
        }
        else{
            return res.status(400).json({message: "music not found"})
        }
    } catch(err){
        res.status(400).json({ error: "something went wrong" })
    }
});


//update music
router.patch('/patch/:musicID', async (req, res) => {
    try{
        const result = await Music.findByIdAndUpdate({_id: req.params.musicID}, req.body, {new:true});
        if(result){
            return res.status(200).json({message: "music updated"});
        }
        else{
            return res.status(400).json({message: "music not found"})
        }
    } catch(err){
        res.status(400).json({ error: "something went wrong" })
    }
});




module.exports = router;