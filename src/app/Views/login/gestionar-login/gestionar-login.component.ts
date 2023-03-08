import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceTsService } from 'src/app/servicios/login.service.ts.service';
@Component({
  selector: 'app-gestionar-login',
  templateUrl: './gestionar-login.component.html',
  styleUrls: ['./gestionar-login.component.css']
})
export class GestionarLoginComponent {
 

  form: FormGroup=new FormGroup({
    name:  new FormControl(''),
  });

  constructor(
    public loginservice: LoginServiceTsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.loginservice.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
        
    })
  }
  
}
