import $ from 'jquery'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <h1>1) Vanilla JQuery</h1>
        <br />
    </div>
    
    <div>
        <h2>2) Ajax Request</h2>
        <button id="req" type="button">Request</button> <br />
        <span>
            <code>Response:</code> 
            <code id="res"></code>
        <span>
    </div>
`


document.querySelector<HTMLButtonElement>('#req')!.addEventListener('click', () => {
    $.getJSON('https://jsonplaceholder.typicode.com/todos/1', res => {
        document.querySelector<HTMLDivElement>('#res')!.innerHTML = JSON.stringify(res, null, 2)
    })
})