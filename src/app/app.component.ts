import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./comoponentes/head/head.component";
import { MenuComponent } from './comoponentes/menu/menu.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeadComponent,MenuComponent]
})




export class AppComponent {
  title = 'Angular';
}






