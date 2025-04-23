from typing import List, Literal
import dataclasses as dc
import datetime as dt


@dc.dataclass
class DTO:
    bool: bool
    num:  int
    text: str
    enum: Literal['AAA','BBB','CCC']
    time: dt.datetime


data: List[DTO] = [
    DTO(bool=True, num=123, text='text', enum='AAA', time=dt.datetime.now()),
    DTO(bool=True, num=456, text='text', enum='BBB', time=dt.datetime.now()),
    DTO(bool=True, num=789, text='text', enum='CCC', time=dt.datetime.now()),
]