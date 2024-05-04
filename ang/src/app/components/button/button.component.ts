import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string | any;
  @Input() background: string | any;
  @Input() color: string | any;
  @Output() btnClick = new EventEmitter();

  ngOnInit() {}
  onClick() {
    this.btnClick.emit();
  }
}
