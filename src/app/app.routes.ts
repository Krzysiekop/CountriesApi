import { Routes } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';

export const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
    },
    {
        path: 'country-detail/:id',
        component: CountryDetailComponent,
    }
];
