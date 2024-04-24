const keys = document.querySelector('.keys')

window.addEventListener('keydown', (e) => {
    // console.log(e);
    keys.innerHTML = 
    `<table>
        <tr>
            <td>Whick key</td>
            <td>Key Code</td>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.code}</td>
        </tr>
    </table>`
})

