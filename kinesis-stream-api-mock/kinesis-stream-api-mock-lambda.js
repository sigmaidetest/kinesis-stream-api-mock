let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

	kinesis.describeStream({
		StreamName: 'sample-kinesis-stream'
	}).promise()
		.then(describeStreamData => {
			callback(null, {
				'statusCode': 200,
				'body': JSON.stringify('Stream', describeStreamData),
				'isBase64Encoded': false
			});
		})
		.catch(err => {
			callback(err, 'Error in executing Kinesis#describeStream');
		});
}