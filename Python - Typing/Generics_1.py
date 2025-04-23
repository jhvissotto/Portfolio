from typing import TypeVar

Req = TypeVar('Req')
Res = TypeVar('Res')

def API(req:Req) -> Res:
    res: Res = {}
    return res