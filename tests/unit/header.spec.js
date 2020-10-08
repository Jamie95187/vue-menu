// Utilities
import { mount, createLocalVue } from '@vue/test-utils'

// Components
import Header from '@/components/Layout/Header.vue'

// Libraries
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify';

// Vue.use(Vuetify);

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Header.vue', () => {
  let getters;
  let actions;
  let store;
  let vuetify;

  beforeEach(() => {
    getters = {
      userIsAuthenticated: () => false
    }
    actions = {
      signUserOut: jest.fn()
    }
    vuetify = new Vuetify()
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('renders Header Component', () => {
    const wrapper = mount(Header, { store, localVue, vuetify});
    expect(wrapper.exists()).toBe(true)
  })

})
