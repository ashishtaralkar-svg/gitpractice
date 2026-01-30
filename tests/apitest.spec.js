import{test,expect}from'@playwright/test';

test('apitest',async({request})=>{

    const response=await request.get('https://postman-echo.com/get');
    expect(response.status()).toBe(200);

    console.log(await response.json());
});



test ('postapitest',async({request})=>
    {
    const response=await request.get('https://d129b681-d2fb-4afc-8ff1-846b8cfc8942.mock.pstmn.io//orders/generate-order-reference');
    expect(response.status()).toBe(200);
    const resjson=await response.json();
    console.log(resjson);
    expect(resjson.orderReference).toBeDefined();

    });


    test ('postapitest1',async({page,request})=>
    {
        await page.goto('https://rahulshettyacademy.com/client');
        await page.pause();
    const response=await request.post   ('https://d129b681-d2fb-4afc-8ff1-846b8cfc8942.mock.pstmn.io/orders/');
    expect.soft(response.status()).toBe(200);
    const resjson=await response.json();
    console.log(resjson);
    console.log(resjson.orderId);

    });