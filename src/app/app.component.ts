import { Component, OnInit } from '@angular/core';
import { SideMenu } from './sideMenu';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(
		public sideMenu: SideMenu
  ) {

  }

  ngOnInit() {

  }

  toggleDetails(page, event) {
		event.preventDefault();
		event.stopPropagation();
		if (page.showDetails) {
			page.showDetails = false;
		} else {
			page.showDetails = true;
		}
	}
}
