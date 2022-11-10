import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { map, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
    private HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    url = "http://localhost:8010/api/assignments";

  constructor(private logginService:LoggingService, private http:HttpClient) { }

  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url);
  }

  // renvoie comme Observable l'assignment dont l'id est passé
  // en paramètre, ou undefined s'il n'existe pas
  getAssignment(id:number):Observable<Assignment> {
    return this.http.get<Assignment>(this.url + '/' + id)
      .pipe(map(a => {
        a.nom += " transformé avec un pipe...";
        return a;
      }));
  }

  addAssignment(assignment:Assignment):Observable<any> {
    return this.http.post<Assignment>(this.url, assignment, this.HttpOptions);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    return this.http.put<Assignment>(this.url, assignment);
  }

  deleteAssignement(assignment:Assignment) :Observable<any> {
    return this.http.delete(this.url + '/' + assignment._id);
  }

  getAssignmentsPagine(page: number, limit: number): Observable<any>{
    return this.http.get(this.url, {params: {page: page.toString(), limit:limit.toString()}});
  }

}
