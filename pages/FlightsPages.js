import BasePage from "./BasePages";

export default class FlightsPage extends BasePage{
  constructor(){
    super()
    this.mainDiv = '.main_serch' 
    this.inputs = {
      from: '#autocomplete',
      to: '#autocomplete2',
      date: '#departure',
      passengers: '.dropdown-toggle.dropdown-btn.waves-effect',
      search: '#flights-search',
      firstOption: ".autocomplete-result[data-index='0']",//Este selector xpath toma el primer elemento del autocomplete del input, este selector se activa cada que se seleccione un input distinto.
      moreAdultsPassengers: "(//i[@class='la la-plus'])[1]",
    }
  }
  async validatePage(){
    await page.waitFornavigation({waitUntil: 'networkidle2'})
    await page.waitForSelector(this.mainDiv)
    await page.waitForSelector(this.inputs.from)
    await page.waitForSelector(this.inputs.to)
    await page.waitForSelector(this.inputs.date)
    await page.waitForSelector(this.inputs.passengers)
    await page.waitForSelector(this.inputs.search)
  }
  async selectFlight(from, to, date, passengers){
    await this.type(this.inputs.from,from)
    await this.click(this.inputs.firstOption)//da click a la primera opcion del selector css from
    await this.type(this.inputs.to,to)
    await this.click(this.inputs.firstOption)//da click a la primera opcion del selector css to
    await this.type(this.inputs.date,date)
    if(passengers !== 1){
      await this.click(this.input.passengers)
      for(let i = 0; i<passengers - 1; i++){
        await this.click(this.inputs.moreAdultsPassengers)
      }
    }
    await this.click(this.inputs.search)
  }
  async validateFlights(){
    await this.wait(5000)
  }
}