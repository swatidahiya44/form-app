import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FormService } from 'src/app/controllers/form.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  feedback: Feedback = {} as Feedback;
  constructor(private formService: FormService) {}
  
  onSubmit() {
    //console.log(this.feedback);
    this.formService.postFeedback(this.feedback).subscribe((resp) => {
      console.log(resp);
      alert("feedback has been posted");
    }, (error)=> {
      alert("Not able to save!!")
    });
    //this.formService.getFeedback().subscribe((resp) => {
    //  console.log(resp);
    //  alert("feedback has been posted");
    //}, (error)=> {
    //  alert("Not able to save!!")
    //});

    
  }

}
