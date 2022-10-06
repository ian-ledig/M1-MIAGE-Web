import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() selectedAssignment!: Assignment;
  @Output() assignmentToDelete = new EventEmitter<Assignment>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteAssignment(){
    this.assignmentToDelete.emit(this.selectedAssignment);
  }
}
