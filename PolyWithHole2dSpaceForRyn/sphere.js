
// Mason Yin's sphere test with three.js
let  polyCounter =0;

const cluster2d = [[[0.196260,1.478561],[0.194279,1.480544],[0.189170,1.478769],[0.182773,1.479513],[0.183437,1.460536],[0.178864,1.435251],[0.178137,1.449574],[0.174431,1.474762],[0.170978,1.471517],[0.145752,1.474632],[-0.700674,1.434687],[-0.697767,1.431705],[-0.069596,0.790142],[0.085860,0.783941],[0.097591,0.783507],[0.129937,0.782498],[0.134594,0.270674],[0.134388,0.178766],[0.134962,0.151921],[0.141050,0.084534],[0.140126,0.083107],[0.140561,0.082305],[0.140727,0.081779],[0.140727,0.081779],[0.140561,0.082305],[0.140126,0.083107],[0.141050,0.084534],[0.134962,0.151921],[0.134388,0.178766],[0.134594,0.270674],[0.129937,0.782498],[0.097591,0.783507],[0.085860,0.783941],[-0.069596,0.790142],[-0.178743,0.589420],[-0.212946,0.524380],[-0.233060,0.484717],[-0.417153,0.118222],[-0.430947,0.091269],[-0.438746,0.076434],[-0.477530,0.003947],[-0.477866,0.003328],[-0.662354,-0.002690],[-0.722069,-0.530025],[-0.721015,-0.541805],[-0.721015,-0.541805],[-0.722069,-0.530025],[-0.662354,-0.002690],[-0.693776,-0.003481],[-0.737061,-0.004895],[-0.778413,-0.005317],[-0.885837,-0.008828],[-0.891630,-0.008995],[-2.924364,-0.075306],[-3.912177,-0.106619],[-3.925360,0.210222],[-3.932392,0.396285],[-3.934049,0.437995],[-3.941072,0.623814],[-4.119972,4.923373],[-1.020537,1.760392],[-0.917362,1.654747],[-0.899023,1.636037],[-0.745848,1.480354],[-0.743646,1.478174],[-0.700674,1.434687],[0.145752,1.474632],[0.170978,1.471517],[0.174431,1.474762],[0.178137,1.449574],[0.178864,1.435251],[0.183437,1.460536],[0.182773,1.479513],[0.179693,1.480580],[0.178611,1.482449],[0.178075,1.487255],[0.178075,1.487255],[0.178611,1.482449],[0.179693,1.480580],[0.182773,1.479513],[0.189170,1.478769],[0.194279,1.480544],[0.196041,1.485620],[0.195207,1.492785],[0.194533,1.494768],[0.197004,1.497336],[0.197335,1.497544],[0.197880,1.498117],[0.218754,1.502672],[0.202698,1.503889],[1.387864,8.125319],[0.321893,8.201192],[-0.003212,8.224625],[-0.682266,8.274383],[-1.575208,8.340077],[-4.352034,6.322854],[-6.661218,6.233045],[-7.117475,6.215763],[-7.406230,6.205021],[-7.112806,0.469416],[-7.097649,0.296604],[-7.092394,0.308866],[-7.087755,0.298251],[-7.087755,0.298251],[-7.092394,0.308866],[-7.097649,0.296604],[-7.097862,0.295351],[-7.087425,0.294131],[-7.085749,0.291244],[-7.085549,0.290627],[-7.085549,0.290627],[-7.085749,0.291244],[-7.087425,0.294131],[-7.097862,0.295351],[-7.097649,0.296604],[-7.112806,0.469416],[-7.406230,6.205021],[-8.464979,6.167072],[-9.550087,6.081438],[-13.328284,1.002819],[-7.110796,0.302071],[-7.108198,0.298250],[-7.104420,0.295846],[-7.103406,0.294773],[-7.102015,0.293817],[-7.103545,0.289161],[-7.103765,0.287099],[-7.103552,0.285143],[-7.101441,0.279150],[-7.095517,0.277072],[-7.090072,0.277679],[-7.086909,0.278730],[-7.086909,0.278730],[-7.090072,0.277679],[-7.095517,0.277072],[-7.101441,0.279150],[-7.103552,0.285143],[-7.103765,0.287099],[-7.103545,0.289161],[-7.102015,0.293817],[-7.103406,0.294773],[-7.104420,0.295846],[-7.108198,0.298250],[-7.110796,0.302071],[-13.328284,1.002819],[-13.718888,0.478126],[-13.702490,0.451144],[-13.579044,0.247598],[-13.008328,-0.696069],[-10.346646,-5.100478],[-9.608300,-5.466464],[-7.856932,-5.257834],[-7.257619,-5.186662],[-7.065789,-5.164094],[-7.090288,0.247472],[-7.084858,0.275748],[-7.084803,0.275698],[-7.083729,0.275156],[-7.083729,0.275156],[-7.084803,0.275698],[-7.084858,0.275748],[-7.090288,0.247472],[-7.065789,-5.164094],[-6.524939,-5.101074],[-4.545972,-4.871976],[-1.000299,-6.695326],[-0.934369,-6.729340],[-0.838627,-6.677757],[-0.103076,-6.282401],[-0.711600,-0.682830],[-0.711600,-0.682830],[-0.103076,-6.282401],[2.922871,-4.658695],[4.207752,-4.124504],[5.468279,-3.561677],[5.398751,-0.622801],[5.387006,-0.118199],[5.383361,0.046480],[5.380066,0.200737],[5.372332,0.576189],[5.454889,1.313754],[5.471611,1.461109],[5.519632,1.880030],[5.766155,4.016405],[1.478334,8.118908],[1.387864,8.125319],[0.202698,1.503889],[0.218754,1.502672],[0.197880,1.498117],[0.197335,1.497544],[0.197004,1.497336],[0.194533,1.494768],[0.195207,1.492785],[0.196041,1.485620],[0.194279,1.480544],[0.196260,1.478561],[0.196873,1.478184],[0.196873,1.478184],[0.196260,1.478561],],
[[-0.212946,0.524380],[-0.178743,0.589420],[-0.069596,0.790142],[-0.697767,1.431705],[-0.700674,1.434687],[-0.743646,1.478174],[-0.745848,1.480354],[-0.899023,1.636037],[-0.917362,1.654747],[-1.020537,1.760392],[-4.119972,4.923373],[-3.941072,0.623814],[-3.934049,0.437995],[-3.932392,0.396285],[-3.925360,0.210222],[-3.912177,-0.106619],[-2.924364,-0.075306],[-0.891630,-0.008995],[-0.787646,0.531595],[-0.787646,0.531595],[-0.891630,-0.008995],[-0.885837,-0.008828],[-0.778413,-0.005317],[-0.737061,-0.004895],[-0.693776,-0.003481],[-0.662354,-0.002690],[-0.477866,0.003328],[-0.477530,0.003947],[-0.438746,0.076434],[-0.430947,0.091269],[-0.417153,0.118222],[-0.233060,0.484717],[-0.212946,0.524380],],
[[-15.922982,29.421530],[-15.971298,30.456432],[-16.066414,32.509830],[-16.829557,33.641098],[-21.133089,35.121574],[-21.233982,35.156326],[-21.496572,35.247070],[-22.465466,35.583397],[-23.307016,35.875824],[-25.990374,34.737980],[-27.428513,30.801842],[-27.931644,29.426224],[-28.571712,27.687925],[-28.620951,27.554319],[-27.800516,25.922964],[-22.101841,22.001736],[-22.041059,22.010452],[-21.270557,22.120317],[-21.144781,22.138180],[-18.965422,22.445259],[-15.778746,26.504631],[-15.909791,29.147490],[-15.922982,29.421530],],
];


const clusters =[];





const tempV = new THREE.Vector3();
const myV = new THREE.Vector3();

const cameraToPoint = new THREE.Vector3();
const cameraPosition = new THREE.Vector3();
const normalMatrix = new THREE.Matrix3();
const settings = {
  minArea: 20,
  maxVisibleDot: -0.2,
};


  const width = 1200
  const height = 1000
  const globeRadius = 200
  const globeSegments = 64
  const globeWidth = 4098 / 2
  const globeHeight = 1968 / 2






