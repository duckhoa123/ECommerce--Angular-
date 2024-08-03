import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  fullName: string = '';
  total: number = 0;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.fullName = this.route.snapshot.paramMap.get('fullName') || '';
    this.total =Number( this.route.snapshot.paramMap.get('totalPrice') || '');
  }
}
