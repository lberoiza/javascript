import swal from "sweetalert";
import { SwalParams } from "sweetalert/typings/core";

class Alert {

  public showSuccess(content: string, title: string = '') {
    const alertOptions = {
      title: title,
      text: content,
      className: 'swal-dialog-customclass',
      timer: 2000,
      icon: 'success'
    }
    this.showAlert(alertOptions);
  }


  public showWarning(content: string, title: string) {
    const alertOptions = {
      title: title,
      text: content,
      icon: 'warning'
    }
    this.showAlert(alertOptions);
  }


  public showError(content: string, title: string = '') {
    const alertOptions = {
      title: title,
      text: content,
      icon: 'error'
    }
    this.showAlert(alertOptions);
  }


  public showConfirmDialog(text: string, title: string = '', buttons = ['Cancel', 'Accept']): Promise<any> {
    return this.showAlert({
      title: title,
      text: text,
      icon: "warning",
      buttons: buttons,
      dangerMode: true,
    })
  }


  public showAlert(...params: SwalParams): Promise<any> {
    return swal(...params);
  }
}

export default new Alert();