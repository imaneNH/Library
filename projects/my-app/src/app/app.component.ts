import { Component } from '@angular/core';
import { MenuItem } from 'chafaf-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columns = ['Name', 'Age', 'Email'];
  data = [
    { Name: 'John Doe', Age: 28, Email: 'john.doe@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane.smith@example.com' },
    { Name: 'Sam Johnson', Age: 45, Email: 'sam.johnson@example.com' }
  ];
  title = 'myApp';

  logoUrl = 'https://chafaf.org/assets/img/logochafaf.png';
  menuItems: MenuItem[] =  [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'More', link: '#', subItems: [
          { label: 'Subitem 1', link: '#' },
          { label: 'Subitem 2', link: '#' },
          { label: 'Subitem 3', link: '#' }
        ]
    },
    { label: 'Contact', link: '#' }
  ];
  languageFlags = [
    { url: 'https://cdn.countryflags.com/thumbs/spain/flag-round-250.png', code: 'es' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/768px-United-states_flag_icon_round.svg.png', code: 'en' },
    { url: 'https://cdn.countryflags.com/thumbs/france/flag-round-250.png', code: 'fr' },
    { url: 'https://cdn.countryflags.com/thumbs/morocco/flag-round-250.png', code: 'ar' }
  ];

  onLanguageChange(lang: string) {
    console.log(`Language changed to: ${lang}`);
  }
}
