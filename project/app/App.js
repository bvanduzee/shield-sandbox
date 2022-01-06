import React from 'react';
import { Container } from 'reactstrap';
import PageHeader from '@availity/page-header';
import Spaces from '@availity/spaces';
import BlockUi from 'react-block-ui';
import { Footer, DevSignInCard } from '@/components';

const App = () => {
  return (
    <Container data-testid="sso-container" className="container-sm">
      <Spaces clientId="test">
        <PageHeader appName="Dev Sign In" />
        <BlockUi>
          <DevSignInCard dev="William VanDuzee" />
        </BlockUi>
      </Spaces>
      <Footer />
    </Container>
  );
};

export default App;
