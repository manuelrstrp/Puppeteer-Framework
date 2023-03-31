import BasePage from "./BasePages";

export default class LoginPage extends BasePage{
  constructor(){
    super()
    this.navBar = "#header > div.navbar.navbar-expand-xl.main-navbar-wrapper"
    this.inputEmail = "#inputEmail"
    this.inputPassword = "#inputPassword"
    this.submitButton = "#login"
    this.loginPageText = "#Secondary_Navbar-Account > a"
  }
  async visit(){
    await page.goto("https://phptravels.org/login")
    await page.waitForSelector(this.navBar)
    const url = this.getUrl()
    console.log(url);
  }
  async login(email, password){
    await page.waitForSelector(this.inputEmail)
    await this.type(this.inputEmail, email)
    await this.type(this.inputPassword, password)
    await this.wait(5000)
    await this.click(this.submitButton)
  }
  async validateLogin(){
    await page.waitForSelector(this.navBar)
    await page.waitForSelector(this.loginPageText)
  }
}