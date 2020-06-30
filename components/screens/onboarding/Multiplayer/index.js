// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  onNext: Function,
};

export default class Multiplayer extends Component<Props> {
  render() {
    const { onNext } = this.props;

    return (
      <Screen
        title="一对一单挑"
        message={
          <Fragment>
            <p>
              <span className="highlight">
                两位对战的玩家会
                <br />
                获得形状完全一样的方块
                <br />
                这是公平的对决
              </span>
            </p>
            <p>
              你们将独立的进行游戏
              <br />
              当然，你可以看到你的<br />
              对手的影子<br />
            </p>
          </Fragment>
        }
        actions={[<Button onClick={onNext}>好的</Button>]}
      />
    );
  }
}
