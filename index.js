const { pinList, pinFileToIPFS, pinJSONToIPFS } = require("./services/pinataServices");
const fs = require('fs');

(async () => {

    const sourcePath = '../sample.pdf';
    const options = {
        pinataMetadata: {
            name: "Sample",
            keyvalues: {
                key_1: 'value_1',
                key_2: 'value_2'
            }
        },
        pinataOptions: {
            cidVersion: 1
        }
    };
    // JSON body
    const body = {
        "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
        "external_url": "https://openseacreatures.io/3", 
        "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
        "name": "Dave Starbelly",
        "attributes": [
            {
              "trait_type": "Base", 
              "value": "Starfish"
            }, 
            {
              "trait_type": "Eyes", 
              "value": "Big"
            }, 
            {
              "trait_type": "Mouth", 
              "value": "Surprised"
            }, 
            {
              "trait_type": "Level", 
              "value": 5
            }, 
            {
              "trait_type": "Stamina", 
              "value": 1.4
            }, 
            {
              "trait_type": "Personality", 
              "value": "Sad"
            }, 
            {
              "display_type": "boost_number", 
              "trait_type": "Aqua Power", 
              "value": 40
            }, 
            {
              "display_type": "boost_percentage", 
              "trait_type": "Stamina Increase", 
              "value": 10
            }, 
            {
              "display_type": "number", 
              "trait_type": "Generation", 
              "value": 2
            }
        ]
    }
    const ipfsPinHash = 'bafkreien5tefogkg2tgxbibesspagorkfjkdo77j6ha3srgcb6pocgu6ke';
    const hashToPin = 'bafkreien5tefogkg2tgxbibesspagorkfjkdo77j6ha3srgcb6pocgu6ke';
    const hashToUnpin = 'bafkreien5tefogkg2tgxbibesspagorkfjkdo77j6ha3srgcb6pocgu6ke';
    const readableStreamForFile = fs.createReadStream('./sample.pdf');
    const metadata = {
        name: "Sample",
        keyvalues: {
            key_1: 'value_1',
            key_2: 'value_2'
        }
    }
    const filters = {
        pageLimit: 10
    }

    let response;


    //Pin list
    // response = await pinList(filters);
    // console.log(response);

    //Pin file to IPFS
    // response = await pinFileToIPFS(readableStreamForFile, options);
    // console.log(response);

    //Pin JSON to IPFS
    response = await pinJSONToIPFS(body, options);
    console.log(response)

})().catch((e)=>{
    console.error(`Failed: ${e}`);
    exit(-1);
})