(function() {
var modevhhh = 1;
var modevmmc = 0;
var colors = {
  app : { strokeColor: '#FFFFFF', strokeOpacity: 0.5, strokeWeight: 1 },
  app2: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor:'#FFFFFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '20px' }] },
  star : { strokeColor: '#99FFFF', strokeOpacity: 0.45, strokeWeight: 1 },
  star2: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor:'#99FFFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '20px' }] },
  starterm : { strokeColor: '#00CCFF', strokeOpacity: 0.5, strokeWeight: 1 },
  starterm2: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor:'#00CCFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '20px' }] },
  sid : { strokeColor: '#FFAAAA', strokeOpacity: 0.5, strokeWeight: 1 },
  sid2: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor:'#FFAAAA', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '20px' }] },
  sidterm2: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor:'#FFAAAA', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '20px' }] },
  sidterm : { strokeColor: '#FF6666', strokeOpacity: 0.5, strokeWeight: 1 },
};

var triangle = { path: 'M 0,-2.2 2.5,2.13 -2.5,2.13 z', fillColor: '#EEEEEE', fillOpacity: 0.5, strokeWeight: 0, scale: 1.5 };
var noicon = { path: 'M 0,0 z', fillColor: '#EEEEEE', fillOpacity: 0, strokeWeight: 0, scale: 1 };

var fix = function(lat, lng, title) {
  var pos = new google.maps.LatLng(lat, lng);
  if (title != '') {
    return new google.maps.Marker({position: pos, icon: triangle, map: map, title: title });
  } else {
    return new google.maps.Marker({position: pos, icon: noicon, map: map});
  }
}

var fixes = { app : {}, star : {}, term: {}, rwy: {}, sid: {} };

fixes.app.LIMES = fix(22.107111, 113.775722, 'LIMES');
fixes.app.TONIC = fix(22.213300, 113.722736, 'TONIC');
fixes.app.CEDAR = fix(22.270153, 113.771700, '');
fixes.rwy.RW07L = fix(22.310917, 113.897967, '');
fixes.app.STELA = fix(22.198136, 113.730308, 'STELA');
fixes.app.IF07R = fix(22.258524, 113.781169, '');
fixes.rwy.RW07R = fix(22.296675, 113.899444, '');

fixes.app.TD    = fix(22.247894, 114.293139, 'TD');
fixes.app.RIVER = fix(22.402097, 114.181731, 'RIVER');
fixes.rwy.RW25R = fix(22.321122, 113.929639, '');
fixes.app.TDD08 = fix(22.37974016, 114.24432186, '');
fixes.app.LOTUS = fix(22.388406, 114.184889, 'LOTUS');
fixes.rwy.RW25L = fix(22.307431, 113.932822, '');
fixes.app.TDD07 = fix(22.36525718, 114.2496891, '');

fixes.star.ABBEY = fix(22.269722, 114.923867, 'ABBEY');
fixes.star.MUSEL = fix(22.264997, 114.781147, 'MUSEL');
fixes.star.TAMAR = fix(22.255833, 114.510278, 'TAMAR');
fixes.star.GUAVA = fix(22.160028, 114.060083, 'GUAVA');
fixes.star.SOKOE = fix(22.078111, 113.843917, 'SOKOE');
fixes.star.BETTY = fix(21.486333, 114.558861, 'BETTY');
fixes.star.MANGO = fix(21.613611, 114.514722, 'MANGO');
fixes.star.CANTO = fix(21.650722, 113.706972, 'CANTO');
fixes.star.MURRY = fix(21.757889, 113.811667, 'MURRY');
fixes.star.SILVA = fix(21.851250, 113.903028, 'SILVA');
fixes.star.BORDA = fix(21.692333, 113.408056, 'BORDA');
fixes.star.ROCCA = fix(21.532056, 113.580944, 'ROCCA');
fixes.star.GOODI = fix(22.069417, 113.996833, 'GOODI');
fixes.star.MONTY = fix(22.168417, 114.321028, 'MONTY');

