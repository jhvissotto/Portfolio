import 'reflect-metadata'
import { injectable, inject, Container } from 'inversify'


// ========================================= // 
// ================ Class 1 ================ // 
// ========================================= // 
const CLASS1 = Symbol('CLASS1')

@injectable()
class Class1 {
    
    prop1 = 'prop1'
    
    func1(arg1='arg1') { 
        return [this.prop1, arg1]
    }
}


// ========================================= // 
// ================ Class 2 ================ // 
// ========================================= // 
const CLASS2 = Symbol('CLASS2')

@injectable()
class Class2 {

    prop2 = 'prop2'
    obj1: Class1
    
    constructor(@inject(CLASS1) obj1: Class1) {
        this.obj1 = obj1
    }
    
    func2(arg2='arg2') { 
        return [this.obj1.prop1, this.obj1.func1(),  this.prop2, arg2] 
    }
}


// ====================================== // 
// ================ DIoC ================ // 
// ====================================== // 
const container = new Container()
container.bind<Class1>(CLASS1).to(Class1)
container.bind<Class2>(CLASS2).to(Class2)


// ========================================= // 
// ================ Execute ================ // 
// ========================================= // 
const obj2 = container.get<Class2>(CLASS2)

console.log(obj2.func2())
