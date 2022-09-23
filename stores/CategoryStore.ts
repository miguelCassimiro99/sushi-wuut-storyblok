import { defineStore } from 'pinia'

interface ICategory {
  name: string
  uuid: string
}

interface ICategoryState {
  categoryList: ICategory[]
  category: ICategory | null
}

export const useCategoryStore = defineStore('category', {
  state: () => {
    return {
      category: {} as ICategory,
      categoryList: [] as ICategory[],
    }
  },
  actions: {
    addCategory(category: ICategory) {
      this.categoryList.push(category)
    }
  }
})

