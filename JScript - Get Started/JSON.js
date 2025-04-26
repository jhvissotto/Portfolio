const A = JSON.stringify([
    { bool:null,  value:NaN, text:'AAA' },
    { bool:false, value:123, text:'BBB' },
    { bool:true,  value:456, text:'CCC' },
])

console.log({ A })

const B = JSON.parse('[{"bool":null,"value":null,"text":"AAA"},{"bool":false,"value":123,"text":"BBB"},{"bool":true,"value":456,"text":"CCC"}]')

console.log({ B })