fixes.sid.PORPA = fix(22.335861, 114.021194, 'PORPA');
fixes.sid.ROVER = fix(22.343333, 114.027500, 'ROVER');

fixes.sid.SIDE1 = fix(22.338608, 114.045095, '');
fixes.sid.SIDE2 = fix(22.336492, 114.062764, '');
fixes.sid.SIDE3 = fix(22.343076, 114.048572, '');
fixes.sid.SIDE4 = fix(22.337741, 114.069297, '');
fixes.sid.SIDE5 = fix(22.332570, 114.088399, '');

fixes.sid.ATENA = fix(22.411111, 114.386667, 'ATENA');
fixes.sid.LAKES = fix(21.978139, 114.910722, 'LAKES');
fixes.term.LOGAN = fix(21.987833, 115.269028, 'LOGAN');
fixes.term.SOUSA = fix(22.019556, 116.191056, 'SOUSA');
fixes.sid.OCEAN = fix(21.811944, 114.813333, 'OCEAN');
fixes.term.RASSE = fix(21.792917, 115.330306, 'RASSE');
fixes.term.CONGA = fix(21.734028, 116.784972, 'CONGA');
fixes.term.SKATE = fix(21.531944, 115.144444, 'SKATE');
fixes.term.GRUPA = fix(20.845556, 115.949722, 'GRUPA');

fixes.term.LEMON = fix(20.937944, 114.001417, 'LEMON');
fixes.term.SURFA = fix(19.314167, 112.736444, 'SURFA');
fixes.term.ALLEY = fix(21.086444, 113.785972, 'ALLEY');
fixes.term.DONKI = fix(20.549444, 112.152806, 'DONKI');

//macau
fixes.sid.PAPA  = fix(21.977500, 113.656111, 'PAPA');
fixes.sid.MULET = fix(21.583889, 113.797778, 'MULET');
fixes.sid.MC411 = fix(22.361444, 113.793772, 'MC411');
fixes.term.LKC = fix(22.378922, 113.88375, 'LKC');
fixes.sid.CAMRI = fix(22.0295, 114.074639, 'CAMRI');
fixes.sid.DOCTA = fix(21.947083, 114.009278, 'DOCTA');

