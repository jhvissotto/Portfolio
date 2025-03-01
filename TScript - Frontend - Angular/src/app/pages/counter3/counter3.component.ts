import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { GlobalState } from '../../../../src'


@Component({
  selector: 'page-counter2',
  imports: [CommonModule],  
  templateUrl: './counter3.component.html',
  styleUrl: './counter3.component.css'
})


export class Counter3Component {
  pageName = 'Page Counter 3'
  
  count$: Observable<number>

  constructor(public store: Store) {
    this.count$ = this.store.select(GlobalState.store.Counter.selectors.getCounter)
  }

  onIncrement() { this.store.dispatch(GlobalState.store.Counter.actions.increment()) }
  onDecrement() { this.store.dispatch(GlobalState.store.Counter.actions.decrement()) }
  onReset()     { this.store.dispatch(GlobalState.store.Counter.actions.reset())     }
}