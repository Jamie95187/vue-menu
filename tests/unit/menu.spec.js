// Utilities
import { shallowMount, createLocalVue } from '@vue/test-utils'

// Components
import Menu from '@/views/Menu.vue'

// Libraries
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Menu.vue', () => {
  let getters;
  let actions;
  let store;
  let vuetify;
  let stubs;

  beforeAll(() => {
    getters = {
      menuItems: () => []
    }
    actions = {
      addDish: jest.fn(),
      removeDish: jest.fn()
    }
    stubs = [
      'v-container',
      'v-row',
      'v-layout',
      'v-card',
      'v-card-text',
      'v-col',
      'v-img',
      'v-btn',
      'v-icon'
    ]
    vuetify = new Vuetify()
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('renders Menu Component', () => {
    const wrapper = shallowMount(Menu, { store, localVue, vuetify, stubs })
    expect(wrapper.exists()).toBe(true)
  })

})
