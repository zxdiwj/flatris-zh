// @flow

import React, { Component, Fragment } from 'react';
import Button from '../../shared/Button';
import CopyGameLinkButton from '../shared/CopyGameLinkButton';
import Screen from '../shared/Screen';

import type { GameId } from 'shared/types/state';

type Props = {
  disabled: boolean,
  gameId: GameId,
  onPlay: Function,
};

export default class Invite extends Component<Props> {
  render() {
    const { disabled, gameId, onPlay } = this.props;

    return (
      <Screen
        title="1+1＞2"
        message={
          <Fragment>
            <p>
              <strong>
                 邀请朋友来一起玩
                <br />
                这会更加有趣！
              </strong>
            </p>
            <div className="copy">
              <CopyGameLinkButton disabled={disabled} gameId={gameId} />
            </div>
            <p>
              把链接发给你的朋友
              <br />
              在他来之前
              <br />
              你可以玩单人游戏。
            </p>
            <style jsx>{`
              .copy {
                position: relative;
                height: calc(100% / 11 * 2);
                margin: 1em 0;
              }
            `}</style>
          </Fragment>
        }
        actions={[
          <Button disabled={disabled} onClick={onPlay}>
            继续游戏
          </Button>,
        ]}
      />
    );
  }
}
