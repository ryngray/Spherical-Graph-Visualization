
// Mason Yin's sphere test with three.js
let  polyCounter =0;



const g_clusters2d = [[[0.196260,1.478561],[0.194279,1.480544],[0.189170,1.478769],[0.182773,1.479513],[0.183437,1.460536],[0.178864,1.435251],[0.178137,1.449574],[0.174431,1.474762],[0.170978,1.471517],[0.145752,1.474632],[-0.700674,1.434687],[-0.697767,1.431705],[-0.069596,0.790142],[0.085860,0.783941],[0.097591,0.783507],[0.129937,0.782498],[0.134594,0.270674],[0.134388,0.178766],[0.134962,0.151921],[0.141050,0.084534],[0.140126,0.083107],[0.140561,0.082305],[0.140727,0.081779],[0.140727,0.081779],[0.140561,0.082305],[0.140126,0.083107],[0.141050,0.084534],[0.134962,0.151921],[0.134388,0.178766],[0.134594,0.270674],[0.129937,0.782498],[0.097591,0.783507],[0.085860,0.783941],[-0.069596,0.790142],[-0.178743,0.589420],[-0.212946,0.524380],[-0.233060,0.484717],[-0.417153,0.118222],[-0.430947,0.091269],[-0.438746,0.076434],[-0.477530,0.003947],[-0.477866,0.003328],[-0.662354,-0.002690],[-0.722069,-0.530025],[-0.721015,-0.541805],[-0.721015,-0.541805],[-0.722069,-0.530025],[-0.662354,-0.002690],[-0.693776,-0.003481],[-0.737061,-0.004895],[-0.778413,-0.005317],[-0.885837,-0.008828],[-0.891630,-0.008995],[-2.924364,-0.075306],[-3.912177,-0.106619],[-3.925360,0.210222],[-3.932392,0.396285],[-3.934049,0.437995],[-3.941072,0.623814],[-4.119972,4.923373],[-1.020537,1.760392],[-0.917362,1.654747],[-0.899023,1.636037],[-0.745848,1.480354],[-0.743646,1.478174],[-0.700674,1.434687],[0.145752,1.474632],[0.170978,1.471517],[0.174431,1.474762],[0.178137,1.449574],[0.178864,1.435251],[0.183437,1.460536],[0.182773,1.479513],[0.179693,1.480580],[0.178611,1.482449],[0.178075,1.487255],[0.178075,1.487255],[0.178611,1.482449],[0.179693,1.480580],[0.182773,1.479513],[0.189170,1.478769],[0.194279,1.480544],[0.196041,1.485620],[0.195207,1.492785],[0.194533,1.494768],[0.197004,1.497336],[0.197335,1.497544],[0.197880,1.498117],[0.218754,1.502672],[0.202698,1.503889],[1.387864,8.125319],[0.321893,8.201192],[-0.003212,8.224625],[-0.682266,8.274383],[-1.575208,8.340077],[-4.352034,6.322854],[-6.661218,6.233045],[-7.117475,6.215763],[-7.406230,6.205021],[-7.112806,0.469416],[-7.097649,0.296604],[-7.092394,0.308866],[-7.087755,0.298251],[-7.087755,0.298251],[-7.092394,0.308866],[-7.097649,0.296604],[-7.097862,0.295351],[-7.087425,0.294131],[-7.085749,0.291244],[-7.085549,0.290627],[-7.085549,0.290627],[-7.085749,0.291244],[-7.087425,0.294131],[-7.097862,0.295351],[-7.097649,0.296604],[-7.112806,0.469416],[-7.406230,6.205021],[-8.464979,6.167072],[-9.550087,6.081438],[-13.328284,1.002819],[-7.110796,0.302071],[-7.108198,0.298250],[-7.104420,0.295846],[-7.103406,0.294773],[-7.102015,0.293817],[-7.103545,0.289161],[-7.103765,0.287099],[-7.103552,0.285143],[-7.101441,0.279150],[-7.095517,0.277072],[-7.090072,0.277679],[-7.086909,0.278730],[-7.086909,0.278730],[-7.090072,0.277679],[-7.095517,0.277072],[-7.101441,0.279150],[-7.103552,0.285143],[-7.103765,0.287099],[-7.103545,0.289161],[-7.102015,0.293817],[-7.103406,0.294773],[-7.104420,0.295846],[-7.108198,0.298250],[-7.110796,0.302071],[-13.328284,1.002819],[-13.718888,0.478126],[-13.702490,0.451144],[-13.579044,0.247598],[-13.008328,-0.696069],[-10.346646,-5.100478],[-9.608300,-5.466464],[-7.856932,-5.257834],[-7.257619,-5.186662],[-7.065789,-5.164094],[-7.090288,0.247472],[-7.084858,0.275748],[-7.084803,0.275698],[-7.083729,0.275156],[-7.083729,0.275156],[-7.084803,0.275698],[-7.084858,0.275748],[-7.090288,0.247472],[-7.065789,-5.164094],[-6.524939,-5.101074],[-4.545972,-4.871976],[-1.000299,-6.695326],[-0.934369,-6.729340],[-0.838627,-6.677757],[-0.103076,-6.282401],[-0.711600,-0.682830],[-0.711600,-0.682830],[-0.103076,-6.282401],[2.922871,-4.658695],[4.207752,-4.124504],[5.468279,-3.561677],[5.398751,-0.622801],[5.387006,-0.118199],[5.383361,0.046480],[5.380066,0.200737],[5.372332,0.576189],[5.454889,1.313754],[5.471611,1.461109],[5.519632,1.880030],[5.766155,4.016405],[1.478334,8.118908],[1.387864,8.125319],[0.202698,1.503889],[0.218754,1.502672],[0.197880,1.498117],[0.197335,1.497544],[0.197004,1.497336],[0.194533,1.494768],[0.195207,1.492785],[0.196041,1.485620],[0.194279,1.480544],[0.196260,1.478561],[0.196873,1.478184],[0.196873,1.478184],[0.196260,1.478561],],
[[-0.212946,0.524380],[-0.178743,0.589420],[-0.069596,0.790142],[-0.697767,1.431705],[-0.700674,1.434687],[-0.743646,1.478174],[-0.745848,1.480354],[-0.899023,1.636037],[-0.917362,1.654747],[-1.020537,1.760392],[-4.119972,4.923373],[-3.941072,0.623814],[-3.934049,0.437995],[-3.932392,0.396285],[-3.925360,0.210222],[-3.912177,-0.106619],[-2.924364,-0.075306],[-0.891630,-0.008995],[-0.787646,0.531595],[-0.787646,0.531595],[-0.891630,-0.008995],[-0.885837,-0.008828],[-0.778413,-0.005317],[-0.737061,-0.004895],[-0.693776,-0.003481],[-0.662354,-0.002690],[-0.477866,0.003328],[-0.477530,0.003947],[-0.438746,0.076434],[-0.430947,0.091269],[-0.417153,0.118222],[-0.233060,0.484717],[-0.212946,0.524380],],
[[-15.922982,29.421530],[-15.971298,30.456432],[-16.066414,32.509830],[-16.829557,33.641098],[-21.133089,35.121574],[-21.233982,35.156326],[-21.496572,35.247070],[-22.465466,35.583397],[-23.307016,35.875824],[-25.990374,34.737980],[-27.428513,30.801842],[-27.931644,29.426224],[-28.571712,27.687925],[-28.620951,27.554319],[-27.800516,25.922964],[-22.101841,22.001736],[-22.041059,22.010452],[-21.270557,22.120317],[-21.144781,22.138180],[-18.965422,22.445259],[-15.778746,26.504631],[-15.909791,29.147490],[-15.922982,29.421530],],
];
  


