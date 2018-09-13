
const https = require('https');

const probe = (event, context, callback) => {

    https.get(process.env.ENDPOINT, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            console.log('read a chunk...');
            data += chunk;
        });

        resp.on('end', () => {
            console.log(`Raw data follows...\n${data}`);
            callback(null, 'ok');
        })
    }).on('error', (err) => {
        callback(err, 'whoops')
    });
    
}

module.exports = {
    probe
};