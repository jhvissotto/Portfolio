interface ICounter {
    initial:    number
    value:      number
    reset:      ()          => this
    increment:  ()          => this
    decrement:  ()          => this
    add:        (by:number) => this
    sub:        (by:number) => this
    set:        (by:number) => this
    get:        ()          => this['value']
}


class Counter implements ICounter {
    initial: number
    value:   number

    constructor(initial: number) {
        this.initial = initial
        this.value   = initial
    }

    reset()         { this.value  = this.initial;   return this       }
    increment()     { this.value ++ ;               return this       }
    decrement()     { this.value -- ;               return this       }
    add(by:number)  { this.value += by;             return this       }
    sub(by:number)  { this.value -= by;             return this       }
    set(by:number)  { this.value  = by;             return this       }
    get()           {                               return this.value }
}