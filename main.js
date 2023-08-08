//Armazenar a API Web Speech (Converte voz em texto)
//OBS: SpeechRecognition = Recohecimento de fala
var SpeechRecognition = window.webkitSpeechRecognition; 

//Nova API (Usar exemplo do João API Humano)
var recognition = new SpeechRecognition();


function start()
{
    //Manter a caixa de texto vazia
    document.getElementById("textbox").innerHTML = "";

    //Chamar função (pré-definida) da API Web Speech 
    recognition.start();
} 
 
// Função que contém a conversão (voz em texto)
recognition.onresult = function(event) {

    //Exibir o evento no console
    console.log(event); 

    //Acessando a frase convertida localizada dentro da API
    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="tire a minha selfie"){
        console.log("tirando selfie---");
        speak();
    }
} 


    // PARTE 2
    function speak(){
        var synth = window.speechSynthesis;
        speakData = "tire a minha selfie em cinco segundos";
        speakData = document.getElementById("textbox").value;
         var utterThis = new SpeechSynthesisUtterance(speakData);
         synth.speak(utterThis);
         webcam.attach(camera);
         setTimeout(function()){
            take_selfie();
         }, 5000;
    }
    



Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 
 function takeSelfie(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfieImage" src = "'+data_uri+'"/>'
    });
 }