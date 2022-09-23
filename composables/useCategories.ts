const state = reactive({
  categories: [],
})

export function useCategories() {
  const storyblokAPI = useStoryblokApi()

  async function fetchCategories() {
    const { data } = await storyblokAPI.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'categories/',
      is_startpage: false,
    })
    state.categories = data.stories
  }

  const formatedCategories = computed(() => 
    state.categories.map(({ uuid, name, content}) => ({
      uuid,
      name,
      icon: content.icon,
    }))
    .slice(0, 3),
  )
  
  return {
    ...toRefs(state),
    fetchCategories,
    formatedCategories,
  }
}