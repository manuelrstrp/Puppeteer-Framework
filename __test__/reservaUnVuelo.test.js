import LoginPage from "../pages/LoginPage";
import FlightsPage from "../pages/FlightsPages";
import NavBar from "../../components/NavBar";

let loginPage
let flightsPage
let navbar

describe('Iniciar sesion en la pagina', () => {
  beforeAll(async() => {
    loginPage = new LoginPage()
    flightsPage = new FlightsPage()
    navbar = new NavBar()
  }, 20000)
  it('Debemos iniciar sesion', async() => {
    await loginPage.visit()
    await loginPage.login('testuserphptravel@yopmail.com','demouser123')
  }, 20000)
  it('Validar que este en el dashboard', async() => {
    await loginPage.validateLogin()
  }, 20000)
  it('Validar hacia la pagina de vuelos', async() => {
    await navbar.validateNavBarIsPresent()
    await navbar.selectMenuItem('flights')
  }, 20000)
  it('Validar que estamos en vuelos y seleccionar vuelos', async() => {
    await flightsPage.validatePage()
    await flightsPage.selectFlight('Mexico', 'Paris', '20-11-2022', '5')
  }, 20000)
  it('Validar que hayamos buscado el vuelo', async() => {
    await flightsPage.validateFlights()
  }, 20000)
})