const gNodes = [
  {label: "Yeah Yeah\nYeahs", pos: [0.7857487177938283, -0.602763002856799, -0.1388370082953718]},
  {label: "Kaiser Chiefs", pos: [0.037465015161484524, 0.06473111782640666, -0.997199205286433]},
  {label: "The Who", pos: [0.8687568656100297, -0.3396351851476497, -0.36042953467378136]},
  {label: "The White\nStripes", pos: [-0.1816743347025578, 0.4704087930246614, 0.8635450211514535]},
  {label: "Linkin Park", pos: [0.6288391168620967, -0.7369011735489979, 0.24806859036606763]},
  {label: "Weezer", pos: [-0.4282845392652252, -0.7808567305781816, 0.45479129250363487]},
  {label: "Arctic Monkeys", pos: [0.738115866978828, -0.46922403491848885, -0.4847821902348577]},
  {label: "The Rolling\nStones", pos: [0.8460778314846338, 0.0564480666598323, -0.5300621839375327]},
  {label: "Jimi Hendrix", pos: [0.16639045203251523, -0.11818566942874545, -0.9789516663319464]},
  {label: "Snow Patrol", pos: [0.7928687118218075, 0.2834116221750395, -0.5394785058092122]},
  {label: "The Offspring", pos: [0.9086893578366636, 0.4174724692916936, 0.0006231676243889694]},
  {label: "R.E.M.", pos: [0.3976040914614972, 0.9175043876039419, -0.00983286227874449]},
  {label: "Pearl Jam", pos: [0.722303315515309, 0.645716576928572, -0.24764495285638202]},
  {label: "The Beatles", pos: [0.053779862712602745, -0.6701032644496039, -0.7403170546060641]},
  {label: "System of\na Down", pos: [0.21254960816189525, 0.8525406963945914, 0.47749034028056514]},
  {label: "Aerosmith", pos: [-0.3113648748369546, -0.2861686466038752, -0.9061784705115619]},
  {label: "Foo Fighters", pos: [-0.5448186795911854, 0.21875430337266769, -0.8095178571992444]},
  {label: "Modest Mouse", pos: [-0.10977027972195413, -0.3885392065299319, -0.9148703573069]},
  {label: "Moby", pos: [0.22736373644643953, -0.372501564466572, -0.8997490293515578]},
  {label: "Bob Dylan", pos: [0.5100782013569277, -0.23990041649660393, -0.8259951686694285]},
  {label: "Metallica", pos: [-0.7532193900893147, -0.6577506074603742, 0.004968780432799304]},
  {label: "The Smashing\nPumpkins", pos: [0.5872990960070343, 0.06864543056341403, 0.8064537039979938]},
  {label: "Guns N'\nRoses", pos: [0.443848160926263, -0.8941993178480168, -0.058364287047096106]},
  {label: "Daft Punk", pos: [0.9627556115299772, -0.025759105519354793, -0.2691432721625833]},
  {label: "The Shins", pos: [0.46151991513932944, -0.22250123581815567, -0.8587738747709898]},
  {label: "Massive Attack", pos: [0.36897103170059925, 0.23955780734598456, -0.898038103147845]},
  {label: "Gorillaz", pos: [-0.9605432454229473, -0.11183554793541996, 0.2546556182186759]},
  {label: "blink-182", pos: [0.49928635213134503, -0.3879158267745646, -0.7747479912288773]},
  {label: "Keane", pos: [-0.21081913076414577, -0.6301575601310694, -0.7472996343592762]},
  {label: "Led Zeppelin", pos: [0.6626192173500258, 0.5546253618297272, -0.5033154883506799]},
  {label: "Rage Against\nthe Machine", pos: [0.2539072959872098, 0.8666506485792427, -0.4294737924037292]},
  {label: "Beck", pos: [0.44175397789312815, -0.617325825255177, 0.6509702362540183]},
  {label: "Coldplay", pos: [-0.9266764473368174, 0.09632655565578879, -0.36330697299488596]},
  {label: "The Strokes", pos: [-0.7095002302010147, -0.20993541298737348, -0.6727083660238871]},
  {label: "Oasis", pos: [0.453549098831861, 0.5282370246467194, -0.7178153388868113]},
  {label: "The Doors", pos: [0.4589340786743188, 0.13850574794738962, -0.8776079245408442]},
  {label: "The Chemical\nBrothers", pos: [-0.07301745456610823, -0.8623088384507975, -0.5010907287690751]},
  {label: "Green Day", pos: [-0.11541219633335087, 0.7881798920761519, -0.6045266600112337]},
  {label: "Pink Floyd", pos: [0.548148632468441, -0.5782237868404021, -0.6043097955973602]},
  {label: "Death Cab\nfor Cutie", pos: [0.7786626787493228, -0.2111654655599702, -0.5908414160142887]},
  {label: "Red Hot\nChili Peppers", pos: [-0.7286431444478968, 0.653751165988538, 0.20417781715384298]},
  {label: "AC/DC", pos: [-0.2962577646290999, 0.5091010006305366, -0.8081135489855094]},
  {label: "Placebo", pos: [-0.6405204379006452, 0.5940831085213996, -0.48661979902292973]},
  {label: "Air", pos: [0.7074545474685867, 0.011372368755488412, -0.706667342173746]},
  {label: "Portishead", pos: [0.4902995925313779, -0.7837015504986381, -0.38133736941138546]},
  {label: "Queens of the\nStone Age", pos: [0.2609921837428194, -0.7144502935422833, -0.6491870747962407]},
  {label: "Nirvana", pos: [-0.7097621703904815, -0.5581059171415933, -0.42983188194238686]},
  {label: "Bjork", pos: [0.06299364285705733, -0.9534171777745879, 0.2950042136714958]},
  {label: "The Killers", pos: [0.12329699780755186, -0.9735832703458787, -0.19218081598918302]},
  {label: "The Cure", pos: [0.4117784841507033, -0.027922122407759313, -0.9108561000897974]},
  {label: "Muse", pos: [0.7532838992189481, 0.5189354515736511, 0.40406603950041203]},
  {label: "Radiohead", pos: [-0.15929523517058, -0.3536839608179429, 0.9217009731534851]},
  {label: "U2", pos: [0.9397234358950075, -0.34156546349352507, 0.015902772655579784]},
  {label: "Interpol", pos: [-0.2094508820238759, 0.963290895858766, -0.1679314680905174]},
  {label: "The Cranberries", pos: [0.05711443437175791, 0.46601787935691363, -0.882929939183217]},
  {label: "Franz Ferdinand", pos: [0.9660506591632946, 0.11058471000152091, 0.23348907007404726]},
  {label: "Bloc Party", pos: [-0.26488945464549246, -0.02580340841001299, -0.9639334836657764]},
  {label: "Blur", pos: [-0.39522991439881433, -0.8961779013982917, -0.2016394897078936]},
  {label: "Incubus", pos: [0.8458929211225115, -0.28953499636609087, 0.44792259585123917]}
  ];

const gEdges = [
  {from: 0, to: 1},
  {from: 1, to: 2},
  {from: 0, to: 2},
  {from: 3, to: 4 },
  {from: 5, to: 1},
  {from: 5, to: 2}
  
];

var labels = [];

var scene = new THREE.Scene();





const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});




var camera = new THREE.PerspectiveCamera(45, width / height, 1, 4000);
camera.position.set(0, 10, -400);



renderer.setSize(width, height);

renderer.setClearColor(0x999999);
//document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

scene.add(new THREE.AxesHelper(1));

// test using the gmap png as the texutre
//let sphereRadius = 10;
let sphereRadius = globeRadius;
const loader = new THREE.TextureLoader();
//const geometry = new THREE.SphereBufferGeometry(sphereRadius, 128, 64);
const geometry = new THREE.SphereGeometry(sphereRadius, 64, 32);
//const geometry = new THREE.SphereGeometry(sphereRadius, 1024, 512);









//const material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.5,  vertexColors: THREE.FaceColors });
const material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.5,  vertexColors: THREE.FaceColors, wireframe: true });


const labelContainerElem = document.querySelector('#labels');

let sphere = new THREE.Mesh(geometry, material);
//scene.add(sphere);

/// test shape geometry
for (var x=0; x < cluster2d.length-2; x++)
{
  var v2array =[];
  for (var i=0; i< cluster2d[x].length; i++)
  {
    var v2 = new  THREE.Vector2(cluster2d[x][i][0], cluster2d[x][i][1]);
    v2array.push(v2);

  }

  var heartShape = new THREE.Shape(v2array);
  var geometry2 = new THREE.ShapeGeometry( heartShape );
  var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var mesh2 = new THREE.Mesh( geometry2, material2 ) ;

  var edges = new THREE.EdgesGeometry( geometry2 );

  var positions = edges.getAttribute("position");

 
  var polyTest = cluster2d;  //messyPoly
 

 var clrUsed = 'red';
 //for (var y =0; y<polyTest.length; y++)
{
  var gtest = new  THREE.Geometry();


  var poly1 = polyTest[0];
  for (var i=0; i < poly1.length; i++)
  {
    //drawLabelAt(poly1[i].clone(), i.toString());
    gtest.vertices.push(new THREE.Vector3(poly1[i][0], poly1[i][1], 0.0));
  }

  var arcTest = new THREE.Line(gtest, new THREE.LineBasicMaterial({
    color: clrUsed, linewidth: 3.0
  }));
  scene.add(arcTest);
  //var ccc =0;
 // for (var i=0; i < posArray.count-6; i += 6)
  //{
   
  //}
  //break;
  
  //var edges2 = new THREE.Geometry().fromBufferGeometry( edges );
  //edges2.mergeVertices();

 // var cleanPly = constructPoly(edges2.vertices);
 /*
  for (var y =0; y<cleanPly.length; y++)
  {
    var gtest = new  THREE.Geometry();


  var poly1 = cleanPly[y];
  for (var i=0; i < poly1.length; i++)
  {
    drawLabelAt(poly1[i].clone(), i.toString());
    gtest.vertices.push(poly1[i].clone());
  }

  var arcTest = new THREE.Line(gtest, new THREE.LineBasicMaterial({
    color: getRandomColor(), linewidth: 3.0
  }));
  scene.add(arcTest);
  */  
}

/*
 break;
  for (var i=0; i< edges2.vertices.length-1; i+=2)
  {
    var g3 = new THREE.Geometry();
    g3.vertices.push(edges2.vertices[i].clone());
    g3.vertices.push(edges2.vertices[i+1].clone());
    drawLabelAt(edges2.vertices[i].clone(), i.toString());
    drawLabelAt(edges2.vertices[i+1].clone(), (i+1).toString());
    var arc3 = new THREE.Line(g3, new THREE.LineBasicMaterial({
      color: getRandomColor(), linewidth: 3.0
    }));
  
    scene.add(arc3);
  }
  

  
  break;
  
  var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: getRandomColor() } ) );
  
  scene.add( line );
 break;
 */
}
//scene.add( mesh2 );





var zeroPoint = new THREE.Vector3();
//var pointStart = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().multiplyScalar(sphereRadius);
var pointStart = new THREE.Vector3(0,1, 0.5, 0.6).normalize().multiplyScalar(sphereRadius);
var pointEnd = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().multiplyScalar(sphereRadius);


function PolyArea(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
}



function spot(point, color) {
  var s = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 24), new THREE.MeshBasicMaterial({
    color: color
  }));
  s.position.copy(point);
  scene.add(s);
  return s;
}

function removeDupLines( pts)
{
  var ret =[];
  ret.push(pts[0].clone()); ret.push(pts[1].clone());
  for (var i=2; i< pts.length-1; i+=2)
  {
    if (false == isDup( ret, pts[i], pts[i+1]))
    {
      ret.push(pts[i].clone());
      ret.push(pts[i+1].clone());
    }

  }

  return ret;
}

function isDup( list, p1, p2)
{
  for (var i=0; i< list.length -1; i +=2)
  {
    if (same(p1, list[i]) && same(p2, list[i+1]) )
    {
      return true;
    }
    if (same(p2, list[i]) && same(p1, list[i+1]))
    {
      return true;
    }
  }
  return false;
}

//check two collections
function hasRepeat( a1, a2)
{
  for (var i=0; i< a1.length; i++)
  {
    for (var j=0; j<a2.length; j++)
    {
      if (same(a1[i], a2[j]))
      {
        return true;
      }
    }
  }

  return false;

}

//check an array of collections
function findRepeat (a)
{
  if (a.length < 2)
  {
    return [-1, -1];
  }
  for (var i=0; i< a.length; i++)
  {
    for (var j = i+1; j< a.length; j++ )
    {
      if (hasRepeat(a[i], a[j]))
      {
        return [i,j];
      }
    }
  }

  return [-1, -1];
}

