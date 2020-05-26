import 'https://unpkg.com/react@16/umd/react.production.min.js';
import 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js';

import Navigation from './Navigation.js';
import PetDetails from './PetDetails.js';


const PetDetailPage = (props) =>
  React.createElement(
    'div',
    null,
    React.createElement(Navigation, null),
    React.createElement(PetDetails, { pet: props.pet })
  );

const target = document.querySelector('main');

const app = React.createElement(PetDetailPage, null);

ReactDOM.render(app, target);

(async () => {
  const url = 'https://polar-beach-08187.herokuapp.com/api/pets/2';
  const res = await fetch(url);
  if (!res.ok) throw res;

  const pet = await res.json();
  console.log(pet);

  const app = React.createElement(PetDetailPage, { pet });
  ReactDOM.render(app, target);
})();
