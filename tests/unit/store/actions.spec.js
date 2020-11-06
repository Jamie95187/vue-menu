import { actions } from '../../../src/store/index.js'

describe('actions', () => {
  it('tests with a mock commit', () => {
    let count = 0;
    let data;

    let mockCommit = (state, payload) => {
      data = payload
      count += 1
    }

    actions.signUserUp({ commit: mockCommit })
      .then(() => {
        expect(count).toBe(4)
        expect(data).toEqual({ title: 'Mock with Jest' })
      })
  })
})

// helpers for testing action with expected mutations
// const testAction = (action, payload, state, expectedMutations, done) => {
//   let count = 0
//
//   // mock commit
//   const commit = (type, payload) => {
//     const mutation = expectedMutations[count]
//
//     try {
//       expect(type).toEqual(mutation.type)
//       expect(payload).toEqual(mutation.payload)
//     } catch (error) {
//       done(error)
//     }
//
//     count++
//     if (count >= expectedMutations.length){
//       done()
//     }
//   }
//
//   // call the action with the mocked store and arguments
//   action({commit, state}, payload)
//
//   // check if no mutations should have been dispatched
//   if (expectedMutations.length === 0) {
//     expect(count).toEqual(0)
//     done()
//   }
// }
//
// describe('actions', () => {
//   const mockedUser = {
//     id: 1
//   }
//   it('SIGNUSERUP', done => {
//     testAction(actions.signUserUp, null, {}, [
//       { type: 'setLoading', payload: true },
//       { type: 'clearError '},
//       { type: 'setLoading', payload: false},
//       { type: 'setUser', payload: mockedUser}
//     ])
//   })
// })
