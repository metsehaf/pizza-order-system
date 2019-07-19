import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  smallPizza: Array<string | number> = [1, 0.50, 1, 1.20, 0.75, 1, 2, 3];
  mediumPizza: Array<string | number> = [1, 0.50, 1, 1.20, 0.75, 1, 2, 3];
  largePizza: Array<string | number> = [1, 0.50, 1, 1.20, 0.75, 1, 2, 3];
  extraLargePizza: Array<string | number> = [1, 0.50, 1, 1.20, 0.75, 1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
