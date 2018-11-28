import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  signUp:FormGroup;
	constructor(private frmBuilder:FormBuilder) {
		this.signUp = frmBuilder.group({
			userName: new FormControl("",[Validators.required,Validators.minLength(4)]),
			email: new FormControl("",[Validators.required]),
			password : new FormControl("",[Validators.required]),
			confirmPass : new FormControl("",[Validators.required])
		})
	}

	ngOnInit() {
	}

	onSubmit(){
		console.log((this.signUp.value));
	}

}
