import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.page.html',
  styleUrls: ['./notes-edit.page.scss'],
})
export class NotesEditPage implements OnInit {
  title: string;
  content: string;
  date: number;
  key: string;
  constructor( private modalController:ModalController ) { }

  ngOnInit() {
  }
  close(){
    this.modalController.dismiss({ save: false });
  }
  saveNote(){
    let note = {title: this.title, content:this.content, date:this.date, key: this.key };
    this.modalController.dismiss({ save: true, note: note });
  }
}
