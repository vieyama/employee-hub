import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  imports: [RouterModule]
})
export class App { }

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
