/**
 * Formatea un precio según la configuración de redondeo
 * @param {number} price - El precio a formatear
 * @param {boolean} roundPrice - Indica si se debe redondear el precio a números enteros
 * @returns {string} El precio formateado
 */
export const formatPrice = (price, roundPrice = false) => {
  if (price == null) return 'N/A';
  if (price % 1 === 0) return price.toString();
  return price.toFixed(roundPrice ? 0 : 2).replace(/\.?0+$/, '').replace('.', ',');
};
