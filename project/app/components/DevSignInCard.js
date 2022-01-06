import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'reactstrap';

const DevSignInCard = ({ dev }) => {
  return (
    <Card body>
      <h4>Dev Sign in</h4>
      {dev}
      <br />
    </Card>
  );
};

DevSignInCard.propTypes = {
  dev: PropTypes.string,
};

export default DevSignInCard;
