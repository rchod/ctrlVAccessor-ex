import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { InputComponent } from './input.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, InputComponent, FormsModule, ReactiveFormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-input [(ngModel)]=cc />
  `,
})
export class App {
  name = 'Angular';
  cc = new FormControl('')

}

bootstrapApplication(App);
