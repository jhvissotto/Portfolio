using System;
using Newtonsoft.Json;


var A = JsonConvert.SerializeObject(new[]{
    new { _bool = (bool?)null,  value = (double?)double.NaN,    text = "AAA" },
    new { _bool = false,        value = 123,                    text = "BBB" },
    new { _bool = true,         value = 456,                    text = "CCC" }
});

Console.WriteLine(A);


var B = JsonConvert.DeserializeObject<dynamic>(@"[{'_bool':null,'value':null,'text':'AAA'},{'_bool':false,'value':123,'text':'BBB'},{'_bool':true,'value':456,'text':'CCC'}]");

Console.WriteLine(JsonConvert.SerializeObject(B));