var g_clusters = [];


const g_edges = [{from: "dark pink", to: "pink"},{from: "dark pink", to: "light brown"},{from: "dark pink", to: "dirt"},{from: "dark pink", to: "purple"},{from: "dark pink", to: "rose"},{from: "dark pink", to: "hot pink"},{from: "dark pink", to: "salmon"},{from: "dark pink", to: "grey"},{from: "dark pink", to: "mauve"},{from: "dark pink", to: "orange"},{from: "dark pink", to: "magenta"},{from: "indigo", to: "royal blue"},{from: "indigo", to: "purple"},{from: "indigo", to: "navy blue"},{from: "indigo", to: "maroon"},{from: "indigo", to: "dark blue"},{from: "indigo", to: "dark purple"},{from: "sea green", to: "turquoise"},{from: "sea green", to: "aqua"},{from: "sea green", to: "pale green"},{from: "sea green", to: "light green"},{from: "sea green", to: "sky blue"},{from: "sea green", to: "cyan"},{from: "sea green", to: "light blue"},{from: "lilac", to: "pink"},{from: "lilac", to: "peach"},{from: "lilac", to: "light purple"},{from: "lilac", to: "light pink"},{from: "lilac", to: "grey"},{from: "lilac", to: "lavender"},{from: "lilac", to: "periwinkle"},{from: "lilac", to: "beige"},{from: "lilac", to: "sky blue"},{from: "lilac", to: "light blue"},{from: "mauve", to: "pink"},{from: "mauve", to: "light brown"},{from: "mauve", to: "peach"},{from: "mauve", to: "light purple"},{from: "mauve", to: "dirt"},{from: "mauve", to: "purple"},{from: "mauve", to: "rose"},{from: "mauve", to: "salmon"},{from: "mauve", to: "grey"},{from: "mauve", to: "lavender"},{from: "mauve", to: "periwinkle"},{from: "mauve", to: "olive"},{from: "mauve", to: "tan"},{from: "sky blue", to: "light purple"},{from: "sky blue", to: "lavender"},{from: "sky blue", to: "grey"},{from: "sky blue", to: "periwinkle"},{from: "sky blue", to: "light blue"},{from: "lavender", to: "pink"},{from: "lavender", to: "peach"},{from: "lavender", to: "light pink"},{from: "lavender", to: "grey"},{from: "lavender", to: "periwinkle"},{from: "lavender", to: "beige"},{from: "lavender", to: "light blue"},{from: "lavender", to: "tan"},{from: "lavender", to: "light purple"},{from: "yellow", to: "mustard"},{from: "yellow", to: "lime"},{from: "olive green", to: "brown"},{from: "olive green", to: "light brown"},{from: "olive green", to: "dirt"},{from: "olive green", to: "forest green"},{from: "olive green", to: "green"},{from: "olive green", to: "olive"},{from: "forest green", to: "brown"},{from: "forest green", to: "navy blue"},{from: "forest green", to: "dark blue"},{from: "forest green", to: "black"},{from: "forest green", to: "olive"},{from: "forest green", to: "dark purple"},{from: "forest green", to: "dark green"},{from: "violet", to: "purple"},{from: "violet", to: "magenta"},{from: "magenta", to: "purple"},{from: "magenta", to: "rose"},{from: "magenta", to: "hot pink"},{from: "magenta", to: "maroon"},{from: "magenta", to: "red"},{from: "lime green", to: "mustard"},{from: "lime green", to: "light green"},{from: "lime green", to: "lime"},{from: "tan", to: "pink"},{from: "tan", to: "light brown"},{from: "tan", to: "mustard"},{from: "tan", to: "peach"},{from: "tan", to: "dirt"},{from: "tan", to: "rose"},{from: "tan", to: "light pink"},{from: "tan", to: "salmon"},{from: "tan", to: "grey"},{from: "tan", to: "pale green"},{from: "tan", to: "beige"},{from: "tan", to: "light green"},{from: "tan", to: "lime"},{from: "lime", to: "mustard"},{from: "lime", to: "pale green"},{from: "lime", to: "light green"},{from: "pink", to: "light purple"},{from: "pink", to: "peach"},{from: "pink", to: "light pink"},{from: "pink", to: "salmon"},{from: "pink", to: "beige"},{from: "pink", to: "rose"},{from: "light green", to: "grey"},{from: "light green", to: "pale green"},{from: "light green", to: "beige"},{from: "light green", to: "light blue"},{from: "light brown", to: "mustard"},{from: "light brown", to: "peach"},{from: "light brown", to: "dirt"},{from: "light brown", to: "rose"},{from: "light brown", to: "salmon"},{from: "light brown", to: "grey"},{from: "light brown", to: "orange"},{from: "light brown", to: "olive"},{from: "peach", to: "mustard"},{from: "peach", to: "rose"},{from: "peach", to: "light pink"},{from: "peach", to: "salmon"},{from: "peach", to: "grey"},{from: "peach", to: "pale green"},{from: "peach", to: "beige"},{from: "purple", to: "dirt"},{from: "purple", to: "rose"},{from: "purple", to: "maroon"},{from: "purple", to: "dark purple"},{from: "rose", to: "light purple"},{from: "rose", to: "dirt"},{from: "rose", to: "salmon"},{from: "rose", to: "grey"},{from: "rose", to: "orange"},{from: "light pink", to: "pale green"},{from: "light pink", to: "beige"},{from: "light pink", to: "light blue"},{from: "dark blue", to: "navy blue"},{from: "dark blue", to: "maroon"},{from: "dark blue", to: "royal blue"},{from: "dark blue", to: "black"},{from: "dark blue", to: "dark purple"},{from: "dark blue", to: "dark green"},{from: "periwinkle", to: "light purple"},{from: "periwinkle", to: "grey"},{from: "periwinkle", to: "light blue"},{from: "cyan", to: "turquoise"},{from: "cyan", to: "aqua"},{from: "orange", to: "salmon"},{from: "orange", to: "mustard"},{from: "black", to: "navy blue"},{from: "black", to: "maroon"},{from: "black", to: "dark purple"},{from: "black", to: "dark green"},{from: "brown", to: "dirt"},{from: "brown", to: "maroon"},{from: "brown", to: "olive"},{from: "brown", to: "dark purple"},{from: "brown", to: "dark green"},{from: "turquoise", to: "aqua"},{from: "turquoise", to: "teal"},{from: "light purple", to: "grey"},{from: "light purple", to: "light blue"},{from: "dirt", to: "grey"},{from: "dirt", to: "olive"},{from: "navy blue", to: "maroon"},{from: "navy blue", to: "royal blue"},{from: "navy blue", to: "dark purple"},{from: "navy blue", to: "dark green"},{from: "blue", to: "royal blue"},{from: "light blue", to: "grey"},{from: "light blue", to: "pale green"},{from: "light blue", to: "beige"},{from: "royal blue", to: "dark purple"},{from: "maroon", to: "dark purple"},{from: "bright green", to: "green"},{from: "olive", to: "green"},{from: "dark purple", to: "dark green"},{from: "aqua", to: "teal"},{from: "grey", to: "beige"},{from: "pale green", to: "beige"},{from: "green", to: "teal"},];

