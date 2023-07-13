
describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно')
         cy.get('#exitMessageButton > .exitIcon')
     })
 


     it('Восстановление пароля', function () {
         cy.clearAllCookies()
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('ivan@susanin.ru')
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail')
         cy.get('#exitMessageButton > .exitIcon')
         
     })

     it('Верный логин, не верный пароль', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio2')
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
        
     })  


     it('Не верный логин, верный пароль', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio2')
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
 
     })  


    
 
     it('Логин без @', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio2')
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации')
        
 
     })  

     it('Строчные буквы в логине', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon')

     }) 



})