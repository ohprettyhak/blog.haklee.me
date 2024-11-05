import dayjs, { extend } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

extend(relativeTime);

export const formatDate = (date: string): string => {
  if (!date || !dayjs(date).isValid()) {
    return 'Invalid date';
  }

  const postDate = dayjs(date);
  const now = dayjs();

  if (now.diff(postDate, 'month') >= 13) {
    return postDate.format('YYYY-MM-DD HH:mm');
  }

  return postDate.fromNow();
};
