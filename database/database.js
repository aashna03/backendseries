const { MongoClient } = require("mongodb")
// or as an es module:
// import { MongoClient } from 'mongodb'

require('dotenv').config({ path: '.env.local' })



// connection string
const URI = process.env.MONGODB_URI
console.log(URI)
const client = new MongoClient(URI);

async function main(){

    await client.connect();
    console.log("Connected successfully to server");
    

    const database = client.db("sampledb1");
    const collection = database.collection("sampleCollection1");

//     // Sample Data
//    const data = {
//     name : "pichi",
//     surname : "pichu",
//     curr_year : 2002
//    } 
    // Sample Data 2 
   const data2 = {
    name : "piddi",
    surname : "piddu",
    curr_year : 2002
   } 

    // // Insert data 
    const insertData1 = await collection.insertOne(data2);
    console.log("Inserted document : ", insertData1);

    // const insertData = await collection.insertMany([data]);
    // console.log("Inserted document : ", insertData);
    

    // Read 
    // {} represents to find everything without any filteration
    // find returns a cursor not an array so convert a cursor
    const findResult = await collection.find({}).toArray();
    console.log("Found docs : ", findResult);
    
    // find filtered data - first name pichi
    const filtered_res = await collection.find({name : "pichi"}).toArray();
    console.log("Filetered docs : ", filtered_res)

    // count documents
    const countDocs = await collection.countDocuments({});
    console.log("Count of documents in the collection : ", countDocs);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


