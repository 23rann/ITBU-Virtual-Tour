var 
Titik1, 
  Titik2, 
  Titik3, 
  Titik4, 
  Titik5, 
  GedungA,
  GedungC,
  LabKomputer,
  WifiId, 
  Keuangan,
  RuangProdi,
  RuangPuskom,
  RuangKelas,
  WifiId,
  Masjid,
  Perpustakaan,
  LabSipil,
  LabFisika,
  LabMesin,
viewer, 
container, 
infospot;

var bar = document.querySelector( '#bar' );

function onProgressUpdate ( event ) {
  var percentage = event.progress.loaded/ event.progress.total * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100){
    bar.classList.add( 'hide' );
    setTimeout(function(){
      bar.style.width = 0;
    }, 1000);
  }
}

container = document.querySelector( '.image-container' );

// ========================================================

Titik1 = new PANOLENS.ImagePanorama( 'images/Titik1.jpg' );
Titik1.addEventListener( 'progress', onProgressUpdate );

Titik2 = new PANOLENS.ImagePanorama( 'images/Titik2.png' );
Titik2.addEventListener( 'progress', onProgressUpdate );

Titik3 = new PANOLENS.ImagePanorama( 'images/Titik3.png' );
Titik3.addEventListener( 'progress', onProgressUpdate );

Titik4 = new PANOLENS.ImagePanorama( 'images/Titik4.png' );
Titik4.addEventListener( 'progress', onProgressUpdate );

Titik5 = new PANOLENS.ImagePanorama( 'images/Titik5.png' );
Titik5.addEventListener( 'progress', onProgressUpdate );

GedungA = new PANOLENS.ImagePanorama( 'images/GedungA.png' );
GedungA.addEventListener( 'progress', onProgressUpdate );

GedungC = new PANOLENS.ImagePanorama( 'images/GedungC.png' );
GedungC.addEventListener( 'progress', onProgressUpdate );

Keuangan = new PANOLENS.ImagePanorama( 'images/Keuangan.png' );
Keuangan.addEventListener( 'progress', onProgressUpdate );

LabKomputer = new PANOLENS.ImagePanorama( 'images/LabKomputer.png' );
LabKomputer.addEventListener( 'progress', onProgressUpdate );

WifiId = new PANOLENS.ImagePanorama( 'images/WifiId.png' );
WifiId.addEventListener( 'progress', onProgressUpdate );

RuangProdi = new PANOLENS.ImagePanorama( 'images/RuangProdi.png' );
RuangProdi.addEventListener( 'progress', onProgressUpdate );

RuangPuskom = new PANOLENS.ImagePanorama( 'images/RuangPuskom.png' );
RuangPuskom.addEventListener( 'progress', onProgressUpdate );

RuangKelas = new PANOLENS.ImagePanorama( 'images/RuangKelas.png' );
RuangKelas.addEventListener( 'progress', onProgressUpdate );

Masjid = new PANOLENS.ImagePanorama( 'images/Masjid.png' );
Masjid.addEventListener( 'progress', onProgressUpdate );

Perpustakaan = new PANOLENS.ImagePanorama( 'images/Perpustakaan.jpg' );
Perpustakaan.addEventListener( 'progress', onProgressUpdate );

LabSipil = new PANOLENS.ImagePanorama( 'images/LabSipil.jpg' );
LabSipil.addEventListener( 'progress', onProgressUpdate );

LabFisika = new PANOLENS.ImagePanorama( 'images/LabFisika.jpg' );
LabFisika.addEventListener( 'progress', onProgressUpdate );

LabMesin = new PANOLENS.ImagePanorama( 'images/LabMesin.jpg' );
LabMesin.addEventListener( 'progress', onProgressUpdate );

WifiId = new PANOLENS.ImagePanorama( 'images/WifiId.png' );
WifiId.addEventListener( 'progress', onProgressUpdate );

// ========================================================

Titik1.link( Titik2, new THREE.Vector3(100, 0, 2000) );
Titik2.link( Titik1, new THREE.Vector3(1300, -100, -2300) );


Titik2.link( Titik3, new THREE.Vector3(-1200, 0, 2000) );
Titik3.link( Titik2, new THREE.Vector3(-400, 0, -2300) );

Titik2.link( GedungA, new THREE.Vector3(250, -100, -2000) );
GedungA.link( Titik2, new THREE.Vector3(-500, -100, 500) );

GedungA.link( LabKomputer, new THREE.Vector3(-1200, 250, -1000) );
LabKomputer.link( GedungA, new THREE.Vector3(-1400, -50, 1300) );

Titik2.link( Keuangan, new THREE.Vector3(-1500, 0, -350) );
Keuangan.link( Titik2, new THREE.Vector3(1500, 0, -350) );


