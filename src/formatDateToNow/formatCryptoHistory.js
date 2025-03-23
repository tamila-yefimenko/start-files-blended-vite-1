import { format } from 'date-fns';

const formatCryptoHistory = date => format(new Date(date), 'Pp');

export default formatCryptoHistory;
