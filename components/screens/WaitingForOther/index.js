// @flow

import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import Shake from '../../shared/effects/Shake';
import FadeIn from '../../shared/effects/FadeIn';
import Button from '../../shared/Button';
import Screen from '../shared/Screen';

import type { Player } from 'shared/types/state';

type Props = {
  disabled: boolean,
  curPlayer: Player,
  onPing: Function,
};

type LocalState = {
  isOtherPlayerIdle: boolean,
};

export default class WaitingForOther extends Component<Props, LocalState> {
  timeoutId: ?TimeoutID;

  state = {
    isOtherPlayerIdle: false,
  };

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isOtherPlayerIdle: true,
      });
    }, 30000);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { disabled, curPlayer, onPing } = this.props;
    const { isOtherPlayerIdle } = this.state;

    return (
      <Screen
        title="等待中..."
        message={
          <Fragment>
            <p>
              你的朋友有点慢
              <br />
              我们得慢慢等他
            </p>
            <p>
              <strong>提醒他动作麻利点!</strong>
            </p>
            {isOtherPlayerIdle && (
              <FadeIn>
                <p>
                  或许你的朋友已经离开
                  <br />
                  丢下你一个人在这
                  <br />
                  <Link href="/">
                    <a>加入其它的游戏?</a>
                  </Link>
                </p>
              </FadeIn>
            )}
          </Fragment>
        }
        actions={[
          <Shake time={curPlayer.ping}>
            <Button disabled={disabled} onClick={onPing}>
              提醒ta
            </Button>
          </Shake>,
        ]}
      />
    );
  }
}
