const PORT = 8000
const axios = require('axios')
const expess = require('express')
const cheerio = require('cheerio')

const app = expess()

app.listen(PORT, () => console.log('listening to PORT'))

url = 'https://www.tagesschau.de/'

axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const dataArray = []

    $('.teaser__teaserinfo' ,html).each(function(){
        const title = $(this).find('.teaser__headline').text()
        const topic = $(this).find('.teaser__topline').text()
        const short = $(this).find('p').html()

        dataArray.push({
            topic,
            title,
            short
        })
    })

    console.log(dataArray)
}).catch(err => console.log(err))