fixes.term.RAGSO = fix(20.758889, 111.982500, 'RAGSO');
fixes.term.DASON = fix(21.056389, 112.877778, 'DASON');
fixes.term.COTON = fix(21.156667, 113.183611, 'COTON');
fixes.term.ARROW = fix(19.835833, 114.373889, 'ARROW');
fixes.term.ISBAN = fix(20.826111, 114.286944, 'ISBAN');
fixes.term.ROBIN = fix(21.045833, 114.268333, 'ROBIN');
fixes.star.CHALI = fix(21.295833, 113.578056, 'CHALI');
fixes.star.RUNLI = fix(21.449922, 113.680833, 'RUNLI');
fixes.star.MC611 = fix(21.660000, 113.767500, 'MC611');
fixes.star.INDUS = fix(22.044722, 113.600278, 'INDUS');
fixes.star.HAZEL = fix(22.024025, 113.682397, 'HAZEL');
fixes.star.ZUH = fix(22.221667, 113.466667, 'ZUH');
//22.135,  113.5983
fixes.term.TUBBY = fix(22.507056, 116.673444, 'TUBBY');
fixes.term.SAMMI = fix(22.466667, 115.961667, 'SAMMI');
fixes.term.NEDLE = fix(22.387194, 114.699278, 'NEDLE');
fixes.term.PONTI = fix(22.371194, 114.462722, 'PONTI');
fixes.term.BUMDI = fix(22.361000, 114.314611, 'BUMDI');
fixes.term.SMT = fix(22.337619, 113.982072, 'SMT');
fixes.star.MC601 = fix(22.328764, 113.945444, 'MC601');
fixes.star.MC513 = fix(22.019431, 113.622233, 'MC513');
fixes.star.ATIKO = fix(21.808333, 113.540556, 'ATIKO');
fixes.star.MC514 = fix(22.114444, 113.549167, '');
fixes.app.LKCD35 = fix(21.922521, 113.594325, '');
fixes.app.LKCD35A = fix(21.886203, 113.600662, '');
fixes.app.LKCD35B = fix(21.869429, 113.631908, '');
fixes.app.LKCD35C = fix(21.878412, 113.667850, '');
fixes.app.LKCD35D = fix(21.906250, 113.682400, '');
fixes.app.RW34 = fix(22.138183, 113.595531, '');
fixes.app.RW16 = fix(22.160642, 113.587261, '');
fixes.term.UJ = fix(21.920000, 113.293333, 'UJ');
fixes.app.ROMEO = fix(21.863333, 113.448333, 'ROMEO');
fixes.app.ZAOR179 = fix(21.841709, 113.63603267, '');
fixes.app.MCU = fix(22.135556, 113.597778, 'MCU');
fixes.app.ZAO = fix(22.246667, 113.613333, 'ZAO');
fixes.app.MC16MAPT = fix(22.195061, 113.574534, '');
fixes.app.MC16IF = fix(22.280743, 113.638972, '');
fixes.app.NLG = fix(22.531667, 113.561667, 'NLG');
fixes.app.ZUHD11 = fix(22.375923, 113.574401, '');
fixes.app.ZUHD11A = fix(22.369824, 113.611562, '');
fixes.sid.LATOPA = fix(22.190673, 113.585006, '');
fixes.sid.LATOP = fix(22.281667, 113.643333, 'LATOP');
fixes.sid.MC420 = fix(22.342303, 113.695442, 'MC420');

fixes.sid.SIDS1 = fix(22.334234, 114.050429, '');
fixes.sid.SIDS2 = fix(22.324859, 114.068952, '');
fixes.sid.SIDS3 = fix(22.311142, 114.080099, '');
fixes.sid.SIDS4 = fix(22.328725, 114.072132, '');
fixes.sid.SIDS5 = fix(22.311472, 114.082285, '');

fixes.sid.PORSH = fix(22.294722, 114.084444, '');
fixes.sid.RAMEN = fix(22.160833, 114.086111, 'RAMEN');
fixes.sid.BREAM = fix(21.779444, 114.057778, 'BREAM');
fixes.sid.TITAN = fix(21.674167, 114.050833, 'TITAN');
fixes.sid.PECAN = fix(21.438889, 114.035000, 'PECAN');

fixes.sid.PRAWN = fix(22.268056, 113.811111, 'PRAWN');
fixes.sid.SIDW1 = fix(22.242430, 113.788014, '');
fixes.sid.RUMSY = fix(22.082500, 113.804722, 'RUMSY');
fixes.sid.TUNNA = fix(21.790278, 113.965000, 'TUNNA');
fixes.sid.SAMON = fix(21.906667, 114.209167, 'SAMON');
fixes.sid.TROUT = fix(21.798611, 114.270278, 'TROUT');

fixes.sid.COLEY = fix(22.111389, 114.310556, 'COLEY');

fixes.term.MAGOG = fix(22.296111, 115.825000, 'MAGOG');
fixes.term.FISHA = fix(22.282778, 115.336667, 'FISHA');

fixes.term.GAMBA = fix(21.318889, 112.926667, 'GAMBA');
fixes.term.MAPLE = fix(21.374167, 113.095278, 'MAPLE');
fixes.term.COMBI = fix(21.493611, 113.462222, 'COMBI');

fixes.term.IKELA = fix(18.661667, 112.245000, 'IKELA');
fixes.term.MYWAY = fix(20.196111, 112.718889, 'MYWAY');

