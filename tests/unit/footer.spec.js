import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer', () => {
  it('renders correctly', () => {
    const wrapper = mount(Footer);

    // Verifica que el componente se haya renderizado correctamente
    expect(wrapper.exists()).toBe(true);

    // Verifica que los enlaces a las redes sociales estén presentes
    const facebookLink = wrapper.find('a[href="https://www.facebook.com/tinautismo"]');
    expect(facebookLink.exists()).toBe(true);
    const instagramLink = wrapper.find('a[href="https://www.instagram.com/tina.autismo/"]');
    expect(instagramLink.exists()).toBe(true);
    const tiktokLink = wrapper.find('a[href="https://www.tiktok.com/@tinautismo"]');
    expect(tiktokLink.exists()).toBe(true);
    const twitterLink = wrapper.find('a[href="https://twitter.com/TinaAutismo"]');
    expect(twitterLink.exists()).toBe(true);
    const whatsappLink = wrapper.find('a[href="https://wa.me/+5213331425757"]');
    expect(whatsappLink.exists()).toBe(true);
  });
});
