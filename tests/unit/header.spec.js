import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Layout/Header.vue'
import Vue from 'vue'
import Vuetify from 'vuetify';

Vue.use(Vuetify);

const localVue = createLocalVue()

describe('Header.vue', () => {
  let wrapper;

  it('renders Header Component', () => {
    wrapper = shallowMount(Header);
    expect(wrapper.exists()).toBe(true)
  })

})
