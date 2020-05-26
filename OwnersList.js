import 'https://unpkg.com/react@16/umd/react.production.min.js';
import 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js';

import OwnerLink from './OwnerLink.js';

const OwnersList = (props) =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement('h2', null, 'Owners'),
    React.createElement(
      'ul',
      null,
      props.owners.map((owner) =>
        React.createElement(
          'li',
          { key: owner.id },
          React.createElement(OwnerLink, owner)
        )
      )
    )
  );

OwnersList.defaultProps = {
  owners: [],
};

export default OwnersList;
