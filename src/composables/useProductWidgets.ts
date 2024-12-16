import type { ProductWidget } from '@/types/product-widget'

const useProductWidgets = () => {
  const url: string = 'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets'

  const fetchProductWidgets = async (): Promise<ProductWidget[]> => {
    const response = await fetch(url)

    if (!response.ok) throw new Error('Failed to fetch products')

    const data = await response.json()

    return data
  }

  return {
    fetchProductWidgets,
  }
}

export default useProductWidgets
