const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('stop')

let audio

for(elemento of playCancion){
    elemento.addEventListener('click', function(){
        let cancion = this.getAttribute('id')
        audio = new Audio(`./Canciones/${cancion}.mp3`)
        audio.play()
    })
}

for(elemento of stopCancion){
    elemento.addEventListener('click', function(){
        audio.pause()
    })
}