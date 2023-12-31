import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username!: string;
  clearUsername() {
    this.username = '';
    
  this.loginForm.valueChanges.subscribe(() => {
    this.clearFormFields();
  });
  }
  
  clearFormFields() {
    this.loginForm.reset();
  }

  type:string="password"
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  public resetPasswordEmail!:string;
  public isValidEmail!:boolean;
  // loginForm!: FormGroup;
  loginForm: FormGroup<any> = new FormGroup({});

  constructor(private fb:FormBuilder,private auth:AuthService,private router :Router){

   
  }
ngOnInit(): void {
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],

  })
}
hideShowPass(){
this.isText=!this.isText;
this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash"
this.isText ? this.type="text" : this.type="password";
}
OnLogin(){
  if(this.loginForm.valid){
    this.auth.login(this.loginForm.value)
    .subscribe({
      next:(res=>{
         alert(res.message) ;
         this.loginForm.reset();
         this.router.navigate(['dashboard'])
    })
    ,error:(err=>{
      alert (err?.error.message)
    })
  })
  console.log(this.loginForm.value)
}else{
  this.validateAllFormFields(this.loginForm)
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
  