function constructPoly (points)
{
  var parent =[];
  var first =[];
  first.push(points[0].clone()); first.push(points[1].clone());
  parent.push(first);
  for (var i=2; i< points.length-1; i+=2)
  {
    //debug
    //var rep = findRepeat(parent);
    
    //if (rep[0] >=0)
   // {
    //  console.log(rep);
    //}
    ///////////

     var p1= points[i].clone();
     var p2 = points[i+1].clone();

     var connected = false;
     var linked = false;  // linked to another cluster
     for (var j=0; j< parent.length; j++)
     {
       var cluster = parent[j];
       var l = cluster.length -1;
       if (same(p1, cluster[0]))
       { 
         connected = true;
         var info = getConnectIndex(p2, parent, j+1 );
         if (info[0] >= 0)
         {
           linked = true;
           var k = info[0]; 
           var matchArray = parent[k];
           if (info[1] == true)
           {
             // matching head
             // reversely add parent[k] into the head of cluster.
             for (var m= 0; m < matchArray.length; m++ )
             {
               cluster.unshift(matchArray[m]);
             }
             parent[j] = cluster;
           }
           else
           {
             // matchin tail:
             cluster = matchArray.concat(cluster);
             parent[j] = cluster;
           }
           // remove matchArray from parent
           parent.splice(k,1);
         }
         else
         {
           // not linked, simply put p2 at the head
           cluster.unshift(p2);
           parent[j] = cluster;
           
         }
         break;
        }
       else if (same (p1, cluster[l]))
       {
         connected = true;
         var info = getConnectIndex(p2, parent, j+1);
         if (info[0] >= 0)
         {
           linked = true;
           var k = info[0];
           var matchArray = parent[k];
           if (info[1] == true)
           {
             // match head
             cluster = cluster.concat(matchArray);
             parent[j] = cluster;
           }
           else
           {
             // match tail
             for (var m = matchArray.length -1; m >=0; m--)
             {
               cluster.push(matchArray[m]);
             } 
             parent[j] = cluster;
           }
            // remove matchArray from parent
            parent.splice(k,1);
         }
         else
         {
           // not linked, simply put p2 at the end
           cluster.push(p2); 
           parent[j] = cluster;
         }
         break;
       }    ///
       else if (same(p2, cluster[0]))
       { 
         connected = true;
         var info = getConnectIndex(p1, parent, j+1 );
         if (info[0] >= 0)
         {
           linked = true;
           var k = info[0]; 
           var matchArray = parent[k];
           if (info[1] == true)
           {
             // matching head
             // reversely add parent[k] into the head of cluster.
             for (var m= 0; m < matchArray.length; m++ )
             {
               cluster.unshift(matchArray[m]);
             }
             parent[j] = cluster;
           }
           else
           {
             // matchin tail:
             cluster = matchArray.concat(cluster);
             parent[j] = cluster;
           }
           // remove matchArray from parent
           parent.splice(k,1);
         }
         else
         {
           // not linked, simply put p1 at the head
           cluster.unshift(p1);
           parent[j] = cluster;
           
         }
         break;
       }
       else if (same (p2, cluster[l]))
       {
         connected = true;
         var info = getConnectIndex(p1, parent, j+1);
         if (info[0] >= 0)
         {
           linked = true;
           var k = info[0];
           var matchArray = parent[k];
           if (info[1] == true)
           {
             // match head
             cluster =cluster.concat(matchArray);
             parent[j] = cluster;
           }
           else
           {
             // match tail
             for (var m = matchArray.length -1; m >=0; m--)
             {
               cluster.push(matchArray[m]);
             } 
             parent[j] = cluster;
           }
            // remove matchArray from parent
            parent.splice(k,1);
         }
         else
         {
           // not linked, simply put p1 at the end
           cluster.push(p1); 
           parent[j] = cluster;
         }
         break;
       }

     }  // inner for loop for parent

     if (connected == false)
     {
       parent.push([p1,p2]);
     }


  } // outer for loop

  return parent;

}



function getConnectIndex (p, parent, start)
{
  if (start < parent.length)
  {
    for (var i= start; i< parent.length; i++)
    {
      var points = parent[i];
      var l = points.length-1;
      if (same(p, points[0]))
      {
        return [i, true];  // true: match head
      }
      else if (same(p, points[l]))
      {
        return [i, false] // match tail
      }
      
    }
  }

  // check from begining to start-2
  if (start > 1)
  {
    for (var i= 0; i< start-1; i++)
    {
      var points = parent[i];
      var l = points.length-1;
      if (same(p, points[0]))
      {
        return [i, true];  // true: match head
      }
      else if (same(p, points[l]))
      {
        return [i, false] // match tail
      }
    
    }
  }

  return [-1, false];

}


function getConnectIndex2 (p, parent, start)
{
  if (start < parent.length)
  {
    for (var i= start; i< parent.length; i++)
    {
      var points = parent[i];
      var l = points.length-1;
      if (same2d(p, points[0]))
      {
        return [i, true];  // true: match head
      }
      else if (same2d(p, points[l]))
      {
        return [i, false] // match tail
      }
      
    }
  }

  // check from begining to start-2
  if (start > 1)
  {
    for (var i= 0; i< start-1; i++)
    {
      var points = parent[i];
      var l = points.length-1;
      if (same2d(p, points[0]))
      {
        return [i, true];  // true: match head
      }
      else if (same2d(p, points[l]))
      {
        return [i, false] // match tail
      }
    
    }
  }

  return [-1, false];

}

function same( p1, p2)
{
  //return p1.equals(p2);

  if ( p1.manhattanDistanceTo(p2) < 0.01)
  {
    return true;
  }
  return false;
}

function same2d( p1, p2)
{
  var dis = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1]-p2[1]);
  if (dis < 0.001)
  {
    return true;
  }
  return false;
}


function spot2(point, color) {
  var s = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 24), new THREE.MeshBasicMaterial({
    color: color
  }));
  s.position.copy(point);
  //scene.add(s);
  return s;
}

var triGeom = new THREE.Geometry();
triGeom.vertices.push(zeroPoint, pointStart, pointEnd, zeroPoint);
triGeom.faces.push(new THREE.Face3(0, 1, 2));
var line = new THREE.Line(triGeom, new THREE.LineBasicMaterial({
  color: "yellow"
}));
//sphere.add(line);
var triangle = new THREE.Mesh(triGeom, new THREE.MeshBasicMaterial({
  color: "yellow",
  transparent: false,
  opacity: 0.5,
  side: THREE.DoubleSide
}));
//sphere.add(triangle);



//gEdges.forEach(drawArcForItem);

//smacofNodes.forEach(drawSmacofDot);
//clusters.forEach(randColorPoly);

//var polyCenter = new THREE.Vector3(0.1,  -0.2, 0.8).normalize().multiplyScalar(sphereRadius);
//spot(polyCenter, 'yellow');

//use the new algorithm for polygon drawing (must calculate center point)
// comment out the following line to see polyline only.

//clusters.forEach(randColorPoly2);

// draw the polygon contour with lins.
//clusters.forEach(randColorPolyLine);
//clusters.forEach(randColorPolyLine2);
//testDrawPolyEarcut();
//testDrawPolyEarcut3();

// the labels.
//gNodes.forEach(drawLabel);



/*
var testTri =[];
testTri.push(triA);
testTri.push(triB);
testTri.push(triC);

drawPolygon(testTri, 'blue');
*/

////////////////////////test strip custom geometry ................///////////////////
/****
const stripGeometry = new THREE.Geometry();

for (var i=0; i < strip.length; i++)
{
  stripGeometry.vertices.push (new THREE.Vector3(strip[i][0], strip[i][1], strip[i][2]).normalize().multiplyScalar(sphereRadius));
}

var stripRow = 3;
var stripColumn = strip.length/stripRow;

for (var i =0; i < stripRow - 1; i++)
{
  for (var j=0; j < stripColumn -1; j++)
  {
    stripGeometry.faces.push( new THREE.Face3(i*stripColumn + j, (i+1)*stripColumn + j, i*stripColumn + j + 1));
    stripGeometry.faces.push( new THREE.Face3(i*stripColumn + j +1, (i+1)*stripColumn + j, (i+1)*stripColumn + j + 1));

  }
}

const stripMaterial = new THREE.MeshBasicMaterial({color: 0x44FF44});
const myStrip = new THREE.Mesh(stripGeometry, stripMaterial);
scene.add(myStrip);
///////////////////////////////////////////////
***/

function drawSmacofDot (xyz, index, array)
{
  var smcPoint = new THREE.Vector3(xyz[0], xyz[1], xyz[2]).normalize().multiplyScalar(sphereRadius);

  spot(smcPoint, 0xffff00);

}

/* *** the older version.
function drawLabel (node, index, array)
{
  var tempV = convertFlatCoordsToSphereCoords(node.x, node.y);
  var meshPoint = spot(tempV, 0xff0000);
  
  const elem = document.createElement('div');
    elem.textContent = node.label;
    labelContainerElem.appendChild(elem);

    labels.push({elem, meshPoint});

   
}
***/

function drawLabel (node, index, array)
{
  var tempV = new THREE.Vector3(node.pos[0], node.pos[1], node.pos[2]).normalize().multiplyScalar(sphereRadius);
  var meshPoint = spot(tempV, 0xff0000);
  
  const elem = document.createElement('div');
    elem.textContent = node.label;
    labelContainerElem.appendChild(elem);

    labels.push({elem, meshPoint});

   
}

function drawLabelAt (v3Pos, txt)
{
  
  var meshPoint = spot2(v3Pos, 0xff0000);
  
  const elem = document.createElement('div');
    elem.textContent = txt;
    labelContainerElem.appendChild(elem);

    labels.push({elem, meshPoint});

   
}

function drawArcForItem (edge, index, array)
{
  var x0 = gNodes[edge.from].x;
  var y0 = gNodes[edge.from].y;

  var x1=gNodes[edge.to].x;
  var y1= gNodes[edge.to].y;

  var pStart = convertFlatCoordsToSphereCoords(x0, y0);
  var pEnd = convertFlatCoordsToSphereCoords(x1, y1);
  var arc = setArc3D( pStart, pEnd, 50, "black", false);
  sphere.add(arc);
}

function setArc3D(pointStart, pointEnd, smoothness, color, clockWise) {
  // calculate normal
  var cb = new THREE.Vector3(),
    ab = new THREE.Vector3(),
    normal = new THREE.Vector3();
  cb.subVectors(new THREE.Vector3(), pointEnd);
  ab.subVectors(pointStart, pointEnd);
  cb.cross(ab);
  normal.copy(cb).normalize();

  // get angle between vectors
  var angle = pointStart.angleTo(pointEnd);
  if (clockWise) angle = angle - Math.PI * 2;
  var angleDelta = angle / (smoothness - 1);

  var geometry = new THREE.Geometry();
  for (var i = 0; i < smoothness; i++) {
    geometry.vertices.push(pointStart.clone().applyAxisAngle(normal, angleDelta * i))
  }

  var arc = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color: color, linewidth: 3.0
  }));
  return arc;
}


function GetSmoothness(pointStart, pointEnd)
{
  // we use 0.5 degree as the divider.
  var angleInterval = 1.0; 
  var cb = new THREE.Vector3(),
    ab = new THREE.Vector3(),
    normal = new THREE.Vector3();
  cb.subVectors(new THREE.Vector3(), pointEnd);
  ab.subVectors(pointStart, pointEnd);
  cb.cross(ab);
  normal.copy(cb).normalize();

  // get angle between vectors
  var angle = pointStart.angleTo(pointEnd);
  if (Math.abs(angle) > Math.abs(angle - Math.PI*2))
  {
    angle = angle - Math.PI * 2;
  }

  if (Math.abs(angle)*(180.0/Math.PI) < angleInterval)
  {
    return 2;
  }

   var smoothness = (Math.abs(angle) * 180/Math.PI)/angleInterval;
    smoothness = Math.floor(smoothness);
    if (smoothness < 2)
    {
      smoothness =2;
    }

    return smoothness;
}


function setArcGetGeoPoints(pointStart, pointEnd, smoothness, color) {
  // calculate normal
  var geoPoints = [];
  var cb = new THREE.Vector3(), ab = new THREE.Vector3(), normal = new THREE.Vector3();
  cb.subVectors(new THREE.Vector3(), pointEnd);
  ab.subVectors(pointStart, pointEnd);
  cb.cross(ab);
  normal.copy(cb).normalize();
  // get angle between vectors
  var angle = pointStart.angleTo(pointEnd);
  //////////
  if (Math.abs(angle) < (Math.PI / 180)) {
    smoothness = 2;
  }
  else {
    smoothness = Math.abs(angle) * 180 / Math.PI;
    smoothness = Math.floor(smoothness);
    if (smoothness < 2) {
      smoothness = 2;
    }
  }
  //////
  if (Math.abs(angle) > Math.abs(angle - Math.PI * 2)) {
    angle = angle - Math.PI * 2;
  }
  var angleDelta = angle / (smoothness - 1);
  var geometry = new THREE.Geometry();
  for (var i = 0; i < smoothness; i++) {
    var v3 = pointStart.clone().applyAxisAngle(normal, angleDelta * i);
    var latLon = vector3toLonLat(v3.clone());
    geoPoints.push(latLon);
    geometry.vertices.push(v3);
  }
  var arc = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color: color, linewidth: 3.0
  }));
  return [arc, geoPoints];
  }


