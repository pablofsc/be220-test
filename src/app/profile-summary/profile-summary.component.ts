import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    fetch('https://getmockuser-taktw2un5a-uc.a.run.app/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.username = data.name;
        this.level = data.level === 'purple' ? 'Nível Roxo' : undefined;
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });

  }

  username: string | undefined;
  level: string | undefined;

}
