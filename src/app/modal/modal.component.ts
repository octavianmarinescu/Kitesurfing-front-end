import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  onCloseClick(value: boolean): void {
    this.dialogRef.close(value);
  }

}
