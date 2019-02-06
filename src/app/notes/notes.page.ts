import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NoteAddPage } from '../note-add/note-add.page';
import { DataService } from '../data.service';
import { NotesEditPage } from '../notes-edit/notes-edit.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notes:Array<any> = [];
  noteSub:Subscription;
  constructor(
    private modalController:ModalController,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.getNotes();
  }
  ngOnDestroy(){
    if( this.noteSub ){
      this.noteSub.unsubscribe();
    }
    console.log(this.noteSub);
  }
  ionViewDidEnter(){
    this.getNotes();
  }
  async createNote(){
    const modal = await this.modalController.create({
      component: NoteAddPage,
      componentProps: {}
    });
    modal.onDidDismiss().then( (response) => {
      if( response.data.save == true ){
        //save data to firebase
        this.dataService.writeData( response.data.note );
      }
    });
    await modal.present();
  }

  getNotes(){
    this.noteSub = this.dataService.readData().subscribe( (response) => {
      this.notes = response;
      this.sortNotes();
    });
  }

  sortNotes(){
    this.notes.sort( (note1,note2) => {
      return note2.date - note1.date;
    } );
  }

  async editNote(note){
    const modal = await this.modalController.create({
      component: NotesEditPage,
      componentProps: note
    });
    modal.onDidDismiss().then( (response) => {
      if( response.data.save == true ){
        this.dataService.updateNote( response.data.note )
        .then( (response) => { console.log(response) });
      }
    });
    await modal.present();
  }

  formatDate(timestamp:number){
    let dateObj = new Date( timestamp );
    //get the name of the day returns 0 for sunday, 1 for monday
    let day = dateObj.getDay();
    //get the date
    let date = dateObj.getDate();
    //get the month
    let month = dateObj.getMonth()+1;
    //get the year
    let year = dateObj.getFullYear();

    //convert day to day name
    let dayName:string = '';
    switch( day ){
      case 0:
        dayName = 'Su';
        break;
      case 1:
        dayName = 'Mo';
        break;
      case 2:
        dayName = 'Tu';
        break;
      case 3:
        dayName = 'We';
        break;
      case 4:
        dayName = 'Th';
        break;
      case 5:
        dayName = 'Fr';
        break;
      case 6:
        dayName = 'Sa';
        break;
    }
    return `${dayName} ${date}/${month}/${year}`;
  }

  truncateString( str:string , charNumbers:number ){
    let result:Array<string> = [];
    let chars = str.split('');
    for( let i=0; i<charNumbers; i++ ){
      result.push( chars[i] );
    }
    let elipsis:string = (result.length < str.length) ? '...' : '';
    return result.join('') + elipsis;
  }
}
