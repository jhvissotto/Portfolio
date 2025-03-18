import type { NextApiRequest, NextApiResponse } from 'next'
import type { Req, Res } from './protocol'


export function controller(req:NextApiRequest, res:NextApiResponse<Res>) {

    const data = { greetings: 'Welcome' }

    return res.status(200).json(data)
}
