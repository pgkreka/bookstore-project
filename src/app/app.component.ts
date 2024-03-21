import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SearchPageComponent } from "./search-page/search-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatSlideToggleModule, TopBarComponent, SearchPageComponent]
})
export class AppComponent {
  title = 'bookstore-project';
}
