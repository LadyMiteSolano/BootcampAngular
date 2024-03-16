import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupreactivo',
  templateUrl: './signupreactivo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupreactivoComponent implements OnInit{


  frmGroup!: FormGroup;

  mensajePassword? :string;

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.frmGroup = this.initForm();
  }



  signup(){
    if(this.frmGroup.get('password') === this.frmGroup.get('confirmpassword')){
      this.mensajePassword = 'CONTRASENIAS VALIDADAS EXITOSAMENTE';
    }else{
      this.mensajePassword = 'LAS CONTRASENIAS NO COINCIDEN';
    }
    
  }

  initForm() : FormGroup{
    return this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(30), Validators.max(50)]],
      apellido:['', Validators.required, Validators.pattern('[a-zA-Z]')],
      celular:['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      email:['', [Validators.required, Validators.minLength(15), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]], 
      confirmpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
    });
  }
}
