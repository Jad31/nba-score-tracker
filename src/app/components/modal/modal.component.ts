import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();

  handleCloseModal() {
    this.closeModal.emit(true);
  }
}
