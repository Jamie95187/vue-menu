import { getters } from '../../../src/store/index.js'

const {
  user,
  loading,
  error,
  totalPrice,
  loadedCurrentOrder,
  loadOrders
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

    expect(getters.error(state)).toEqual("LOADING ERROR")
  })

  it('TOTALPRICE', () => {
    const totalPrice = 5
    const state = { totalPrice: totalPrice }

    expect(getters.totalPrice(state)).toEqual(5)
  })

  it('LOADEDCURRENTORDER', () => {
    const currentOrder = [["dish1", 2], ["dish2", 3]]
    const state = { currentOrder: currentOrder }

    expect(getters.loadedCurrentOrder(state)).toEqual([["dish1", 2], ["dish2", 3]])
  })

  it('LOADORDERS', () => {
    const orders = ["order1", "order2", "order3"]
    const state = { orders: orders }

    expect(getters.loadOrders(state)).toEqual(["order1", "order2", "order3"])
  })
})
