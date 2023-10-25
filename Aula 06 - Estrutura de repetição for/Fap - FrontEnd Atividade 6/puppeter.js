const puppeteer = require('puppeteer');

(async () => {
  // Inicializa o navegador
  const browser = await puppeteer.launch();
  
  // Abre uma nova página
  const page = await browser.newPage();
  
  // Navega para o site desejado
  await page.goto('https://www.example.com');
  
  // Tira um screenshot da página
  await page.screenshot({ path: 'screenshot.png' });

  // Fecha o navegador
  await browser.close();
})();