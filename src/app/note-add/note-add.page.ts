import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.page.html',
  styleUrls: ['./note-add.page.scss'],
})
export class NoteAddPage implements OnInit {
  title:string;
  content:string;
  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }
  saveNote(){
    let note = { title: this.title, content: this.content };
    this.modalController.dismiss({ save: true, note: note });
  }
  close(){
    this.modalController.dismiss({ save: false });
  }
}
