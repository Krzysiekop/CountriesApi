import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CountryComponent } from './country/country.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, CountryComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'rest-countries';
}
