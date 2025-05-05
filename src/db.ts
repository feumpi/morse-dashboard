import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("MONGODB_URI não definido nas variáveis de ambiente");
}

const client = new MongoClient(uri, options);
export const clientPromise = client.connect();
