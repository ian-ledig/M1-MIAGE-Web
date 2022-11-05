import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit{
  titre = 'Mon application sur les assignments !'
  selectedAssignment!: Assignment | any;
  assignments: Assignment[] | undefined;

  addAssignmentVisible = false;
  
  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.assignmentsService.getAssignments().subscribe(assignments => {
      this.assignments = assignments;
    });
  }
 
  assignmentClick(assignment: Assignment){
    this.selectedAssignment = assignment;
  }

  onAddAssignment(){
      //this.addAssignmentVisible = !this.addAssignmentVisible;
  }

  /*onNewAssignment(event:Assignment){
    this.assignmentsService.addAssignment(event);
    this.addAssignmentVisible = false;
  }*/

  onAssignmentDelete(event:Assignment){
    this.selectedAssignment = undefined;
  }
}
