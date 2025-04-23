package main

import "time"


type DTO struct {
    Bool  bool      `json:"bool"`
    Num   int       `json:"num"`
    Text  string    `json:"text"`
    Opts  string    `json:"opts"`
    Time  time.Time `json:"time"`
}

func main() {
    data := []DTO {
        { Bool:true, Num:123, Text:"text", Opts:"AAA", Time:time.Now() },
        { Bool:true, Num:456, Text:"text", Opts:"BBB", Time:time.Now() },
        { Bool:true, Num:789, Text:"text", Opts:"CCC", Time:time.Now() },
    }
}