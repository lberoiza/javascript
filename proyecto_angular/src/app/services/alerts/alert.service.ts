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


  public confirmDialog(message: AlertMessage, confirmFunction: Function){
    const swalWithBootstrapButtons = sweetAlert.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: message.title,
      text: message.content,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        confirmFunction();
      }
    })
  }


}
