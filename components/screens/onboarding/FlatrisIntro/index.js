// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  onNext: Function,
};

export default class FlatrisIntro extends Component<Props> {
  render() {
    const { onNext } = this.props;

    return (
      <Screen
        title="您好!"
        message={
          <Fragment>
            <p>
              <span className="highlight">
                Flatris是一款经典的
                <br />
                俄罗斯方块对战游戏。
                <br />
              </span>
            </p>
            <p>
              <strong>多种类型的方块</strong>
              <br />
              方块将会从上方落下
              <br />
              然后停在地面或者其
              <br />
              他方块的上方
            </p>
            <p>
              将这些方块组成一整行
              <br />
              他们就会消失并且变成
              <br />
              您的分数
            </p>
          </Fragment>
        }
        actions={[<Button onClick={onNext}>我知道啦</Button>]}
      />
    );
  }
}
