let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

    kinesis.putRecord({
        Data: event.body,
        PartitionKey: '0',
        StreamName: 'existing-stream'
    }).promise()
        .then(putRecordData => {
            callback(null, {
                'statusCode': 200,
                'body': JSON.stringify({
                    'Message': 'Successfully put record',
                    'Response': putRecordData
                }),
                'isBase64Encoded': false
            });
        })
        .catch(err => {
            callback(err, 'Error in executing Kinesis#putRecord');
        });

}