import { router } from './router'
import { prisma } from './prisma'

// @ts-ignore
router.get('/', (req, res) => {
    return res.send('Welcome')
})

// @ts-ignore
router.get('/prisma', async (req, res) => {
    const query = await prisma.client.table.findMany()
    return res.json(query)
})

export { router }