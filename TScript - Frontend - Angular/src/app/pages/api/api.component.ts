import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Observable, of } from 'rxjs'

import * as Todos from '../../../api/api-todos.service'


@Component({
    selector:     'page-api',
    imports:        [CommonModule, HttpClientModule],  
    templateUrl:  './api.component.html',
    styleUrl:     './api.component.css'
})


export class ApiComponent {
    pageName = 'Page Api'

    data$: Observable<Todos.Res[]> = of([])

    constructor(public ApiTodosService: Todos.Service) {}

    getTodos() {
        this.data$ = this.ApiTodosService.getTodos({})
    }
}