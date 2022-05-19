import homePage from "../business/structure/homePage";

fixture('EPAM home feature test')
    .page('https://www.epam.com/')

test('User can see homepage', async t => {
    await t.expect(homePage.titleSlider.exists).ok
        
})