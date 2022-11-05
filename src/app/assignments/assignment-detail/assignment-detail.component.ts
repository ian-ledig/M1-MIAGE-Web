import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  /*@Input()*/ selectedAssignment!: Assignment | any;
  @Output() assignmentToDelete = new EventEmitter<Assignment>();

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  onUpdateAssignment(){
    this.assignmentsService.updateAssignment(this.selectedAssignment)
    .subscribe(msg => {
      console.log(msg);
      this.router.navigate(["/home"]);
    });
  }

  onDeleteAssignment(){
    this.assignmentsService.deleteAssignment(this.selectedAssignment);
    //this.selectedAssignment = undefined;
    this.router.navigate(["/home"]);
  }

  getAssignment(){
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id).subscribe(assignment => this.selectedAssignment = assignment);
  }

  onClickEdit(){
    this.router.navigate(
      ["/assignment", this.selectedAssignment.id, 'edit'],
      {
        queryParams:{nom: this.selectedAssignment.nom}, 
        fragment: 'edition'
      }
    );
  }
}