const g_labels = [{label: "dark pink", pos: [0.9552735392660637,0.044169472609680294,0.2924064343810989], pos2d: [1.3500314102355182,0.06242209476713824]},{label: "indigo", pos: [-0.03479475124690096,0.9179469476908755,0.3951742988994508], pos2d: [-0.057528559357824825,1.5177049289085545]},{label: "sea green", pos: [0.8277130227301189,-0.5316394703417605,0.1795845917045763], pos2d: [1.0088950236196288,-0.6480125372661483]},{label: "lilac", pos: [0.9724809123345255,-0.22160385010923245,-0.07192085067466683], pos2d: [0.9072320141197422,-0.20673527338306275]},{label: "mauve", pos: [0.9205015260046115,0.1999766796469632,-0.3356877540521212], pos2d: [0.6891592164501432,0.14971813512573365]},{label: "sky blue", pos: [0.8090939462882788,-0.3678242958823156,0.4583364194981008], pos2d: [1.4937204113641565,-0.6790641075434568]},{label: "lavender", pos: [0.9663784301133502,-0.05511394276066106,-0.251147731674075], pos2d: [0.7723935436627499,-0.04405070749472316]},{label: "yellow", pos: [0.4174923560975105,-0.8936151433758288,-0.16477896749751156], pos2d: [0.3584305415425545,-0.767197183595898]},{label: "olive green", pos: [0.4352240983349943,0.3654867445670148,-0.8227997470674724], pos2d: [0.23876681957806095,0.20050844595244835]},{label: "forest green", pos: [0.6054364230421837,0.472462067526769,-0.6404891352725851], pos2d: [0.36905847775796685,0.28800072939725035]},{label: "violet", pos: [0.2854098884032707,0.6454425879517843,0.708480812202938], pos2d: [0.9790432340321824,2.214065540005217]},{label: "magenta", pos: [0.7254431724770677,0.636443536931532,0.2620531011159737], pos2d: [0.9830560621287688,0.8624516721921393]},{label: "lime green", pos: [0.6912397529107778,-0.7176131947348507,-0.08496414972383545], pos2d: [0.6371083810342716,-0.6614165038702068]},{label: "tan", pos: [0.9954884094142205,0.09088179888783676,-0.02726399370695272], pos2d: [0.9690677523135334,0.08846975991038442]},{label: "lime", pos: [0.8452494068604068,-0.5241484239435291,-0.10402821674740316], pos2d: [0.765604894909852,-0.4747599889138087]},{label: "pink", pos: [0.9679852221051536,0.06490356358671046,0.2424708997380445], pos2d: [1.277819191065296,0.08567798064030363]},{label: "light green", pos: [0.9275297688109724,-0.3060525613477298,0.21452355968975292], pos2d: [1.1808498908568372,-0.3896393903639494]},{label: "light brown", pos: [0.835736801074894,-0.2976808332048675,-0.4614435186147531], pos2d: [0.5718570649018699,-0.20368959143014154]},{label: "peach", pos: [0.9865328605478596,-0.13192725128251642,-0.09668565264970441], pos2d: [0.8995584634159256,-0.12029632280112969]},{label: "purple", pos: [0.8505189105554561,0.521660979050487,-0.06698810135868957], pos2d: [0.7971212701176479,0.48890983731328436]},{label: "rose", pos: [0.894228570589938,0.4352032124067125,0.10465862339795823], pos2d: [0.9987571153962224,0.48607517063310046]},{label: "light pink", pos: [0.8533896265187692,-0.18922840703858296,0.4857146850979457], pos2d: [1.6593700068634027,-0.3679444105352717]},{label: "dark blue", pos: [0.4253555407142908,0.8692310885280633,-0.25201186226044603], pos2d: [0.33973762832113447,0.6942674544302713]},{label: "periwinkle", pos: [0.8841713837571115,0.11350290037431346,-0.45316449083268984], pos2d: [0.6084454921207614,0.07810740015349138]},{label: "cyan", pos: [0.5875154592549433,-0.7241248527540108,0.3612046272688546], pos2d: [0.9197240373596371,-1.133578738458988]},{label: "orange", pos: [0.8452583473589305,0.22933288673217336,0.4826435053775599], pos2d: [1.6338025252312507,0.4432782599927299]},{label: "black", pos: [0.32737409530764927,0.9444182647936108,-0.03000571355127926], pos2d: [0.3178371643968078,0.9169058504903066]},{label: "red", pos: [0.38058716394121206,0.715526846715401,0.5858111831236266], pos2d: [0.9188735871997462,1.7275378222704902]},{label: "brown", pos: [0.3103535676953182,0.681038313550024,-0.6632250587061097], pos2d: [0.18659745779489087,0.4094685262136631]},{label: "turquoise", pos: [0.3416087849397252,-0.8468533339850044,0.407606266843988], pos2d: [0.5766583368797379,-1.4295447209972056]},{label: "mustard", pos: [0.8939770801383771,-0.40335410758202234,-0.1952189644577931], pos2d: [0.7479609232471698,-0.33747298158459405]},{label: "light purple", pos: [0.9282924374009988,0.2528645176025068,0.2726402142050335], pos2d: [1.276249327403251,0.34764709644504055]},{label: "dirt", pos: [0.8816172115316208,0.46681066808515204,-0.06956214842211017], pos2d: [0.8242786198373248,0.4364502509497204]},{label: "navy blue", pos: [0.28718518945323673,0.9483800667958818,0.13453592777749424], pos2d: [0.3318279737664293,1.0958052416438828]},{label: "blue", pos: [-0.9435024050662952,0.1639729961247971,0.28795150316672175], pos2d: [-1.3250535732641402,0.2302834664408966]},{label: "salmon", pos: [0.6111748852270731,-0.31263625906160486,-0.7271339829685023], pos2d: [0.3538665160050985,-0.18101447956241526]},{label: "light blue", pos: [0.9093823308737783,-0.2386059666544314,0.34072124819488453], pos2d: [1.3793593808140718,-0.3619196978533352]},{label: "royal blue", pos: [-0.15535750410707658,0.97869368490653,-0.13424871337072516], pos2d: [-0.13696952200667697,0.8628563324511769]},{label: "maroon", pos: [0.6487060595421063,0.7569665694202323,0.07862608405306912], pos2d: [0.7040638423928102,0.8215628381906916]},{label: "bright green", pos: [-0.29542853060646973,0.03979784669297713,-0.9545355492082549], pos2d: [-0.15115024678171865,0.02036179219615549]},{label: "olive", pos: [0.7479129941898209,0.26182061099524473,-0.6099804265549011], pos2d: [0.46454788011940884,0.16262347459434565]},{label: "dark purple", pos: [0.6499758737861413,0.6994379260523151,-0.2971833627503027], pos2d: [0.5010670753655483,0.5391974227678645]},{label: "hot pink", pos: [0.34624305970587566,-0.09010668995920143,0.9338075433568275], pos2d: [5.230853744745991,-1.3612833626185645]},{label: "aqua", pos: [-0.1636921945632283,-0.6789463234711817,-0.7157071714633296], pos2d: [-0.09540800276752061,-0.39572389435902816]},{label: "grey", pos: [0.9791840085484718,-0.15544005365945773,0.13052611662534697], pos2d: [1.1261798971442425,-0.1787748391661342]},{label: "pale green", pos: [0.9336998646807326,-0.35497736514408096,-0.04685758135618592], pos2d: [0.8919072482344165,-0.3390884982503674]},{label: "green", pos: [0.4784844813762053,0.1432252398312327,-0.866336615731683], pos2d: [0.2563763028292831,0.07674137592541544]},{label: "beige", pos: [0.9258927707252202,-0.2607636937317027,0.27335850663582517], pos2d: [1.2742085047174503,-0.35886155155333854]},{label: "teal", pos: [-0.11173938032674446,-0.40310572869117883,-0.9083061611486261], pos2d: [-0.05855422080673237,-0.21123745072884217]},{label: "dark green", pos: [-0.09423904013052437,0.8994237378248755,-0.4267973092141227], pos2d: [-0.0660493536972193,0.6303794743769712]},];

