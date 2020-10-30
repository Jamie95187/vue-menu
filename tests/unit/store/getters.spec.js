import { getters } from '../../../src/store/index.js'

const {
  user,
  loading
} = getters

describe ('setters', () => {

  it('USER', () => {
    const user = {
      id: 1
    }
    const state = { user: user }
    const result = getters.user(state)

    expect(result).toEqual({
      id: 1
    })
  })

  it('LOADING', () => {
    const loading = true
    const state = {loading: loading}
    const result = getters.loading(state)

    expect(result).toEqual(true)
  })

})