fixes.term.DULOP = fix(18.236667, 114.543333, 'DULOP');
fixes.term.CARSO = fix(19.000000, 114.710556, 'CARSO');
fixes.term.HOCKY = fix(20.596944, 114.574722, 'HOCKY');
fixes.term.CYBER = fix(20.847222, 114.553056, 'CYBER');

fixes.term.RAMUS = fix(20.260833, 115.351667, 'RAMUS');
fixes.term.DOVAR = fix(20.860833, 115.116944, 'DOVAR');
fixes.term.SONNY = fix(21.017778, 115.055278, 'SONNY');
fixes.term.MEPUT = fix(21.633056, 115.755556, 'MEPUT');
fixes.term.EATON = fix(21.123333, 115.716944, 'EATON');
fixes.term.SUKER = fix(19.675972, 114.653306, 'SUKER');
fixes.term.TOFEE = fix(19.306111, 115.294028, 'TOFEE');

fixes.term.BEKOL = fix(22.543333, 114.133333, 'BEKOL');
fixes.term.DOTMI = fix(22.718333, 116.168333, 'DOTMI');
fixes.term.ELATO = fix(22.333333, 117.500000, 'ELATO');
fixes.term.ENVAR = fix(21.991667, 117.500000, 'ENVAR');

fixes.term.KAPLI = fix(21.000000, 117.500000, 'KAPLI');
fixes.term.NOMAN = fix(20.000000, 116.671667, 'NOMAN');
fixes.term.SABNO = fix(18.985000, 115.845000, 'SABNO');
fixes.term.DUMOL = fix(19.000000, 114.446667, 'DUMOL');
fixes.term.EPDOS = fix(19.000000, 113.555000, 'EPDOS');
fixes.term.IDOSI = fix(19.000000, 112.500000, 'IDOSI');
fixes.term.SIKOU = fix(20.843333, 111.500000, 'SIKOU');
fixes.term.SIERA = fix(21.986667, 113.553333, 'SIERA');
fixes.term.TAMOT = fix(22.358333, 113.866667, 'TAMOT');

var route = function(type, path) {
    var options = colors[type];
    var path2 = [];
    path.forEach(function(e) { path2.push(e.getPosition())});
    options.path = path2;
    options.map = map;
    return new google.maps.Polyline(options);
};
var routes = { app: {}, star: {}, starterm: {}, sid: {}, sidterm: {} };

routes.app.RWY07L = route('app', [fixes.app.LIMES, fixes.app.TONIC, fixes.app.CEDAR, fixes.rwy.RW07L]);
routes.app.RWY07R = route('app', [fixes.app.STELA, fixes.app.IF07R, fixes.rwy.RW07R]);
routes.app.RWY25R = route('app', [fixes.app.TD, fixes.app.TDD08, fixes.app.RIVER, fixes.rwy.RW25R]);
routes.app.RWY25L = route('app', [fixes.app.TDD07, fixes.app.LOTUS, fixes.rwy.RW25L]);

routes.star.ABBEY3A = route('star', [fixes.star.ABBEY, fixes.star.MUSEL, fixes.star.TAMAR, fixes.app.TD, fixes.star.GUAVA]);
routes.star.BETTY2A = route('star', [fixes.star.BETTY, fixes.star.MANGO, fixes.star.GUAVA]);
routes.star.AB2A    = route('star', [fixes.star.GUAVA, fixes.star.SOKOE, fixes.app.LIMES]);
routes.star.SIERA6A = route('star', [fixes.term.SIERA, fixes.star.CANTO]);
routes.star.SIERA6C = route('star', [fixes.term.SIERA, fixes.star.BORDA, fixes.star.ROCCA, fixes.star.CANTO]);
routes.star.C2AS6AC = route('star', [fixes.star.CANTO, fixes.star.MURRY, fixes.star.SILVA, fixes.app.LIMES]);

