import LoginPage from "../pages/LoginPage";
let loginPage

describe('Iniciar sesion en la pagina', () => {
  beforeAll(async() => {
    loginPage = new LoginPage()
  }, 20000)
  it('Debera de ir a la pagina', async() => {
    await loginPage.visit()
  }, 20000)
  it('Debera llenar los campos', async() => {
    await loginPage.login('testuserphptravel@yopmail.com','demouser123')
  }, 20000)
  it('Validar que este en el dashboard', async() => {
    await loginPage.validateLogin()
  }, 20000)
})