const AWS = require('aws-sdk');

const updateProduct = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { productName } = JSON.parse(event.body)

    const params = {
        TableName: 'productsTable',
        Key: { id },
        UpdateExpression: 'set productName = :r',
        ExpressionAttributeValues: {
            ':r': productName
        },
    }

    await dynamodb.update(params).promise();

    return {
        status: 200,
        body: JSON.stringify({
            message: 'Product update successfully'
        })
    }
}

module.exports = {
    updateProduct
}