import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'signup',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'signout', 
    loadChildren: './signout/signout.module#SignoutPageModule' 
  },  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'note-add', loadChildren: './note-add/note-add.module#NoteAddPageModule' },
  { path: 'notes-edit', loadChildren: './notes-edit/notes-edit.module#NotesEditPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