const g_colors = ['#decbe4', '#ccebc5', '#decbe4', '#b3cde3', '#fed9a6', '#fbb4ae', '#fbb4ae'];
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
  const height = 700
  const globeRadius = 200
  const globeSegments = 64
  const globeWidth = 4098 / 2
  const globeHeight = 1968 / 2


const clusterColors = [];

//label and position in a dictionary table for efficient access when drawing edges. 
// key: label name
// value: position in V3 and color of the node, which is inverse color of the cluster.
// if node numbers is more than the numbers of clusters, randomize the color of node.
const labelTable = new Object();  



var labels = [];
var scene = new THREE.Scene();


const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});




var camera = new THREE.PerspectiveCamera(45, width / height, 1, 4000);
camera.position.set(0, 5, -500);



renderer.setSize(width, height);

renderer.setClearColor(0x999999);


var controls = new THREE.OrbitControls(camera, renderer.domElement);

scene.add(new THREE.AxesHelper(1));


let sphereRadius = globeRadius;
const loader = new THREE.TextureLoader();
//const geometry = new THREE.SphereGeometry(sphereRadius-2, 128, 64);
const geometry = new THREE.SphereGeometry(sphereRadius-1, 128, 64);



const material = new THREE.MeshBasicMaterial({transparent: false, opacity: 0.5, color: '#C8C8C8', vertexColors: THREE.FaceColors, wireframe: false });

let sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

//pure debugging to understand polybool
/*
var testTemp = PolyBool.difference({
  regions: [
    [[130,170], [130,20], [260,20], [260,170]]
  ],
  inverted: false
}, {
  regions: [
    [[130,170], [130,20], [250,20], [250,170]]
    ],
  inverted: false
});
**/


const labelContainerElem = document.querySelector('#labels');

///// Main actions: 
//  draw clusters, labels and nodes, and then edges.


g_clusters2d.forEach(draw3dPolyWith2dData);




