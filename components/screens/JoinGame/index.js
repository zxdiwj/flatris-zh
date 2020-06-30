// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../shared/Button';
import Screen from '../shared/Screen';

type Props = {
  disabled: boolean,
  onWatch: Function,
  onJoin: Function,
};

export default class JoinGame extends Component<Props> {
  render() {
    const { disabled, onWatch, onJoin } = this.props;

    return (
      <Screen
        title="加入游戏"
        message={
          <Fragment>
            <p>
              <strong>还剩下一个空位!</strong>
            </p>
            <p>
              您可以观战他(她)的游戏
              <br />
              也可以和他(她)对决
            </p>
            <p>What will it be?</p>
          </Fragment>
        }
        actions={[
          <Button disabled={disabled} onClick={onJoin}>
            对决
          </Button>,
          <Button
            disabled={disabled}
            bgColor="#fff"
            color="#34495f"
            colorDisabled="rgba(52, 73, 95, 0.6)"
            onClick={onWatch}
          >
            观战
          </Button>,
        ]}
      />
    );
  }
}
