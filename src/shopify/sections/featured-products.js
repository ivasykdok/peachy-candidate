import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "@/shopify/snippets/variant-swatch";


const FeaturedProducts = {
  onLoad() {
    this._init();
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".swiper");
    if (!this.sliderWrapper) return;

    this.slider = new Swiper(this.sliderWrapper, {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      modules: [Autoplay, Pagination],
      touchStartPreventDefault: false,
      breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 0,
        }
      },
    });
  },
};

export default FeaturedProducts;


