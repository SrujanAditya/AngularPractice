import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
	signUp:FormGroup;
	constructor(private frmBuilder:FormBuilder) {
		this.signUp = frmBuilder.group({
			userName: new FormControl(),
			email: new FormControl(),
			password : new FormControl(),
			confirmPass : new FormControl()
		})
	}

	ngOnInit() {
	}

	onSubmit(){
		console.log(this.signUp.controls);
	}
}
