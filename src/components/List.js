import React from 'react';
import shortid from 'shortid';
import Video from './Video';
import Article from './Article';
import rating from './rating';

const RatingVideo = rating(Video);
const RatingArticle = rating(Article);

export default function VideoList(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return (
          <RatingVideo {...item} key={shortid.generate()} />
        );

      case 'article':
        return (
          <RatingArticle {...item} key={shortid.generate()} />
        );

      default:
        return '';
    }
  });
};
