import { Component, OnInit } from '@angular/core';
import { MasterData } from './shared/masterdata.model';
import { DataService } from './shared/data.service';
import { Member } from './shared/member.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  masterData: MasterData;
  member: Member;

  constructor(private dataService : DataService) {
    
  }

ngOnInit(){
  this.masterData = new MasterData();
  this.member = new Member();
  this.GetMasterData();
}

GetMasterData () {
  this.dataService.GetMasterData().subscribe(
    data => {
      this.masterData = data;
    },
    err => {
      throw err;
    }
  );
}

onPostalNoChange(event) {
  if (event == null) {
    this.member.postalPlace = '';
  }
  else {
    this.masterData.postalCode.forEach(entry => {
      if (entry.code == event.code) {
        this.member.postalPlace = entry.city;
      }
    });
  }
}

}
