import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZonasService } from 'src/app/servicios/zonas.service';

@Component({
  selector: 'app-registro-zonas',
  templateUrl: './registro-zonas.component.html',
  styleUrls: ['./registro-zonas.component.css']
})
export class RegistroZonasComponent {
  form: FormGroup=new FormGroup({
    name: new FormControl(''),
  });


  constructor(
    public ZonasService: ZonasService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

ngOnInit():void{

this.form = this.formBuilder.group({
  name:['', Validators.required],
});

}

get f (){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
  this.ZonasService.create(this.form.value).subscribe(res => {
    console.log('Zona Created Succesfully!');
    this.router.navigateByUrl('person/index');
  })
}

}
