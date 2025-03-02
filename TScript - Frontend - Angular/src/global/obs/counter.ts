import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'


@Injectable({ providedIn:'any' })
export class Service {

  private valueSource = new BehaviorSubject(0)
  value$ = this.valueSource.asObservable()

  increment() { this.valueSource.next(this.valueSource.value + 1) }
  decrement() { this.valueSource.next(this.valueSource.value - 1) }
  reset()     { this.valueSource.next(0) }
}