routes.star.ABBEY2B = route('star', [fixes.star.ABBEY, fixes.star.MUSEL, fixes.star.TAMAR, fixes.app.TD]);
routes.star.BETTY2B = route('star', [fixes.star.BETTY, fixes.star.MANGO, fixes.app.TD]);
routes.star.SIERA6B = route('star', [fixes.term.SIERA, fixes.star.CANTO]);
routes.star.SIERA6D = route('star', [fixes.term.SIERA, fixes.star.BORDA, fixes.star.ROCCA, fixes.star.CANTO]);
routes.star.C2BS6BD = route('star', [fixes.star.CANTO, fixes.star.MURRY, fixes.star.GOODI, fixes.star.MONTY]);

routes.starterm.V511 = route('starterm', [fixes.term.DOTMI, fixes.term.MAGOG]);
routes.starterm.V521 = route('starterm', [fixes.term.ELATO, fixes.term.MAGOG]);
routes.starterm.V511521 = route('starterm', [fixes.term.MAGOG, fixes.term.FISHA, fixes.star.ABBEY]);
routes.starterm.V531 = route('starterm', [fixes.term.NOMAN, fixes.term.RAMUS]);
routes.starterm.V541 = route('starterm', [fixes.term.SABNO, fixes.term.RAMUS]);
routes.starterm.V531541 = route('starterm', [fixes.term.RAMUS, fixes.term.DOVAR, fixes.term.SONNY, fixes.star.BETTY]);
routes.starterm.V551 = route('starterm', [fixes.term.CARSO, fixes.term.HOCKY, fixes.term.CYBER, fixes.star.BETTY]);
routes.starterm.V561 = route('starterm', [fixes.term.IDOSI, fixes.term.MYWAY, fixes.term.GAMBA]);
routes.starterm.V571 = route('starterm', [fixes.term.SIKOU, fixes.term.GAMBA]);
routes.starterm.V561571 = route('starterm', [fixes.term.GAMBA, fixes.term.MAPLE, fixes.term.COMBI, fixes.star.ROCCA]);
routes.starterm.V542 = route('starterm2', [fixes.term.SABNO, fixes.term.TOFEE, fixes.term.SUKER]);
routes.starterm.W28 = route('starterm2', [fixes.term.MEPUT, fixes.term.EATON, fixes.term.DOVAR]);

routes.sid.RWY07R1 = route('sid', [fixes.rwy.RW25L, fixes.sid.PORPA]);
routes.sid.RWY07R2 = route('sid', [fixes.sid.PORPA, fixes.sid.SIDE1, fixes.sid.SIDE2, fixes.sid.SIDE5]);
routes.sid.RWY07L1 = route('sid', [fixes.rwy.RW25R, fixes.sid.ROVER, fixes.sid.SIDE3]);
routes.sid.RWY07L2 = route('sid', [fixes.sid.SIDE3, fixes.sid.SIDE4, fixes.sid.SIDE5]);
routes.sid.RWY07E = route('sid', [fixes.sid.SIDE5, fixes.app.TD]);
routes.sid.OCEAN2A = route('sid', [fixes.app.TD, fixes.sid.OCEAN]);
routes.sid.LAKES2A = route('sid', [fixes.app.TD, fixes.sid.LAKES]);
routes.sid.BEKOL3A = route('sid', [fixes.app.TD, fixes.sid.ATENA, fixes.term.BEKOL]);
//routes.sid.RWY07RE = route('sid', [fixes.rwy.RW25L, fixes.sid.PORPA, fixes.sid.SIDE1, fixes.sidE2, fixes.sidE5]);
routes.sid.RWY07RS = route('sid', [fixes.sid.PORPA, fixes.sid.SIDS1, fixes.sid.SIDS2, fixes.sid.SIDS5]);
routes.sid.RWY07LS = route('sid', [fixes.sid.SIDE3, fixes.sid.SIDS4, fixes.sid.SIDS5, fixes.sid.PORSH]);
routes.sid.PECAN1A = route('sid', [fixes.sid.PORSH, fixes.sid.RAMEN, fixes.sid.BREAM, fixes.sid.TITAN, fixes.sid.PECAN]);

