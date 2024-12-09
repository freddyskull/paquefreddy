import { formatDistance, parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
export const formatDistanceInDays = (date1, date2) => {
  // Calculamos la distancia completa
  const parsedDate = parseISO(date2); 
  const formattedDate = format(parsedDate, 'yyyy-MM-dd')
  const fullDistance = formatDistance(date1, formattedDate, {  locale: es });
  return fullDistance.replace('alrededor de ', '').replace('casi ', '').replace('más de ', '')
};

