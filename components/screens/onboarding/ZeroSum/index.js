// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  onNext: Function,
};

export default class ZeroSum extends Component<Props> {
  render() {
    const { onNext } = this.props;

    return (
      <Screen
        title="特殊机制"
        message={
          <Fragment>
            <p>
              <span className="highlight">
                您消除的每一行都会
                <br />
                被加到您对手方块的
                <br />
                最下方，反之亦然。
              </span>
            </p>
            <p>
              <strong>
                这是竞争性的比赛！
                <br />
              </strong>{' '}
              一个玩家的优势
              <br />
              就是另一个玩家的劣势
            </p>
            <p>快速消除方块来赢得比赛！</p>
          </Fragment>
        }
        actions={[<Button onClick={onNext}>好的</Button>]}
      />
    );
  }
}
