// describe('🧪 Full UI Test - Dinesh Portfolio (All Pages)', () => {
//     const base = 'http://localhost:3000'
  
//     // 🌐 HOME PAGE
//         beforeEach(() => {
//             cy.visit($base)
//           })
  
//       it('Has correct title and sections', () => {
//         cy.title().should('include', 'Dinesh')
//         cy.get('nav').should('exist')
//         cy.get('.home-content').should('exist')
//         cy.get('.home-about-description').should('exist')
//         cy.get('.home-about-social').should('exist')
//       })
  
//       it('Contains all navbar links', () => {
//         cy.get('nav', { timeout: 10000 }).should('exist');

//         // Now check each link directly — no wrapping needed
//         cy.contains('Home').should('exist');
//         cy.contains('Skillset').should('exist');
//         cy.contains('Projects').should('exist');
//         cy.contains('Resume').should('exist');
//         cy.contains('Contact').should('exist');

//       it('Contains footer', () => {
//         cy.get('.footer').should('exist')
//         cy.contains('Copyright').should('be.visible')
//       })
//     })
// })
//     // 🧠 SKILLSET PAGE
//     context('🧠 Skillset Page Tests', () => {
//       before(() => {
//         cy.visit(`${base}/skillset`)
//       })
  
//       it('Has correct heading and sections', () => {
//         cy.title().should('include', 'Skillset')
//         cy.get('nav').should('exist')
//         cy.get('.about-section').should('exist')
//         cy.get('[title="React.js"]').click({ force: true }).should('exist')
//       })
  
//       it('Scrolls skillset page', () => {
//         cy.visit(`${base}/skillset`)
//         cy.scrollTo('bottom', { duration: 1000 })
//         cy.wait(1000)
//         cy.scrollTo('top')
//       })
//     })
  
//     // 📦 PROJECTS PAGE
//     context('📦 Projects Page Tests', () => {
//       before(() => {
//         cy.visit(`${base}/project`)
//       })
  
//       it('Has correct heading', () => {
//         cy.get('h1').invoke('text').should('include', 'Works')
//       })
  
//       it('Displays navbar and scrolls projects page', () => {
//         cy.visit(`${base}/project`)
//         cy.get('nav').should('be.visible')
//         cy.scrollTo('bottom', { duration: 1000 })
//         cy.wait(1000)
//         cy.scrollTo('top')
//       })
//     })
// // 📄 RESUME PAGE
//     context('📄 Resume Page Tests', () => {
//       before(() => {
//         cy.visit(`${base}/resume`)
//       })
  
//       it('Has correct heading', () => {
//         cy.get('h1').invoke('text').should('include', 'Resume')
//     })
// })