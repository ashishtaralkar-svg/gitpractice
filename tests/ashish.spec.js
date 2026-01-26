const {test,expect, selectors,request} = require ('@playwright/test');
const { promises } = require('node:dns');
const loginpayload= {userEmail: "ashishtaralkar@gmail.com", userPassword: "Ashish@1234"};
let token;

test.beforeAll( async()=>
{
   const apicontext=  await request.newContext();
  const loginresponce= await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data: loginpayload })
    expect(( loginresponce).ok).toBeTruthy();
    const jsonresponce=await loginresponce.json();
    token=jsonresponce.token;
    console.log(token);

});

test.only('first', async function({page})
{
 await page.addInitScript(value=>{window.localStorage.setItem('token',value)}, token);
 await page.goto("https://rahulshettyacademy.com/client");
 await page.pause();
});

//test111