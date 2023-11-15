import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: "2lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: "5lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: "1lbs of tuna",
    isChecked: true
  },
  {
    orderDate: new Date(),
    orderNumber: 103,
    total: 29.99,
    description: "2lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 104,
    total: 39.99,
    description: "5lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 105,
    total: 59.99,
    description: "1lbs of tuna",
    isChecked: true
  },
  {
    orderDate: new Date(),
    orderNumber: 106,
    total: 29.99,
    description: "2lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 107,
    total: 39.99,
    description: "5lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 108,
    total: 59.99,
    description: "1lbs of tuna",
    isChecked: true
  },
  {
    orderDate: new Date(),
    orderNumber: 109,
    total: 29.99,
    description: "2lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 110,
    total: 39.99,
    description: "5lbs of tuna",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 111,
    total: 59.99,
    description: "1lbs of tuna",
    isChecked: true
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{
  displayedColumns: string[] = ['action','orderNumber','orderDate','description','total'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1,2,5,10];
  pageEvent!:PageEvent;

  ngOnInit(): void {
    this.loadData(0,this.pageSize);
  }

  loadData(pageIndex:number,pageSize:number){
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA.slice(pageIndex,pageIndex+pageSize));
  }

  selectAll(){
    for(let elm of ELEMENT_DATA){
      elm.isChecked = !elm.isChecked;
    }
  }

  onPageChange(e:any){
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loadData(this.pageIndex,this.pageSize);
  }
}
