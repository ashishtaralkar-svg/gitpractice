const {test}=require('@playwright/test')

test('launch url',async({page})=>
{
    await page.goto("https://www.flipkart.com/");
    await page.pause();
    await page.locator("//span[contains(text(),'Mobiles')]").click();
    await page.locator("//div[@class='UGFyTG']").hover();
    await page.locator(".f6F1B4").nth(1).click();

    const[newPage]=await Promise.all([
        page.waitForEvent('page'),
        page.locator("//a[contains(text(),'APPLE iPhone 14 Pro (Deep Purple, 128 GB)')]").click()
    ]);
    await newPage.locator("//button[@class='_2KpZ6l _2U9uOA _3v1-ww']").click();
});

test('launch url1',async({page})=>
{
    await page.goto("https://www.flipkart.com/");
    await page.pause();
});