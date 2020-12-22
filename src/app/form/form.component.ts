import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data = {
    email: '',
    password: '',
  }

  constructor(
    private formService: FormService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  async handleForm() {
    try {
      const result = await this.formService.createUsers(this.data);
      this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
    }
  }

}
