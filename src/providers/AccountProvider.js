import React from 'react'; // reminder to future self -- importing this is no longer necessary. I'm just doing because I feel like it.

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    username: 'Lindon',
    dateJoined: '12/18/20',
    membershipLevel: 'Platinum',
    updateAccount: (account) => this.updateAccount(account),
  };

  updateAccount = (account) => {
    this.setState({ ...account, });
  };

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;