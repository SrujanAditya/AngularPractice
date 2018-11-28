import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() pData : string;
  @Output() reply = new EventEmitter<string>();
  constructor() { }
  send() {
    console.log("send");
    this.reply.emit(this.pData);
  }
  ngOnInit() {
  }

}
