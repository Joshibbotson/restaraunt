const content = document.getElementById('content')

const nav = document.createElement('nav')
const header = document.createElement('header')
const main = document.createElement('main')
const div = document.createElement('div')
const li = document.createElement('li')
const ul = document.createElement('ul')
const h2 = document.createElement('h2')
const liHTML = document.getElementsByTagName('li')


home()
function home () {

    function newli() {
        return document.createElement('li')
    
    }

    const h2Text = document.createTextNode('Myhzy Beats')
    h2.classList.add('nav-title')
    h2.appendChild(h2Text)

    ul.classList.add('nav-links')

    homeText = document.createTextNode('Home')
    beatsText = document.createTextNode('Beats')
    contactText = document.createTextNode('Contact')

    content.appendChild(nav)
    nav.appendChild(h2)
    nav.appendChild(ul)
    ul.appendChild(newli())
    liHTML.appendChild(homeText)
    ul.appendChild(newli())
    liHTML.appendChild(beatsText)
    



}
