import { listWarehauses, type WarehauseRow } from '../services/warehauses.service'

const WAREHAUSES_TABLE_BODY_ID = 'warehauses-table-body'

const renderTableRows = (warehauses: WarehauseRow[]) =>
  warehauses
    .map(
      (warehause) => `
    <tr>
      <td>${warehause.id}</td>
      <td>${warehause.name}</td>
      <td>${warehause.status}</td>
    </tr>
  `,
    )
    .join('')

const renderStatusRow = (message: string, isError = false) => `
  <tr>
    <td colspan="3" class="table-status ${isError ? 'error' : ''}">
      ${message}
    </td>
  </tr>
`

export const renderWarehausesModule = () => `
  <section class="module">
    <header class="module__header">
      <p class="eyebrow">Módulo</p>
      <h2>Almacenes</h2>
      <p class="muted">
        Lista de almacenes registrados. Esta tabla se conecta con <code>/api/v1/warehauses</code>
        para mostrar los datos reales.
      </p>
    </header>
    <div class="table-wrapper">
      <table class="module-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody id="${WAREHAUSES_TABLE_BODY_ID}">
          ${renderStatusRow('Cargando almacenes...')}
        </tbody>
      </table>
    </div>
  </section>
`

export const mountWarehausesModule = async () => {
  const tableBody = document.querySelector<HTMLTableSectionElement>(`#${WAREHAUSES_TABLE_BODY_ID}`)
  if (!tableBody) return

  const setRows = (rows: string) => {
    tableBody.innerHTML = rows
  }

  try {
    const warehauses = await listWarehauses()
    if (!warehauses.length) {
      setRows(renderStatusRow('No hay almacenes registrados.'))
      return
    }
    setRows(renderTableRows(warehauses))
  } catch (error) {
    console.error('mountWarehausesModule error:', error)
    setRows(renderStatusRow('No se pudieron cargar los almacenes.', true))
  }
}
