describe('SwagLabs Test', () => {
  
  it('should login successfully', () => {
    cy.visit('www.saucedemo.com'); 

    // Enter username and password
    cy.get('#user-name').type('standard_user'); 
    cy.get('#password').type('secret_sauce'); 

    
    cy.get('#login-button').click();

  
  });

  
  it('should add products to the cart', () => {
    
    cy.url().should('include', '/inventory.html');

    cy.get('.inventory_item').first().find('button').click();

    cy.get('.shopping_cart_badge').should('have.text', '1');
  });


  it('should complete the checkout process', () => {
   
    cy.get('.shopping_cart_link').click();

    
    cy.url().should('include', '/cart.html');

   
    cy.get('#checkout').click();

    
    cy.get('#first-name').type('Ashely');
    cy.get('#last-name').type('Mozo');
    cy.get('#postal-code').type('12345');

 
    cy.get('#continue').click();

    
    cy.url().should('include', '/checkout-step-two.html');

   
    cy.get('#finish').click();

    cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');
  });

  it('should log out successfully', () => {
   
    cy.get('#react-burger-menu-btn').click();
   
    cy.get('#logout_sidebar_link').click();

    // Assert we are back on the login page
    cy.url().should('include', '/');
  });
});
