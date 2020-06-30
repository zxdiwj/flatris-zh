// @flow

import React, { Fragment, Component } from 'react';
import { getCurPlayer, getOtherPlayer } from 'shared/reducers/game';
import Shake from '../../shared/effects/Shake';
import Button from '../../shared/Button';
import Invite from '../Invite';
import Screen from '../shared/Screen';

import type { User, Player, Game } from 'shared/types/state';

type Props = {
  disabled: boolean,
  curUser: User,
  game: Game,
  onRestart: Function,
};

export default class GameOver extends Component<Props> {
  render() {
    const { disabled, curUser, game, onRestart } = this.props;
    const curPlayer = getCurPlayer(game, curUser);
    const otherPlayer = getOtherPlayer(game, curPlayer);

    if (!otherPlayer) {
      return <Invite disabled={disabled} gameId={game.id} onPlay={onRestart} />;
    }

    return (
      <Screen
        title={getMultiTitle(curPlayer)}
        message={getMultiMessage(curPlayer, otherPlayer)}
        actions={[
          <Shake time={otherPlayer.ping}>
            <Button disabled={disabled} onClick={onRestart}>
              Again
            </Button>
          </Shake>,
        ]}
      />
    );
  }
}

function getMultiTitle(curPlayer: Player) {
  return curPlayer.status === 'LOST' ? '你暂时落后了!' : '你赢得了比赛!';
}

function getMultiMessage(curPlayer: Player, otherPlayer: Player) {
  const maxLosses = Math.max(curPlayer.losses, otherPlayer.losses);
  const numWins = maxLosses + 1;
  const numGames = numWins * 2 - 1;
  const bestOutOfMsg = `试试 ${numWins} 局 ${numWins}胜?`;

  if (curPlayer.status === 'LOST') {
    return (
      <Fragment>
        <p>
          在下一局游戏里
          <br />
          你会做得更好的
        </p>
        <p>
          <strong>{bestOutOfMsg}</strong>
        </p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <p>你打败了你的对手！</p>
      <p>
        <strong>{bestOutOfMsg}</strong>
      </p>
    </Fragment>
  );
}
