// ======================================= // 
// ================ Model ================ // 
// ======================================= // 
interface ICounter {
    initial:    number
    value:      number
    increment:  ()           => ICounter
    decrement:  ()           => ICounter
    reset:      ()           => ICounter
    set:        (by: number) => ICounter
    get:        ()           => ICounter['value']
}



// ================================================ // 
// ================ Implementation ================ // 
// ================================================ // 
class CCounter implements ICounter {
    initial: number
    value:   number

    constructor(initial: number) {
        this.initial = initial
        this.value   = initial
    }

    increment()     { this.value ++;                return this       }
    decrement()     { this.value --;                return this       }
    reset()         { this.value  = this.initial;   return this       }
    set(by: number) { this.value  = by;             return this       }
    get()           {                               return this.value }
}



// ======================================== // 
// ================ Helper ================ // 
// ======================================== // 
type Constructor<T> = new (...args: any[]) => T

function Deps() {
    const repo: Record<number,any> = {}
    
    function add<T>(key:number, val:Constructor<T>) {
        repo[key] = val
    }

    function get<T>(key:number):Constructor<T> {
        return repo[key]
    }

    return { add, get }
}



// ============================================== // 
// ================ Dependencies ================ // 
// ============================================== // 
enum DEPS { 'COUNTER' }

const deps = Deps()
deps.add<ICounter>(DEPS.COUNTER, CCounter)



// ====================================== // 
// ================ Main ================ // 
// ====================================== // 
const Counter = deps.get<ICounter>(DEPS.COUNTER)

function main(counter:ICounter = new Counter(0)) {
    const value = counter.decrement().decrement().get()
    console.log({ value })
}