export enum ProductMutableProperties {
  ACTIVE = 'active',
  LINKED = 'linked',
  SELECTED_COLOR = 'selectedColor',
}

export enum ProductType {
  CARBON = 'carbon',
  PLASTIC_BOTTLES = 'plastic_bottles',
  TREES = 'trees',
}

export enum ProductWidgetAction {
  COLLECTS = 'collects',
  OFFSETS = 'offsets',
  PLANTS = 'plants',
}

export enum ProductWidgetColor {
  BLACK = 'black',
  BLUE = 'blue',
  BEIGE = 'beige',
  GREEN = 'green',
  WHITE = 'white',
}

export interface ProductWidget {
  readonly action: ProductWidgetAction
  active: boolean
  readonly amount: number
  readonly id: string
  linked: boolean
  selectedColor: ProductWidgetColor
  readonly type: ProductType
}
