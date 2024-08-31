import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popout',
  standalone: true,
  imports: [NgIf],
  templateUrl: './popout.component.html',
  styleUrl: './popout.component.css',
})
export class PopoutComponent {
  visible = false;

  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
}
