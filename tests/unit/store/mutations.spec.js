import { mutations } from '../../../src/store/index.js'

// destructure assign `mutations`
const { setUser } = mutations

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
})
