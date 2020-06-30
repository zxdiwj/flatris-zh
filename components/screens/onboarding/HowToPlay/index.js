// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../../shared/Button';
import Screen from '../../shared/Screen';

type Props = {
  disabled: boolean,
  onNext: Function,
};

export default class HowToPlay extends Component<Props> {
  render() {
    const { disabled, onNext } = this.props;

    return (
      <Screen
        title="玩法教学"
        message={
          <Fragment>
            <p>
              按 <strong>←</strong> 或者 <strong>→</strong> 来
              <br />
              移动下落中的方块
              <br />
              按 <strong>↑</strong> 来让方块旋转
              <br />
              按 <strong>↓</strong> 来让方块快速下落
            </p>
            <p>
              <span className="highlight">
                使用电脑端的方向键
                <br />
                或手机端的屏幕按键
              </span>
            </p>
            <p>准备好大干一场了吗？</p>
          </Fragment>
        }
        actions={[
          <Button disabled={disabled} onClick={onNext}>
            准备好了！
          </Button>,
        ]}
      />
    );
  }
}
