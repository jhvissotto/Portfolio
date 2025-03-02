import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { configs, todos } from '.'


@Injectable({ providedIn:'any' })
export class Service {

    constructor(private http: HttpClient) {}

    todos_get(req:todos.Req): Observable<todos.Res[]> {
        return this.http.get<todos.Res[]>(configs.baseUrl + todos.endpoint)
    }
}