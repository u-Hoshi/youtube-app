import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from '../../components/Logo';

import useStyles from './style';

export const DashboradHeader = () => {
  const styles = useStyles();
  return (
    <>
      <AppBar elevation={0} color='inherit'>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <div className={styles.logo}>
            <Logo />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
