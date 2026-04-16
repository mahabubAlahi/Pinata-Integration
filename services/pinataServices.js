require('dotenv').config();
const { PinataSDK } = require('pinata');
const fs = require('fs');
const path = require('path');

const { PINATA_JWT, PINATA_GATEWAY, DESIRED_GATEWAY_PREFIX } = process.env;

const pinata = new PinataSDK({
    pinataJwt: PINATA_JWT,
    pinataGateway: PINATA_GATEWAY,
});

//Pin File to IPFS
const pinFileToIPFS = async (filePath, options = {}) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        const buffer = fs.readFileSync(filePath);
        const fileName = options.pinataMetadata?.name || path.basename(filePath);
        const file = new File([buffer], fileName);

        let upload = pinata.upload.public.file(file).name(fileName);

        if (options.pinataMetadata?.keyvalues) {
            upload = upload.keyvalues(options.pinataMetadata.keyvalues);
        }

        const result = await upload;
        response.error = false;
        response.status = 200;
        response.data = result;
        response.msg.push("Successfully pin file to IPFS!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
    }

    return response;
}

//Unpin from IPFS
const unpin = async (fileId) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        const result = await pinata.files.public.delete([fileId]);
        response.error = false;
        response.status = 200;
        response.data = result;
        response.msg.push("Successfully unpinned from IPFS!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
    }

    return response;
}

//Pin JSON to IPFS
const pinJSONToIPFS = async (body, options = {}) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        let upload = pinata.upload.public.json(body);

        if (options.pinataMetadata?.name) {
            upload = upload.name(options.pinataMetadata.name);
        }
        if (options.pinataMetadata?.keyvalues) {
            upload = upload.keyvalues(options.pinataMetadata.keyvalues);
        }

        const result = await upload;
        response.error = false;
        response.status = 200;
        response.data = result;
        response.msg.push("Successfully pin JSON to IPFS!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
    }

    return response;
}

//Pin by CID to IPFS
const pinByCID = async (cid, options = {}) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        let upload = pinata.upload.public.cid(cid);

        if (options.name) {
            upload = upload.name(options.name);
        }

        const result = await upload;
        response.error = false;
        response.status = 200;
        response.data = result;
        response.msg.push("Successfully pin by CID to IPFS!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
    }

    return response;
}

//Update file metadata
const updateMetadata = async (fileId, metadata) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        const result = await pinata.files.public.update({
            id: fileId,
            name: metadata.name,
            keyvalues: metadata.keyvalues,
        });
        response.error = false;
        response.status = 200;
        response.data = result;
        response.msg.push("Successfully updated metadata!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
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
        response.status = 200;
        response.data = result;
        response.msg.push("Successfully test the authentication!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
    }

    return response;
}

/** Get pin files list
 * @param {object} filters - filters object
 * @returns {object} - response object with pin list
 */
const pinList = async (filters = {}) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        let query = pinata.files.public.list();

        if (filters.name) query = query.name(filters.name);
        if (filters.cid) query = query.cid(filters.cid);
        if (filters.group) query = query.group(filters.group);
        if (filters.mimeType) query = query.mimeType(filters.mimeType);
        if (filters.order) query = query.order(filters.order);
        if (filters.pageLimit) query = query.limit(filters.pageLimit);
        if (filters.pageToken) query = query.pageToken(filters.pageToken);
        if (filters.keyvalues) query = query.keyvalues(filters.keyvalues);

        const result = await query;
        response.error = false;
        response.status = 200;
        response.data = result;
        response.msg.push("Successfully get pin list!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
    }

    return response;
}

const convertGatewayUrl = async (sourceUrl) => {
    let response = {error: true, status: 400, msg: [], data: {}, errorMsg: []};

    try{
        const desiredGatewayPrefix = DESIRED_GATEWAY_PREFIX;
        const convertedGatewayUrl = await pinata.gateways.convert(sourceUrl, desiredGatewayPrefix);
        response.error = false;
        response.status = 200;
        response.data = convertedGatewayUrl;
        response.msg.push("Successfully convert gateway url!");

    }catch (e) {
        response.msg.push(e.message);
        response.errorMsg.push(e.message);
    }

    return response;
}

module.exports = {
    pinList,
    testAuthentication,
    updateMetadata,
    pinByCID,
    pinJSONToIPFS,
    unpin,
    pinFileToIPFS,
    convertGatewayUrl
}
