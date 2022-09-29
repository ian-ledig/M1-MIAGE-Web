import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  titre = 'Mon application sur les assignments !'
  selectedAssignment!: Assignment;
  assignments:Assignment[] = [
    {
      nom: "TP de Java",
      dateDeRendu: new Date("2021-03-01"),
      rendu: true
    }, {
      nom: "TP de React",
      dateDeRendu: new Date("2021-09-28"),
      rendu: false
    }, {
      nom: "TP d'Angular",
      dateDeRendu: new Date("2021-09-22"),
      rendu: true
    },
  ]

  addAssignmentVisible = false;
  
  constructor() { }
 
  assignmentClick(assignment: Assignment){
    this.selectedAssignment = assignment;
  }

  onAddAssignment(){
      this.addAssignmentVisible = !this.addAssignmentVisible;
  }

  onNewAssignment(event:Assignment){
    this.assignments.push(event);
    this.addAssignmentVisible = false;
  }
}
