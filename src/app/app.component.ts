import { AfterViewInit, Component, Output, ViewChild } from '@angular/core';
import { task } from './tastinfo';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// export class AppComponent implements AfterViewInit {
export class AppComponent {
  title = 'ToDoList';
  tId = 1;
  taskname = '';
  duedate = '';
  tStatus = 'Pending';
  taskArr = task;
  tDetail = '';
  checkBox = false;
  taskEmojisad = '../assets/images/sad.png';
  taskEmojihappy = '../assets/images/happy.png';
  message = '';
  // msg = 'Hello World';
  // @ViewChild(DetailsComponent) child!: DetailsComponent;

  constructor() {}
  addTask(tName: string, tDue: string, tDetail: string) {
    this.tId = this.tId + 1;
    let obj = {
      taskid: this.tId,
      taskname: tName,
      duedate: tDue,
      status: this.tStatus,
      emoji: false,
      detail: tDetail,
      showhide: false,
    };

    this.taskArr.push(obj);
  }

  showHide(tId: number) {
    console.log(tId);
    if (this.taskArr[tId - 1].showhide == true) {
      this.taskArr[tId - 1].showhide = false;
    } else {
      this.taskArr[tId - 1].showhide = true;
    }
  }

  deleteTask(tId: number) {
    console.log(tId);
    // delete this.taskArr[tId];
    this.taskArr = this.taskArr.filter((item) => item.taskid !== tId);
  }

  // emojiShow(emo:any) {
  //   if(this.taskArr[emo]){

  //   }
  // }

  // ngAfterViewInit() {
  //   this.message = this.child.msg;
  //   console.log(this.message);
  // }

  receiveMessage(event: any) {
    this.message = event;
    console.log(this.message);
  }

  ngOnChange() {
    console.log('ngOnChange');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngDoCheck() {
    console.log('ndDOCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
}
