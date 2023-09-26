import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foods } from '../shared/Models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: foods[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router;
    this.foods = this.fs.getAll();
  }
}
