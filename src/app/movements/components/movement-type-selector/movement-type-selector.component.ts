import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MovementType } from '../../models/movementType';
import { movementService } from '../../movement.service';

@Component({
  selector: 'movement-type-selector',
  templateUrl: './movement-type-selector.component.html',
  styleUrls: ['./movement-type-selector.component.scss'],
})
export class MovementTypeSelectorComponent implements OnInit, OnChanges {
  public types:MovementType[] = null;
  public selected:MovementType[] = null;

  @Input() operator: 1|0;

  constructor(
    private service: movementService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes);
    this.getMovementTypes()
  }

  getMovementTypes(){
    this.service.getMovementTypes(this.operator)
      .then( types => this.types = types);
  }

}
