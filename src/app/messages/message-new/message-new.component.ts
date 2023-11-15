import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit{
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  priorities: string[] = ['High', 'Medium', 'Low'];
  departments: any[] = [
    {
      id: 1,
      name: 'complaints'
    },
    {
      id: 2,
      name: 'loyalty'
    },
    {
      id: 3,
      name: 'promotions'
    }
  ];
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['',Validators.required],
      priorityCtrl:['', Validators.required],
      departmentCtrl:['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required]
    })
  }

  getDepartmentName(department:any){
    return department ? department['name'] : undefined;
  }
}
