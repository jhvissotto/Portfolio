type DTO = {
    bool:   boolean
    num:    number
    text:   string
    enum:   'AAA'|'BBB'|'CCC'
    time:   Date    
}

const data: DTO[] = [
    {  bool:true,  num:123,  text:'text',  enum:'AAA',  time: new Date() }, 
    {  bool:true,  num:456,  text:'text',  enum:'BBB',  time: new Date() }, 
    {  bool:true,  num:789,  text:'text',  enum:'CCC',  time: new Date() }, 
]
