import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-samp',
  templateUrl: './directives-samp.component.html',
  styleUrls: ['./directives-samp.component.css']
})
export class DirectivesSampComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  check:boolean = false;
  switchValue:number = 2;
  data:any = [
    {id:1,name:'srujan',age:21},
    {id:2,name:'aditya',age:22},
    {id:3,name:'sai',age:20},
    {id:4,name:'sam',age:19},
    {id:5,name:'bob',age:25}
  ];
}
