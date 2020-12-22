import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  customers: any = [];
  constructor(
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retriveformuserlist();
  }

  //retrive the user list
  async retriveformuserlist() {
    try {
      const result = await this.formService.retriveUsers();
      this.customers = result;
      console.log(result)
    }
    catch (error) {
      console.error(error);
    }
  }

  //delete the user list
  async delete(id) {
    try {
      const result = await this.formService.deleteUserList(id);
      this.customers = result;
      console.log(result)
    }
    catch (error) {
      console.error(error);
    }
  }



}
