import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLabMember, NavLabMemberIn } from '@components/nav';
import { HeaderDashboard } from '@components/header-dashboard';

class MemberPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <NavLabMember />
        <div
          style={{
            width: '100%',
            height: '100vh',
            flex: 1,
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <HeaderDashboard
            breadcrums={[
              { label: 'Viện khoa học không gian Hồ Chí Minh', to: '#' },
              { label: 'Dự án', to: '#' }
            ]}
          />
          <div style={{ padding: 10, display: 'flex', flex: 1 }}>
            <NavLabMemberIn />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    {}
  )(MemberPage)
);
