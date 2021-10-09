import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { HeaderTitle } from '../VideoCard/HeaderTitle';
import { SubHeaderContent } from '../VideoCard/SubHeaderContent';

export const VideoHorizontalCard = () => {
  return (
    // elevation={0} : box-shadowの影を削除する
    // square: border-radiusを削除する
    <Card elevation={0} square>
      {/*
        サムネイル用のメディアコンポーネントを作成
      */}
      <CardMedia image='/static/no-image.jpg' title='Thumbnail' />

      {/*
        `Home`で作成した<HeaderTitle>と<SubHeaderContent>を流用する
      */}
      <CardHeader title={<HeaderTitle />} subheader={<SubHeaderContent />} />
    </Card>
  );
};
