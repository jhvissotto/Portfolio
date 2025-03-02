interface Protocol {
    prop: string
    func: (this:Protocol, arg:string) => [string, string]
}


const prop = 'prop'


function func(this:Protocol, arg='arg') {
    return [this.prop, arg]
}


class Class implements Protocol {
    prop = prop
    func: any

    constructor() {
        this.func = func.bind(this)
    }
}


const obj = new Class()
console.log(obj.func())