homeDomElement = {
    content: document.getElementById('content'),
    nav: document.createElement('nav'),
    header: document.createElement('header'),
    main: document.createElement('main'),
    div: document.createElement('div'),
    li: document.createElement('li'),
    ul: document.createElement('ul'),
    h2: document.createElement('h2'),
    liHTML: document.getElementsByTagName('li')
}

home()
function home () {

    function newli() {
        return document.createElement('li')
    
    }

    const h2Text = document.createTextNode('Myhzy Beats')
    h2.classList.add('nav-title')
    h2.appendChild(h2Text)

    homeDomElement.ul.classList.add('nav-links')

    homeText = document.createTextNode('Home')
    beatsText = document.createTextNode('Beats')
    contactText = document.createTextNode('Contact')

    homeDomElement.content.appendChild(nav)
    homeDomElement.nav.appendChild(h2)
    homeDomElement.nav.appendChild(ul)
    homeDomElement.ul.appendChild(newli())

    homeDomElement.ul.appendChild(newli())
    



}



export default home