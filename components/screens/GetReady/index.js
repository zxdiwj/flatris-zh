// @flow

import React, { Fragment, Component } from 'react';
import Shake from '../../shared/effects/Shake';
import Button from '../../shared/Button';
import Screen from '../shared/Screen';

import type { Player } from 'shared/types/state';

type Props = {
  disabled: boolean,
  otherPlayer: Player,
  onReady: Function,
};

export default class GetReady extends Component<Props> {
  render() {
    const { disabled, otherPlayer, onReady } = this.props;

    return (
      <Screen
        title="准备好了吗？"
        message={
          <Fragment>
            <p>
              双方准备就绪后
              <br />
              游戏就会开始
            </p>
            <p>
              <strong>祝你好运!</strong>
            </p>
          </Fragment>
        }
        actions={[
          <Shake time={otherPlayer.ping}>
            <Button disabled={disabled} onClick={onReady}>
              准备好了！
            </Button>
          </Shake>,
        ]}
      />
    );
  }
}