function getArcPoints (pointStart, pointEnd, smoothness)
{
  var points = [];
  if (smoothness < 3)
  {
    points.push(pointStart);
    points.push(pointEnd);

  }
  else
  {
    var cb = new THREE.Vector3(),
    ab = new THREE.Vector3(),
    normal = new THREE.Vector3();
    cb.subVectors(new THREE.Vector3(), pointEnd);
    ab.subVectors(pointStart, pointEnd);
    cb.cross(ab);
    normal.copy(cb).normalize();

    // get angle between vectors
    var angle = pointStart.angleTo(pointEnd);
    if (Math.abs(angle) > Math.abs(angle - Math.PI*2))
    {
      angle = angle - Math.PI * 2;
    }

    var  angleDelta = angle / (smoothness - 1);
  

  
    for (var i = 0; i < smoothness; i++)
     {
      var v3 = pointStart.clone().applyAxisAngle(normal, angleDelta * i);
      points.push(v3);
     }
     

  }
  return points;

}

//////////////
function pointInTriangle (position,coord1,coord2,coord3){
  
  
  var d1,d2,d3;
  var m1 = new THREE.Matrix3();
 m1.set(position.x, position.y, position.z, coord2.x, coord2.y, coord2.z, coord3.x, coord3.y, coord3.z );
 d1 = m1.determinant();

 
  var m2 = new THREE.Matrix3();
  m2.set(coord1.x, coord1.y, coord1.z, position.x, position.y, position.z, coord3.x, coord3.y, coord3.z);
  d2 = m2.determinant();

  
  var m3 = new THREE.Matrix3();
  m3.set(coord1.x, coord1.y, coord1.z, coord2.x, coord2.y, coord2.z, position.x, position.y, position.z);
  d3 = m3.determinant();

  if((d1>=0 && d2 >=0 && d3>=0) || (d1<=0 && d2 <=0 && d3<=0)){
      return true;
  }
  return false;
}


function randColorPoly (poly, index, array)
{
   if (poly.length < 3)
   {
     return
   }

   var points = [];
   for (var i=0; i< poly.length; i++)
   {
    var tempV = new THREE.Vector3(poly[i][0],poly[i][1], poly[i][2]).normalize().multiplyScalar(sphereRadius);
    points.push(tempV);
   }
   drawPolygon(points, getRandomColor());
}

function randColorPolyLine2 ( poly, index, array)
{
  var clr = getRandomColor();
  //if ((polyCounter ==1 ) ||(polyCounter == 10) || (polyCounter == 3 )|| (polyCounter == 34))
  //{
    var points = [];
   
   
    for (var i=0; i< poly.length; i++)
   {
    var tempV = new THREE.Vector3(poly[i][0],poly[i][1], poly[i][2]).normalize().multiplyScalar(sphereRadius);
    points.push(tempV.clone());
    //if( (i == 2 ) || (i== 10) || (i ==20) || (i==30 ) || (i== 60) || (i== 150) || (i== poly.length - 1))
    {
      //if ((polyCounter ==1 ) ||(polyCounter == 10) || (polyCounter == 3 )|| (polyCounter == 34))
      if (polyCounter == 41)
      //if ((polyCounter ==1 ) ||(polyCounter == 10) || (polyCounter == 3 ))
      drawLabelAt(tempV, i.toString());
    }
   }
   
   //if ((polyCounter ==1 ) ||(polyCounter == 10) || (polyCounter == 3 )|| (polyCounter == 34))
   //if (polyCounter == 34)
   //{
    // drawPolygon3(points, clr, false);
    //bad data index: 13- 17   44-46  81-89  103 - 115
    // clean up the data, use mapbox's earcut  algorithm for triangulation.

    /*
    var cleanPoints = [];
    for (var i=0; i< poly.length; i++)
    {
      if (  (( i >= 13) && (i <=17)) || ((i>=44) && (i <= 46)) || ((i >= 81) && (i <=89) ) || ((i >= 103) && (i <=115)) )
      {
        continue;
      }
      else
      {
        cleanPoints.push(poly[i]);
      }
    }
    */

    //drawPolyEarcut2 (cleanPoints, clr)
    //drawPolyEarcut2(poly, clr); 
    //if ((polyCounter == 41) || (polyCounter == 20))
    drawPolyAzimuthal(poly,clr)
  // }

   /*
   if ((polyCounter ==1 ) ||(polyCounter == 10) || (polyCounter == 3 ))
   {
    drawPolyEarcut2 (poly, clr)
   }
   */
  if (polyCounter == 34)
   for (var i=0; i< points.length-1; i++)
   {
     var start = points[i];
     var end =  points[i+1 ];
     var ret = setArcGetGeoPoints(start, end, 6, clr);
     scene.add(ret[0]);
   }
   
  //}
  polyCounter++;
}

function v3toGeoArray (points)  // not Vector3
{
  var geoArray = [];
  for (var i=0; i< points.length; i++)
  {
    var temp = new THREE.Vector3(points[i][0], points[i][1], points[i][2]).normalize();
    var geoPoint = vector3toLonLat(temp);
    geoArray.push(geoPoint);
  }
  return geoArray;

}

function v3toGeoAndThreeArray (points)  // not Vector3
{
  var geoArray = [];
  var ThreeArray =[];
  for (var i=0; i< points.length; i++)
  {
    var temp = new THREE.Vector3(points[i][0], points[i][1], points[i][2]).normalize();
    var threeV = temp.clone().multiplyScalar(sphereRadius);
    ThreeArray.push(threeV);
    var geoPoint = vector3toLonLat(temp);
    geoArray.push(geoPoint);
  }
  return [geoArray, ThreeArray];

}


function testDrawPolyEarcut()
{
  var geoRectangle = [ [90, 10], [110, 20], [100, 40], [115, 25], [160, 50], [-160, 50], [150, 10], [145, 40], [120, 20], [130, 10]];
  var v3points = [];
  for (var i=0; i < geoRectangle.length; i++)
  {
    var vct3 = lonLatToVector3(geoRectangle[i][0], geoRectangle[i][1]);
    var v3 = [vct3.x, vct3.y, vct3.z];
    v3points.push(v3);
  }

  // test getCross180LatFromLonLat (lon0, lat0, lon1, lat1)
 var ret = getCross180LatFromLonLat (160, 70, -150, 50);
  //var splitPolys = cutAlong180(geoRectangle);

  drawPolyEarcut2(v3points, getRandomColor());
}


function testDrawPolyEarcut3()
{
  var geoRectangle = [ [90, 10], [110, 20], [100, 40], [115, 25], [160, 50], [-160, 50], [150, 10], [145, 40], [120, 20], [130, 10]];

   var tmp2 = azimuthalProjection (geoRectangle);
  var v3points = [];
  for (var i=0; i < geoRectangle.length; i++)
  {
    var vct3 = lonLatToVector3(geoRectangle[i][0], geoRectangle[i][1]);
    drawLabelAt(vct3.clone().normalize().multiplyScalar(sphereRadius), i.toString());
   
    //var v3 = [vct3.x, vct3.y, vct3.z];
    v3points.push(vct3);
  }

  // test getCross180LatFromLonLat (lon0, lat0, lon1, lat1)
 //var ret = getCross180LatFromLonLat (160, 70, -150, 50);
  //var splitPolys = cutAlong180(geoRectangle);

  drawPolyEarcut3(v3points, getRandomColor());
  
}

function triFaceInside ( a, b, c)
{
  var ac = c.clone().sub(a.clone()).normalize();
  var ab = b.clone().sub(a.clone()).normalize();
  var normal = ac.cross(ab).normalize();
  var final = normal.add(a.clone().normalize());
  if (final.length() < 1)
  {
    return true;
  }
  return false;

}
/**
 * 
 * @param {*} points : THREE.JS Vector3 normalized array, in clockwise order.
 */
function earcut3d (points) 
{
   var ret =[];
  
    var remain =[];
    for (var x=0; x< points.length; x++)
    {
      remain.push(x);
    }

    while (remain.length > 3)
    { 
      var newRemain = [];
      for (var i=0; i< remain.length-2; )
      {
        var a = remain[i];
        var b = remain[i+1];
        var c = remain[i+2];
        newRemain.push(a);
        // for a, b, c triangle.
        // remove same points and point in a straight line

        /****
         *     c
         *   b
         *     a
         */
        var  ba = points[a].clone().sub(points[b].clone()).normalize();
        if (isZero(ba))
        {
          i +=2;
          continue; // drop point b
        }
        var bc = points[c].clone().sub(points[b].clone()).normalize();
        if (isZero(bc))
        {
          i +=2;
          continue;  // drop b
        }

        var cross = ba.cross(bc).normalize();;
        if (isZero(cross))
        {
          i +=2;
          continue; // drop b, straigt line.
        }

        var addV = cross.add(points[b].clone().normalize());

        if (addV.length() > 1)
        {
          // cut it
          // clockwise
          ret.push(a); ret.push(b); ret.push(c);
          i +=2;
        }
        else
        {
          // can't cut
          //newRemain.push(b);
          i++;
        }

      }

      // push the last one/two points for next round
      while (i < remain.length)
      {
        newRemain.push(i);
        i++;
      }

      remain = newRemain;
    }

    // 3 points remaining, figure out clock wise or not
    var fa = remain[0];
    var fb = remain[1];
    var fc = remain[2];
    var  fba = points[fa].clone().sub(points[fb].clone());
    if (isZero(fba))
    {
      // does not matter clockwise or not, straight line anyway
      ret.push(fa);
      ret.push(fb);
      ret.push(fc);
      return ret;
    }
    var fbc = points[fc].clone().sub(points[fb].clone());
    if (isZero(fbc))
    {
      // does not matter clockwise or not, straight line anyway
      ret.push(fa);
      ret.push(fb);
      ret.push(fc);
      return ret;
    }

    var fcross = fba.cross(fbc).normalize();
    if (isZero(fcross))
    {
      // does not matter clockwise or not, straight line anyway
      ret.push(fa);
      ret.push(fb);
      ret.push(fc);
      return ret;
    }

    if (fcross.add(points[fb]).length() > 1)
    {
     
      // clockwise
      ret.push(fa); ret.push(fb); ret.push(fc);
    }
    else
    {
      //counter clockwise
      ret.push(fa); ret.push(fc);  ret.push(fb);
    }

    return ret;


  


}

function isZero (v3)
{
  if ( v3.length() < 0.0001)
  {
    return true;
  }
  return false;
}

function checkClockWise (points)
{
  var sum = 0.0;
  for (var i=0; i< points.length-1; i++)
  {
     sum += (points[i+1][1] - points[i][1])*(points[i+1][0] + points[i][0]);
  }

  if (sum > 0)
  {
    return true;
  }
  return false;
}

function azimuthalProjection (geoPoints)
{
  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};
   
  var c = d3.geoCentroid(geoPolyformat);
    
  // for debuging only comment out later///////////////
  //plot out the center with Polygon cluster number:
  var centerV3 = lonLatToVector3(c[0], c[1]).normalize().multiplyScalar(sphereRadius);
   

  drawLabelAt (centerV3, polyCounter.toString());
  ////////////// to be comment out abvoe /////////////////



  var projection = d3.geoAzimuthalEquidistant().rotate([-c[0], -c[1]]);
  var ret =[];

  for (var i=0; i< geoPoints.length; i++)
  {
    var p = projection(geoPoints[i]);
    ret.push(p);
  }

  return ret;
} 


