import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
// import { OneDrive } from 'https://js.live.net/v7.0/OneDrive.js';
// import { test1 } from '../assets/javascript/demo';
// import * as variable from 'variableName';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  title = 'angular-tour-of-heroes';
  constructor(private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    // console.log(test1());
    // console.log(this.downloadFile());
    // launchOneDrivePicker();
    // this.downloadFile().subscribe(resp => {
    //   console.log(resp.body);
    // })
  }

  launchOneDrivePicker() {
    let odOptions = {
      clientId: "fee96388-e795-4c0c-9378-8b9b6b87822a",
      action: "download",
      multiSelect: true,
      openInNewWindow: true,
      advanced: {},
      success: function (files) { console.log(files),alert("success") },
      cancel: function () { alert("cancel") },
      error: function (e) { alert("error") }
    };
    OneDrive.open(odOptions);
  }

  launchSaveToOneDrive() {
    let odOptions = {
      clientId: "fee96388-e795-4c0c-9378-8b9b6b87822a",
      action: "save",
      sourceInputElementId: "fileUploadControl",
      sourceUri: "",
      fileName: "file.txt",
      multiSelect: true,
      openInNewWindow: true,
      advanced: {},
      success: function (files) { console.log(files), window.open(files.value[0].webUrl) },
      cancel: function () { alert("cancel") },
      error: function (e) { alert("error") }
    };
    OneDrive.save(odOptions);
  }

  downloadFile() {
    // return this.httpClient.post<any>("http://localhost:3000/manage-document/downloadDocument",
    return this.httpClient.get<any>("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4e28ba57-157d-4ba4-8966-32f945fbfeba&scope=files.readwrite.all&response_type=token&redirect_uri=http://localhost:4200/myapp",

    ).pipe(
      tap()
    );
  }
}



