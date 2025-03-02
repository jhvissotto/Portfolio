import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Observable, of } from 'rxjs'

import { api } from '../../../src'


@Component({
    selector: 'page-api',
    imports: [CommonModule, HttpClientModule],  
    templateUrl: './api.component.html',
    styleUrl: './api.component.css'
})


export class ApiComponent {
    pageName = 'Page Api'

    data$: Observable<api.todos.Res[]> = of([])

    constructor(public apiService: api.Service) {}

    todos_get() {
        this.data$ = this.apiService.todos_get({})
    }
}