
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://sapphiresolutions.biz/admin/login')
  cy.get('[name=email]').type(email)
  cy.get('[name=password]').type(password)
  cy.get('#capchasubmit').click()
  cy.url().should('contain', '/admin')
})

describe('User account page', () => {

  beforeEach(() => {
    cy.login('mukeshstudent@mailinator.com', 'Aa@12345')
  })

  it('Add Payment Link', () => {
    cy.visit('https://sapphiresolutions.biz/admin/payment/add_link')
    cy.get('[name=name]').type('Mukesh', { force: true });
    cy.get('[name=url]').type('https://www.google.com/', { force: true });
    cy.get('[name=website]').select('1', { force: true });
    cy.get('[name=status]').type('1', { force: true });
    
    cy.request({
      method: 'POST',
      url: 'https://sapphiresolutions.biz/admin/payment/add_link/',
      form: true,
      body: {
     
      },
    })
    cy.get('#submit').click()
  })
  it('Create New Subject', () => {
  cy.visit('https://sapphiresolutions.biz/admin/Subject/add_subject')
  cy.get('[name=subject]').type('IT', { force: true });
  cy.get('[name=sub_subject]').type('UI Design', { force: true });
  cy.request({
    method: 'POST',
    url: 'https://sapphiresolutions.biz/admin/Subject/add_subject',
    form: true,
    body: {
   
    },
  })
  cy.get('#submit').click()
})

it('Order Payment - Add Quote', () => {
  cy.visit('https://sapphiresolutions.biz/admin/view_order/5366')
  cy.get('#tab6').click()
  cy.get('.payfees').click()
  cy.get('[name=url_link]').select('7', { force: true });
  cy.get('[name=currency]').select('EUR', { force: true });
  cy.get('[name=PaymentMessagetemplate]').select('8', { force: true });
  cy.get('[name=paymentmoney]').type('400', { force: true });
  cy.get('[name=payment_message]').type('This is test message', { force: true });
  cy.get('[value="onetimepayment"]').first().check();
  cy.request({
    method: 'POST',
    url: 'https://sapphiresolutions.biz/admin/view_order/5366',
    form: true,
    body: {
   
    },
  })
  cy.get('#submit_pay').click() 
})
it('Make Payment - Order Detail page', () => {
  cy.visit('https://sapphiresolutions.biz/admin/view_order/5366')
  cy.get('#tab6').click()
  cy.get('.payfees').click()
  cy.get('[name=url_link]').select('7', { force: true });

})


})
