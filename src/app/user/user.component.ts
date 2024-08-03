import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  fullname: string = '';
  address: string = '';
  card: string = '';
  @Input() total:number;
  constructor(private router: Router) { this.total=0;}

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.router.navigate(['/success', `${this.fullname}`, this.total]);
    localStorage.clear();}

}
