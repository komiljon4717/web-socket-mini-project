const socket = io("http://192.168.1.9:5000/")
let box = document.querySelector("#div")

input.onkeyup = event => {
    if (event.keyCode !== 13 || !input.value.trim()) return
    
    socket.emit("new message", { username, value: input.value })

    let li = document.createElement('li')
    li.classList.add('.me')
    li.setAttribute("style", "text-align: right");
    li.innerHTML = `<b>${username}:</b> ${input.value}`
    box.append(li)
    
    input.value = null
}

socket.on("message", ({ username, value }) => {

    let li = document.createElement('li')
    li.classList.add('.other')
    li.innerHTML = `<b>${username}:</b> ${value}`
    box.append(li)
})
