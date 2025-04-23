from typing import Protocol



class ICounter(Protocol):
    @property
    def initial(x) -> int: ...
    @property
    def value(x)   -> int: ...

    def reset(x)             -> 'ICounter': ...
    def increment(x)         -> 'ICounter': ...
    def decrement(x)         -> 'ICounter': ...
    def add(x, by: int)      -> 'ICounter': ...
    def sub(x, by: int)      -> 'ICounter': ...
    def setValue(x, by: int) -> 'ICounter': ...
    def getValue(x)          ->        int: ...



class Counter:
    def __init__(x, inival: int):
        x.initial = inival
        x.value   = inival

    @property
    def initial(x) -> int: return x.initial
    @property
    def value(x)   -> int: return x.value

    def reset(x)             -> 'Counter':  x.value  = x.initial;   return x
    def increment(x)         -> 'Counter':  x.value += 1;           return x
    def decrement(x)         -> 'Counter':  x.value -= 1;           return x
    def add(x, by: int)      -> 'Counter':  x.value += by;          return x
    def sub(x, by: int)      -> 'Counter':  x.value -= by;          return x
    def setValue(x, by: int) -> 'Counter':  x.value  = by;          return x
    def getValue(x)          -> int:                                return x.value