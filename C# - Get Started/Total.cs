using System;
using System.Linq;


int[] X = { 10, 20, 30, 40, 50 };

int Y = X.Aggregate((cum, x) => cum + x);

Console.WriteLine(Y);