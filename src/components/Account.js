import React from 'react';
import { Card } from 'semantic-ui-react';

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Date joined: dateJoined
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Card.Meta>
        Membership Level: membershipLevel
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default Account;