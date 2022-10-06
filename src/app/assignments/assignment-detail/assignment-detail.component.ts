import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() selectedAssignment!: Assignment | any;
  @Output() assignmentToDelete = new EventEmitter<Assignment>();

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
  }

  onUpdateAssignment(){
    this.assignmentsService.updateAssignment(this.selectedAssignment);
  }

  onDeleteAssignment(){
    this.assignmentsService.deleteAssignment(this.selectedAssignment);
    this.selectedAssignment = undefined;
  }
}
