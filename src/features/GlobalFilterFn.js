export const globalFilterFn = (rows, columnIds, filterValue) => {
  const excludeColumn = 'image'

  return rows.filter(row => {
    return columnIds.some(id => {
      if (id === excludeColumn) {
        // Excluye esta columna del filtro global
        return true
      }
      // Aplica el filtro global al resto de las columnas
      const rowValue = row.getValue(id)
      return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase())
    })
  })
}
