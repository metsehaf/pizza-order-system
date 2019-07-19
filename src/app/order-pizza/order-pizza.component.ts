import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';


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
  pizzaForm: FormGroup;
  selectedSmallValues = [];
  selectedMediumValues = [];
  selectedLargeValues = [];
  selectedExtraLargeValues = [];
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.pizzaForm = this._fb.group({
      smaPizza: this.addSmallPizzaControls(),
      medPizza: this.addMediumPizzaControls(),
      larPizza: this.addLargePizzaControls(),
      extPizza: this.addExtraLargePizzaControls()
    });
  }

  addSmallPizzaControls() {
    const arr = this.smallPizza.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  addMediumPizzaControls() {
    const arr = this.mediumPizza.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  addLargePizzaControls() {
    const arr = this.largePizza.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  addExtraLargePizzaControls() {
    const arr = this.extraLargePizza.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }
// Get Alias using getter method
  get smallPizzaArray() {
    return <FormArray>this.pizzaForm.get('smaPizza');
  }

  get mediumPizzaArray() {
    return <FormArray>this.pizzaForm.get('medPizza');
  }

  get largePizzaArray() {
    return <FormArray>this.pizzaForm.get('larPizza');
  }

  get extraLargePizzaArray() {
    return <FormArray>this.pizzaForm.get('extPizza');
  }

  //Get checkbox values

  getSelectedSmallValues() {
    this.selectedSmallValues = [];
    this.smallPizzaArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedSmallValues.push(this.smallPizza[i]);
      }
    });
  }

  getSelectedMediumValues() {
    this.selectedMediumValues = [];
    this.mediumPizzaArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedMediumValues.push(this.mediumPizza[i]);
      }
    });
  }

  getSelectedLargeValues() {
    this.selectedLargeValues = [];
    this.largePizzaArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedLargeValues.push(this.largePizza[i]);
      }
    });
  }

  getSelectedExtraLargeValues() {
    this.selectedExtraLargeValues = [];
    this.extraLargePizzaArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedExtraLargeValues.push(this.extraLargePizza[i]);
      }
    });
  }
}
