import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import PropType from 'prop-types';

const List = styled.ul``;

const Player = styled.li``;

const PlayerList = ({ players }) => (
  <List>
    {map(players, (p) => (
      <Player key={p}>{p}</Player>
    ))}
  </List>
);

PlayerList.propTypes = {
  players: PropType.arrayOf(PropType.string),
};

export default PlayerList;
