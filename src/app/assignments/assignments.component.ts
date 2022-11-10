import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  page: number=1;
  limit: number=10;
  totalDocs!: number;
  totalPages!: number;
  hasPrevPage!: boolean;
  prevPage!: number;
  hasNextPage!: boolean;
  nextPage!: number;
 

  titre = 'Mon application sur les assignments';

  assignments!: Assignment[];

  assignmentSelectionne!: Assignment;

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit() {
    this.getAssignments(1, 10);
}

getAssignments(index: number, size: number){
  this.assignmentsService.getAssignmentsPagine(this.page, this.limit)
  .subscribe(data => {
    this.assignments = data.docs;
    this.page = data.page;
    this.limit = data.limit;
    this.totalDocs = data.totalDocs;
    this.totalPages = data.totalPages;
    this.hasPrevPage = data.hasPrevPage;
    this.prevPage = data.prevPage;
    this.hasNextPage = data.hasNextPage;
    this.nextPage = data.nextPage;
    console.log("données reçues");
  });
}

  onAssignmentClicke(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  pagineChanged(event: any){
    this.getAssignments(event.pageIndex+1, event.pageSize);
  }
}
