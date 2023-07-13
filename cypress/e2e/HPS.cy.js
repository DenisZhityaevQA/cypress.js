describe('Автотест для сайта HuntingPony', function () {
  it('Оформление заказа', function () {
       cy.visit('https://huntingpony.com/');
       cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
       cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
       cy.get('.add-cart-counter__btn').click();
       cy.wait(1000);
       cy.get('.widget-type_widget_v4_product_6_be1f05c476e426acbde77e7eaba79a87').click();
       cy.get('.add-cart-counter__btn').click();


       cy.wait(1000);
       cy.get('.header__control-text').click();
       cy.wait(1000);
       cy.get('.is-count-up').click();
       cy.get('.cart-controls > .button').click();
   })

  })