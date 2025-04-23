using System;
using System.Collections.Generic;


public class DTO {
    public  bool      Bool  { get; set; }
    public  int       Num   { get; set; }
    public  string    Text  { get; set; }
    public  string    Opts  { get; set; }
    public  DateTime  Time  { get; set; }
}


var data = new List<DTO> {
    new DTO { Bool=true, Num=123, Text="text", Opts="AAA", Time=DateTime.Now },
    new DTO { Bool=true, Num=456, Text="text", Opts="BBB", Time=DateTime.Now },
    new DTO { Bool=true, Num=789, Text="text", Opts="CCC", Time=DateTime.Now }
};