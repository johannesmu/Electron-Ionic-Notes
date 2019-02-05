import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.page.html',
  styleUrls: ['./notes-edit.page.scss'],
})
export class NotesEditPage implements OnInit {
  @Input() title: string;
  content: string;
  date: number;
  key: string;
  noteForm: FormGroup;
  constructor( private modalController:ModalController, private navParams:NavParams, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }
  close(){
    this.modalController.dismiss({ save: false });
  }
  saveNote(){
    let note = {title: this.title, content:this.content, date:this.date, key: this.key };
    this.modalController.dismiss({ save: true, note: note });
  }
}
