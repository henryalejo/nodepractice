import {Component, View, bootstrap, NgFor} from 'node_modules/angular2';

@Component ({
	selector: 'display',
	appInjector: [FriendsService]
})
@View({
	template:  `
  <p>My name: {{ myName }}</p>
  <p>Friends:</p>
  <ul>
     <li *ng-for="#name of names">
        {{ name }}
     </li>
  </ul>
`
,
	directives : [NgFor]
})
/**
 * DisplayComponent
 *
 */
class DisplayComponent {
	myName: string;
	names: Array<string>;
	constructor(friendService: FriendsService) {
		this.myName = "Alice";
		this.names	=	friendService.names;
	}
}
class FriendsService {
  names: Array<string>;
  constructor() {
    this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}