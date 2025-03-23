import { formatDistanceToNow } from 'date-fns';

const formatDateToNow = postedAt =>
  formatDistanceToNow(new Date(postedAt), {
    addSuffix: true,
  });

export default formatDateToNow;
