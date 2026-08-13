export const categoriesInfo = {
  bumazhniki: {
    label: 'Бумажники',
    description: 'Кожаные бумажники ручной работы',
  },
  sumki: {
    label: 'Сумки женские',
    description: 'Женские сумки из натуральной кожи',
  },
  ryukzaki: {
    label: 'Рюкзаки',
    description: 'Рюкзаки из высококачественной кожи',
  },
} as const;

export type CategoryId = keyof typeof categoriesInfo;

export function isCategoryId(id: string): id is CategoryId {
  return id in categoriesInfo;
}

export function getCategoryLabel(categoryId: string): string {
  if (isCategoryId(categoryId)) {
    return categoriesInfo[categoryId].label;
  }
  return categoryId;
}


export function getCategoryDescription(categoryId: string): string {
  if (isCategoryId(categoryId)) {
    return categoriesInfo[categoryId].description;
  }
  return '';
}

export const categoryList = (
  Object.entries(categoriesInfo) as [CategoryId, (typeof categoriesInfo)[CategoryId]][]
).map(([id, info]) => ({
  id,
  label: info.label,
  description: info.description,
}));