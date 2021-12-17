import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from "../components/card/card.component";
import {CustomDropdownComponent} from "../components/custom-dropdown/custom-dropdown.component";

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        CustomDropdownComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
