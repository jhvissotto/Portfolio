const A = JSON.stringify([
    { bool:null,  value:123, text:'AAA' },
    { bool:false, value:456, text:'BBB' },
    { bool:true,  value:789, text:'CCC' },
])

console.log({ A })

const B = JSON.parse('[{"bool":true,"value":123,"text":"AAA"},{"bool":false,"value":456,"text":"BBB"},{"bool":null,"value":789,"text":"CCC"}]')

console.log({ B })