import { httpGet, type ApiListResponse } from './http.service'

type ApiWarehause = {
  id: number
  name: string
  status?: boolean | null
}

export type WarehauseRow = {
  id: number
  name: string
  status: string
}

type WarehausesResponse = ApiListResponse<{
  warehauses?: ApiWarehause[]
}>

const FALLBACK_WAREHAUSES: WarehauseRow[] = [
  { id: 1, name: 'Almacén 1', status: 'Activo' },
  { id: 2, name: 'Almacén 2', status: 'Activo' },
]

const normalizeWarehauses = (warehauses: ApiWarehause[] = []): WarehauseRow[] =>
  warehauses.map((warehause) => ({
    id: warehause.id,
    name: warehause.name,
    status: warehause.status === false ? 'Inactivo' : 'Activo',
  }))

/**
 * TODO: Implementar el consumo de API siguiendo el patrón de test.service.ts
 * 
 * Debes implementar esta función similar a listTests() en test.service.ts (líneas 31-43)
 * 
 * Pasos:
 * 1. Usar httpGet<WarehausesResponse>('/warehauses') para consumir el endpoint
 * 2. Extraer los almacenes de response.data?.warehauses
 * 3. Si no hay almacenes o el arreglo está vacío, retornar FALLBACK_WAREhauseS
 * 4. Si hay almacenes, normalizarlos con normalizeWarehauses() y retornarlos
 * 5. En caso de error, hacer console.warn y retornar FALLBACK_WAREhauseS
 * 
 * Ver ejemplo funcional en: src/services/test.service.ts (líneas 31-43)
 */
export const listWarehauses = async (): Promise<WarehauseRow[]> => {
  // TODO: Implementar consumo de API aquí
  // Ejemplo de cómo debe quedar (descomenta y adapta):
  /*
  try {
    const response = await httpGet<WarehausesResponse>('/warehauses')
    const warehauses = response.data?.warehauses
    if (!warehauses || warehauses.length === 0) {
      return FALLBACK_WAREhauseS
    }
    return normalizeWarehauses(warehauses)
  } catch (error) {
    console.warn('listWarehauses fallback:', error)
    return FALLBACK_WAREhauseS
  }
  */
  
  // Por ahora retorna datos mock
  return FALLBACK_WAREHAUSES
}

