import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Movement } from '../../models/movement';
import { MovementType } from '../../models/movementType';
import { MovementService } from '../../movement.service';

@Component({
  selector: 'movement-type-selector',
  templateUrl: './movement-type-selector.component.html',
  styleUrls: ['./movement-type-selector.component.scss'],
})
export class MovementDetailsComponent implements OnInit, OnChanges {

  public movementation = new Movement();

  public types:MovementType[] = null;

  @Input() operator: 1|0;

  constructor(
    private service: MovementService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.getMovementTypes()
  }

  getMovementTypes(){
    this.service.getMovementTypes(this.operator)
      .then( types => this.types = types);
  }

}
