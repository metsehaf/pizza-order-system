import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  smallPizza: Array<string | number> = ['Tomatoes - ( $1.00)',
              'Onions - ( $0.50)', 'Bell pepper - ( $1.00)',
              'Mushrooms – ($1.20)', 'Pineapple – ($0.75)',
              'Sausage ($1.00)', 'Pepperoni ($2.00)', 'Barbecue chicken ($3.00)'];
  mediumPizza: Array<string | number> = ['Tomatoes - ( $1.00)',
              'Onions - ( $0.50)', 'Bell pepper - ( $1.00)',
              'Mushrooms – ($1.20)', 'Pineapple – ($0.75)',
              'Sausage ($1.00)', 'Pepperoni ($2.00)', 'Barbecue chicken ($3.00)'];
  largePizza: Array<string | number> = ['Tomatoes - ( $1.00)',
              'Onions - ( $0.50)', 'Bell pepper - ( $1.00)',
              'Mushrooms – ($1.20)', 'Pineapple – ($0.75)',
              'Sausage ($1.00)', 'Pepperoni ($2.00)', 'Barbecue chicken ($3.00)'];
  extraLargePizza: Array<string | number> = ['Tomatoes - ( $1.00)',
              'Onions - ( $0.50)', 'Bell pepper - ( $1.00)',
              'Mushrooms – ($1.20)', 'Pineapple – ($0.75)',
              'Sausage ($1.00)', 'Pepperoni ($2.00)', 'Barbecue chicken ($3.00)'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
