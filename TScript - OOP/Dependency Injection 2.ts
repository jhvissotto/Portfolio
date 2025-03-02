class Class1 {
    
    prop1 = 'prop1'

    func1(arg1='arg1') { 
        return [this.prop1, arg1]
    }
}


class Class2 {

    prop2 = 'prop2'
    obj1: Class1

    constructor(obj1:Class1) {
        this.obj1 = obj1
    }

    func2(arg2='arg2') { 
        return [this.obj1.prop1, this.obj1.func1(),  this.prop2, arg2] 
    }
}


const obj1 = new Class1()
const obj2 = new Class2(obj1)

console.log(obj2.func2())
