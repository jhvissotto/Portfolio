using System;
using System.Collections.Generic;


var X = new Dictionary<int, string> {{10,"AA"}, {20,"BB"}, {30,"CC"}};

foreach (var entry in X) {
    
    int    key = entry.Key;
    string val = entry.Value;
    
    Console.WriteLine($"key: {key}, val: {val}");
}