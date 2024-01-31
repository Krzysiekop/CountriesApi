import { Component } from '@angular/core';
import { Country } from '../country';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})

export class CountryComponent {

  url = 'https://restcountries.com/v3.1/all';

  countryList: Country[] = [];

  async getAllCountries(): Promise<Country> {
    const data = await fetch(this.url);
    this.countryList = await data.json() ?? [];

    return this.countryList[0];
  }

  ngOnInit() {
    this.getAllCountries();
  }

}
