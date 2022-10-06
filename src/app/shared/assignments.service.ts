import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

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

  constructor(private loggingService: LoggingService) { }

  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment){
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "added");
  }

  deleteAssignment(assignment: Assignment){
    let assignmentCur = this.assignments.indexOf(assignment);
    this.assignments.splice(assignmentCur, 1);
    this.loggingService.log(assignment.nom, "deleted");
  }

  updateAssignment(assignment: Assignment){
    let assignmentCur = this.assignments.indexOf(assignment);
    this.assignments[assignmentCur].rendu = true;
    this.loggingService.log(assignment.nom, "updated");
  }
}
