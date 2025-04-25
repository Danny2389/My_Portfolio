describe('Full Homepage Test - Dinesh Portfolio', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('Checks page responsiveness across devices', () => {
    const viewports = [
      { label: 'iPhone XR', width: 414, height: 896 },
      { label: 'iPad', width: 768, height: 1024 },
      { label: 'Laptop', width: 1366, height: 768 },
    ]

    viewports.forEach(view => {
      cy.viewport(view.width, view.height)
      cy.wait(500)
      cy.get('header, nav, footer').should('be.visible')
    cy.contains('Dinesh').should('be.visible') // Replace with your visible text
    cy.log(`✅ Passed on: ${view.label}`)
    })
  })
    it('Has correct page title', () => {
      cy.title().should('include', 'Dinesh')
    })
  
    it('Displays navigation bar', () => {
      cy.get('nav').should('be.visible')
    })
  
    it('Contains HOME (hero) content', () => {
      cy.get('.home-content').should('exist')
      cy.get('.home-about-description').should('exist')
      cy.get('.home-about-social').should("exist")
      cy.get('.home-about-social-links').should("exist")
    })
  
    it('Has Home, Skillset, Projects, Resume, Contact sections', () => {
      cy.contains('Home').should('be.visible')
      cy.contains('Skillset').click().should('be.visible')
      cy.contains('Projects').click().should('be.visible')
      cy.contains('Resume').click().should('be.visible')
      cy.contains('Contact').click().should('be.visible')
    })
  
    it('Has footer and links', () => {
      cy.get('.footer').should('exist')
      cy.contains('Copyright').should('be.visible')
      cy.get('a').should('have.length.greaterThan', 1)
      cy.get('.home-about-social-links > :nth-child(1)').click().wait(4000).should('be.visible')
      cy.get('.home-about-social-links > :nth-child(2)').click().wait(4000).should('be.visible')
      cy.get('.home-about-social-links > :nth-child(3)').click().wait(4000).should('be.visible')
      cy.get('.home-about-social-links').click().should('be.visible')
      cy.get(".home-about-social-links").should("exist").and("be.visible")
    })
    it('Passed, In all Tests Loading back to Home',() => {
      cy.visit('http://localhost:3000')
    })
  })
  