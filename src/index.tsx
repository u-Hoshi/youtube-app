import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from './Route';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

// 先程のグローバルスタイルをimport
import GlobalStyle from './GlobalStyle';

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />

        {/*
          アプリ全体の特殊なグローバルスタイリング
        */}
        <GlobalStyle />

        <RootRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