routes.sid.ATENA2A = route('sid', [fixes.sid.COLEY, fixes.sid.ATENA, fixes.term.BEKOL]);
routes.sid.LOGAN3A = route('sid', [fixes.sid.RAMEN, fixes.sid.LAKES]);
routes.sid.RASSE3A = route('sid', [fixes.sid.RAMEN, fixes.sid.OCEAN]);

routes.sid.RWY25R = route('sid', [fixes.rwy.RW07L, fixes.sid.PRAWN]);
routes.sid.RWY25L = route('sid', [fixes.rwy.RW07R, fixes.sid.PRAWN]);
routes.sid.RWY25 = route('sid', [fixes.sid.PRAWN, fixes.sid.SIDW1, fixes.sid.RUMSY, fixes.sid.TUNNA]);
routes.sid.BEKOL2B = route('sid', [fixes.sid.TUNNA, fixes.sid.SAMON, fixes.term.BEKOL]);
routes.sid.LAKES2B = route('sid', [fixes.sid.TUNNA, fixes.sid.TROUT, fixes.sid.LAKES]);
routes.sid.OCEAN2B = route('sid', [fixes.sid.TROUT, fixes.sid.OCEAN]);
routes.sid.PECAN1B = route('sid', [fixes.sid.TUNNA, fixes.sid.TITAN, fixes.sid.PECAN]);

routes.sidterm.V1 = route('sidterm', [fixes.sid.LAKES, fixes.term.LOGAN, fixes.term.SOUSA, fixes.term.DOTMI]);
routes.sidterm.V2 = route('sidterm', [fixes.sid.OCEAN, fixes.term.RASSE, fixes.term.CONGA, fixes.term.ELATO]);
routes.sidterm.V3 = route('sidterm', [fixes.term.CONGA, fixes.term.ENVAR]);
routes.sidterm.V4 = route('sidterm', [fixes.sid.OCEAN, fixes.term.SKATE, fixes.term.GRUPA, fixes.term.NOMAN]);
routes.sidterm.V5 = route('sidterm', [fixes.term.GRUPA, fixes.term.SABNO]);
routes.sidterm.V12 = route('sidterm', [fixes.sid.PECAN, fixes.term.LEMON, fixes.term.EPDOS]);
routes.sidterm.V11 = route('sidterm', [fixes.term.LEMON, fixes.term.SURFA, fixes.term.IDOSI]);
routes.sidterm.V10 = route('sidterm', [fixes.sid.PECAN, fixes.term.ALLEY, fixes.term.DONKI, fixes.term.SIKOU]);

routes.sid.VMMC34 = route('sid2', [fixes.app.RW16, fixes.sid.LATOPA, fixes.sid.LATOP, fixes.sid.MC420, fixes.sid.MC411, fixes.term.LKC]);
routes.sid.VMMCT = route('sid2', [fixes.sid.CAMRI, fixes.term.LKC, fixes.app.TD]);
routes.sid.VMMCU1 = route('sid2', [fixes.term.LKC, fixes.sid.DOCTA, fixes.sid.OCEAN]);
routes.sid.VMMCU2 = route('sid2', [fixes.sid.DOCTA, fixes.sid.LAKES]);
routes.sid.VMMCP1 = route('sid2', [fixes.app.RW34, fixes.sid.PAPA, fixes.sid.MULET, fixes.term.SKATE, fixes.term.CONGA]);
routes.sid.VMMCP2 = route('sid2', [fixes.term.SKATE, fixes.term.SOUSA]);
routes.sid.ALLEY2P = route('sid2', [fixes.sid.MULET, fixes.term.ALLEY]);
routes.sid.ALLEY2U = route('sid2', [fixes.sid.DOCTA, fixes.sid.BREAM, fixes.sid.TITAN]);
routes.sidterm.VMMC = route('sidterm2', [fixes.term.SURFA, fixes.term.ALLEY, fixes.term.EPDOS]);

