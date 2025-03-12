
export function pagination(items:number, page:number, limit:number) {
    
    const hasNextPage = (items === limit)
    const nextPage    = hasNextPage ? page + 1 : null

    return { hasNextPage, nextPage }
}