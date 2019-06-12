import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ReversePipe } from './reverse.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';
import { TypescriptDemoComponent } from './typescript-demo/typescript-demo.component';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { ViewModule } from './view/view.module';
import { PPipe } from './p.pipe';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    ContentComponent,
    DataBindingDemoComponent,
    DirectivesDemoComponent,
    InputDemoComponent,
    ChildComponent,
    ParentComponent,
    CrudComponent,
    PipeDemoComponent,
    ReversePipe,
    ReverseStringPipe,
    TypescriptDemoComponent,
    ViewChildDemoComponent,
    StringInterpolationComponent,
    PPipe,
    ExceptionHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
