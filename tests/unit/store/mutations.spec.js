import { mutations } from '../../../src/store/index.js'

// destructure assign `mutations`
const { setUser, setLoading } = mutations

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
})
