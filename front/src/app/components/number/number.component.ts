import { Component } from '@angular/core';

@Component({
  selector: 'app-number',
  imports: [],
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
nums=[
  {img:'../../../assets/images/num/employee.svg', number:'5024', title:'Employees'},
  {img:'../../../assets/images/num/customer.svg', number:'36973', title:'Customers'},
  {img:'../../../assets/images/num/branches.svg', number:'339', title:'Branches'},
  {img:'../../../assets/images/num/woman.svg', number:'50%', title:'Of Women In Our Portfolio' },
  {img:'../../../assets/images/num/Group.svg', number:'227327', title:'Insurance Policies Issued'},
  {img:'../../../assets/images/num/youth.svg', number:'64', title:'% Of Youth In Our Portfolio'},


]
}
