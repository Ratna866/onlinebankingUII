import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      FullName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      AadharCardNo: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      Occupation: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = "fa-eye") : (this.eyeIcon = "fa-eye-slash");
    this.isText ? (this.type = "text") : (this.type = "password");
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
  }

  onSignup(){
    if(this.signupForm.valid){
      this.auth.login(this.signupForm.value)
      .subscribe({
        next:(res=>{
           alert(res.message) ;
           this.signupForm.reset();
           this.router.navigate(['dashboard'])
      })
      ,error:(err=>{
        alert (err?.error.message)
      })
    })
    console.log(this.signupForm.value)
  }else{
    this.validateAllFormFields(this.signupForm)
    // ValidateForm.validateAllFormFields(this.signupForm)
  
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
