class Counter {
    ini: number 
    val: number
    
    constructor(ini = 0) { 
        this.ini = ini 
        this.val = ini 
    }
    
    set(_new:number)  { this.val  = _new;           return this     }
    reset()           { this.val  = this.ini;       return this     }
    increment()       { this.val ++ ;               return this     }
    decrement()       { this.val -- ;               return this     }
    add(by=1)         { this.val += by;             return this     }
    sub(by=1)         { this.val -= by;             return this     }
    mul(by:number)    { this.val  = this.val * by;  return this     }
    div(by:number)    { this.val  = this.val / by;  return this     }
    get()             {                             return this.val }
}


(function main() {
    const counter = new Counter()
    const value   = counter.add(100).sub(10).increment().decrement().get()
    console.log({ value })
})()