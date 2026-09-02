import { format } from 'date-fns';

export const formatDate = (date?: string, formatString: string = 'MMM yyyy') =>
  format(date ?? new Date(), formatString);
