using System;
using System.Linq;


int[] X = { -20, -10, 0, +10, +20 };

var Y = X.Where(x => x > 0).ToArray();

Console.WriteLine(string.Join(", ", Y));