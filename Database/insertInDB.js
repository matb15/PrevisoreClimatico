import { MongoClient } from 'mongodb'

async function InsertInDocument(url, nomeDB, collectionName, document) {

    const client = new MongoClient(url)

    try {
        await client.connect()
        const db = client.db(nomeDB)
        const collectionSearched = db.collection(collectionName)
        const InsertInDocument = await collectionSearched.insertMany(document)
        return InsertInDocument.insertedId
    }
    finally {
        await client.close()
    }
}
export default InsertInDocument

