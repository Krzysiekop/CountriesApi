import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country';
import { NgFor } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor,KeyValuePipe, NgIf],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css'
})
export class CountryDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
     };
     }

  countryId = this.route.snapshot.paramMap.get('id');

  url = `https://restcountries.com/v3.1/alpha/${this.countryId}`;

  country: Country[] = [];

  async getCountryById(): Promise<Country> {
    const data = await fetch(this.url);
    this.country = await data.json() ?? [];
    console.log(this.country[0])

    return this.country[0];
  }

  ngOnInit() {
    this.getCountryById()
  }

  back(){
    history.back()
  }

}
