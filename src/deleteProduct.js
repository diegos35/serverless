const AWS = require('aws-sdk');

const  deleteProduct = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    
    await dynamodb.delete({
        TableName: 'productsTable',
        Key: {id}
    }).promise();

    return {
        status: 200,
        body: {
            message: 'Product deleted'
        }
    }
}


module.exports = {
    deleteProduct

}