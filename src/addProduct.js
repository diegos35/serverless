const { v4 } = require('uuid')
const AWS = require('aws-sdk')


const addProduct = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {productName } = JSON.parse(event.body) 
    const id = v4()
    const createdAt = new Date()
    const newProduct = {
        id,
        productName,
        createdAt
    }

    await dynamodb.put({
        TableName: 'productsTable',
        Item: newProduct
    }).promise()

    return  {
        status: 200,
        body: JSON.stringify(newProduct)
    }
}

module.exports = {
    addProduct,
}

