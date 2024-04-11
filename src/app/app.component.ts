import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';//permite usar ngClass
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPageAngular17';

  menuOption:string ='';

  onOption(option:string){
    this.menuOption = option;
  }
}
