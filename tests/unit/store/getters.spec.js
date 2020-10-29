import { getters } from '../../../src/store/index.js'

const {
  user
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

})
