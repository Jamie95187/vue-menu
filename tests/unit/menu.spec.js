import { shallowMount, mount } from '@vue/test-utils'
import Menu from '@/components/Menu.vue'
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('Menu.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Menu);
  })

  it('renders Menu Component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('does h1 exist', () => {
    expect(wrapper.find("h1").text()).toBe("Menu")
  })

  it('should render 2 card components', () => {
    expect(wrapper.findComponent({ name: 'v-card '}).length).toEqual(2)
  })

})
