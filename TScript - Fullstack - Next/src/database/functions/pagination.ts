export function pagination(page:number, limit:number) {
    return {
        skip: limit * page, 
        take: limit, 
    }
}