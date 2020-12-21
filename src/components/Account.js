import React, { useContext } from 'react';
import { Card } from 'semantic-ui-react';
import { AccountContext } from '../providers/AccountProvider';



const Account = () => {

  const { username, dateJoined, membershipLevel } = useContext(AccountContext);

  return (
      <Card>
        <Card.Content>
          <Card.Header>{username}</Card.Header>
          <Card.Meta>
            Date joined: {dateJoined}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            Membership Level: {membershipLevel}
          </Card.Meta>
        </Card.Content>
      </Card>
  )
};

export default Account;