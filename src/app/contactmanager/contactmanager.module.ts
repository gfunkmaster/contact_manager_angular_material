import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


import { ContactmanagerappComponent } from './contactmanagerapp.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UserService } from './services/user.service';

import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: ContactmanagerappComponent,
  children:[
    {path: ':id', component: MainContentComponent},
    {path: '', component: MainContentComponent},
  ]},
  {path: '**', redirectTo: ''},
]



@NgModule({
  declarations: [
    ContactmanagerappComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
    NotesComponent,
    NewContactDialogComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [UserService]
})
export class ContactmanagerModule { }