function checkSplitNeeded (clusters)
{
  var flags =[];
  var areas =[];
  var totalArea =0.0;

  var cutoff = 1.0/16.0;

  for (var i=0; i<clusters.length; i++)
  {
     s= Math.abs(PolyArea(clusters[i][0]));
     areas.push(s);
     totalArea += s;
     flags.push(false);
  }

  for (var i=0; i< areas.length; i++)
  {
    // if the cluster has hole, the polygon array will have a length of more than 1
    // in which case we don't split the polygon, because we don't know 
    // how to split polygon with hole(s) yet.
    if ((clusters[i].length ==1 ) && (areas[i]/totalArea > cutoff))
    {
      flags[i] = true;
    }
  }

  return flags;

}

//  remove all stray edges
// yet keeps holes.
// returned array format:  [[cluster 1], [cluster 2]...]
// each cluster has the format of:
//[[outerPolygon], [hole 1], [hole 2], ...]  with holes as optional.
//


function reverseOrder (data)
{
  var ret = [];
  for (var i= data.length -1; i >=0; i--)
  {
    ret.push(data[i]);
  }
  return ret;
}




// postions are the buffered array [x,y,z, x, y,z...] and Z always 0


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



function prepareLabels()
{
  for (var i=0; i< g_labels.length; i++)
  {
    var labelName = g_labels[i].label;

    var nodeColor;
    if (i < clusterColors.length)
    {
      nodeColor = invertColor(clusterColors[i]);
    }
    else
    {
      nodeColor = getRandomColor();
    }

    var posi = g_labels[i].pos;
    var tempV = new THREE.Vector3(posi[0], posi[1], posi[2]).normalize().multiplyScalar(sphereRadius);

    var posAndColor = {pos: tempV, color: nodeColor};

    labelTable[labelName] = posAndColor;

  }
}

function drawLabelAndNode (data, index, array)
{
  var v3Pos = labelTable[data.label].pos;
  drawLabelAt(v3Pos,  data.label);
  spot(v3Pos, labelTable[data.label].color);

}


function spot(point, color) {
  var s = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 24), new THREE.MeshBasicMaterial({
    color: color
  }));
  s.position.copy(point);
  scene.add(s);
  return s;
}


function spot2(point, color) {
  var s = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 24), new THREE.MeshBasicMaterial({
    color: color
  }));
  s.position.copy(point);
  //scene.add(s);
  return s;
}



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

  var fromKey = edge.from.trim();
  var toKey = edge.to.trim();
  if (fromKey in labelTable  && toKey in labelTable)
  {
    var v3Start = labelTable[fromKey].pos;
    var v3End = labelTable[toKey].pos;

    var lineStart = v3Start.clone().normalize().multiplyScalar(sphereRadius +2);
    var lineEnd = v3End.clone().normalize().multiplyScalar(sphereRadius +2);
    setShortArc(lineStart, lineEnd, 20, "white");
  }
  
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
  //var angleInterval = 0.5; 
  var angleInterval = 2.0;

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

function setShortArc(pointStart, pointEnd, smoothness, color) {
  // calculate normal
 
  var cb = new THREE.Vector3(), ab = new THREE.Vector3(), normal = new THREE.Vector3();
  cb.subVectors(new THREE.Vector3(), pointEnd);
  ab.subVectors(pointStart, pointEnd);
  cb.cross(ab);
  normal.copy(cb).normalize();
  // get angle between vectors
  var angle = pointStart.angleTo(pointEnd);
  //console.log(angle + " ");
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
  if (Math.abs(angle) > Math.abs(angle - Math.PI * 2))
  //if (Math.abs(angle) > Math.abs(Math.abs(angle) - Math.PI * 2))
  {
    angle = angle - Math.PI * 2;
  }
  var angleDelta = angle / (smoothness - 1);
  var geometry = new THREE.Geometry();
  for (var i = 0; i < smoothness; i++) {
    var v3 = pointStart.clone().applyAxisAngle(normal, angleDelta * i);
    
    geometry.vertices.push(v3);
  }
  var arc = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color: color, linewidth: 3.0
  }));
  scene.add(arc);
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

function drawPoly ( poly, index, array)
{
  var clr = g_colors[index];
  clusterColors.push(clr);

  drawPolyAzimuthal(poly,clr)
  polyCounter++;
}

function draw3dPolyWith2dData ( poly, index, array)
{
  polyCounter++;
  var clr = g_colors[index];
  clusterColors.push(clr);
  if (index <1)
  {
    debugRawPolyContour(poly);
  }
  return;

  
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

function removeStrayEdges (orig_points)
{
  var points = removeStrayEdges1 (orig_points);

  //do one more time, starting from middle
  var shuffledPoints = [];
  var start = Math.floor(points.length/2);
  for (var i= start; i< points.length; i++)
  {
    shuffledPoints.push(points[i]);
  }
  for (var i=0; i< start; i++)
  {
    shuffledPoints.push(points[i]);
  }

  var finalPoints = removeStrayEdges1 (shuffledPoints);
  if (false == almostSame(finalPoints[0], finalPoints[finalPoints.length -1]))
  {
    finalPoints.push(finalPoints[0]);
  }

  /*
  var final = [];
  final.push(finalPoints[0]);

  for (var i=1; i<finalPoints.length; i++)
  {
    

    var distance = 0.0;
     
        distance = finalPoints[i-1].angleTo(finalPoints[i]);
        distance = Math.abs(distance * 180/Math.PI);
        
      
      if (distance > 8.0)
      {
        var smoothPoints = GetSmoothPoint(finalPoints[i-1], finalPoints[i], 10);
        for (var k=0; k<smoothPoints.length; k++)
        {
          final.push(smoothPoints[k]);
        }
      }
      else
      {
        final.push(finalPoints[i]);
      }
  }
  return final;
  */
 return finalPoints;
}
function removeStrayEdges1 (orig_points)
{
  // first go through remove consective points that are almost same
  var points = [];
  points.push(orig_points[0]);

  for (var i=1; i< orig_points.length -1; i++)
  {
    var p = points[points.length-1];
    if (false == almostSame(p, orig_points[i]) )
    {
      points.push(orig_points[i]);
    }
  }



  var flag = [];
  for (var i=0; i< points.length -1; i++)
  {
    flag.push(-1);
  }

  for (var i=1; i< points.length -1; i++)
  {
    var startj =0;
    if (i > (points.length -1)/2 )
    {
      startj =Math.floor( i - (points.length -1)/2);

    }
    for (var j=startj; j < i; j++)
    {
      if (almostSame (points[j], points[i]))
      {
        if (flag[j] < i)
        {
          flag[j] = i;
        }
      }
    }
  }
  var newPoints = [];
  var i=0; 
  while (i< points.length )
  {
    
      newPoints.push(points[i]);
      if (flag[i] > 0)
      {
         i = flag[i];
      }
      else
      {
        i++;
      }
    
  }
  return newPoints;
}


function almostSame (p1, p2)
{
  
  var angle = p1.angleTo(p2);
  if (Math.abs(angle*180/Math.PI) < 0.01)
  {
    return true;
  }
  return false;
}

function v3toGeoAndThreeArray (points)  // not Vector3
{
  var geoArray = [];
  var ThreeArray =[];
  for (var i=0; i< points.length; i++)
  {
    var temp = new THREE.Vector3(points[i][0], points[i][1], points[i][2]).normalize();
    var threeV = temp.multiplyScalar(sphereRadius);
    ThreeArray.push(threeV.clone());
   // var geoPoint = vector3toLonLat(temp);
   // geoArray.push(geoPoint);
  }

  
  var cleanV3Array = removeStrayEdges(ThreeArray);
  for (var i=0; i< cleanV3Array.length; i++)
  {
    //debugging 
    /*
    drawLabelAt(cleanV3Array[i], i.toString());
     if (i < cleanV3Array.length -1) 
     console.log(i + ": " +  cleanV3Array[i].angleTo(cleanV3Array[i+1])* 180/Math.PI);
     */
    ///////////

    var tmp = cleanV3Array[i].clone().normalize();
    var geoPoint = vector3toLonLat(tmp);
    geoArray.push(geoPoint);
  }
  
  
  //return [geoArray, ThreeArray];
  return [geoArray, cleanV3Array];

  /*  isClocwise not work for huge polygon.

  if (isClockwise(geoArray, cleanV3Array) )
 {
  return [geoArray, cleanV3Array];
 }
 else
 {
   console.log ("poly " + polyCounter + " is counter-clockwise");
   var geo = [];
   var v3 = [];
   for (var i= geoArray.length -1; i >=0; i--)
   {
     geo.push(geoArray[i]); v3.push(cleanV3Array[i]);
   }
   return [geo, v3];
 }
 */

}



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

function getArea (geoPoints)
{
  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};
  var area = d3.geoArea(geoPolyformat);
  return area;
}

