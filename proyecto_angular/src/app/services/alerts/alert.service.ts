// customClass: {
//   container: 'your-container-class',
//     popup: 'your-popup-class',
//     header: 'your-header-class',
//     title: 'your-title-class',
//     closeButton: 'your-close-button-class',
//     icon: 'your-icon-class',
//     image: 'your-image-class',
//     content: 'your-content-class',
//     input: 'your-input-class',
//     actions: 'your-actions-class',
//     confirmButton: 'your-confirm-button-class',
//     cancelButton: 'your-cancel-button-class',
//     footer: 'your-footer-class'
// }

import {Injectable} from '@angular/core';
import sweetAlert from 'sweetalert2'

export type AlertMessage = {
  title: string,
  content: string
};

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {
  }

  public showSuccess(message: AlertMessage) {
    sweetAlert.fire(message.title, message.content, 'success').then();
  }

  public showWarning(message: AlertMessage) {
    sweetAlert.fire(message.title, message.content, 'warning').then();
  }

  public showError(message: AlertMessage) {
    sweetAlert.fire(message.title, message.content, 'error').then();
  }


  public confirmDialog(message: AlertMessage): Promise<boolean>{
    const swalWithCustomButtons = sweetAlert.mixin({
      customClass: {
        actions: 'alert-confirm-button-container',
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    return swalWithCustomButtons.fire({
      title: message.title,
      text: message.content,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      return result.isConfirmed;
    })
  }


}
