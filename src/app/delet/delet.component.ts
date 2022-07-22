import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.css']
})
export class DeletComponent implements OnInit {
  @Input() item:string|undefined
  
  @Output() onCancel=new EventEmitter()

  //Creating on delete event - since it occurig in parent, so put it in @output
  @Output() onDelete=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }

  delete(){
    //emit the event onDelete with account to be delete as the argument 
    this.onDelete.emit(this.item)

  }

}
