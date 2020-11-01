import { getters } from '../../../src/store/index.js'

const {
  user,
  loading,
  error,
  totalPrice
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

  it('ERROR', () => {
    const error = "LOADING ERROR"
    const state = {error:error}

    expect(state.error).toEqual("LOADING ERROR")
  })

  it('TOTALPRICE', () => {
    const totalPrice = 5
    const state = { totalPrice: totalPrice }

    expect(state.totalPrice).toEqual(5)
  })

})