function drawPolyEarcut (points, theColor, )
{
  var geoArray = v3toGeoArray (points);

 

  var wrapper =[];
  wrapper.push(geoArray);
  //wrapper.push(points);
  var data = earcut.flatten(wrapper);
  var triangles = earcut(data.vertices, data.holes, data.dimensions); // the output triangles seem to be clockwise.

  var c = -1; // the counter

  const polyGeometry = new THREE.Geometry();

  for ( var i=0; i <= triangles.length -3; i += 3)
  {
    // clock wise triangle
    /*************
        tb--------tc 
        \       /
          \   /
             ta
            
    ************/
    var ia = triangles[i]; 
    var ib = triangles[i+1];
    var ic = triangles[i+2];

    

    var ta = new THREE.Vector3(points[ia][0],points[ia][1], points[ia][2]).normalize().multiplyScalar(sphereRadius);
    var tb = new THREE.Vector3(points[ib][0],points[ib][1], points[ib][2]).normalize().multiplyScalar(sphereRadius);
    var tc = new THREE.Vector3(points[ic][0],points[ic][1], points[ic][2]).normalize().multiplyScalar(sphereRadius);

    // push ta into the vertice array
    c++;
    polyGeometry.vertices.push(ta);
    var taCounter = c;

    var smooth = GetSmoothness(tb, tc);  // cut line between tb and tc into smaller arcs
    var sectionPoints = getArcPoints(tb, tc, smooth);

    for (var j =0; j< smooth - 1; j++)
    {
      var cordSmooth =  GetSmoothness (ta, sectionPoints[j]);
      var cordPointsAb = getArcPoints(ta, sectionPoints[j], cordSmooth);
      var cordPointsAc = getArcPoints(ta, sectionPoints[j+1], cordSmooth);
      
      for (var k =0; k < cordSmooth; k++)
      {
        polyGeometry.vertices.push(cordPointsAb[k].normalize().multiplyScalar(sphereRadius));
        c++;
        polyGeometry.vertices.push(cordPointsAc[k].normalize().multiplyScalar(sphereRadius));
        c++;

        if (k == 0)
        {
         // polyGeometry.faces.push( new THREE.Face3 (taCounter, c, c-1));   //Face3 needs counter clockwise points
          polyGeometry.faces.push( new THREE.Face3 (taCounter, c-1, c));   //Face3 needs  clockwise points?
        }
        else
        {
          //polyGeometry.faces.push( new THREE.Face3 (c-3, c-2, c));  //counter clockwise
          polyGeometry.faces.push( new THREE.Face3 (c-3, c, c-2));  // clockwise

         // polyGeometry.faces.push( new THREE.Face3 (c-3, c, c -1));  // counter clockwise
          polyGeometry.faces.push( new THREE.Face3 (c-3, c-1, c));  // clockwise

        }
      }
    }
  }  // end of for ( var i=0; i < triangles.length -3; i += 3)

  const polyMaterial = new THREE.MeshBasicMaterial(
    {color: theColor,
     /* wireframe: true,   */
      vertexColors: THREE.FaceColors
    });

  const myPoly = new THREE.Mesh(polyGeometry, polyMaterial);
  scene.add(myPoly);  

}


function drawPolyEarcut3 (points, theColor)
{
  
  var triangles = earcut3d(points);
  
  var c = -1; // the counter

  const polyGeometry = new THREE.Geometry();

  for ( var i=0; i <= triangles.length -3; i += 3)
  {
    // clock wise triangle
    /*************
        tb--------tc 
        \       /
          \   /
            ta
            
    ************/
    var ia = triangles[i]; 
    var ib = triangles[i+1];
    var ic = triangles[i+2];

    

    var ta = points[ia].clone().normalize().multiplyScalar(sphereRadius);
    var tb =points[ib].clone().normalize().multiplyScalar(sphereRadius);
    var tc =points[ic].clone().normalize().multiplyScalar(sphereRadius);

    // push ta into the vertice array
    c++;
    polyGeometry.vertices.push(ta);
    var taCounter = c;

    var smooth = GetSmoothness(tb, tc);  // cut line between tb and tc into smaller arcs
    var sectionPoints = getArcPoints(tb, tc, smooth);

    for (var j =0; j< smooth - 1; j++)
    {
      var cordSmooth =  GetSmoothness (ta, sectionPoints[j]);
      var cordPointsAb = getArcPoints(ta, sectionPoints[j], cordSmooth);
      var cordPointsAc = getArcPoints(ta, sectionPoints[j+1], cordSmooth);
      
      for (var k =0; k < cordSmooth; k++)
      {
        polyGeometry.vertices.push(cordPointsAb[k].normalize().multiplyScalar(sphereRadius));
        c++;
        polyGeometry.vertices.push(cordPointsAc[k].normalize().multiplyScalar(sphereRadius));
        c++;

        if (k == 0)
        {
        // polyGeometry.faces.push( new THREE.Face3 (taCounter, c, c-1));   //Face3 needs counter clockwise points
          polyGeometry.faces.push( new THREE.Face3 (taCounter, c-1, c));   //Face3 needs  clockwise points?
        }
        else
        {
          //polyGeometry.faces.push( new THREE.Face3 (c-3, c-2, c));  //counter clockwise
          polyGeometry.faces.push( new THREE.Face3 (c-3, c, c-2));  // clockwise

        // polyGeometry.faces.push( new THREE.Face3 (c-3, c, c -1));  // counter clockwise
          polyGeometry.faces.push( new THREE.Face3 (c-3, c-1, c));  // clockwise

        }
      }
    }
  }  // end of for ( var i=0; i < triangles.length -3; i += 3)

  const polyMaterial = new THREE.MeshBasicMaterial(
    {color: theColor,
      wireframe: true,   
      vertexColors: THREE.FaceColors
    });

  const myPoly = new THREE.Mesh(polyGeometry, polyMaterial);
  scene.add(myPoly);  
  

  
}


function drawPolyAzimuthal (gPoints, theColor, )
{
  var conv = v3toGeoAndThreeArray (gPoints);
  var geoArray = conv[0];
  var points = conv[1];
  var aziArray = azimuthalProjection (geoArray);

  // debugging only: did not work
  //var clockwise = checkClockWise(aziArray);
  //console.log(clockwise);
  ////////////

 
    

    var wrapper =[];
    wrapper.push(aziArray);
  
    var data = earcut.flatten(wrapper);
    var triangles = earcut(data.vertices, data.holes, data.dimensions); // the output triangles seem to be clockwise.

    var c = -1; // the counter

    const polyGeometry = new THREE.Geometry();

    for ( var i=0; i <= triangles.length -3; i += 3)
    {
      // clock wise triangle
      /*************
          tb--------tc 
          \       /
            \   /
              ta
              
      ************/
      var ia = triangles[i]; 
      var ib = triangles[i+1];
      var ic = triangles[i+2];

      

      var ta = points[ia];
      var tb =points[ib];
      var tc =points[ic];


      // test out wrong clockwise direction.
       if (triFaceInside (ta, tb, tc) )
       {
         // switch tb, tc
         tb = points[ic];
         tc = points[ib];
       }

      // push ta into the vertice array
      c++;
      polyGeometry.vertices.push(ta);
      var taCounter = c;

      var smooth = GetSmoothness(tb, tc);  // cut line between tb and tc into smaller arcs
      var sectionPoints = getArcPoints(tb, tc, smooth);

      for (var j =0; j< smooth - 1; j++)
      {
        var cordSmooth =  GetSmoothness (ta, sectionPoints[j]);
        var cordPointsAb = getArcPoints(ta, sectionPoints[j], cordSmooth);
        var cordPointsAc = getArcPoints(ta, sectionPoints[j+1], cordSmooth);
        
        for (var k =0; k < cordSmooth; k++)
        {
          polyGeometry.vertices.push(cordPointsAb[k].normalize().multiplyScalar(sphereRadius));
          c++;
          polyGeometry.vertices.push(cordPointsAc[k].normalize().multiplyScalar(sphereRadius));
          c++;

          if (k == 0)
          {
            polyGeometry.faces.push( new THREE.Face3 (taCounter, c, c-1));   //Face3 needs counter clockwise points
           // polyGeometry.faces.push( new THREE.Face3 (taCounter, c-1, c));   //Face3 needs  clockwise points?
          }
          else
          {
            polyGeometry.faces.push( new THREE.Face3 (c-3, c-2, c));  //counter clockwise
           // polyGeometry.faces.push( new THREE.Face3 (c-3, c, c-2));  // clockwise

             polyGeometry.faces.push( new THREE.Face3 (c-3, c, c -1));  // counter clockwise
            //polyGeometry.faces.push( new THREE.Face3 (c-3, c-1, c));  // clockwise

          }
        }
      }
    }  // end of for ( var i=0; i < triangles.length -3; i += 3)

    const polyMaterial = new THREE.MeshBasicMaterial(
      {color: theColor,
       /*wireframe: true,   */
        vertexColors: THREE.FaceColors
      });

    const myPoly = new THREE.Mesh(polyGeometry, polyMaterial);
    scene.add(myPoly);  
  

}

function drawPolyEarcut2 (gPoints, theColor, )
{
  var geoArray = v3toGeoArray (gPoints);

  var splitPolysBig = cutAlong180(geoArray);
  var splitPolys = [];
  for (var xx=0; xx < splitPolysBig.length; xx++)
  {
    splitPolys = splitPolys.concat(slicePoly(splitPolysBig[xx], 90));
  }

  for (var q=0; q< splitPolys.length; q++)
  {
    //test color
    theColor = getRandomColor();


    var points = [];
    for (var t=0; t< splitPolys[q].length; t++)
    {
      var tmp = lonLatToVector3(splitPolys[q][t][0], splitPolys[q][t][1] ).normalize().multiplyScalar(sphereRadius);
      points.push(tmp);
    }

    var wrapper =[];
    wrapper.push(splitPolys[q]);
    //wrapper.push(points);
    var data = earcut.flatten(wrapper);
    var triangles = earcut(data.vertices, data.holes, data.dimensions); // the output triangles seem to be clockwise.

    var c = -1; // the counter

    const polyGeometry = new THREE.Geometry();

    for ( var i=0; i <= triangles.length -3; i += 3)
    {
      // clock wise triangle
      /*************
          tb--------tc 
          \       /
            \   /
              ta
              
      ************/
      var ia = triangles[i]; 
      var ib = triangles[i+1];
      var ic = triangles[i+2];

      

      var ta = points[ia];
      var tb =points[ib];
      var tc =points[ic];

      // push ta into the vertice array
      c++;
      polyGeometry.vertices.push(ta);
      var taCounter = c;

      var smooth = GetSmoothness(tb, tc);  // cut line between tb and tc into smaller arcs
      var sectionPoints = getArcPoints(tb, tc, smooth);

      for (var j =0; j< smooth - 1; j++)
      {
        var cordSmooth =  GetSmoothness (ta, sectionPoints[j]);
        var cordPointsAb = getArcPoints(ta, sectionPoints[j], cordSmooth);
        var cordPointsAc = getArcPoints(ta, sectionPoints[j+1], cordSmooth);
        
        for (var k =0; k < cordSmooth; k++)
        {
          polyGeometry.vertices.push(cordPointsAb[k].normalize().multiplyScalar(sphereRadius));
          c++;
          polyGeometry.vertices.push(cordPointsAc[k].normalize().multiplyScalar(sphereRadius));
          c++;

          if (k == 0)
          {
          // polyGeometry.faces.push( new THREE.Face3 (taCounter, c, c-1));   //Face3 needs counter clockwise points
            polyGeometry.faces.push( new THREE.Face3 (taCounter, c-1, c));   //Face3 needs  clockwise points?
          }
          else
          {
            //polyGeometry.faces.push( new THREE.Face3 (c-3, c-2, c));  //counter clockwise
            polyGeometry.faces.push( new THREE.Face3 (c-3, c, c-2));  // clockwise

          // polyGeometry.faces.push( new THREE.Face3 (c-3, c, c -1));  // counter clockwise
            polyGeometry.faces.push( new THREE.Face3 (c-3, c-1, c));  // clockwise

          }
        }
      }
    }  // end of for ( var i=0; i < triangles.length -3; i += 3)

    const polyMaterial = new THREE.MeshBasicMaterial(
      {color: theColor,
       /*wireframe: true,   */
        vertexColors: THREE.FaceColors
      });

    const myPoly = new THREE.Mesh(polyGeometry, polyMaterial);
    scene.add(myPoly);  
  }

}

