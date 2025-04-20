const { test, expect, request } = require('@playwright/test');
const LoginPage=require('../pages/login.page')
const {verifyErrorMessage,login}=require('../helpers')

test('Validating Simple API response',async({request})=>{
    const res=await request.get('https://jsonplaceholder.typicode.com/posts/2');
    expect(res.status()).toBe(200);
    const responseBody= await res.json();
    expect(responseBody.title).not.toBeNull();
})

test('Validating API response headers',async({request})=>{   
    const res=await request.get('https://jsonplaceholder.typicode.com/posts/2');
    expect(res.headers()['content-type']).toContain('application/json');
})

test('Sending Data in API POST request',async({request})=>{
    const response= await request.post('https://jsonplaceholder.typicode.com/posts', {
        data:{
                "userId": 17,
                "id": 200,
                "title": "This is Demo title",
                "body": "This is demo body data"
        }
    })
})

test('Validating API Response Time',async({request})=>{
    // since playwright does not directly support for validating api response timings through the request module, so we use performance.now()
    const start=performance.now()
    const res=await request.get('https://jsonplaceholder.typicode.com/posts/2');
    const end=performance.now();
    const time=end-start;
    expect(time).toBeLessThan(1000);
})