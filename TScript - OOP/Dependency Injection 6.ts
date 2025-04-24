// ========================================== // 
// ================ Protocol ================ // 
// ========================================== // 
interface Model {
    initial:    number
    value:      number
    increment:  ()           => Model
    decrement:  ()           => Model
    add:        (by: number) => Model
    sub:        (by: number) => Model
    set:        (by: number) => Model
    reset:      ()           => Model
    get:        ()           => Model['value']
}



// ================================================ // 
// ================ Implementation ================ // 
// ================================================ // 
class Feature implements Model {
    initial: number
    value:   number

    constructor(inival: number) {
        this.initial = inival
        this.value   = inival
    }

    increment()     { this.value ++;                return this       }
    decrement()     { this.value --;                return this       }
    add(by: number) { this.value += by;             return this       }
    sub(by: number) { this.value -= by;             return this       }
    set(by: number) { this.value  = by;             return this       }
    reset()         { this.value  = this.initial;   return this       }
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
deps.add<Model>(DEPS.COUNTER, Feature)



// ====================================== // 
// ================ Main ================ // 
// ====================================== // 
const DCounter = deps.get<Model>(DEPS.COUNTER)

function main(counter:Model = new DCounter(0)) {
    const value = counter.add(100).sub(10).increment().decrement().get()
    console.log({ value })
}
