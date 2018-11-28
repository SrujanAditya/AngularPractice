import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  @Input() aname:string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Submitted");
  }

}
