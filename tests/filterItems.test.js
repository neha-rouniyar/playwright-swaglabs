const { test, expect } = require("playwright/test");
const EndToEndPage=require('../pages/endToEnd.page')
const {login}=require('../helpers')



test('Test if descending filter works',async({page})=>{
    await login(page,'standard_user','secret_sauce');

    const filterDropdown=page.locator('.product_sort_container')
    await filterDropdown.selectOption('za')
  
    const allItems=await page.locator('.inventory_item_name')   
    const itemNames=await allItems.allTextContents()

    const sortedItems=[...itemNames].sort().reverse()
    await expect(itemNames).toEqual(sortedItems)
})


test('Test if ascending filter works',async({page})=>{
    await login(page,'standard_user','secret_sauce');

    const filterDropdown=page.locator('.product_sort_container')
    await filterDropdown.selectOption('az')
  
    const allItems=await page.locator('.inventory_item_name')   
    const itemNames=await allItems.allTextContents()

    const sortedItems=[...itemNames].sort()
    await expect(itemNames).toEqual(sortedItems)
})

test('Test if low to high price filter works',async({page})=>{
    await login(page,'standard_user','secret_sauce');

    const filterDropdown=page.locator('.product_sort_container')
    await filterDropdown.selectOption('lohi')
  
    const allItemsPrice=await page.locator('.inventory_item_price')   
    const itemNames=await allItemsPrice.allTextContents()

    const itemPrices=itemNames.map(price=>parseFloat(price.replace('$','')))

    const sortedPrices=[...itemPrices].sort((a,b)=>a-b)
    await expect(itemPrices).toEqual(sortedPrices)
})

test('Test if high to low price filter works',async({page})=>{
    await login(page,'standard_user','secret_sauce');

    const filterDropdown=page.locator('.product_sort_container')
    await filterDropdown.selectOption('hilo')
  
    const allItemsPrice=await page.locator('.inventory_item_price')   
    const itemNames=await allItemsPrice.allTextContents()

    const itemPrices=itemNames.map(price=>parseFloat(price.replace('$','')))

    const sortedPrices=[...itemPrices].sort((a,b)=>a-b).reverse()
    await expect(itemPrices).toEqual(sortedPrices)
})