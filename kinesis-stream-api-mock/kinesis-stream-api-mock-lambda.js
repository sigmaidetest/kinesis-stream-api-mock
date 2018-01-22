let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

    kinesis.describeStream({
        StreamName: 'kinesis-sample-stream'
    }).promise()
        .then(describeStreamData => {
            callback(null, describeStreamData);
        })
        .catch(err => {
            callback(err, 'Error in executing Kinesis#describeStream');
        });
        
}