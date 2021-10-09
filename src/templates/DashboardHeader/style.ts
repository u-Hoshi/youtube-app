import { makeStyles } from '@material-ui/core';

// カスタム用のCSSを生成してくれる、@material-uiの機能
export default makeStyles({
  // 追加
  between: {
    justifyContent: 'space-between',
  },

  // 追加
  flex: {
    display: 'flex',
  },

  logo: {
    width: 100,
    display: 'flex',
    alignItems: 'center',

    // 追加
    marginLeft: 10,
  },
  profileIcon: {
    padding: 0,
    width: 44,
    height: 44,

    // 追加
    marginLeft: 10,
  },
});
