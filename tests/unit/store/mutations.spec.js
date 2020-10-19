import { mutations } from '../../../src/store/index.js'

// destructure assign `mutations`
const {
    setUser,
    setLoading,
    setError,
    clearError,
    addDish
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
    const state = { menu: menu, totalPrice: 0 }

    expect(state.menu).toEqual([{title: "dish1",price: 1, orders: 0, active: false}, {title: "dish2",price: 2, orders: 1, active: true}])
    expect(state.totalPrice).toEqual(0)
    addDish(state, "dish1")
    expect(state.menu).toEqual([{title: "dish1",price: 1, orders: 1, active: true}, {title: "dish2",price: 2, orders: 1, active: true}])
    expect(state.totalPrice).toEqual(1)
    addDish(state, "dish2")
    expect(state.menu).toEqual([{title: "dish1",price: 1, orders: 1, active: true}, {title: "dish2",price: 2, orders: 2, active: true}])
    expect(state.totalPrice).toEqual(3)
    addDish(state, "dish2")
  })

})
