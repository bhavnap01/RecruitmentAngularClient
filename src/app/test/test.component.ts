import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      Welcome {{name}}
      {{name.toUpperCase()}}
    </div>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>

    <input type="text" value="Bhavna">
    <input type="text" value="Bhavna" [disabled]="true">

    <h2 class="text-success" [class]="successClass">Angular 8</h2>
    <h2 [ngClass]="messageClasses">Angular 8</h2>

    <h2 [style.color]="hasError ? 'red' : 'green'">Style binding</h2>
    <h2 [style.color]="highlightcolor">Style Binding</h2>
    <h2 [ngStyle]="titleStyles">Style Binding</h2>

    <button (click)="onClick()">Greet</button>
  `,
  styles: [`
  div{
    color:red;
  }
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name="Bhavna";
  public siteUrl=window.location.href;
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public messageClasses={
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  public highlightcolor="orange";
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }

  constructor() {}

  ngOnInit() {
  }

  greetUser(){
    return "Hello "+ this.name;
  }

  onClick(){
    console.log("Welcome to click binding!!!");
  }
}
