
const syncDatabase = async (THINGSPEAK_CHANNEL, THINGSPEAK_API, calcGap) => {
    let dataFeed = [];

    let data = null;
    try {
        data = await fetch(`https://api.thingspeak.com/channels/${THINGSPEAK_CHANNEL}/feeds.json?api_key=${THINGSPEAK_API}`, {
            method: "GET"
        });
    } catch (err) {
        console.error(err);
    }

    const datajson = await data.json();
    const channel = Object.values(datajson.channel);
    const feeds = Object.values(datajson.feeds);

    let fields = {}
    iterrationValue = feeds[0]['entry_id'];


    for (let i = 1; i <= channel.length - 7; i++) {
        fields[`field${i}`] = datajson.channel[`field${i}`];
        // console.log(fields[`field${i}`]);
        // console.log(`fields[field${i}] = ${fields[`field${i}`]}`);
    }

    let startCalc = new Date("1800-02-20T07:26:46Z");
    for (let i = 0; i < feeds.length; i++) {

        let currTime = new Date(feeds[i]["created_at"]);
        let temp = Math.floor(Math.abs(startCalc - currTime) / (1000 * 60 * 60));

        if (temp > calcGap) {
            startCalc = new Date(feeds[i]["created_at"]);
            dataFeed.push(fields);
            fields = {}
            for (let j = 1; j <= channel.length - 7; j++) {
                fields[`field${j}`] = null;
            }
        }
        for (let j = 1; j <= channel.length - 7; j++) {
            if (feeds[i][`field${j}`] && fields[`field${j}`] != null) {
                fields[`field${j}`] = parseInt(fields[`field${j}`]) + parseInt(feeds[i][`field${j}`]);
                fields[`field${j}`] = Math.floor(fields[`field${j}`] / 2).toString();
            } else if (feeds[i][`field${j}`]) {
                fields[`field${j}`] = (feeds[i][`field${j}`]).toString();
            }
        }
    }
    dataFeed.push(fields);
    let ittr = feeds[feeds.length - 1]['entry_id'];
    const result =  {dataFeed, ittr};
    return result;
};

let recordFlag = true;
let fieldsRecord = {};

const recordThingspeak = async (ittr) => {

    let data = null;
    let datajson = null;
    let channel = null;
    let feeds = null;

    
    if (recordFlag == false) {
        recordFlag = true;
        Record = {};
    }

    let timeout;
    clearTimeout(timeout);
    if (recordFlag) {
        timeout = setTimeout(async function () {
            data = await fetch(`https://api.thingspeak.com/channels/${THINGSPEAK_CHANNEL}/feeds.json?api_key=${THINGSPEAK_API}&results=10`, {
                method: "GET"
            });
            datajson = await data.json();
            if (!channel) {
                channel = Object.values(datajson.channel);
            }
            feeds = Object.values(datajson.feeds);
            for (let i = 0; i < feeds.length; i++) {
                for (let j = 1; j <= channel.length - 7; j++) {
                    if(ittr >= feeds[i]['entry_id']) {
                        break;
                    }
                    if (feeds[i][`field${j}`] && fieldsRecord[`field${j}`] != null) {
                        fieldsRecord[`field${j}`] = parseInt(fieldsRecord[`field${j}`]) + parseInt(feeds[i][`field${j}`]);
                        fieldsRecord[`field${j}`] = Math.floor(fieldsRecord[`field${j}`] / 2).toString();
                    } else if (feeds[i][`field${j}`]) {
                        fieldsRecord[`field${j}`] = (feeds[i][`field${j}`]).toString();
                    }
                }
            }
        }, 1000); // Debouncing for 1000ms
    }

    console.log("Hello -----------------------------------------");
}


const stopThingspeak = async () => {
    recordFlag = false;
    return fieldsRecord;
}

const fetchThingspeak = async () => {
    return fieldsRecord;
}


module.exports = {
    syncDatabase,
    recordThingspeak,
    fetchThingspeak,
    stopThingspeak,
};
