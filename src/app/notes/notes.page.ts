import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NoteAddPage } from '../note-add/note-add.page';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(
    private modalController:ModalController,
    private dataService:DataService
  ) { }

  ngOnInit() {
  }

  async createNote(){
    const modal = await this.modalController.create({
      component: NoteAddPage,
      componentProps: {}
    });
    modal.onDidDismiss().then( (response) => {
      console.log(response);
      if( response.data.save == true ){
        //save data to firebase
        this.dataService.writeData( response.data.note );
      }
    });
    await modal.present();
  }
}
