
function msg(){
   let senha = prompt('Digite a senha: ');
   if(senha == 'redstaraudio2'){
        var audio = new Audio('./assets/audio/audio_secret.mp3');
        audio.play();
   }
   else if(senha == 'redstarmeme'){
        var meme = document.getElementById('video');
        var video = document.createElement('video');
        video.src = './assets/video/meme.mp4';
        video.controls = true;
        video.width = 350;
        video.height = 250;
        meme.appendChild(video);
   }
   else if(senha == 'redmap'){
        window.location.href = "https://rdr2map.com/";
   }
   else if(senha == 'redwallpapperart'){
        window.location.href = "https://www.rockstargames.com/br/reddeadredemption2/downloads"
   }
   else{
        alert('Inválido!');
   }
}

//Efeito sonoro nos botões
var links = document.querySelectorAll('.item');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var audioEfect = new Audio('./assets/audio/efeito_sonoro.mp3');
        audioEfect.play();
        setTimeout(() => {
            window.location.href = this.href;
        }, 550);
    });
});