function randColorPolyLine (poly, index, array)
{
  var clr = getRandomColor();

  if ((polyCounter ==34) /*|| (polyCounter % 2 == 0) */ )
  {
    var points = [];
    var geoPoints =[];
    for (var i=0; i< poly.length; i++)
    {
      var tempV = new THREE.Vector3(poly[i][0],poly[i][1], poly[i][2]).normalize().multiplyScalar(sphereRadius);
      points.push(tempV.clone());

      var geoPoint = vector3toLonLat(tempV);
      geoPoints.push(geoPoint);
      //if( (i == 2 ) || (i== 10) || (i ==20) || (i==30 ) || (i== 60) || (i== 150) || (i== poly.length - 1))
      {
      // drawLabelAt(tempV, i.toString());
      }

    }



    //var hulls = d3.polygonHull(geoPoints);
   //var hulls = geoPoints;


   points.push(points[0]);
   geoPoints.push(vector3toLonLat(points[0].clone()));
   

   

  for (var i=0; i< points.length-1; i++)
  {
    var start = points[i];
    var end =  points[i+1 ];
    var ret = setArcGetGeoPoints(start, end, 6, clr);
    scene.add(ret[0]);
  }
  

  var ctr = findCenterPoint(points);
  drawLabelAt(ctr.normalize().multiplyScalar(sphereRadius), 'c' + polyCounter.toString());


  // test for point in polygon
  // 
  //var thisPoly =[];
  //thisPoly.push(geoPoints);
  //var triA = new THREE.Vector3(0.2, 0.5, 0.6).normalize().multiplyScalar(sphereRadius);
  //var triB = new THREE.Vector3(0.1, 0.8, 0.4).normalize().multiplyScalar(sphereRadius);
  //var triC = new THREE.Vector3(0.3, 0.5, 0.3).normalize().multiplyScalar(sphereRadius);

  // var geoA = vector3toLonLat(triA);
  // var geoB = vector3toLonLat(triB);
   //var geoC = vector3toLonLat (triC);

  //var testpoly = [geoA, geoB, geoC, geoA];
  //thisPoly.push(testpoly);


  //var geoPolyformat = {type: "Polygon", coordinates: [thisPoly]};
  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};

  //var tmpPoly = d3.geoCircle().radius(60)();
      
      geometry.computeFaceNormals();

      for ( var j = 0; j < geometry.faces.length; j ++ )
      {
        var normalGeo = vector3toLonLat (geometry.faces[j].normal);
        //var idx = geometry.faces[j].a;
       // var normalGeo = vector3toLonLat (geometry.vertices[idx]);
        if (d3.geoContains(geoPolyformat, normalGeo) )
       // if (d3.polygonContains(hulls, normalGeo) )
        {
          geometry.faces[ j ].color.setHex(  0xffff00 );
           //geometry.faces.splice(j, 1) ;
        }
    
      }
      //geometry.elementsNeedUpdate = true;///////////////
      geometry.colorsNeedUpdate = true;
      
      
      
  }
  polyCounter++;
  
  
}

// split along the +- 180 lontitude line
function splitPolygon (geoPts)
{
  var retPolys = []
  
}


function  PointInPoly(polyPoints, L)
{
  var x = L[0], y = L[1];

  var inside = false;

  var intersections = 0;

  var ss;

  for (var i = 0, j = polyPoints.length -1; i < polyPoints.length; j = i++)
   {

    var xi = polyPoints[i][0], yi = polyPoints[i][1]; var xj = polyPoints[j][0], yj = polyPoints[j][1];
    if (yj == yi && yj == y && x > Math.min(xj, xi) && x < Math.max(xj, xi)) 
    { // Check if point is on an horizontal polygon boundary
     return true;

    }

    if (y > Math.min(yj, yi) && y <= Math.max(yj, yi) && x <= Math.max(xj, xi) && yj != yi)
    {
      ss = (y - yj) * (xi - xj) / (yi - yj) + xj;
      if (ss == x) 
      { // Check if point is on the polygon boundary (other than horizontal)
        return true;
      }

      if (xj == xi || x <= ss) 
      {
        intersections++;
      } 
    }
  }

  // If the number of edges we passed through is odd, then it’s in the polygon.

  if (intersections % 2 != 0) 
  {
    return true;
  } 
  else
  {
    return false;
  }
}



function randColorPoly2 (poly, index, array)
{
   if (poly.length < 3)
   {
     return
   }

   var points = [];
   for (var i=0; i< poly.length; i++)
   {
    var tempV = new THREE.Vector3(poly[i][0],poly[i][1], poly[i][2]).normalize().multiplyScalar(sphereRadius);
    points.push(tempV);
   }
   var polyCenter = findCenterPoint(points);

   //if ((index > 10) && (index < 13))
   //{
     spot(polyCenter.normalize().multiplyScalar(sphereRadius), 'pink');
   
    //drawPolygon2(points, polyCenter, getRandomColor(), true);

    drawPolygon3(points, getRandomColor(), false);
  //}
}

function drawPolygon( abcde, theColor)
{
  //abcde are points (vertex) in vector3 format.
  // walk from a to b to c to d to e... and back to a. After every degree create an additional point (lat, lon).
  var geoJsonArray =[];
  var polyArray =[];

  var smoothness = 8;
  for (var i=0; i< abcde.length-1; i++)
  {
  var smoothness = 8;
  var arcAndGeoPoints = setArcGetGeoPoints(abcde[i], abcde[i+1], smoothness, theColor);
     // scene.add(arcAndGeoPoints[0]);
      polyArray = polyArray.concat(arcAndGeoPoints[1]);
  }
  var closing = setArcGetGeoPoints(abcde[abcde.length-1], abcde[0], smoothness, theColor);
 // scene.add(closing[0]);
  polyArray = polyArray.concat(closing[1]);
  geoJsonArray.push(polyArray);

  //draw a polygon with color
const polyMesh = new THREE.Mesh(
  //new THREE.ConicPolygonGeometry(polygonGeoJson, 0, sphereRadius, false, true, false ),
  new THREE.ConicPolygonBufferGeometry(geoJsonArray, 0, sphereRadius, false, true, false ),
 
  new THREE.MeshBasicMaterial({ color: theColor })
);
scene.add(polyMesh);
}

/***
 *  sides: THREE.Vector3 arrays of 3d point forming the outsides of the polygon.
 *  center: a THREE.Vector3 3d point inside the polygon, does not have to be exactly the center point.
 * sidesCounterClockWise: weather the side point array goes couterclockwise or not.
 */
function drawPolygon2 (sides, center, theColor, sidesCounterClockWise = true)
{
  /***
   * idea:  connect the central point to every out edge point, to form trianles, then sub divide each triangle to more smaller triangles to form a mesh.
   */

  const polyGeometry = new THREE.Geometry();
  polyGeometry.vertices.push(center.normalize().multiplyScalar(sphereRadius));
   var c = 0;

   if (false == sides[0].equals(sides[sides.length-1]))
   {
     sides.push(sides[0]);
   }

  for (var i=0; i < sides.length-1; i++)
  {
      var smooth = GetSmoothness(sides[i], sides[i+1]);
      var sectionPoints = getArcPoints(sides[i], sides[i+1], smooth);
      for (var j =0; j< smooth - 1; j++)
      {
         var cordSmooth =  GetSmoothness (center, sectionPoints[j]);
         var cordPointsA = getArcPoints(center, sectionPoints[j], cordSmooth);
         var cordPointsB = getArcPoints(center, sectionPoints[j+1], cordSmooth);
         for (var k =0; k < cordSmooth; k++)
         {
          polyGeometry.vertices.push(cordPointsA[k].normalize().multiplyScalar(sphereRadius));
          c++;
          polyGeometry.vertices.push(cordPointsB[k].normalize().multiplyScalar(sphereRadius));
          c++;

          if (true == sidesCounterClockWise)
          {
            if (k == 0)
            {
              polyGeometry.faces.push( new THREE.Face3 (0, c-1, c));
            }
            else
            {
              polyGeometry.faces.push( new THREE.Face3 (c-3, c -1, c- 2));
              polyGeometry.faces.push( new THREE.Face3 (c-2, c -1, c));
            }

          }
          else
          {
            if (k == 0)
            {
              polyGeometry.faces.push( new THREE.Face3 (0, c, c-1));
            }
            else
            {
              polyGeometry.faces.push( new THREE.Face3 (c-3, c -2, c));
              polyGeometry.faces.push( new THREE.Face3 (c-3, c, c -1));
            }
          }

        }
      }
  }
 


  const polyMaterial = new THREE.MeshBasicMaterial(
    {color: theColor,
      /* wireframe: true, */
      vertexColors: THREE.FaceColors
      
      
      
    });

  const myPoly = new THREE.Mesh(polyGeometry, polyMaterial);
  scene.add(myPoly);
}