Titik3.link( Titik4, new THREE.Vector3(-1000, 0, 2000) );
Titik4.link( Titik3, new THREE.Vector3(2300, 0, -1000) );


Titik4.link( GedungC, new THREE.Vector3(-280, 0, 1500) );
GedungC.link( Titik4, new THREE.Vector3(100, 0, -1000) );

GedungC.link( RuangProdi, new THREE.Vector3(2000, 0, 200) );
RuangProdi.link( GedungC, new THREE.Vector3(-1000, 0, -1200) );

RuangProdi.link( RuangPuskom, new THREE.Vector3(800, -30, -1200) );
RuangPuskom.link( RuangProdi, new THREE.Vector3(1050, -70, -1200) );

GedungC.link( RuangKelas, new THREE.Vector3(-2000, -100, -200) );
RuangKelas.link( GedungC, new THREE.Vector3(1500, 0, 1000) );


Titik4.link(LabMesin, new THREE.Vector3(150, 0, -1500) );
LabMesin.link(Titik4, new THREE.Vector3(1400, -200, 700) );


Titik4.link( WifiId, new THREE.Vector3(-1800, 0, -200) );
WifiId.link( Titik4, new THREE.Vector3(1500, 0, 200) );

WifiId.link( Perpustakaan, new THREE.Vector3(-300, 0, -1400) );
Perpustakaan.link( WifiId, new THREE.Vector3(1000, -100, -150) );

WifiId.link( Masjid, new THREE.Vector3(-1300, -100, 1200) );
Masjid.link( WifiId, new THREE.Vector3(-1200, 0, -200) );


WifiId.link( Titik5, new THREE.Vector3(-1500, -100, 300) );
Titik5.link( WifiId, new THREE.Vector3(1000, -100, -700) );

Titik5.link( LabFisika, new THREE.Vector3(-1000, 0, -1000) );
LabFisika.link( Titik5, new THREE.Vector3(1000, -200, -800) );

Titik5.link( LabSipil, new THREE.Vector3(-1000, 0, 1000) );
LabSipil.link( Titik5, new THREE.Vector3(1500, -100, -400) );



// ========================================================

viewer = new PANOLENS.Viewer( { 
  container: container, 
  controlBar: true,
  autoRotate: true,
  autoRotateSpeed: 0.5,
  output: 'console',
  autoHideInfospot: false 

} );

viewer.setCameraFov(90);
viewer.addUpdateCallback(function(){
  
});

viewer.add( 
  Titik1, 
  Titik2, 
  Titik3, 
  Titik4, 
  Titik5, 
  GedungA,
  GedungC,
  LabKomputer,
  WifiId, 
  Keuangan,
  RuangProdi,
  RuangPuskom,
  RuangKelas,
  WifiId,
  Masjid,
  Perpustakaan,
  LabSipil,
  LabFisika,
  LabMesin,
  viewer, 
  container
);
// Enter panorama when load completes
function onButtonClick( targetPanorama ) {
  bar.classList.remove( 'hide' );
  viewer.setPanorama( targetPanorama );
}

// Maunal Set Panorama
var button1 = document.querySelector( '#btn1' );
var button2 = document.querySelector( '#btn2' );
var button3 = document.querySelector( '#btn3' );
var button4 = document.querySelector( '#btn4' );
var button5 = document.querySelector( '#btn5' );
var button6 = document.querySelector( '#btn6' );
var button7 = document.querySelector( '#btn7' );
var button8 = document.querySelector( '#btn8' );
var button9 = document.querySelector( '#btn9' );
var button10 = document.querySelector( '#btn10' );
var button11 = document.querySelector( '#btn11' );
var button12 = document.querySelector( '#btn12' );
var button13 = document.querySelector( '#btn13' );

button1.addEventListener( 'click', onButtonClick.bind( this, LabKomputer ) );
button2.addEventListener( 'click', onButtonClick.bind( this, LabMesin ) );
button3.addEventListener( 'click', onButtonClick.bind( this, LabFisika ) );
button4.addEventListener( 'click', onButtonClick.bind( this, LabSipil ) );
button5.addEventListener( 'click', onButtonClick.bind( this, Keuangan ) );
button6.addEventListener( 'click', onButtonClick.bind( this, GedungC ) );
button7.addEventListener( 'click', onButtonClick.bind( this, WifiId ) );
button8.addEventListener( 'click', onButtonClick.bind( this, Perpustakaan ) );
button9.addEventListener( 'click', onButtonClick.bind( this, Masjid ) );
button10.addEventListener( 'click', onButtonClick.bind( this, RuangKelas ) );
button11.addEventListener( 'click', onButtonClick.bind( this, RuangProdi ) );
button12.addEventListener( 'click', onButtonClick.bind( this, RuangPuskom ) );
button13.addEventListener( 'click', onButtonClick.bind( this, GedungA ) );


// ========================================================

