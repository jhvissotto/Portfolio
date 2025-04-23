using System;
using System.Linq;


int[] X = { 0, 1, 2, 3, 4 };

var Y = X.Select(x => x * x).ToArray();  

Console.WriteLine(string.Join(", ", Y));  