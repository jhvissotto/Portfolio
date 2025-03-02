import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { global } from '../../../src'


@Component({
  selector: 'page-counter3',
  imports: [CommonModule],  
  templateUrl: './counter3.component.html',
  styleUrl: './counter3.component.css'
})


export class Counter3Component {
  pageName = 'Page Counter 3'
  
  count$: Observable<number>

  constructor(public store: Store) {
    this.count$ = this.store.select(global.store.Counter.selectors.getCounter)
  }

  onIncrement() { this.store.dispatch(global.store.Counter.actions.increment()) }
  onDecrement() { this.store.dispatch(global.store.Counter.actions.decrement()) }
  onReset()     { this.store.dispatch(global.store.Counter.actions.reset())     }
}