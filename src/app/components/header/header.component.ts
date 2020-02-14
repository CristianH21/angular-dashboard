import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/shared/services/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private toggleService: ToggleSidebarService){ }

  toggle: boolean = false;

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    this.toggleService.toggle.next(this.toggle);
  }

}
