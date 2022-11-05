import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  url = "http://localhost:8010/api/assignments";
  assignments:Assignment[] = [
    {
      id: 1,
      nom: "TP de Java",
      dateDeRendu: new Date("2021-03-01"),
      rendu: true
    }, {
      id: 2,
      nom: "TP de React",
      dateDeRendu: new Date("2021-09-28"),
      rendu: false
    }, {
      id: 3,
      nom: "TP d'Angular",
      dateDeRendu: new Date("2021-09-22"),
      rendu: true
    },
  ]

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient  
  ) { }

  getAssignments(): Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url);
  }

  addAssignment(assignment: Assignment): Observable<any>{
    return this.http.post<Assignment>(this.url, assignment);
  }

  deleteAssignment(assignment: Assignment){
    return this.http.delete(this.url + '/' + assignment.id);
  }

  updateAssignment(assignment:Assignment): Observable<any> {
    return this.http.put<Assignment>(this.url, assignment);
  }

  getAssignment(id: number) : Observable<Assignment> {
    return this.http.get<Assignment>(this.url + "/" + id);
  }
}
