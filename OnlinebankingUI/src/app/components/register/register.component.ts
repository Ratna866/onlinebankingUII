import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  type: string="password"
 
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";
  registerForm! : FormGroup 
  
  
  constructor(private fb:FormBuilder, private auth: AuthService)
  {
  
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      FullName: ['', [Validators.required]], // First parameter is the initial value (empty), second is an array of validators (required in this case)
      Email: ['', [Validators.required]], // First parameter is the initial value (empty), second is an array of validators (required in this case)
      AadharCardNo: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      ResidentialAddress: ['', [Validators.required]],
      PermanentAddress: ['', [Validators.required]],
      Password: ['', [Validators.required]], 
      ConfirmPassword: ['', [Validators.required]],

    });
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash"
    this.isText ? this.type="text" : this.type="password";
    }
      onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
      }
    OnSignup(){
      if(this.registerForm.valid){
        this.auth.signup(this.registerForm.value)
        .subscribe({
          next:(res=>{
             alert(res.message) 
        })
        ,error:(err=>{
          alert (err?.error.message)
        })
      })
      console.log(this.registerForm.value)
    }else{
      this.validateAllFormFields(this.registerForm)
      // ValidateForm.validateAllFormFields(this.signupForm)

      }
    }
    private validateAllFormFields(formGroup:FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
  
    })
  }


}