function isClockwise (geoPoints, v3Points)
{
  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};
   var c = d3.geoCentroid(geoPolyformat);
   var ctr = lonLatToVector3(c[0], c[1]).normalize();
   var centerV3 = ctr.clone().multiplyScalar(sphereRadius);
   
   var mid = Math.floor(v3Points.length/2);
   if (centerV3.clone().dot(v3Points[0]) < 0 )
   {
     return false;
   }
   if (centerV3.clone().dot(v3Points[mid]) < 0)
   {
     return false;
   }
   return true;
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

function findCenterPointGeo (geoData)
{
  var minLat, maxLat, minLon, maxLon;

  
  minLon = maxLon = geoData[0][0];
  minLat = maxLat = geoData[0][1];

  for (var i=1; i<geoData.length; i++)
  {
    
    var lon = geoData[i][0];
    var lat = geoData[i][1];
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
  return [midLon, midLat];
}

function splitPolyTo (geoPoints, v3Points, maxArea)
{
  // split twice at most
  var ret = [];
  var t = splitPoly(geoPoints, v3Points);
  for (var i=0; i < t.length; i++)
  {
    if (getArea(t[i][0]) > maxArea)
    {
      t1 = splitPoly(t[i][0], t[i][1]);
      ret.push(t1[0]);
      ret.push(t1[1]);
    }
    else
    {
      ret.push(t[i]);
    }
  }
  return ret;
  
}




function splitPoly (geoPoints, v3Points)
{
  //idea: center to nearest point p1, and then to nearest point p2 that is the opposite direction of p1.
  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};
   var c = d3.geoCentroid(geoPolyformat);
   var ctr = lonLatToVector3(c[0], c[1]).normalize();
   var centerV3 = ctr.clone().multiplyScalar(sphereRadius);

   var twoIndex = getNearest2Points( centerV3, v3Points);

   var geo1 = [];
   var geo2 = [];
   var v1 = [];
   var v2 =[];

   var a = twoIndex[0]; 
   var b = twoIndex[1];

   for (var i = a; i <=b; i++)
   {
     geo1.push(geoPoints[i]);
     v1.push(v3Points[i]);
   }
   geo1.push(c); v1.push(centerV3);
   geo1.push(geoPoints[a]); v1.push(v3Points[a]);

   //second poly
   geo2.push(geoPoints[a]); v2.push(v3Points[a]);
   geo2.push(c); v2.push(centerV3);
   for (var i= b; i < v3Points.length; i++)
   {
    geo2.push(geoPoints[i]);
    v2.push(v3Points[i]);
   }
   for (var i=0; i<=a; i++)
   {
    geo2.push(geoPoints[i]);
    v2.push(v3Points[i]);
   }

   return [[geo1, v1], [geo2, v2]];


}

function getNearest2Points ( center, v3Points)
{
  var angle = Math.abs(center.angleTo(v3Points[0]));
  var idx =0;
  for (var i=1; i< v3Points.length; i++)
  {
     var a =  Math.abs(center.angleTo(v3Points[i]));
     if (a < angle)
     {
       angle = a;
       idx = i;
     }
  }
  // now find the index on the opposite side using dot operation.
  var v1 = v3Points[idx].clone().sub(center.clone());
  var idx2 = -1;
  var angle2 = 999; //init big value
  for (var i=0; i< v3Points.length; i++)
  {
    if (i != idx)
    {
      var v2 =  v3Points[i].clone().sub(center.clone());
      if (v2.dot(v1) < 0)
      {
        var b = Math.abs(center.angleTo(v3Points[i]));
        if (b < angle2)
        {
          angle2 = b;
          idx2 = i;
        }
      }
    }
  }

  if (idx2 > idx)
  {
    return [idx, idx2];
  }
  else
  {
    return [idx2, idx];
  }

  
}

