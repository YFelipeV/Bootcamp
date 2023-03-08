import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MunicipiosService } from 'src/app/servicios/municipios.service';

@Component({
  selector: 'app-registrar-municipios',
  templateUrl: './registrar-municipios.component.html',
  styleUrls: ['./registrar-municipios.component.css']
})
export class RegistrarMunicipiosComponent {
  form: FormGroup=new FormGroup({
    name:  new FormControl(''),
  });

  constructor(
    public MunicipiosService: MunicipiosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.MunicipiosService.create(this.form.value).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('person/index');
    })
  }
}
