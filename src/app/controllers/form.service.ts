
import { Feedback } from 'src/app/models/feedback.model';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MyFormComponent } from './my-form/my-form.component';
//import {Observable} from 'rxjs/Observable';
 
//const httpOptions = {
//    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};
 
@Injectable()
export class FormService {
    feedback: Feedback = {} as Feedback;
    constructor(private httpClient:HttpClient) {}
    postFeedback(feedback) {
        console.log(feedback);
        return this.httpClient.post('/api/feedback', feedback);
    }
}

