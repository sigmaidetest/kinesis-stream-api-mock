let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {
    const body = JSON.stringify(event.body);

    kinesis.putRecord({
        Data: body,
        PartitionKey: '0',
        StreamName: 'kinesis-sample-stream'
    }).promise()
        .then(putRecordData => {
            callback(null, putRecordData);
        })
        .catch(err => {
            callback(err, 'Error in executing Kinesis#putRecord');
        });

}