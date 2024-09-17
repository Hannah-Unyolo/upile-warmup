import { NextApiRequest, NextApiResponse } from 'next';

const baseURL = process.env.BASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await fetch(baseURL as string);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the external API');
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
