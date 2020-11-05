let col = ""
let y = {}
let counter = 0
let colors = ['blue', '#ffa400', 'green', 'red', '#00d669', '#530cff']
col = colors[Math.floor(Math.random()*colors.length)]

class item {
    constructor() {
        this.color = ""
        this.checkbox = false
    }

    publish(){
        let colors = ['blue', '#ffa400', 'green', 'red', '#00d669', '#530cff']
        let x = document.getElementById('f')

        let z = document.createElement('div')
        z.classList.add('item')

        
        let inp = document.getElementById('inp')

        let todo = document.createElement('p')
        todo.innerHTML = inp.value
        todo.classList.add('tdd')
        todo.id = String(counter) +'td'

        let s = document.createElement('div')
        s.classList.add('bl')
        s.appendChild(todo)
        s.id = String(counter) + 'div'

        let check = document.createElement('input')
        check.type = 'checkbox'
        check.id = String(counter)
        check.onclick = function() { switch_gray( this.id ); }
        check.classList.add('checkb')

        let check_div = document.createElement('div')
        check_div.classList.add('check')
        check_div.appendChild(check)
        check_div.id = String(counter) + 'cd'
        
        z.appendChild(check_div)
        z.appendChild(s)
        this.color = col
        let d = document.getElementById(col)
        d.classList.add('clicked')
        check_div.style.cssText = 'background-color:' + this.color + ';'
        s.style.cssText = 'background-color:' + this.color + ';'
        z.classList.add('rounded')
        // z.appendChild(todo)
        x.appendChild(z)
        y[String(counter)] = this.color
        counter += 1
    }
}

function proc() {
    let x = new item()
    let t = document.getElementById('inp')
    
    if (!t.value) return
    x.publish()
    t.value = ""
}

function erase() {
    let t = document.getElementById('inp')
    for (let i = 0; i < colors.length; i++) {
        document.getElementById(colors[i]).classList.remove('clicked')
    }
    col = colors[Math.floor(Math.random()*colors.length)]
    let d = document.getElementById(col)
    d.classList.add('clicked')
    t.value = ""
}

function color(color) {
    for (let i = 0; i < colors.length; i++) {
        document.getElementById(colors[i]).classList.remove('clicked')
    }
    col = color
}

function switch_gray(counter) {
    let x = document.getElementById(counter+'div')
    let t = document.getElementById(counter+'cd')
    let checkbox = document.getElementById(counter)
    if (checkbox.checked) {
        x.style.cssText = 'background-color: #ccc;'
        t.style.cssText = 'background-color: #ccc;'
        t.style.setProperty("text-decoration", "line-through");
    }
    else {
        x.style.cssText = 'background-color:'+y[Number(counter)]+';'
        t.style.cssText = 'background-color:'+y[Number(counter)]+';'
    }

}