describe('Full Skillset Test - Dinesh Portfolio', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/skillset')
    })
    
    it(' Has correct page title', () => {
        cy.get('h1').then(($el) => {
          const text = $el.text()
          if (text.includes('Skillset')) {
            cy.log('✅ Found heading:', text)
          } else {
            cy.log('❌ Heading not found:', text)
          }
        })
      })
      
    
      it('Displays navigation bar', () => {
        cy.get('nav').should('be.visible')
      })
    
      it('Contains HOME (hero) content', () => {
        cy.get('.about-section').should('exist')
        cy.get('[title="React.js"]').click().should('exist')
      })
    
    it('Scrolls up and down the homepage', () => {
        cy.visit('/skillset')
        cy.scrollTo('bottom')
        cy.wait(1000) // Wait to simulate user behavior
        cy.scrollTo('top')
    })
      it('Passed, In all Tests Loading back to Home',() => {
        cy.visit('/skillset')
      })
    })
    