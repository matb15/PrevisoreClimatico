import { MongoClient } from 'mongodb'

//Definiamo il database che vogliamo usare del mongodb
//const url = "mongodb+srv://AdminMeteo:abcde123@meteo.aiaoufr.mongodb.net/"

//Scriviamo una funzione che legge i documenti del DB
//Prima ci connettiamo con MongoClient(Url_mongo)
//Successivamente dobbiamo passare il nome del db
//Successivamente la Collezione 
//Infinite la Query per trovare il campo

async function getDocument(url, dbName, CollectionName, query) {
    const client = new MongoClient(url)

    try {
        await client.connect();
        const db = client.db(dbName)
        const collectionSearched = db.collection(CollectionName)
        return console.log(await collectionSearched.findOne(query))

    } finally {
        await client.close()
    }
}
export  default getDocument

