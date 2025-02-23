import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  greetings: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ greetings:'welcome' })
}
