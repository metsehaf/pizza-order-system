import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';


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
  pizzaForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.pizzaForm = this._fb.group({
      favPizza: this.addSmallPizzaControls()
    });
  }

  addSmallPizzaControls() {
    const arr = this.smallPizza.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  get SmallPizzaArray() {
    return <FormArray>this.pizzaForm.get('favPizza');
  }
}
