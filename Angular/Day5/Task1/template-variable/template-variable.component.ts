import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent  {

  newtask:string="";

  public  ToDoListArray:any[] = [
    {Task  :  "Learn ReactJs basics",IsChecked:true },
    {Task  :  "Pratice ReactJS", IsChecked:false },
    {Task  :  "Learn Redux", IsChecked:false },
    {Task  :  "code Portfolio in React", IsChecked:false },
    {Task  :  "Learn React Navie", IsChecked:false }
   ];

   newElement()
   {  
    this.ToDoListArray.push({Task:this.newtask,IsChecked:false});
   }

   onCheckboxChange(task:string){
    let taskObj:any = this.ToDoListArray.find(item => item.Task == task);
    if(taskObj.IsChecked == true)
    taskObj.IsChecked = false;
    else{
      taskObj.IsChecked = true;
    }
   }

   delete_click(index:number)
   {
    this.ToDoListArray.splice(index, 1);
   }

   deleteAll_click()
   {
    this.ToDoListArray= [];
   }
   
   checkAll_click()
  {
    this.ToDoListArray.forEach((element, ) => {

    const index = this.ToDoListArray.findIndex(element => element.IsChecked ==true); // find done task
    const result = this.ToDoListArray.splice(index, 1)  
});

  }
}
