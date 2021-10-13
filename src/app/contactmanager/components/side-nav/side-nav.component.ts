import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public IsScreenSmall: boolean | undefined;
  users: Observable<User[]> | undefined;

  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.breakpointObserver
    .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.IsScreenSmall = state.matches;
    })

    this.users = this.userService.users;
    this.userService.loadAll();

/*     this.users.subscribe(data => {
      if(data.length > 0){
        this.router.navigate(['/contactmanager', data[0].id])
      }
    }) */

    this.router.events.subscribe(() => {
      if(this.IsScreenSmall) {
          this.sidenav?.close();
      }
    })

     //.observe([Breakpoints.XSmall])
  }

}
