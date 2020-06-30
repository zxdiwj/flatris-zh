// @flow

import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Button from '../../shared/Button';
import Screen from '../shared/Screen';

type Props = {
  disabled: boolean,
  onWatch: Function,
};

export default class GameFull extends Component<Props> {
  render() {
    const { disabled, onWatch } = this.props;

    return (
      <Screen
        title="加入游戏"
        message={
          <Fragment>
            <p>
              <strong>本房间已满哦</strong>
            </p>
            <p>
              当然你可以观战或者
              <br />
              <Link href="/">
                <a>加入其他人的游戏</a>
              </Link>
              .
            </p>
          </Fragment>
        }
        actions={[
          <Button disabled>加入</Button>,
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
