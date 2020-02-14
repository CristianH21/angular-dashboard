import { Component } from '@angular/core';
import { ToggleSidebarService } from './shared/services/toggle-sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sidemenu';

  toggle: boolean = false;

  constructor(private toggleService: ToggleSidebarService) {
    this.toggleService.toggle.subscribe( (data: boolean) => {
      this.toggle = data;
    });
  }
}
