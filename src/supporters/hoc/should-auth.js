import React from 'react';
import { connect } from 'react-redux';
import { getCookie } from '@supporters/utils/cookies';
import { Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  signInSuccess as signInSuccessAction,
  getProfile as getProfileAction
} from '@supporters/store/redux/actions/auth.actions';
import { get } from 'lodash';

export function shouldAuth(ComposedComponent, destUrl = null) {
  function WrappedComponent({ user, ...props }) {
    const token = getCookie('token');
    const role = getCookie('role');

    if (token && role && (user.token && user.role)) {
      return <ComposedComponent {...props} />;
    }

    return <Redirect push to={{ pathname: '/sign-in', state: { destUrl } }} />;
  }

  const mapStateToProps = state => ({
    user: get(state, ['authReducer', 'user'])
  });

  const ConnectedWrappedComponent = withRouter(
    connect(
      mapStateToProps,
      null
    )(WrappedComponent)
  );

  return ConnectedWrappedComponent;
}
