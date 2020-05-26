import 'https://unpkg.com/react@16/umd/react.production.min.js';
import 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js';

import PetDetailList from './PetDetailList.js';
import OwnersList from './OwnersList.js';

const PetDetails = (props) =>
  React.createElement(
    'div',
    null,
    React.createElement(PetDetailList, props.pet),
    React.createElement(OwnersList, { owners: props.pet.Owners })
  );

PetDetails.defaultProps = {
  pet: {},
};

export default PetDetails;
