import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-open-acc',
  templateUrl: './open-acc.component.html',
  styleUrls: ['./open-acc.component.scss']
})
export class OpenAccComponent {
  type: string="password"
 
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";
  openaccForm!: FormGroup;
 
  
  constructor(private fb:FormBuilder, private auth: AuthService)
  {
    
  
  }
  ngOnInit(): void {
    this.openaccForm = this.fb.group({
      AccountNumber: ['', [Validators.required]], // First parameter is the initial value (empty), second is an array of validators (required in this case)
      Password: ['', [Validators.required]], // First parameter is the initial value (empty), second is an array of validators (required in this case)
      ConfirmPassword: ['', [Validators.required]], // First parameter is the initial value (empty), second is an array of validators (required in this case)
    });
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash"
    this.isText ? this.type="text" : this.type="password";
    }
      onSubmit() {
    if (this.openaccForm.invalid) {
      return;
    }
      }
    OnCreateAcc(){
      if(this.openaccForm.valid){
        this.auth.signup(this.openaccForm.value)
        .subscribe({
          next:(res=>{
             alert(res.message) 
        })
        ,error:(err=>{
          alert (err?.error.message)
        })
      })
      console.log(this.openaccForm.value)
    }else{
      this.validateAllFormFields(this.openaccForm)
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
