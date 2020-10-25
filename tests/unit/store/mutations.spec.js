import { mutations } from '../../../src/store/index.js'

// destructure assign `mutations`
const {
    setUser,
    setLoading,
    setError,
    clearError,
    addDish,
    removeDish,
    updateOrderAdd,
    updateOrderRemove,
    clearOrder,
    loadOrders
  } = mutations

describe ('mutations', () => {

  it('SETUSER', () => {
    // mock state
    const state = {user: null}
    const mockUser = {
      id: 1
    }
    // apply mutation
    setUser(state, mockUser)
    // assert result
    expect(state.user).toEqual(
      {id: 1}
    )
  })

  it('SETLOADING', () => {
    const state = {loading: false}

    expect(state.loading).toEqual(false)
    setLoading(state, true)
    expect(state.loading).toEqual(true)
  })

  it('SETERROR', () => {
    const state = {error: null}
    const errorMessage = "Loading Error"

    expect(state.error).toEqual(null)
    setError(state, errorMessage)
    expect(state.error).toEqual("Loading Error")
  })

  it('CLEARERROR', () => {
    const state = {error: "Loading Error"}

    expect(state.error).toEqual("Loading Error")
    clearError(state)
    expect(state.error).toEqual(null)
  })

  it('ADDDISH', () => {
    const menu = [
      {title: "dish1", price: 1, orders: 0, active: false},
      {title: "dish2", price: 2, orders: 1, active: true}
    ]
    const state = { menu: menu, totalPrice: 2 }

    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 0, active: false},
      {title: "dish2", price: 2, orders: 1, active: true}
    ])
    expect(state.totalPrice).toEqual(2)
    addDish(state, "dish1")
    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 1, active: true},
      {title: "dish2", price: 2, orders: 1, active: true}
    ])
    expect(state.totalPrice).toEqual(3)
    addDish(state, "dish2")
    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 1, active: true},
      {title: "dish2", price: 2, orders: 2, active: true}
    ])
    expect(state.totalPrice).toEqual(5)
    addDish(state, "dish2")
  })

  it('REMOVEDISH', () => {
    const menu = [
      {title: "dish1", price: 1, orders: 3, active: true},
      {title: "dish2", price: 2, orders: 1, active: true}
    ]

    const state = { menu: menu, totalPrice: 5 }

    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 3, active: true},
      {title: "dish2", price: 2, orders: 1, active: true}
    ])
    expect(state.totalPrice).toEqual(5)
    removeDish(state, "dish1")
    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 2, active: true},
      {title: "dish2", price: 2, orders: 1, active: true}
    ])
    expect(state.totalPrice).toEqual(4)
    removeDish(state, "dish2")
    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 2, active: true},
      {title: "dish2", price: 2, orders: 0, active: false}
    ])
    expect(state.totalPrice).toEqual(2)
  })

  it('UPDATEORDERADD', () => {
    const currentOrder = []
    const state = { currentOrder: currentOrder }

    expect(state.currentOrder).toEqual([])
    updateOrderAdd(state, "dish1")
    expect(state.currentOrder).toEqual([["dish1", 1]])
    updateOrderAdd(state, "dish1")
    expect(state.currentOrder).toEqual([["dish1", 2]])
    updateOrderAdd(state, "dish2")
    expect(state.currentOrder).toEqual([["dish1", 2], ["dish2", 1]])
  })

  it('UPDATEORDERREMOVE', () => {
    const currentOrder = [["dish1", 3],["dish2", 2]]
    const state = { currentOrder: currentOrder }

    expect(state.currentOrder).toEqual([["dish1", 3],["dish2", 2]])
    updateOrderRemove(state, "dish1")
    expect(state.currentOrder).toEqual([["dish1", 2],["dish2", 2]])
    updateOrderRemove(state, "dish1")
    expect(state.currentOrder).toEqual([["dish1", 1],["dish2", 2]])
    updateOrderRemove(state, "dish2")
    expect(state.currentOrder).toEqual([["dish1", 1], ["dish2", 1]])
  }),

  it('CLEARORDER', () => {
    const menu = [
      {title: "dish1", price: 1, orders: 3, active: true},
      {title: "dish2", price: 2, orders: 1, active: true}
    ]
    const currentOrder = [["dish1", 3],["dish2", 1]]
    const state = { menu: menu, currentOrder: currentOrder }

    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 3, active: true},
      {title: "dish2", price: 2, orders: 1, active: true}
    ])
    expect(state.currentOrder).toEqual([["dish1", 3],["dish2", 1]])
    clearOrder(state)
    expect(state.menu).toEqual([
      {title: "dish1", price: 1, orders: 0, active: false},
      {title: "dish2", price: 2, orders: 0, active: false}
    ])
    expect(state.currentOrder).toEqual([])
  }),

  it('LOADORDERS', () => {
    const orders = ["order1", "order2", "order3"];
    const state = { orders: [] }

    expect(state.orders).toEqual([])
    loadOrders(state, orders)
    expect(state.orders).toEqual(["order1", "order2", "order3"])
  })

})
