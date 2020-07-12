import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';
import theme from './theme';

import Box from './components/Box';
import Button from './components/Button';
import GradientText from './components/GradientText';
import TextInputAction from './components/TextInputAction';
import PlayerList from './components/PlayerList';
import QuestionCard from './components/QuestionCard';
import AnswerCard from './components/AnswerCard';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Box>
        <h1>Manatees!</h1>
      </Box>
      <Box white>
        <h1>
          <GradientText>Manatees!</GradientText>
        </h1>
      </Box>
      <Box>
        <Button>Relax</Button>
      </Box>
      <Box>
        <TextInputAction actionLabel={'Save'} />
      </Box>
      <Box>
        <PlayerList players={['Al', 'Barb', 'Carl']} />
      </Box>
      <Box>
        <QuestionCard question={'Why did the manatee cross the road?'} />
      </Box>
      <Box>
        <AnswerCard answer={'To get to the other side.'} />
      </Box>
    </div>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