routes.star.CHALI5B = route('star2', [fixes.star.CHALI, fixes.star.RUNLI, fixes.star.MC513]);
routes.star.CHALI4A = route('star2', [fixes.star.CHALI, fixes.star.RUNLI, fixes.star.MC611]);
routes.star.SMT5B = route('star2', [fixes.term.SMT, fixes.star.MC601, fixes.star.HAZEL, fixes.star.MC513, fixes.star.INDUS, fixes.star.MC514, fixes.star.ZUH]);
routes.star.SMT4A = route('star2', [fixes.term.SMT, fixes.star.MC601, fixes.star.HAZEL]);

routes.starterm.J104 = route('starterm2', [fixes.term.SIKOU, fixes.term.RAGSO, fixes.term.DASON, fixes.term.COTON, fixes.star.CHALI]);
routes.starterm.J104A = route('starterm2', [fixes.term.IDOSI, fixes.term.DASON]);
routes.starterm.J103 = route('starterm2', [fixes.term.DUMOL, fixes.term.ARROW, fixes.term.ISBAN, fixes.term.ROBIN, fixes.star.CHALI]);
routes.starterm.J103A = route('starterm2', [fixes.term.SUKER, fixes.term.ARROW]);
routes.starterm.J101 = route('starterm2', [fixes.term.ELATO, fixes.term.TUBBY, fixes.term.SAMMI, fixes.term.PONTI, fixes.term.BUMDI, fixes.term.SMT]);
routes.starterm.J101A = route('starterm2', [fixes.term.DOTMI, fixes.term.SAMMI]);

routes.app.RWY34 = route('app2', [fixes.star.MC611, fixes.app.LKCD35D, fixes.sid.PAPA, fixes.app.RW34]);
routes.app.RWY34A = route('app2', [fixes.star.HAZEL, fixes.app.LKCD35, fixes.app.LKCD35A, fixes.app.LKCD35B, fixes.app.LKCD35C, fixes.app.LKCD35D]);
routes.app.RWY34B = route('app2', [fixes.term.UJ, fixes.app.ROMEO, fixes.app.ZAOR179, fixes.app.LKCD35C]);
routes.app.RWY34C = route('app2', [fixes.app.MCU, fixes.app.LKCD35]);

routes.app.RWY16 = route('app2', [fixes.star.ZUH, fixes.app.ZUHD11, fixes.app.ZUHD11A, fixes.app.MC16IF, fixes.app.ZAO, fixes.app.MC16MAPT, fixes.app.RW16]);
routes.app.RWY16A = route('app2', [fixes.app.NLG, fixes.app.ZUHD11A]);

