import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinform: FormGroup;

  constructor( private formBuilder: FormBuilder)
   { 
     this.signinform = formBuilder.group({

    
    //      usremailid: new FormControl(),
    // usrpwd: new FormControl()
    
    usremailid: ['', Validators.required],
    usrpwd: ['', Validators.required]
  } );
}

  ngOnInit(): void {
  }

  signin()
  {
    console.log(this.signinform)
  }

}
