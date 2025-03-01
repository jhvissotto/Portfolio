import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'


@Component({
  selector: 'page-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  pageName = 'Page List'

  data1 = ['Item1','Item2','Item3']
  data2 = [
    { id:1, item:'Item 1' },
    { id:2, item:'Item 2' },
    { id:3, item:'Item 3' },
  ]
}