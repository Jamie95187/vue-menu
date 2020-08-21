import { shallowMount } from '@vue/test-utils'
import Menu from '@/components/Menu.vue'

describe('Menu.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Menu);
  })

  it('renders Menu Component', () => {
    expect(wrapper.exists()).toBe(true)
  })

})
