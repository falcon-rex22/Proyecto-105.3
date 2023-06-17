Webcam.attach("#camera");

camera = document.getElementById("camera");
Webcam.set({
    width:300,
    height:300,
    image_formate:"png",
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("Fotito").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5_version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8PG2NvNn-/model.json", modelo_cargado);

function modelo_cargado(){
    console.log("modelo cargado");
}

function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }

// Función que se ejecuta cuando obtenemos algún error en los resultados
function gotResult(error, results) {
  // Muestra el error en la consola
  if (error) {
    console.error(error);
  }
  
  else {
    // Los resultados están en un array ordenado por presición.
    console.log(results);
   
  }
}
