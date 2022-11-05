import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-add',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  nomDevoir:string = ""; 
  dateDeRendu!:Date;
  ajoutActive = false;

  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit(nom:string) {
    const newAssignment = new Assignment();
    newAssignment.id = this.assignmentsService.assignments[this.assignmentsService.assignments.length - 1].id + 1;
    newAssignment.nom = nom;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    newAssignment.id = Math.floor(Math.random() * 1000000);
    this.assignmentsService.addAssignment(newAssignment);

    this.router.navigate(['/home']);
  }
}