function drawPolygon3(sides, theColor, sidesCounterClockWise = true)
{
  /***
   * idea:  connect the central point to every out edge point, to form trianles, then sub divide each triangle to more smaller triangles to form a mesh.
   */


  var geoPoints =[];
  for (var i=0; i< sides.length; i++)
  {
    
    
    var geoPoint = vector3toLonLat(sides[i].clone());
    geoPoints.push(geoPoint);
  }
  geoPoints.push(geoPoints[0]);

  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};
   
  var geoCenter = d3.geoCentroid(geoPolyformat);
  var center = lonLatToVector3(geoCenter[0], geoCenter[1]);



  const polyGeometry = new THREE.Geometry();
  polyGeometry.vertices.push(center.normalize().multiplyScalar(sphereRadius));
   var c = 0;

   if (false == sides[0].equals(sides[sides.length-1]))
   {
     sides.push(sides[0]);
   }

  for (var i=0; i < sides.length-1; i++)
  {
      var smooth = GetSmoothness(sides[i], sides[i+1]);
      var sectionPoints = getArcPoints(sides[i], sides[i+1], smooth);
      for (var j =0; j< smooth - 1; j++)
      {
         var cordSmooth =  GetSmoothness (center, sectionPoints[j]);
         var cordPointsA = getArcPoints(center, sectionPoints[j], cordSmooth);
         var cordPointsB = getArcPoints(center, sectionPoints[j+1], cordSmooth);
         for (var k =0; k < cordSmooth; k++)
         {
          polyGeometry.vertices.push(cordPointsA[k].normalize().multiplyScalar(sphereRadius));
          c++;
          polyGeometry.vertices.push(cordPointsB[k].normalize().multiplyScalar(sphereRadius));
          c++;

          if (true == sidesCounterClockWise)
          {
            if (k == 0)
            {
              polyGeometry.faces.push( new THREE.Face3 (0, c-1, c));
            }
            else
            {
              polyGeometry.faces.push( new THREE.Face3 (c-3, c -1, c- 2));
              polyGeometry.faces.push( new THREE.Face3 (c-2, c -1, c));
            }

          }
          else
          {
            if (k == 0)
            {
              polyGeometry.faces.push( new THREE.Face3 (0, c, c-1));
            }
            else
            {
              polyGeometry.faces.push( new THREE.Face3 (c-3, c -2, c));
              polyGeometry.faces.push( new THREE.Face3 (c-3, c, c -1));
            }
          }

        }
      }
  }
 


  const polyMaterial = new THREE.MeshBasicMaterial(
    {color: theColor,
      /* wireframe: true, */
      vertexColors: THREE.FaceColors
      
      
      
    });

  const myPoly = new THREE.Mesh(polyGeometry, polyMaterial);
  
  scene.add(myPoly);
  
  polyGeometry.computeFaceNormals();

  for ( var j = 0; j < polyGeometry.faces.length; j ++ )
  {
    var normalGeo = vector3toLonLat (polyGeometry.faces[j].normal);
    //var idx = geometry.faces[j].a;
    // var normalGeo = vector3toLonLat (geometry.vertices[idx]);
    if (false == d3.geoContains(geoPolyformat, normalGeo) )
    // if (d3.polygonContains(hulls, normalGeo) )
    {
      //polyGeometry.faces[ j ].color.setHex(  0xffffff );
        polyGeometry.faces.splice(j, 1) ;
    }

  }
  geometry.elementsNeedUpdate = true;///////////////
  polyGeometry.colorsNeedUpdate = true;
  

  
  }


////////////////
function vector3toLonLat( vector3 )
{

    vector3.normalize();

    //longitude = angle of the vector around the Y axis
    //-( ) : negate to flip the longitude (3d space specific )
    //- PI / 2 to face the Z axis
    var lng = -( Math.atan2( -vector3.z, -vector3.x ) ) - Math.PI / 2;

    //to bind between -PI / PI
    if( lng < - Math.PI )lng += Math.PI * 2;

    //latitude : angle between the vector & the vector projected on the XZ plane on a unit sphere

    //project on the XZ plane
    var p = new THREE.Vector3( vector3.x, 0, vector3.z );
    //project on the unit sphere
    p.normalize();

    //commpute the angle ( both vectors are normalized, no division by the sum of lengths )
    var lat = Math.acos( p.dot( vector3 ) );

    //invert if Y is negative to ensure teh latitude is comprised between -PI/2 & PI / 2
    if( vector3.y < 0 ) lat *= -1;

    return [ lng*(180.0/Math.PI),lat*(180.0/Math.PI) ];

}

function vector3toLonLatRadians( vector3 )
{

    vector3.normalize();

    //longitude = angle of the vector around the Y axis
    //-( ) : negate to flip the longitude (3d space specific )
    //- PI / 2 to face the Z axis
    var lng = -( Math.atan2( -vector3.z, -vector3.x ) ) - Math.PI / 2;

    //to bind between -PI / PI
    if( lng < - Math.PI )lng += Math.PI * 2;

    //latitude : angle between the vector & the vector projected on the XZ plane on a unit sphere

    //project on the XZ plane
    var p = new THREE.Vector3( vector3.x, 0, vector3.z );
    //project on the unit sphere
    p.normalize();

    //commpute the angle ( both vectors are normalized, no division by the sum of lengths )
    var lat = Math.acos( p.dot( vector3 ) );

    //invert if Y is negative to ensure teh latitude is comprised between -PI/2 & PI / 2
    if( vector3.y < 0 ) lat *= -1;

    return [ lng,lat ];

}


function vector3toLatLon( vector3 )
{

    vector3.normalize();

    //longitude = angle of the vector around the Y axis
    //-( ) : negate to flip the longitude (3d space specific )
    //- PI / 2 to face the Z axis
    var lng = -( Math.atan2( -vector3.z, -vector3.x ) ) - Math.PI / 2;

    //to bind between -PI / PI
    if( lng < - Math.PI )lng += Math.PI * 2;

    //latitude : angle between the vector & the vector projected on the XZ plane on a unit sphere

    //project on the XZ plane
    var p = new THREE.Vector3( vector3.x, 0, vector3.z );
    //project on the unit sphere
    p.normalize();

    //commpute the angle ( both vectors are normalized, no division by the sum of lengths )
    var lat = Math.acos( p.dot( vector3 ) );

    //invert if Y is negative to ensure teh latitude is comprised between -PI/2 & PI / 2
    if( vector3.y < 0 ) lat *= -1;

    return [lat*(180.0/Math.PI), lng*(180.0/Math.PI) ];

}

/**
 * converts a XYZ vector3 to longitude latitude (Direct Polar)
 * @param lng longitude, in degree ( -180 to + 180)
 * @param lat latitude, in degree ( -90 to + 50)
 * @param vector3 optional output vector3
 * @returns a unit vector of the 3d position
 */
function lonLatToVector3( lng, lat, out )
{
    lng = lng*Math.PI/180;
    lat = lat*Math.PI/180;

    out = out || new THREE.Vector3();

    //flips the Y axis
    lat = Math.PI / 2 - lat;

    //distribute to sphere
    out.set(
                Math.sin( lat ) * Math.sin( lng ),
                Math.cos( lat ),
                Math.sin( lat ) * Math.cos( lng )
    );

    return out;

}

function getCrossLatFromLonLat (lon0, lat0, lon1, lat1, lont)
{
  if (Math.abs(lat1 - lat0) < 0.01)
  {
    return (lat1 + lat0)/2.0;
  }
 
  var est =  lat0 + (lat1 -lat0) *( lont  - lon0)/ ( lon1 -lon0);

  var v0 = lonLatToVector3(lon0, lat0);
  var v1 = lonLatToVector3(lon1, lat1);
  v0.cross(v1);

  var l0 = lonLatToVector3(lont, lat0);
  var l1 = lonLatToVector3(lont, lat1);
  l0.cross(l1);

  var x1 = v0.clone().cross(l0);
  var x2 = l0.clone().cross(v0);

  var lonlat1 = vector3toLonLat(x1);
  var lonlat2 = vector3toLonLat(x2);
 
  if (Math.abs(lonlat1[1] - est) < Math.abs(lonlat2[1] -est) )
  {
    return lonlat1[1];
  }
  else
  return lonlat2[1];


}


function getCross180LatFromLonLat (lon0, lat0, lon1, lat1)
{
  if (Math.abs(lat1 - lat0) < 0.01)
  {
    return (lat1 + lat0)/2.0;
  }

  
  //return getCrossLatFromLonLat(lon0, lat0, lon1, lat1, 180);

 var est =  lat0 + (lat1 -lat0) *( 180  - Math.abs(lon0) )/ ( 180  - Math.abs(lon0) + 180 - Math.abs(lon1));

 var v0 = lonLatToVector3(lon0, lat0);
  var v1 = lonLatToVector3(lon1, lat1);
  v0.cross(v1);

  var l0 = lonLatToVector3(180, lat0);
  var l1 = lonLatToVector3(180, lat1);
  l0.cross(l1);

  var x1 = v0.clone().cross(l0);
  var x2 = l0.clone().cross(v0);

  var lonlat1 = vector3toLonLat(x1);
  var lonlat2 = vector3toLonLat(x2);
 
  if (Math.abs(lonlat1[1] - est) < Math.abs(lonlat2[1] -est) )
  {
    return lonlat1[1];
  }
  else
  return lonlat2[1];

  //https://gis.stackexchange.com/questions/18562/how-can-i-make-a-polyline-wrap-around-the-world
  // original post is in Cartesian coordinates
 
  //(x0, y0, z0) = (cos(lon0)*sin(lat0), sin(lon0)*sin(lat0), cos(lat0))
  
   var x0 = Math.cos(lon0*Math.PI/180)*Math.sin(lat0*Math.PI/180);
   var y0 = Math.sin(lon0*Math.PI/180) * Math.sin(lat0*Math.PI/180);
   var z0 = Math.cos(lat0*Math.PI/180);

   var x1 = Math.cos(lon1*Math.PI/180)*Math.sin(lat1*Math.PI/180);
   var y1 = Math.sin(lon1*Math.PI/180) * Math.sin(lat1*Math.PI/180);
   var z1 = Math.cos(lat1*Math.PI/180);

   var t = y1 / (y1 - y0);

   //(x, y, z) = (t * x0 + (1-t) * x1, 0, t * z0 + (1-t) * z1)
   var x = t * x0 + (1-t) * x1;
   var z =  t * z0 + (1-t) * z1;
   
   //lat2 = ATan(z/x).
   var lat2 = Math.atan(z/x)*180/Math.PI;
   return lat2;






  // based on   
  //https://gis.stackexchange.com/questions/18562/how-can-i-make-a-polyline-wrap-around-the-world
  // original post is in Cartesian coordinates, not Three.js's, so  bit conversion. 
  /**
    Cartesin:   z                             WebGL THREE.JS:           y
                |                                                       |
                |                                                       |
                --------y                                                --------- x
               /                                                       /
              /                                                       /
            x                                                        z

  var v0 = lonLatToVector3 (lon0, lat0);
  var v1 = lonLatToVector3(lon1, lat1);

  var t = v1.z/(v1.x - v0.x);
  var z = t*v0.z + (1-t)*v1.z;
  var y = t*v0.y + (1-t)*v1.y

  var lat2 = Math.atan(y/z)*180/Math.PI;

  return lat2;
  */


}

function slicePoly (poly, wlont)
{
  var ret =[];
  var minMax = polyMinMaxLon (poly);
  if (minMax[1] - minMax[0] <=wlont)
  {
    ret.push(poly);
    return ret;
  }
  else
  {
    var polyArray = cutAlongLont (poly, minMax[0] + (minMax[1] - minMax[0])/2);
    for (var i=0; i < polyArray.length; i++)
    {
       var newPolyArray = slicePoly(polyArray[i], wlont);
       ret = ret.concat(newPolyArray);

    }
    return ret;
  }
}

function polyMinMaxLon (poly)
{
  var min = poly[0][0];
  var max = min;
  for (var i=1; i<poly.length; i++)
  {
    if (poly[i][0] < min)
    {
      min = poly[i][0];
    }
    if (poly[i][0] > max)
    {
      max = poly[i][0];
    }
  }

  return [min, max];
}

