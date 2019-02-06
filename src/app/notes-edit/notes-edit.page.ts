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
  @Input() content: string;
  @Input() date: number;
  @Input() key: string;
  noteForm: FormGroup;
  constructor( private modalController:ModalController, private navParams:NavParams, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      title: new FormControl(this.title),
      content: new FormControl(this.content)
    });
  }
  close(){
    this.modalController.dismiss({ save: false });
  }
  saveNote(formData){
    let note = {title: formData.title, content:formData.content, date:this.date, key: this.key };
    console.log(note);
    this.modalController.dismiss({ save: true, note: note });
  }
}
