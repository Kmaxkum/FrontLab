import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dropbox } from 'dropbox';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class AdminDropboxService{  
  constructor(private http: HttpClient, private sanitizer : DomSanitizer){ }

  getImage(model: String) {
    const accessToken  = 'LcWjlZQRcfAAAAAAAAAAEaC6QskZ0EcAnInodKY5oZGdeZRCJAF4nPYwjI1nZ_OO';

    const dbx = new Dropbox({  
      accessToken,  
      fetch  
    });

    console.log(model);

    dbx.filesDownload({  
      path: `/${model}.jpeg`
    }).then(response => {
      console.log(response);
      this.post("");
     })
  }

  header = new HttpHeaders({
    //'Content-Type': 'application/json',
    'Dropbox-API-Arg': '{\"path\": \"/comm.txt\"}',
    // 'Dropbox-API-Arg': '{"path":"/Реново.jpeg"}',
    'Authorization': 'Bearer LcWjlZQRcfAAAAAAAAAAEaC6QskZ0EcAnInodKY5oZGdeZRCJAF4nPYwjI1nZ_OO'
  }
  )

  post(name : string) {
    this.http.post('https://content.dropboxapi.com/2/files/download', null , {headers: this.header}).subscribe(data => console.log(data));
  }
}