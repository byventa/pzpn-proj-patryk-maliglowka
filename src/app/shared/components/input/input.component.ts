import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-c',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() name!: string;
  @Input() label!: string;
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {}
}
