const { Router } = require("express");
const { User } = require("../models/user");
const { Data } = require("../models/data");
const { syncDatabase, recordThingspeak, fetchThingspeak, stopThingspeak, } = require("../services/thingspeak");
const router = Router();



router.put('/user/:uid/user-data', async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await User.findOne({ 'username': userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        user.name =  req.body.name;
        await user.save();

        let userData = await Data.findById(user.data);

        userData.thingspeakChannel = req.body.thingspeakChannel;
        userData.thingspeakAPI = req.body.thingspeakAPI;
        userData.calcGap = req.body.calcGap;
   
        await userData.save();

        let jsonObject = userData.toObject();

        for (let key in jsonObject) {
            if (key == "fieldData") {
                delete jsonObject[key];
            }
        }
        jsonObject.name = user.name;
        jsonObject.email = user.email;

        res.json(jsonObject);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/user/:uid/user-data', async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await User.findOne({ 'username': userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userData = await Data.findById(user.data);

        let jsonObject = userData.toObject();
        for (let key in jsonObject) {
            if (key == "fieldData") {
                delete jsonObject[key];
            }
        }
        jsonObject.name = user.name;
        jsonObject.email = user.email;

        res.json(jsonObject);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/user/:uid/db', async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await User.findOne({ 'username': userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userData = await Data.findById(user.data);


        let filteredObject = {
            fieldData: userData.fieldData
        };
        res.json(filteredObject);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



router.get('/user/:uid/sync-db', async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await User.findOne({ 'username': userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userData = await Data.findById(user.data);

        let thingspeakChannel = userData.thingspeakChannel;
        let thingspeakAPI = userData.thingspeakAPI;
        let calcGap = userData.calcGap;


        if (!thingspeakChannel) {
            return res.status(404).json({ message: 'Thingspeak Channel not found' })
        }

        if (!thingspeakAPI) {
            return res.status(404).json({ message: 'Thingspeak API not found' })
        }

        const result = await syncDatabase(thingspeakChannel, thingspeakAPI, calcGap);
        const jsonData = result["dataFeed"];
        const ittr = result["ittr"];

        userData.lastItteration = ittr;
        userData.fieldData = [];
        userData.fieldData.push(...jsonData);
        await userData.save();

        let filteredObject = {
            fieldData: userData.fieldData
        };
        res.json(filteredObject);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});









router.get('/user/:uid/record-start', async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await User.findOne({ 'username': userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userData = await Data.findById(user.data);

        await recordThingspeak(userData.lastItteration);


    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});




router.get('/user/:uid/record-fetch', async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await User.findOne({ 'username': userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { jsonData } = await fetchThingspeak();

        res.json(jsonData);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});




router.get('/user/:uid/record-stop', async (req, res) => {
    try {
        const userId = req.params.uid;
        const user = await User.findOne({ 'username': userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { jsonData } = await stopThingspeak();

        res.json(jsonData);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});



module.exports = router;

