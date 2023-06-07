import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit,OnChanges {
  userForm!: FormGroup ;
  @Input() user!:User; 

  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnChanges()  {
   this.initForm(this.user); 
  }

  ngOnInit() {
  }

  initForm(user:User) {
    this.userForm = this.formBuilder.group({
      name: [user.name, Validators.required],
      email: [user.email, [Validators.required, Validators.email]],
      id:[user.id,[Validators.required]]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);

  }

}
