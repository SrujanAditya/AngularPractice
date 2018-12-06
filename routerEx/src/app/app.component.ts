import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routerEx';
  constructor(private router:Router) {}
  ngOnInit() {
    this.backToHome();
  }
  backToHome() {
    this.router.navigate([""]);
  }
}
