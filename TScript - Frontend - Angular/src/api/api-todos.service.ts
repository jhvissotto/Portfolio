import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { configs } from '.'


export type Req = {}
export type Res = {
    userId:     number
    id:         number
    title:      string
    completed:  boolean
}


@Injectable({ providedIn:'any' })
export class Service {

    constructor(private http: HttpClient) {}

    getTodos(req:Req): Observable<Res[]> {
        return this.http.get<Res[]>(configs.baseUrl + '/todos')
    }
}