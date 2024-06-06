require('dotenv').config();
const { PINATA_API_KEY, PINATA_API_SECRET } = process.env;
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK(PINATA_API_KEY, PINATA_API_SECRET);

//Pin File to IPFS
const pinFileToIPFS = async (readableStreamForFile, options) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully pin file to IPFS!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

//Unpin to IPFS
const unpin = async (hashToUnpin) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.unpin(hashToUnpin);
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully unpin to IPFS!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

//Pin JSON to IPFS
const pinJSONToIPFS = async (body, options) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.pinJSONToIPFS(body, options);
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully pin JSON to IPFS!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

//Pin by hash to IPFS
const pinByHash = async (hashToPin) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.pinByHash(hashToPin);
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully pin by hash to IPFS!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

//Hash metadata to IPFS
const hashMetadata = async (ipfsPinHash, metadata) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.hashMetadata(ipfsPinHash, metadata);
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully hash metadata to IPFS!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

//Pin from file system to IPFS
const pinFromFS = async (sourcePath, options) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.pinFromFS(sourcePath, options);
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully pin file from file system!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

/**
 * @returns {object} - response object with test authentication result
 */
const testAuthentication = async () => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.testAuthentication();
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully test the authentication!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

/**
 * @returns {object} - response object with user pinned total data
 */
const userPinnedDataTotal = async () => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{

        const result = await pinata.userPinnedDataTotal();
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully user's total pinned data!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

/** Get pin files list
 * @param {object} filters - filters object
 * @returns {object} - response object with pin list
 * {
    hashContains?: string | undefined;
    pinStart?: string | undefined;
    pinEnd?: string | undefined;
    unpinStart?: string | undefined;
    unpinEnd?: string | undefined;
    pinSizeMin?: number | undefined;
    pinSizeMax?: number | undefined;
    status?: string | undefined;
    pageLimit?: number | undefined;
    pageOffset?: number | undefined;
    metadata?: PinataMetadataFilter | undefined;
   }
 */
const pinList = async (filters) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        const result = await pinata.pinList(filters);
        response.error = false;
        response.status =  200;
        response.data = result;
        response.msg.push("Successfully get pin list!");

    }catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            response.msg.push(e.response.data.message);
            response.errorMsg.push(e.response.data.message);
        } else {
            // Something happened in setting up the request that triggered an Error
            response.msg.push(e.message);
            response.errorMsg.push(e.message);
        }
    }

    return response;
}

module.exports = {
    pinList,
    userPinnedDataTotal,
    testAuthentication,
    pinFromFS,
    hashMetadata,
    pinByHash,
    pinJSONToIPFS,
    unpin,
    pinFileToIPFS
}