const database = firebase.firestore();

const obtenerSensores = () => database.collection('sensores').get();
const sensoresContainer = document.getElementById('sensores-container');


window.addEventListener('DOMContentLoaded' , async (e)=>{

    const sensores = await obtenerSensores();

    sensores.forEach(doc => {

    
        sensoresContainer.innerHTML += `<div class="card" >
		  <div class="card-body" >
			<h5 class="card-title">Sensor ${doc.data().id+1}</h5>
            <p class="card-text">
            <strong>ICA: </strong> ${doc.data().ica} 
                </br>
                <strong> Cantidad de partículas: </strong> ${doc.data().cantidad_particulas}
                </br>
                <strong>Ubicación:</strong> ${doc.data().ubicacion}
            </p>
		  </div>
        `      
    });

})

//ubicacion

//fecha hora

new Morris.Line({
  

  element: 'grafica',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.

data: [
    { sensor: '1', particulas: 44},
    { sensor: '2', particulas: 12 },
    { sensor: '3', particulas: 5 },
    { sensor: '4', particulas: 5 },
    { sensor: '5', particulas: 33 },
    { sensor: '6', particulas: 20 },
    { sensor: '7', particulas: 10 },
    { sensor: '8', particulas: 5 },
    { sensor: '9', particulas: 5 },
    { sensor: '10', particulas: 20 }
  ],
  
  // The name of the data record attribute that contains x-values.
  xkey: 'sensor',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['particulas'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Cantidad partículas'],
  resize: true,
  lineColors: ['#8c8787']
});