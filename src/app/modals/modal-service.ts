import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProgramModal } from './edit-program-modal';

import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    
  constructor(private modalService: NgbModal) {
}

    openModal(workouts): Promise<any> {
        const modalRef = this.modalService.open(EditProgramModal);
        modalRef.componentInstance.error = workouts;
        return modalRef.result;
      }
  }