// the poly arrray in  geo point.
function cutAlong180 (poly)
{
  var ret = [];
  var crossIndice =[];   // contain [beforeIdx, afterIdx, crossLat]


  var counter =0;  // how many times crossed the line

  for (var i=0; i < poly.length-1; i++)
  {
    if (Math.abs(poly[i][0] - poly[i+1][0]) > 180)
    {
      counter++;
      var crossLat = getCross180LatFromLonLat(poly[i][0], poly[i][1], poly[i+1][0], poly[i+1][1]);
      var cross = [i, i+1, crossLat];
      if ((crossIndice.length == 0) || (crossLat <= crossIndice[crossIndice.length-1][2]) )
      {
        crossIndice.push(cross);
      }
      else
      {
        for (var j=0; j< crossIndice.length; j++)
        {
          if (crossLat > crossIndice[j][2])
          {
            crossIndice.splice(j, 0, cross);
            break; 
          }
        }
        
      }
    }
  }

  // check end point to start point
  var end = poly.length -1;
  if (Math.abs(poly[end][0] - poly[0][0]) > 180)
  {
    counter++;
    var crossLat2 = getCross180LatFromLonLat(poly[end][0], poly[End][1], poly[0][0], poly[0][1]);
    var cross2 = [end, 0, crossLat2];
    if ((crossIndice.length == 0) || (crossLat2 <= crossIndice[crossIndice.length-1][2]) )
    {
      crossIndice.push(cross2);
    }
    else
    {
      for (var j=0; j< crossIndice.length; j++)
      {
        if (crossLat2 > crossIndice[j][2])
        {
          crossIndice.splice(j, 0, cross2);
          break; 
        }
      }
      
    }
  }


  if (counter == 0)
  {
    ret.push(poly);
    return ret;
  }
  else
  {
    // split into two poly, and recursively keep spliting
    var rightPoly =[];  // negative lon
     var rstart = [-180, crossIndice[0][2]];
     rightPoly.push(rstart);

     // then copy from after index of top cross all the way to the before index of the 2nd cross
     if (crossIndice[1][0] >= crossIndice[0][1])
     {
       for (var k = crossIndice[0][1];k <= crossIndice[1][0]; k++)
       {
         rightPoly.push(poly[k]);
       }
     }
     else
     {
       // rounded back to o, 1, 2, ...
       for (var k = crossIndice[0][1]; k <= poly.length -1; k++)
       {
         rightPoly.push(poly[k]);
       }

       for (var k = 0; k < crossIndice[1][0]; k++)
       {
         rightPoly.push(poly[k]);
       }
     }

     var rend = [ -180, crossIndice[1][2] ];
     rightPoly.push (rend);


     var leftPoly = [];
     var lstart = [180, crossIndice[1][2]];
     leftPoly.push(lstart);

     // then copy from after index of 2nd top cross all the to the before index of the 1st top cross
     if (crossIndice[0][0] >= crossIndice[1][1])
     {
       for (var k = crossIndice[1][1]; k  <= crossIndice[0][0]; k++ )
       {
         leftPoly.push(poly[k]);
       }
     }
     else
     {
       for (var k= crossIndice[1][1]; k <= poly.length -1; k++)
       {
         leftPoly.push(poly[k]);

       }
       for (var k=0; k <= crossIndice[0][0]; k++)
       {
        leftPoly.push(poly[k]);
       }
     }

     var lend = [180, crossIndice[0][2]];
     leftPoly.push(lend);

     return cutAlong180(leftPoly).concat(cutAlong180(rightPoly));





  }



}

function crossedLont (leftLon, crossLon, rightLon)
{
   if ( ( ( leftLon < crossLon) && (rightLon > crossLon) ) ||   ((rightLon < crossLon) && (leftLon > crossLon)))
    {
      return true;
    }
    return false;

}

// cut along a latitude, the poly is not cross 180
function cutAlongLont (poly, lont)
{
  var ret = [];
  var crossIndice =[];   // contain [beforeIdx, afterIdx, crossLat]


  var counter =0;  // how many times crossed the line

  for (var i=0; i < poly.length-1; i++)
  {
    if ( crossedLont(poly[i][0], lont, poly[i+1][0]) )
    {
      counter++;
      var crossLat = getCrossLatFromLonLat(poly[i][0], poly[i][1], poly[i+1][0], poly[i+1][1], lont);
      var cross = [i, i+1, crossLat];
      if ((crossIndice.length == 0) || (crossLat <= crossIndice[crossIndice.length-1][2]) )
      {
        crossIndice.push(cross);
      }
      else
      {
        for (var j=0; j< crossIndice.length; j++)
        {
          if (crossLat > crossIndice[j][2])
          {
            crossIndice.splice(j, 0, cross);
            break; 
          }
        }
        
      }
    }
  }

  // check end point to start point
  var end = poly.length -1;
  if (crossedLont(poly[end][0], lont, poly[0][0]))
  {
    counter++;
    var crossLat2 = getCrossLatFromLonLat(poly[end][0], poly[End][1], poly[0][0], poly[0][1], lont);
    var cross2 = [end, 0, crossLat2];
    if ((crossIndice.length == 0) || (crossLat2 <= crossIndice[crossIndice.length-1][2]) )
    {
      crossIndice.push(cross2);
    }
    else
    {
      for (var j=0; j< crossIndice.length; j++)
      {
        if (crossLat2 > crossIndice[j][2])
        {
          crossIndice.splice(j, 0, cross2);
          break; 
        }
      }
      
    }
  }


  if (counter == 0)
  {
    ret.push(poly);
    return ret;
  }
  else
  {
    // split into two poly, and recursively keep spliting
    var rightPoly =[];  // 
     var rstart = [lont, crossIndice[0][2]];
     rightPoly.push(rstart);

     // then copy from after index of top cross all the way to the before index of the 2nd cross
     if (crossIndice[1][0] >= crossIndice[0][1])
     {
       for (var k = crossIndice[0][1];k <= crossIndice[1][0]; k++)
       {
         rightPoly.push(poly[k]);
       }
     }
     else
     {
       // rounded back to o, 1, 2, ...
       for (var k = crossIndice[0][1]; k <= poly.length -1; k++)
       {
         rightPoly.push(poly[k]);
       }

       for (var k = 0; k < crossIndice[1][0]; k++)
       {
         rightPoly.push(poly[k]);
       }
     }

     var rend = [ lont, crossIndice[1][2] ];
     rightPoly.push (rend);


     var leftPoly = [];
     var lstart = [lont, crossIndice[1][2]];
     leftPoly.push(lstart);

     // then copy from after index of 2nd top cross all the to the before index of the 1st top cross
     if (crossIndice[0][0] >= crossIndice[1][1])
     {
       for (var k = crossIndice[1][1]; k  <= crossIndice[0][0]; k++ )
       {
         leftPoly.push(poly[k]);
       }
     }
     else
     {
       for (var k= crossIndice[1][1]; k <= poly.length -1; k++)
       {
         leftPoly.push(poly[k]);

       }
       for (var k=0; k <= crossIndice[0][0]; k++)
       {
        leftPoly.push(poly[k]);
       }
     }

     var lend = [lont, crossIndice[0][2]];
     leftPoly.push(lend);

     return cutAlongLont(leftPoly, lont).concat(cutAlongLont(rightPoly, lont));





  }



}

/**
 * Find the bounding regtangle and uses the mid point of the rectangle in terms of lon. and lat.
 * 
 * @param polySides  Vecter3 array composing the sides of the polygon.
 */
function findCenterPoint (polySides)
{
  var minLat, maxLat, minLon, maxLon;

  var init = vector3toLonLat(polySides[0]);
  minLon = maxLon = init[0];
  minLat = maxLat = init[1];

  for (var i=1; i<polySides.length; i++)
  {
    var temp = vector3toLonLat(polySides[i]);
    var lon = temp[0];
    var lat = temp[1];
    if (lon < minLon)
    {
      minLon = lon;
    }
    if (lon > maxLon)
    {
      maxLon = lon;
    }
    if (lat < minLat)
    {
      minLat = lat;
    }
    if (lat > maxLat)
    {
      maxLat = lat;
    }
  }

  var midLat = (minLat + maxLat)/2.0;

  //we have to take care of +180 and -180 scenarios
  var midLon;
  // all positives or all negative
  if  (((minLon >=0) && (maxLon >=0)) || ((minLon <=0) && (maxLon <=0)))
  {
   midLon = (minLon + maxLon)/2.0;
  }
  else
  {
    // one positive and one negative, which mean minLon is negative.
    if (Math.abs(minLon) + Math.abs(maxLon) <= 180.0)
    {
      midLon = (minLon + maxLon)/2.0;
    }
    else
    {
      var reverseMid = ((180 - Math.abs(minLon) ) + (180 -Math.abs(maxLon)))/2;
      if (Math.abs(minLon) < Math.abs(maxLon))
      {
        midLon = minLon - reverseMid;
      }
      else
      {
        midLon = maxLon + reverseMid;
      }
    }
  }
  //return lonLatToVector3(midLon*Math.PI/180, midLat*Math.PI/180);
  return lonLatToVector3(midLon, midLat);
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

function convertFlatCoordsToSphereCoords(x, y) {
  // Calculate the relative 3d coordinates using Mercator projection relative to the radius of the globe.
  // Convert latitude and longitude on the 90/180 degree axis.
  let latitude = ((x - globeWidth) / globeWidth) * -180
  let longitude = ((y - globeHeight) / globeHeight) * -90
  latitude = (latitude * Math.PI) / 180 //(latitude / 180) * Math.PI
  longitude = (longitude * Math.PI) / 180 //(longitude / 180) * Math.PI // Calculate the projected starting point
  const radius = Math.cos(longitude) * globeRadius
  const targetX = Math.cos(latitude) * radius
  const targetY = Math.sin(longitude) * globeRadius
  const targetZ = Math.sin(latitude) * radius

  
 

  return new THREE.Vector3(targetX, targetY, targetZ);
}

render();


function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}



function render() {

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  sphere.updateWorldMatrix(true, false);

  ///
  normalMatrix.getNormalMatrix(camera.matrixWorldInverse);
  camera.getWorldPosition(cameraPosition);
  labels.forEach((info, ndx) => {
    const {elem, meshPoint} = info;
    
    meshPoint.updateWorldMatrix(true, false);
    meshPoint.getWorldPosition(tempV);
    myV.copy(tempV);
    // 
    cameraToPoint.copy(myV);
    // get the normalized screen coordinate of that position
    // x and y will be in the -1 to +1 range with x = -1 being
    // on the left and y = -1 being on the bottom
    tempV.project(camera);

    //////////////////////////// make label invisible if on the other side of the sphere
    // Orient the position based on the camera's orientation.
    // Since the sphere is at the origin and the sphere is a unit sphere
    // this gives us a camera relative direction vector for the position.
    
    myV.applyMatrix3(normalMatrix);
    

    // compute the direction to this position from the camera
    
    cameraToPoint.applyMatrix4(camera.matrixWorldInverse).normalize();

    // get the dot product of camera relative direction to this position
    // on the globe with the direction from the camera to that point.
    // -1 = facing directly towards the camera
    // 0 = exactly on tangent of the sphere from the camera
    // > 0 = facing away
    const dot = myV.dot(cameraToPoint);

    // if the orientation is not facing us hide it.
    if (dot > settings.maxVisibleDot) {
      elem.style.display = 'none';
      
    }
    else {

       // restore the element to its default display style
       elem.style.display = '';
    ////////////////////////////////////////////////

    // convert the normalized position to CSS coordinates
    const x = (tempV.x *  .5 + .5) * canvas.clientWidth;
    const y = (tempV.y * -.5 + .5) * canvas.clientHeight;
    
   /* 
   const x = ((tempV.x *  .5 + .5) * canvas.clientWidth)%canvas.clientWidth;
   const y = ((tempV.y * -.5 + .5) * canvas.clientHeight)%canvas.clientHeight;
   */

    // move the elem to that position
    elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
    }
  });
  ////



  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