function azimuthalProjection (geoPoints, theColor="")
{
  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};
   
  var c = d3.geoCentroid(geoPolyformat);
 //var c= findCenterPointGeo(geoPoints);
    
  // for debuging only comment out later///////////////
  //plot out the center with Polygon cluster number:
  /*
  var ctr = lonLatToVector3(c[0], c[1]).normalize();
  var centerV3 = ctr.clone().multiplyScalar(sphereRadius);
  var ctrForLine = ctr.clone().multiplyScalar(sphereRadius + 2);
   
  ////// to be commented out /////////////
  if (polyCounter < gNodes.length )
  {  var lbl = gNodes[polyCounter].label;
    if (polyCounter != 20  && polyCounter != 41)
    { 
      if ((lbl != "Modest Mouse")  && (lbl != "Aerosmith"))
      {
        gLabelTable[lbl] = ctrForLine;
      // drawLabelAt (centerV3, polyCounter.toString());
        drawLabelAt (centerV3, lbl);
        var nodeColor = invertColor(theColor);
        spot(centerV3, nodeColor);
      }
    }
  }
  else
  {
  drawLabelAt (centerV3, polyCounter.toString());
  }
  ////////////// to be comment out above /////////////////
  ***/



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


function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
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


function drawPolyAzimuthal (gPoints, theColor )
{
  var conv = v3toGeoAndThreeArray (gPoints);
  var geoArray = conv[0];
  var points = conv[1];

  var area = getArea(geoArray);
  console.log ("poly " + polyCounter + " area:" + area);

  if (area < 1.8)  // entire sphere area  is 4*PI = 12.
  {
    drawPolyAzimuthal2 (geoArray, points, theColor );
    return;
  }
  
  var split = splitPolyTo(geoArray, points, 1.8);

  for (var i=0; i< split.length; i++)
  {
   drawPolyAzimuthal2 (split[i][0], split[i][1], theColor )
  }
  /*
  var l = geoArray.length/2;
  l = Math.floor(l);
  var geo1 = [];
  var geo2 =[];
  var p1 = [];
  var p2 =[];
  for (var i=0; i<= l; i++)
  {
    geo1.push(geoArray[i]);
    p1.push(points[i]);
  }
  geo1.push(geoArray[0]);
  p1.push(points[0]);

  for (var i=l; i< points.length; i++)
  {
    geo2.push(geoArray[i]);
    p2.push(points[i]);
  }
  geo2.push(geoArray[l]);
  p2.push(points[l]);
  */

  //drawPolyAzimuthal2 (geo1, p1, theColor );
  //drawPolyAzimuthal2 (geo2, p2, theColor );

 // drawPolyAzimuthal2 (geo1, p1, getRandomColor() );
 // drawPolyAzimuthal2 (geo2, p2, theColor );


}

// invert stereo projection to THREE.JS vector3 object.
function inv_stereo(v)
{
    var x = v[0];
    var y = v[1];
    var x3 = (2*x)/(1+x**2+y**2);
    var y3 = (2*y)/(1+x**2+y**2);
    var z3 = (x**2+y**2-1)/(1+x**2+y**2);

    var temp = new THREE.Vector3(x3, y3, z3).normalize();
    var threeV = temp.multiplyScalar(sphereRadius);
   return threeV;

    //return preprocessing.normalize(np.asarray([(2*x)/(1+x**2+y**2), (2*y)/(1+x**2+y**2), (x**2+y**2-1)/(1+x**2+y**2)]).reshape(1, -1), norm='l2')[0]
}


// convert array of 2d polygons into one combined 2d array of Vector3 objects.
function convertToV3 (points2d)  // points2d is an array of 2d polygons.
{
  var points =[];  //THREE.js Vector3 array.
    for (var i=0; i< points2d.length; i++)
    {
      for (var j=0; j<points2d[i].length; j++)
      {
        var v3 = inv_stereo(points2d[i][j]);
        points.push(v3);
      }
    }
  return points;
}

function debugPolyContour ( points2d)
{
  var clr = ['black', 'red'];
  for (var i=0; i< points2d.length; i++)
  {
    var points = [];
    var box = getDataRange(points2d[i]);
    for (var j=0; j<points2d[i].length; j++)
    {
      //var v3 = inv_stereo(points2d[i][j]);
      //var v3 = convertFlatCoordsToSphereCoords(points2d[i][j][0]*100, points2d[i][j][0]*100);
      var v3 = mapToOne4thSphere(points2d[i][j][0], points2d[i][j][1], box);
      points.push(v3);
      if (j > 0)
      {
        setShortArc(points[j-1], v3, 4, clr[i]);
      }
    }
  }

}

function debugRawPolyContour ( points2d)
{
  var clr = 'red';
  var points = [];
  var box = getDataRange(points2d);
  for (var i=0; i< points2d.length; i++)
  {
    
    
      //var v3 = inv_stereo(points2d[i]);
      //var v3 = convertFlatCoordsToSphereCoords(points2d[i][j][0]*100, points2d[i][j][0]*100);
      var v3 = mapToOne4thSphere(points2d[i][0], points2d[i][1], box);
      points.push(v3.clone());
      if (i > 0)
      {
        //if (almostSame(points[i-1], v3)== false)
          setShortArc(points[i-1], v3, 4, clr);
          drawLabelAt(v3, i.toString());
         
      }
  }
  

}



function drawPolyWith2d (poly2d , theColor) // poly2d: array of polygons.
{
  /*
  var conv = v3toGeoAndThreeArray (gPoints);
  var geoArray = conv[0];
  var points = conv[1];
  */
 var data = earcut.flatten(poly2d);

  var points = convertToV3(poly2d);

 // var wrapper =[];
  //wrapper.push(poly2d);

 var triangles = earcut(data.vertices, data.holes, data.dimensions); // the output triangles seem to be clockwise.


  //var aziArray = azimuthalProjection (geoArray, theColor);

  // debugging only: did not work
  //var clockwise = checkClockWise(aziArray);
  //console.log(clockwise);
  ////////////

 
       

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
         side: THREE.DoubleSide, 
       wireframe: false,   
        vertexColors: THREE.FaceColors
      });

    const myPoly = new THREE.Mesh(polyGeometry, polyMaterial);
    scene.add(myPoly);  
  

}


