import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const db = client.db('portfolio');
      const result = await db.collection('visitors').findOneAndUpdate(
        { _id: 'total' },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: 'after' }
      );
      
      res.status(200).json({ count: result.value?.count || 1 });
    } catch (error) {
      res.status(500).json({ error: 'Erro' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}