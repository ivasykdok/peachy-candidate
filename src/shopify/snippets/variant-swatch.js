class VariantSwatch extends HTMLElement {
  constructor() {
    super();
    this._init();
  }

  _init() {
    this.select = this.querySelector("select[name='id']");
    this.addToCartBtn = this.querySelector("[data-cart-add]");

    if(!this.select && this.addToCartBtn) return;

    this.variantPrice = this.addToCartBtn.querySelector("[data-cart-add] .price");
    this.options = this.select.querySelectorAll("option");

    this.changeVariant();
  }

  changeVariant() {
    this.select.addEventListener("change", (evt) => {
      const selectedVariantID = evt.target.value;
      const variantPrice = Array.from(this.options).find(option => option.value === selectedVariantID);


      if (this.addToCartBtn) {
        this.addToCartBtn.setAttribute("data-cart-add", selectedVariantID);
      }

      if(variantPrice.dataset.variantPrice) {
        this.variantPrice.textContent = variantPrice.dataset.variantPrice;
      }
    });
  }
}

customElements.define("variant-swatch", VariantSwatch);
