describe('google', () =>{
  it('Abrir el navegador', async () =>{
    await page.goto('https://google.com')
    await page.waitForSelector('img')
  }, 35000)
})