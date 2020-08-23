import { shallowMount } from '@vue/test-utils'
import Menu from '@/views/Menu.vue'
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('Menu.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Menu);
  })

  it('renders Menu Component', () => {
    console.log("Menu " + wrapper);
    expect(wrapper.exists()).toBe(true)
  })

  it('does h1 exist', () => {
    expect(wrapper.find("h1").text()).toBe("Menu")
  })

})
