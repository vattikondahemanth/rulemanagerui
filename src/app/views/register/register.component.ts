import { Component ,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
// import { ValidationService } from 'app/validation.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {


  loginForm = this.formBuilder.group({
    // username: ['', Validators.required , Validators.maxLength(12), Validators.minLength(4)],
    // email:['', Validators.required,Validators.maxLength(50), Validators.minLength(4)],
    // password: ['', Validators.required,Validators.maxLength(12) ,Validators.minLength(4)],
    // repeatpassword: ['', Validators.required,Validators.maxLength(12),Validators.minLength(4)]

    username:  ['', [Validators.required, Validators.minLength(4) ,Validators.maxLength(12)]],
    email:['', [Validators.required, Validators.minLength(4),Validators.email
    ]],
    password:['', [Validators.required, Validators.minLength(4),Validators.maxLength(12)]],
    repeatpassword: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(12)]]
});

  loading = false;
  submitted = false;
  returnUrl: string;
  ngOnInit() {
    console.log("test");
  }
  constructor( private formBuilder: FormBuilder) 
  { }
  get f() { return this.loginForm.controls; }

   onSubmit()
    {
      console.log("payal");
      alert(this.loginForm.value); 
      debugger;
     if (this.loginForm.valid)
      {
     console.log(this.loginForm.value); 
     if(this.loginForm.controls.password.value != this.loginForm.controls.repeatpassword.value)
     {
     alert("Password and Repeat password must be same!"); 
     return ;
     }
     }
     else
     {
       // alert("Please fill all mandetory fields!"); 
     }
        this.submitted = true;
   }


}
