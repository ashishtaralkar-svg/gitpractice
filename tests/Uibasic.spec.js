const {test,expect, selectors,request} = require ('@playwright/test');
const { promises } = require('node:dns');
const loginpayload= {userEmail: "ashishtaralkar@gmail.com", userPassword: "Ashish@1234"};


test.beforeAll( async()=>
{
   const apicontext=  await request.newContext();
  const loginresponce= await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data: loginpayload })
    expect(( loginresponce).ok).toBeTruthy();
    const jsonresponce=loginresponce.json();
    const token=jsonresponce.token;
    console.log(token);

});


test.beforeEach(()=>
{

});


test('first tc', async function({browser})
{
 const context = await browser.newContext();
 const page= await context.newPage();
 //await page.goto("https://www.gmail.com");
});

test('first 2tc', async function({page})
{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 
console.log(await page.title());
//await expect (page).toHaveTitle ("Google");

const username = await page.locator('#username');
await username.fill("rahul");
//await page.pause();
await username.click({ button: 'right' });
await page.pause();
await page.mouse.click(200, 300, { button: 'right' });
await page.pause();
await username.first().waitFor();  

});

test('first 3tc', async function({browser})
{
    const context = await browser.newContext();
    const page= await context.newPage();
    const username = await page.locator('#username');
    const password = await page.locator('#password');
    const ddl=  page.locator("select.form-control ");
    const radio= page.locator('label').nth(3);
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 await ddl.selectOption("teach");

await radio.click();
await page.getByRole('button', { name: 'Okay' }).click();

await page.locator('.form-group label').nth(4).click();

const checkbox= page.getByRole('checkbox', { name: 'I Agree to the terms and' });
await checkbox.click();


await checkbox.uncheck();


 expect(await checkbox.isChecked()).toBeFalsy();
//await page.pause();
const att=page.locator('[href*=document]');
await expect (att).toHaveAttribute("target","_blank");


const page2= context.waitForEvent('page');
await att.click
});

test('first 39atc', async function({browser})
{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const att=page.locator('[href*=document]');
    const [nwpage]=await Promise.all(
    [
        context.waitForEvent('page'),
        att.click(),
    ])

    await page.pause();
    await nwpage.pause();

    const e1=nwpage.getByText('Please email us at mentor@');
    const e2=await e1.textContent();
    const e3 = await e2.split("@");

});


test('first 391atc', async function({browser})
{
    const context = await browser.newContext();
    const page= await context.newPage();
   //await page.pause();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login/");
    //const un= page.locator("#userEmail");
    const un= page.getByRole('textbox', { name: 'email@example.com' });
    const ps= page.getByRole('textbox', { name: 'enter your passsword' });
    const login= page.getByRole('button', { name: 'Login' });
    
    await un.fill('ashishtaralkar@gmail.com');
    await ps.fill("Ashish@1234");
    await login.click();
    //await page.pause();
    console.log(await page.title());
    await page.locator("text= Previous ").waitFor();
    const products =page.locator(".card-body");
    const number=await products.count();
    console.log(number);
    const zara ="ZARA COAT 3";
    for(let i=0; i<number; ++i)
    {
       if(await products.nth(i).locator("b").textContent()===zara)
       {
         await products.nth(i).locator(".fa-shopping-cart").click();
       }

    }
    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();
    await page.getByRole('button', { name: 'Checkout❯' }).click();
    await page.locator("text= Shipping Information ").waitFor();
    
    const email= page.locator(".details__user [type=text]");
    await email.nth(0).waitFor();
    const allemail=await email.allTextContents();
    console.log(allemail);

    const un1="asjhjf";
    expect(email.first()).toHaveText("ashishtaralkar@gmail.com");

    
    await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially("ind");
    await page.locator(".ta-results").waitFor();
    const buttons= await page.locator(".ta-results button").count();
    console.log(buttons);
    
    const c1= await page.locator(".ta-results button");
    //await page.locator(".form-group").type("ind");
  
     console.log(await page.locator(".ta-results button").allTextContents());

     for(let i=0; i<buttons;++i)
     {
        if (await c1.nth(i).locator(".ng-star-inserted").textContent() ===" India")
        {
            await c1.nth(i).locator(".ng-star-inserted").click();
            break;
        }

     }
//await page.pause();
await page.locator(".action__submit").click();
await page.locator(".hero-primary").waitFor();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
//console.log (await page.locator(".em-spacer-1 .ng-star-inserted").textContent());
const orderid1= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
const o1= orderid1.split(" ")[2];
console.log(o1);

await page.locator("button[routerlink*='/dashboard/myorders']").click();
await page.locator("h1").waitFor();
const totalorder= await page.locator("tbody tr").count();
await page.pause();
console.log(totalorder);
for (let i=0; i<totalorder;++i)
{
    if(await page.locator("tbody tr th").nth(i).textContent()===o1)
    {
        await page.getByRole('button', { name: 'Delete' }).nth(i).click();
        break;
    }
}



});


test('first 312c', async function({browser})
{
    const context = await browser.newContext();
    const page= await context.newPage();
   //await page.pause();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Gender").selectOption("Female");
       await page.getByPlaceholder("Password").fill("ashhdhjdsgfjhgfd");
    await page.pause();
    //await page.getByRole("button", {name: 'Submit'}).click(); 
    await page.getByRole("link",{name:'Shop'}).click();
    await page.locator("app-card").filter({hasText:'Samsung Note 8'}).getByRole("button",{name:'ADD'}).click();
    //const un= page.locator("#userEmail");

});


test('@web first 31w2c', async function({browser})
{
    const context = await browser.newContext();
    const page= await context.newPage();
   //await page.pause();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const date = "1";
    const month= "4";
    const year = "2025";
    const expectedlist=[month,date,year]; 

    await page.locator (".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__tile").nth(Number(month)-1).click();
    // await page.pause();////abbr[text()='1']
    await page.locator(".react-calendar").locator("//abbr[text()='"+date+"']").first().click();
    const content=await page.locator(".react-date-picker__inputGroup__input");
    console.log(content);

    for(let i=0; i<expectedlist.length;++i)
    {
        const v1= await content.nth(i).getAttribute("value");
        expect (v1).toEqual(expectedlist[i]);
    }
    


   

});

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  await page.pause();
  await page.getByText('/ 0 /').click();
  await page.getByRole('button', { name: 'January 2026', exact: true }).click();
  await page.getByRole('button', { name: '2026', exact: true }).click();
  await page.getByRole('button', { name: '2025' }).click();
  await page.getByRole('button', { name: 'January' }).click();
  await page.getByRole('button', { name: '30 January,' }).click();
  await page.getByText('Discount price').click();
  await expect(page.getByLabel('Discount price: activate to')).toContainText('Discount price');
  await page.getByRole('cell', { name: '22' }).click();
  await expect(page.locator('tbody')).toContainText('12');
});
test('test2', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  Promise.all([
    context.waitForEvent('page'),
    page.getByText('Veg/fruit name').click()
  ]);
});
