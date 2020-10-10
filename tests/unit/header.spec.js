// Utilities
import { shallowMount, createLocalVue } from '@vue/test-utils'

// Components
import Header from '@/components/Layout/Header.vue'

// Libraries
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify';

const localVue = createLocalVue()

// localVue.use(Vuetify)
localVue.use(Vuex)

describe('Header.vue', () => {
  let getters;
  let actions;
  let store;
  let vuetify;
  let stubs;

  beforeAll(() => {
    getters = {
      userIsAuthenticated: () => false
    }
    actions = {
      signUserOut: jest.fn()
    }
    stubs = [
      'router-link',
      'v-layout',
      'v-navigation-drawer',
      'v-list', 'v-list-item',
      'v-item-action',
      'v-icon',
      'v-list-item-content',
      'v-app-bar',
      'v-toolbar-title',
      'v-app-bar-nav-icon',
      'v-spacer',
      'v-btn',
      'v-list-item-action'
    ]
    vuetify = new Vuetify()
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('renders Header Component', () => {
    const wrapper = shallowMount(Header, { store, localVue, vuetify, stubs });
    expect(wrapper).toBeTruthy()
  })

})