function drawPolyAzimuthal2 (geoArray, points , theColor)
{
  /*
  var conv = v3toGeoAndThreeArray (gPoints);
  var geoArray = conv[0];
  var points = conv[1];
  */
  var aziArray = azimuthalProjection (geoArray, theColor);

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
        side: THREE.DoubleSide,
       /*wireframe: true,  */ 
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


  

  
  var geoPolyformat = {type: "Polygon", coordinates: [geoPoints]};

  
      
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


function split2dPolyWithHole (polys)
{
  var outerPoly = {
    regions: [
      polys[0]
    ],
    inverted: false
  };

  var hole = {
    regions: [
      polys[1]
    ],
    inverted: false
  };

  //var polyWithHole = PolyBool.difference(outerPoly, hole);

  var ret = []; 
  var boxes = splitBoundingBoxWithHole(polys);
  
  for (var i=0; i< boxes.length; i++)
  {
    var box = {
      regions: [boxes[i]],
      inverted: false
    };
    var outer = PolyBool.intersect(outerPoly, box);
    var inner =  PolyBool.intersect(hole, box);
    var result = PolyBool.difference(outer, inner)
   // var result = outer;
    for (var j=0; j< result.regions.length; j++)
    {
      ret.push([result.regions[j]]);
    }
  }

  return ret;


}


function split2dPoly( poly)
{
  var ret = []; 
  var boxes = splitBoundingBox(poly);
  var polyShape = {
    regions: [
      poly
    ],
    inverted: false
  };

  for (var i=0; i< boxes.length; i++)
  {
    var box = {
      regions: [boxes[i]],
      inverted: false
    };
    var result = PolyBool.intersect(polyShape, box);
    for (var j=0; j< result.regions.length; j++)
    {
      ret.push([result.regions[j]]);
    }
  }

  return ret;
  
}

function splitBoundingBoxWithHole(polys)
{
  var poly = polys[0];  // the outerside polygon.

  var minX, maxX, minY, maxY;
  minX=maxX = poly[0][0];
  minY=maxY = poly[0][1];

  for (var i=1; i< poly.length; i++)
  {
    if (poly[i][0] < minX)
    {
      minX = poly[i][0];
    }
    if (poly[i][0] > maxX)
    {
      maxX = poly[i][0];
    }
    if (poly[i][1] < minY)
    {
      minY = poly[i][1];

    }
    if (poly[i][1] > maxY)
    {
      maxY = poly[i][1];
    }

  }

  var ctr = getCenterPoint(polys[1]);

  var midX = ctr[0];
  var midY = ctr[1];
   
  return [
    [[minX, maxY], [minX, midY], [midX, midY], [midX, maxY]],
    [[midX,maxY], [midX, midY], [maxX, midY], [maxX, maxY]],
    [[minX, midY],[minX, minY], [midX, minY], [midX, midY]],
    [[midX, midY], [midX, minY], [maxX, minY], [maxX, midY]]
  ];


}


function getCenterPoint (poly)
{
  var minX, maxX, minY, maxY;
  minX=maxX = poly[0][0];
  minY=maxY = poly[0][1];

  for (var i=1; i< poly.length; i++)
  {
    if (poly[i][0] < minX)
    {
      minX = poly[i][0];
    }
    if (poly[i][0] > maxX)
    {
      maxX = poly[i][0];
    }
    if (poly[i][1] < minY)
    {
      minY = poly[i][1];

    }
    if (poly[i][1] > maxY)
    {
      maxY = poly[i][1];
    }

  }

  // return 4 equal rectangles.
  /****************
   *      *       *
   ****************
   *      *       *
   * **************/
  var midX = minX + (maxX - minX)/2;
  var midY = minY + (maxY - minY)/2;
  
  return [midX, midY];

}

function splitBoundingBox (poly)
{
  var minX, maxX, minY, maxY;
  minX=maxX = poly[0][0];
  minY=maxY = poly[0][1];

  for (var i=1; i< poly.length; i++)
  {
    if (poly[i][0] < minX)
    {
      minX = poly[i][0];
    }
    if (poly[i][0] > maxX)
    {
      maxX = poly[i][0];
    }
    if (poly[i][1] < minY)
    {
      minY = poly[i][1];

    }
    if (poly[i][1] > maxY)
    {
      maxY = poly[i][1];
    }

  }

  // return 4 equal rectangles.
  /****************
   *      *       *
   ****************
   *      *       *
   * **************/
  var midX = minX + (maxX - minX)/2;
  var midY = minY + (maxY - minY)/2;
   
  return [
    [[minX, maxY], [minX, midY], [midX, midY], [midX, maxY]],
    [[midX,maxY], [midX, midY], [maxX, midY], [maxX, maxY]],
    [[minX, midY],[minX, minY], [midX, minY], [midX, midY]],
    [[midX, midY], [midX, minY], [maxX, minY], [maxX, midY]]
  ];

 


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

function getBoxOfClusters(data)
{
  var xlow, ylow, xhigh, yhigh;
  xlow=xhigh = data[0][0][0];
  ylow = yhigh = data[0][0][1];
  for (var k=0; k< data.length; k++)
  {
    for (var i= 1; i < data[k].length; i++)
    {
      var x = data[k][i][0];
      var y = data[k][i][1];
      if (x < xlow)
      {
        xlow = x;
      }
      if (x > xhigh)
      {
        xhigh = x;
      }
      if (y < ylow)
      {
        ylow = y;
      }
      if (y > yhigh)
      {
        yhigh = y;
      }

    }
  }
  return [[xlow, xhigh], [ylow, yhigh]];

}

function getDataRange (data)
{
  var xlow, ylow, xhigh, yhigh;
  xlow=xhigh = data[0][0];
  ylow = yhigh = data[0][1];
  for (var i= 1; i < data.length; i++)
  {
    var x = data[i][0];
    var y = data[i][1];
     if (x < xlow)
     {
       xlow = x;
     }
     if (x > xhigh)
     {
       xhigh = x;
     }
     if (y < ylow)
     {
       ylow = y;
     }
     if (y > yhigh)
     {
       yhigh = y;
     }

  }
  return [[xlow, xhigh], [ylow, yhigh]];
}

function mapToOne4thSphere (x, y, box)
{
  const ratio = 1/2.0;
  var w = box[0][1] - box[0][0];
  var h = box[1][1] - box[1][0];

  // make sure all positive Y:
  xadd = Math.abs(box[0][1]);
  yadd = Math.abs(box[1][1]);
  newX = ( x)/w * globeWidth * ratio;
  newY = ( yadd*2 + y)/h*globeHeight*ratio;
  return convertFlatCoordsToSphereCoords(newX, newY);
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
