import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';
import {RepDialogComponent} from 'src/app/customer/rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit{

  emailFormControl!: FormControl;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
  }

  openRepDialog(){
    const dialogRef = this.dialog.open(RepDialogComponent,{
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result =>{
      alert(`User chose ${result}`);
    });
  }

  openUndoSnackBar(){
    const snackBarRef = this.snackBar.open('Customer Saved','UNDO',{
      horizontalPosition: 'end'
    });

    snackBarRef.onAction().subscribe(()=>{
      alert('Undo that save');
    });
  }
}
