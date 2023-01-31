import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  listsById: any;

  lists: any = [];
  tasks: any = [];
  tasksTable: any = [];
  webVersion: string = '0.0.1';
  selectedListId!: string;

  users: any = [];
  load: any = 1;
  load2: any = 1;
  loadBtn: any= 1;
  loadProfile: any= 1;

  showProfile: any=0;
  loadBtnLog: any = 1;
  constructor(
    private taskService : TaskService,
    private route: ActivatedRoute ,
    private router: Router, 
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.load2 = 0;
    if (localStorage.getItem('user') === null) {
      this.logout();
    } else {
      this.users  = localStorage.getItem('user');
      this.users = JSON.parse(this.users);
    }

  }


  logout() {
    this.loadBtnLog = 0;
    setTimeout(() => {  
      this.authService.logout();
      this.loadBtnLog = 1;
    }, 1000);

  }

}
