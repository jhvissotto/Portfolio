class Class1 {
    prop1 = 'prop1'
    init1 = ''

    constructor(init1='init1') {
        this.init1 = init1
    }
    
    func1(arg1='arg1') { 
        return [this.prop1, this.init1, arg1] 
    }
}


class Class2 extends Class1 {
    prop2 = 'prop2'
    init2 = ''
    
    constructor(init2='init2') {
        super()
        this.init2 = init2
    }
    
    func2(arg2='arg2') { 
        return [this.prop1, this.init1, this.func1(),  this.prop2, this.init2, arg2]
    }
}


const obj2 = new Class2()

console.log(obj2.func2())