import 'https://unpkg.com/react@16/umd/react.production.min.js';
import 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js';

const OwnerLink = (props) =>
  React.createElement(
    'a',
    { href: props.href },
    `${props.firstName} ${props.lastName}`
  );

export default OwnerLink;
