import { Component } from '@angular/core';
import { MenuItem } from 'chafaf-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  logoUrl = 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp';
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