var updateViews = function() {
    var show07a = [routes.sid.RWY07R2, routes.sid.RWY07L2, routes.sid.RWY07E, routes.sid.OCEAN2A, routes.sid.LAKES2A, routes.sid.BEKOL3A];
    var show07b = [routes.sid.ATENA2A, routes.sid.RASSE3A, routes.sid.LOGAN3A, fixes.sid.COLEY];
    var show07c = [routes.sid.RWY07R1, routes.sid.RWY07L1, routes.app.RWY07L, routes.app.RWY07R, routes.star.ABBEY3A, routes.star.BETTY2A, routes.star.AB2A, routes.star.SIERA6A, routes.star.SIERA6C, routes.star.C2AS6AC, fixes.app.TONIC, fixes.app.STELA, fixes.app.LIMES, fixes.star.GUAVA, fixes.star.SOKOE, fixes.star.SILVA,
        routes.sid.RWY07LS, routes.sid.RWY07RS, routes.sid.PECAN1A, fixes.sid.PORPA, fixes.sid.ROVER, fixes.sid.ATENA, fixes.sid.RAMEN];
    var show25 = [routes.app.RWY25R, routes.app.RWY25L, routes.star.ABBEY2B, routes.star.BETTY2B, routes.star.SIERA6B, routes.star.SIERA6D, routes.star.C2BS6BD, fixes.star.GOODI, fixes.star.MONTY, fixes.app.RIVER, fixes.app.LOTUS,
        routes.sid.RWY25R, routes.sid.RWY25L, routes.sid.RWY25, routes.sid.BEKOL2B, routes.sid.LAKES2B, routes.sid.OCEAN2B, routes.sid.PECAN1B, fixes.sid.PRAWN, fixes.sid.RUMSY, fixes.sid.TUNNA, fixes.sid.TROUT, fixes.sid.SAMON];
    var show34t = [routes.sid.VMMCT, fixes.sid.CAMRI];
    var show34u = [routes.sid.VMMCU1, routes.sid.VMMCU2, routes.sid.ALLEY2U, fixes.sid.DOCTA];
    var show34c = [routes.sid.VMMC34, fixes.sid.MC411, routes.star.SMT4A, routes.star.CHALI4A, routes.app.RWY34, routes.app.RWY34A, routes.app.RWY34B, routes.app.RWY34C, fixes.app.ROMEO, fixes.sid.LATOP, fixes.sid.MC420];
    var show16 = [routes.sid.VMMCP1, routes.sid.VMMCP2, routes.sid.ALLEY2P, fixes.sid.MULET, routes.star.SMT5B, routes.star.CHALI5B, routes.app.RWY16, routes.app.RWY16A, fixes.star.MC513, fixes.star.INDUS];
    var showmacau = [routes.sidterm.VMMC, routes.starterm.J104, routes.starterm.J104A, routes.starterm.J103, routes.starterm.J103A, routes.starterm.J101, routes.starterm.J101A,
        fixes.RAGSO, fixes.DASON, fixes.COTON, fixes.star.CHALI, fixes.star.RUNLI, fixes.star.MC611, fixes.star.HAZEL, fixes.star.MC513, fixes.sid.PAPA,
        fixes.term.NEDLE, fixes.term.PONTI, fixes.term.BUMDI];
        
    show07a.forEach(function(e) { e.setVisible( modevhhh == 1 ); });
    show07b.forEach(function(e) { e.setVisible( modevhhh == 2 ); });
    show07c.forEach(function(e) { e.setVisible( modevhhh != 3 ); });
    show25.forEach(function(e) { e.setVisible( modevhhh == 3); });
    
    show16.forEach(function(e) { e.setVisible( modevmmc == 4 ); });
    show34c.forEach(function(e) { e.setVisible( modevmmc == 8 ); });
    show34t.forEach(function(e) { e.setVisible( (modevmmc == 8) && (modevhhh != 3) ); });
    show34u.forEach(function(e) { e.setVisible( modevmmc+modevhhh == 11 ) ; });
    fixes.sid.BREAM.setVisible( (modevhhh != 3) || (modevmmc == 8) );
    showmacau.forEach(function(e) { e.setVisible( modevmmc != 0 ) ; });
};
var container = $('<div id="rwyVHHH"></div>');
var button = $('<input type="button" value="07">').click(function() {
    modevhhh = 1;
    updateViews();
});
container.append(button);
button = $('<input type="button" value="07 Noise">').click(function() {
    modevhhh = 2;
    updateViews();
});
container.append(button);
button = $('<input type="button" value="25">').click(function() {
    modevhhh = 3;
    updateViews();
});
container.append(button);

$('#mainView').append(container);

var container2 = $('<div id="rwyVMMC"></div>');
var button = $('<input type="button" value="Hide">').click(function() {
    modevmmc = 0;
    updateViews();
});
container2.append(button);
button = $('<input type="button" value="16">').click(function() {
    modevmmc = 4;
    updateViews();
});
container2.append(button);
button = $('<input type="button" value="34">').click(function() {
    modevmmc = 8;
    updateViews();
});
container2.append(button);

$('#mainView').append(container2);
updateViews();
})();
