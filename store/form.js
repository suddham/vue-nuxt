export const state = () => ({
  payload: {},
})

export const mutation = () => ({
  updatePayload(state, formData) {
    Vue.set(state.payload, `${formData.key}`, formData.value)
  },
})

export const actions = {
  updatePayload({ commit }) {},
}
