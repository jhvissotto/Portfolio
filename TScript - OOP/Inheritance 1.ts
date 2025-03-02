class Class1 {
    prop1 = 'prop1'
    func1() { return 'func1' }
}


class Class2 extends Class1 {
    prop2 = 'prop2'
    func2() { return 'func2' }
}


const obj2 = new Class2()

console.log([ obj2.prop1, obj2.func1(),  obj2.prop2, obj2.func2() ])
