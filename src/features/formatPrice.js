export const formatPrice = (price, currency, conversionRate = 49) => {
  if (currency === 'bs') {
    price = price * conversionRate
  }
  // Aseguramos que el precio tenga siempre dos decimales
  let formattedPrice = Number(parseFloat(price)).toFixed(2)

  // Utilizamos Intl.NumberFormat para formatear sin el símbolo de moneda, manteniendo siempre dos decimales
  formattedPrice = new Intl.NumberFormat('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)

  return formattedPrice
}
