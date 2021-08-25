import useStyles from './style';

export const Logo = () => {
  // ② カスタムスタイルを生成し
  const styles = useStyles();
  return (
    <img
      className={styles.root}
      src='/static/yt_logo_rgb_light.png'
      alt='youtube Logo'
    ></img>
  );
};
