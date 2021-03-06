import React from 'react';
import { get } from 'lodash';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Assignment,
  Stars,
  Person,
  Build,
  AllInbox,
  Alarm
} from '@material-ui/icons';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Logo, Title, UserMin } from '@commons/components';
import color from '@supporters/utils/color';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '8px 0',
    '&:hover': {
      backgroundColor: color.background,
      color: color.main,
      fontWeight: 600
    }
  },

  selected: {
    backgroundColor: color.background,
    color: color.main
  }
};

class NavLabAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeState = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { classes, user } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 300,
          padding: 20,
          boxShadow: ' 6px 0px 18px rgba(0, 0, 0, 0.06)',
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        <Logo />
        <UserMin
          style={{ marginTop: 20 }}
          name={get(user, ['profile', 'fullname'], 'Tên của bạn')}
          description={get(user, ['profile', 'email'], 'Email của bạn')}
          hasDropdown
        />
        <Title>Quản lý</Title>
        <List>
          {[
            { icon: <Assignment />, text: 'Quản lý dự án' },
            { icon: <Stars />, text: 'Quản lý sự kiện' },
            { icon: <Person />, text: 'Quản lý thành viên' },
            { icon: <Build />, text: 'Quản lý dụng cụ' }
          ].map((tab, index) => (
            <ListItem
              classes={{
                root: classes.root,
                selected: classes.selected
              }}
              button
              key={index}
            >
              <ListItemIcon style={{ color: 'inherit' }}>
                {tab.icon}
              </ListItemIcon>
              <ListItemText>{tab.text}</ListItemText>
            </ListItem>
          ))}
        </List>

        <Title>Yêu cầu</Title>
        <List>
          {[
            { icon: <AllInbox />, text: 'Yêu cầu sử dụng lab' },
            { icon: <Build />, text: 'Yêu cầu mượn dụng cụ' },
            { icon: <Alarm />, text: 'Lịch hẹn' }
          ].map((tab, index) => (
            <ListItem
              classes={{
                root: classes.root,
                selected: classes.selected
              }}
              button
              key={index}
            >
              <ListItemIcon style={{ color: 'inherit' }}>
                {tab.icon}
              </ListItemIcon>
              <ListItemText>{tab.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: get(state, ['authReducer', 'user'])
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(withStyles(styles)(NavLabAdmin))
);
