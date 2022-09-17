const state = reactive({
  recipes: [],
})

export function useRecipes() {
  const storyblokAPI = useStoryblokApi()

  async function fetchRecipes() {
    const { data } = await storyblokAPI.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/',
      resolve_relations: 'categories', //? It will bring categories data we need to show
      is_startpage: false,
    })
    state.recipes = data.stories[0];
    // state.recipes = data.stories.map(recipe => ({
    //   ...recipe,
    //   content: {
    //     ...recipe.content,
    //     category: data.rels,
    //   }
    // }))
  }

  return {
    ...toRefs(state),
    fetchRecipes,
  }
}