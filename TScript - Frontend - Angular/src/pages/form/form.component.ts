import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, NgForm } from '@angular/forms'
import validator from 'validator'



@Component({
  selector: 'page-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {
  pageName = 'Page Form'


  input = {
    name:  { value: '', valid: -1 },
    email: { value: '', valid: -1 },
    pass:  { value: '', valid: -1 },
  }


  onName(val:any): void {
    this.input.name = {
      value: val,
      valid: Number(validator.isLength(val, { min: 3 })),
    }
  }

  onEmail(val:any): void {
    this.input.email = {
      value: val,
      valid: Number(validator.isEmail(val)),
    }
  }

  onPass(val:any): void {
    this.input.pass = {
      value: val,
      valid: Number(validator.isStrongPassword(val)),
    }
  }
}
