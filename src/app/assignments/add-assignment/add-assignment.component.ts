import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-add',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() newAssignment = new EventEmitter<Assignment>();

  nomDevoir:string = ""; 
  dateDeRendu!:Date;
  ajoutActive = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit(nom:string) {
    const newAssignment = new Assignment();
    newAssignment.nom = nom;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    this.newAssignment.emit(newAssignment);
  }
}
