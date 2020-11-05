let col = ""
let y = {}
let counter = 0

class item {
    constructor() {
        this.color = ""
        this.checkbox = false
    }

    publish(){
        let colors = ['blue', '#ffa400', 'green', 'red', '#00d669', '#530cff']
        let x = document.getElementById('f')
        let z = document.createElement('div')
        let todo = document.createElement('p')
        let inp = document.getElementById('inp')
        todo.innerHTML = inp.value
        todo.classList.add('tdd')
        todo.id = String(counter) +'td'
        z.classList.add('item')
        let check = document.createElement('input')
        let check_div = document.createElement('div')
        check.type = 'checkbox'
        check.id = String(counter)
        check.onclick = function() { switch_gray( this.id, todo.id ) }
        check.classList.add('checkb')
        check_div.classList.add('check')
        z.appendChild(check_div)
        check_div.appendChild(check)
        if(!col) this.color = colors[Math.floor(Math.random()*colors.length)]
        else this.color = col
        z.style.cssText = 'background-color:' + this.color + ';'
        z.classList.add('rounded')
        z.appendChild(todo)
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
    erase()
}

function erase() {
    let t = document.getElementById('inp')
    col = ""
    t.value = ""
}

function color(color) {
    col = color
}

function switch_gray(id, td) {
    let x = document.getElementById(id)
    let t = document.getElementById(td)
    if (x.checked) {
        x.parentElement.parentElement.style.cssText = 'background-color: #ccc;'
        t.style.setProperty("text-decoration", "line-through");
    }
    else {
        x.parentElement.parentElement.style.cssText = 'background-color:'+y[id]+';'
        t.style.setProperty("text-decoration", "none");
    }
}