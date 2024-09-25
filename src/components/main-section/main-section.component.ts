import { Component } from '@angular/core';
import { CardsComponent } from "../card/card.component";

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
