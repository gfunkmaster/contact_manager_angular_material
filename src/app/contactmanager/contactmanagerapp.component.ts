import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-contactmanagerapp',
  template: `

      <app-side-nav></app-side-nav>

  `,
  styles: [
  ]
})
export class ContactmanagerappComponent implements OnInit {


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }
  ngOnInit(): void {
  }

}
