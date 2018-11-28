import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DirectivesSampComponent } from './directives-samp/directives-samp.component';
import { CustomDirDirective } from './custom-dir.directive';
import { CustomFadeDirDirective } from './custom-fade-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DirectivesSampComponent,
    CustomDirDirective,
    CustomFadeDirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
