from typing import TypeVar, Generic

T = TypeVar('T')

class Class(Generic[T]):
    def __init__(self, value: T):
        self.value = value