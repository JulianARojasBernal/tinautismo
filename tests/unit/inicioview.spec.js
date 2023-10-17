import { mount } from '@vue/test-utils';
import InicioView from '@/views/InicioView.vue';

describe('InicioView', () => {
  it('renders correctly', () => {
    const wrapper = mount(InicioView);

    // Verifica que el componente se haya renderizado correctamente
    expect(wrapper.exists()).toBe(true);

    // Verifica la existencia de la imagen del banner
    const bannerImage = wrapper.find('img[alt="baner"]');
    expect(bannerImage.exists()).toBe(true);

    // Verifica la existencia de las imágenes y el contenido del cuerpo
    const bodyImages = wrapper.findAll('img[alt="imag"]');
    expect(bodyImages.length).toBe(1); // Ajusta esto según la cantidad de imágenes esperadas.
    

    // Verifica la existencia del carrusel
    const carousel = wrapper.find('#carouselExampleControlsNoTouching');
    expect(carousel.exists()).toBe(true);

    // Verifica la existencia de las imágenes del carrusel
    const carouselImages = wrapper.findAll('.carousel-item img');
    expect(carouselImages.length).toBe(3); // Ajusta esto según la cantidad de imágenes esperadas.

    // Verifica la existencia de las imágenes de campañas
    const campaignImages = wrapper.findAll('img[alt=""]');
    expect(campaignImages.length).toBe(4); // Ajusta esto según la cantidad de imágenes esperadas.
  });
});
