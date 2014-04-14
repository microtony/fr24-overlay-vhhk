(function() {
    var colors = {
        app : { strokeColor: '#FFFFFF', strokeOpacity: 0.5, strokeWeight: 1 },
        app2 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-4 0,4', strokeColor : '#FFFFFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '14px' }] },
        star: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2, 0,2', strokeColor : '#66FF66', strokeOpacity: 0.6, scale: 1 }, offset: '0', repeat: '7px' }] },
        star2: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor : '#66CCFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '16px' }] },
        starterm : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2, 0,2', strokeColor : '#66FF66', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '7px' }] },
        starterm2 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2, 0,2', strokeColor : '#66FF66', strokeOpacity: 0.3, scale: 1 }, offset: '0', repeat: '9px' }] },
        starterm3 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor : '#66CCFF', strokeOpacity: 0.6, scale: 1 }, offset: '0', repeat: '16px' }] },
        sid : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2 0,2', strokeColor : '#FFEE66', strokeOpacity: 0.6, scale: 1 }, offset: '0', repeat: '7px' }] },
        sid2 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2 0,2', strokeColor : '#FFEE66', strokeOpacity: 0.4, scale: 1 }, offset: '0', repeat: '7px' }] },
        sidterm2 : { strokeColor: '#FFEE66', strokeOpacity: 0.2, strokeWeight: 1 },
        sidterm : { strokeColor: '#FFEE66', strokeOpacity: 0.3, strokeWeight: 1 },
        airway : { strokeColor: '#FFFFFF', strokeOpacity: 0.6, strokeWeight: 1 },
        transit : { strokeColor: '#FFFFFF', strokeOpacity: 0.2, strokeWeight: 1 },
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
    var pos = function(lat, lng) {
        return new google.maps.LatLng(lat, lng);
    }

    var fixes = { app : {}, star : {}, term: {}, rwy: {}, sid: {}, airway: {} };

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

    fixes.term.MYWAY = fix(20.196111, 112.718889, 'MYWAY');

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

    fixes.term.TAPPO = fix(21.322389, 114.242944, 'TAPPO');
    fixes.term.PICTA = fix(21.655500, 114.213222, 'PICTA');
    
    fixes.term.BEKOL = fix(22.543333, 114.133333, 'BEKOL');
    fixes.term.DOTMI = fix(22.718333, 116.168333, 'DOTMI');
    fixes.term.ELATO = fix(22.333333, 117.500000, 'ELATO');
    fixes.term.ENVAR = fix(21.991667, 117.500000, 'ENVAR');

    fixes.term.KAPLI = fix(21.166667, 117.500000, 'KAPLI');
    fixes.term.NOMAN = fix(20.000000, 116.671667, 'NOMAN');
    fixes.term.SABNO = fix(18.985000, 115.845000, 'SABNO');
    fixes.term.DUMOL = fix(19.000000, 114.446667, 'DUMOL');
    fixes.term.EPDOS = fix(19.000000, 113.555000, 'EPDOS');
    fixes.term.IDOSI = fix(19.000000, 112.500000, 'IDOSI');
    fixes.term.SIKOU = fix(20.843333, 111.500000, 'SIKOU');
    fixes.term.SIERA = fix(21.986667, 113.553333, 'SIERA');
    fixes.term.TAMOT = fix(22.358333, 113.866667, 'TAMOT');
    
    //outside TMA
    fixes.airway.ASOBA = fix(17.372778, 114.570278, 'ASOBA');
    fixes.airway.DULOP = fix(18.236667, 114.543333, 'DULOP');
    fixes.airway.ENBOK = fix(18.556667, 113.491667, 'ENBOK');
    fixes.airway.EPKAL = fix(17.858333, 112.955, 'EPKAL');
    fixes.airway.DOSUT = fix(17.033333, 113.68, 'DOSUT');
    fixes.airway.IKELA = fix(18.661667, 112.245000, 'IKELA');
    
    // M750
    // http://eaip.caa.gov.tw/eaip/history/2014-03-20/html/eAIP/RC-ENR-3.3-en-TW.html?#ENR-3.3
    fixes.airway.DADON = fix(22.276389, 118.002778, 'DADON');
    fixes.airway.EXTRA = fix(22.400278, 118.215278, 'EXTRA');
    fixes.airway.RENOT = fix(22.568333, 118.512222, 'RENOT');
    fixes.airway.TONGA = fix(23.177403, 119.5911, 'TONGA');
    fixes.airway.TOROX = fix(23.363056, 119.925, 'TOROX');
    fixes.airway.ANLOT = fix(23.907222, 120.486944, 'ANLOT');
    fixes.airway.PILOX = fix(24.415, 121.024722, 'PILOX');
    fixes.airway.SANAS = fix(24.896944, 121.692222, 'SANAS');
    fixes.airway.KUDOS = fix(25.131389, 121.991111, 'KUDOS');
    fixes.airway.LEKOS = fix(25.5075, 122.480556, 'LEKOS');
    fixes.airway.MORSU = fix(25.905556, 123, 'MORSU');
    fixes.airway.MOLKA = fix(26.658611, 124, 'MOLKA');
    
    // A1
    fixes.airway.ANPOG = fix(22.604167, 117.954444, 'ANPOG');
    fixes.airway.KADLO = fix(22.955056, 118.541722, 'KADLO');
    fixes.airway.MKG = fix(23.595444, 119.637278, 'MKG');
    fixes.airway.SWORD = fix(24.0025, 120.094167, 'SWORD');
    fixes.airway.HLG = fix(24.559806, 120.727167, 'HLG');
    fixes.airway.APU = fix(25.176861, 121.52225, 'APU');
    fixes.airway.ANNNA = fix(25.571806, 122.022167, 'ANNNA');
    fixes.airway.DRAKE = fix(25.615561, 122.077947, 'DRAKE');
    fixes.airway.AISAR = fix(25.947472, 122.493222, 'AISAR');
    fixes.airway.OSTAR = fix(26.331667, 123, 'OSTAR');
    fixes.airway.BULAN = fix(27.091667, 124, 'BULAN');

    // G86
    fixes.airway.RECON = fix(21.399722, 118.403333, 'RECON');
    fixes.airway.ANDRE = fix(21.741111, 119.992222, 'ANDRE');
    fixes.airway.HCN = fix(21.917778, 120.843583, 'HCN');
    
    // G581
    fixes.airway.COMBO = fix(22.261806, 118.134167, 'COMBO');
    fixes.airway.CYRUS = fix(22.215833, 118.531667, 'CYRUS');
    fixes.airway.QUOTA = fix(22.163056, 118.976944, 'QUOTA');
    fixes.airway.GRADY = fix(22.078889, 119.665, 'GRADY');
    fixes.airway.PARPA = fix(22.032222, 120.036389, 'PARPA');
    fixes.airway.IONIC = fix(22.035833, 121.007778, 'IONIC');
    fixes.airway.TULTO = fix(23.322778, 123, 'TULTO');
    fixes.airway.IGURU = fix(23.95, 124, 'IGURU');
    
    fixes.airway.OLDID = fix(23, 117.5, 'OLDID');
    fixes.airway.LASSO = fix(22.677722, 118.378167, 'LASSO');

    // B591 
    fixes.airway.BUSBY = fix(22.061667, 120.958333, 'BUSBY');
    fixes.airway.TUNNY = fix(22.365, 121.219722, 'TUNNY');
    fixes.airway.GID = fix(22.672361, 121.485972, 'GID');
    fixes.airway.TACLE = fix(22.993889, 121.586944, 'TACLE');
    fixes.airway.JICHI = fix(23.410278, 121.7225, 'JICHI');
    fixes.airway.WAGON = fix(23.588056, 121.773889, 'WAGON');
    fixes.airway.TITUS = fix(23.828333, 121.851667, 'TITUS');
    fixes.airway.TINHO = fix(24.3525, 122.028611, 'TINHO');
    fixes.airway.WADER = fix(24.506389, 121.934722, 'WADER');
    fixes.airway.BAKER = fix(25.643333, 121.88, 'BAKER');
    fixes.airway.COPRA = fix(25.725572, 121.94335, 'COPRA');
    fixes.airway.BESTO = fix(26.13825, 122.258528, 'BESTO');
    fixes.airway.FITCH = fix(26.684167, 122.6875, 'FITCH');
    fixes.airway.BERBA = fix(27.078056, 123, 'BERBA');
    fixes.airway.DUBAN = fix(27.938333, 123.694167, 'DUBAN');
    fixes.airway.EMRET = fix(28.002222, 123.694167, 'EMRET');
    fixes.airway.KASKA = fix(28.699167, 123.694167, 'KASKA');
    fixes.airway.SALMI = fix(28.315, 124, 'SALMI');

    // A577
    fixes.airway.KABAM = fix(21, 119.88, 'KABAM');
    fixes.airway.MENON = fix(22.804444, 120.154722, 'MENON');
    // M646
    fixes.airway.POTIB = fix(21, 120.758333, 'POTIB');
    // W4
    fixes.airway.ARLEN = fix(22.835556, 120.365833, 'ARLEN');
    fixes.airway.TNN = fix(23.135306, 120.206194, 'TNN');
    fixes.airway.DALIN = fix(23.595278, 120.373333, 'DALIN');
    // W6
    fixes.airway.HOTEL = fix(23.683639, 119.501944, 'HOTEL');
    fixes.airway.INDIA = fix(24.099722, 118.858333, 'INDIA');
    fixes.airway.SANDY = fix(24.28245, 118.573189, 'SANDY');
    fixes.airway.BS = fix(24.426472, 118.349028, 'BS');
    // J5
    fixes.airway.GUMBO = fix(22.765, 123.251667, 'GUMBO');
    // R583
    fixes.airway.ROBIN = fix(25.419167, 122.207778, 'ROBIN');
    fixes.airway.PABSO = fix(25.507778, 122.480556, 'PABSO');
    fixes.airway.ANGUS = fix(25.684167, 123, 'ANGUS');
    fixes.airway.KIKIT = fix(25.882175, 123.592197, 'KIKIT');
    fixes.airway.BORDO = fix(26.016667, 124, 'BORDO');
    // G587
    fixes.airway.POLAR = fix(26.682417, 123.676889, 'POLAR');
    // R595
    fixes.airway.GRACE = fix(25.105986, 122.289689, 'GRACE');
    fixes.airway.LOTTO = fix(25.100789, 122.344444, 'LOTTO');
    fixes.airway.PARTO = fix(25.036667, 123, 'PARTO');
    fixes.airway.BRENT = fix(25.018333, 123.182778, 'BRENT');
    fixes.airway.SEDKU = fix(24.933333, 124, 'SEDKU');
    // W2
    fixes.airway.CAROL = fix(25.695556, 121.488333, 'CAROL');
    fixes.airway.GENIE = fix(26.067222, 121.463889, 'GENIE');
    fixes.airway.DUMAS = fix(26.116389, 120.696389, 'DUMAS');
    fixes.airway.HIPPO = fix(26.143889, 120.234444, 'HIPPO');
    fixes.airway.NK = fix(26.16, 119.957222, 'NK');
    // W8
    fixes.airway.TONNY = fix(25.413889, 121.143333, 'TONNY');
    fixes.airway.DEFOE = fix(25.779167, 120.565278, 'DEFOE');
    fixes.airway.HAPPY = fix(26.0175, 120.185833, 'HAPPY');
    // B1
    fixes.airway.LUCAS = fix(24.480833, 120.951389, 'LUCAS');
    
    // manila fir
    fixes.airway.MEVIN = fix(21, 122.55, 'MEVIN');
    fixes.airway.AGVAR = fix(19.4141, 120.6285, 'AGVAR');
    fixes.airway.ALDIS = fix(18.5979, 119.6636, 'ALDIS');
    fixes.airway.AVMUP = fix(17.9933, 118.9586, 'AVMUP');
    fixes.airway.AKOTA = fix(16.4620, 117.2067, 'AKOTA');
    fixes.airway.DABGI = fix(14.1779, 114.6728, 'DABGI');
    fixes.airway.EMPUL = fix(13.9950, 114.6786, 'EMPUL');
    fixes.airway.MIKIN = fix(19.3352, 118.1098, 'MIKIN');
    fixes.airway.MUMOT = fix(19.0286, 117.7897, 'MUMOT');
    fixes.airway.MAVRA = fix(17.7778, 116.5020, 'MAVRA');
    fixes.airway.ATBUD = fix(15.9005, 114.6178, 'ATBUD');
    fixes.airway.KAPOH = fix(18.6793, 120.5692, 'KAPOH');
    fixes.airway.LAO = fix(18.1788, 120.5291, 'LAO');
    fixes.airway.DEMSA = fix(18.4064, 120.0607, 'DEMSA');
    fixes.airway.SAN = fix(16.7284, 120.3581, 'SAN');
    fixes.airway.TAREM = fix(15.6743, 120.2862, 'TAREM');
    fixes.airway.MINIO = fix(18.5955, 120.8222, 'MINIO');
    fixes.airway.TADAO = fix(18.3872, 120.6755, 'TADAO');
    fixes.airway.GUKUM = fix(14.1956, 116.9172, 'GUKUM');
    fixes.airway.SOMAR = fix(14.4057, 118.2870, 'SOMAR');
    fixes.airway.CALDO = fix(14.5604, 119.3326, 'CALDO');
  
    // sanya, ho chi minh, vietnam
    fixes.airway.MIGUG = fix(15.273, 114, 'MIGUG');
    fixes.airway.MONBO = fix(14.5, 113.428333, 'MONBO');
    fixes.airway.MESOX = fix(13.98, 113.0450, 'MESOX');
    fixes.airway.DONDA = fix(14.703333, 112.0216667, 'DONDA');
    fixes.airway.DAMEL = fix(13.9783, 111.51, 'DAMEL');
    fixes.airway.EGEMU = fix(17, 112.28333, 'EGEMU');
    fixes.airway.EXOTO = fix(15.3583, 111.05, 'EXOTO');
    fixes.airway.VEPAM = fix(13.9667, 110, 'VEPAM');
    fixes.airway.LENKO = fix(17.416667, 110.3, 'LENKO');
    fixes.airway.BUNTA = fix(16.833333, 109.395, 'BUNTA');
    fixes.airway.DAN = fix(16.0528, 108.1982, 'DAN');
    fixes.airway.PCA = fix(13.9572, 109.0425, 'PCA');
    fixes.airway.GIVIV = fix(20.953333, 111.055, 'GIVIV');
    fixes.airway.LH = fix(21.135, 110.3333, 'LH');
    fixes.airway.NYB = fix(20.015, 110.136667, 'NYB');
    fixes.airway.GIVIL = fix(19.25, 109.833333, 'GIVIL');
    fixes.airway.SAMAS = fix(20.505, 110.495, 'SAMAS');
    fixes.airway.WL = fix(18.488333, 109.403333, 'WL');
    fixes.airway.SYX = fix(18.31, 109.173333, 'SYX');
    fixes.airway.OMGEN = fix(17.666667, 109.165, 'OMGEN');
    fixes.airway.SAGSU = fix(17.501667, 109.163333, 'SAGSU');
    fixes.airway.ASSAD = fix(18.341667, 107.681667, 'ASSAD');
    fixes.airway.XONUS = fix(18.07, 107.2331, 'XONUS');
    fixes.airway.HATIN = fix(18.4669, 107.0489, 'HATIN');
    fixes.airway.BIGRO = fix(21.57, 111.826667, 'BIGRO');
    fixes.airway.ARESI = fix(13.9733, 114.4500, 'ARESI');

    //guangzhou west
    fixes.airway.BHY = fix(21.586667, 109.426667, 'BHY');
    fixes.airway.ALEKI = fix(21.856667, 109.1, 'ALEKI');
    fixes.airway.NIKUK = fix(22.13, 108.763333, 'NIKUK');
    fixes.airway.NNG = fix(22.605, 108.175, 'NNG');
    fixes.airway.PEGDU = fix(20.883333, 109.383333, 'PEGDU');
    fixes.airway.LIDLU = fix(20.5, 109.716667, 'LIDLU');

    
    //guangzhou north, east
    fixes.airway.IDUMA = fix(22.896667, 113.95167, 'IDUMA');
    fixes.airway.SHL = fix(23.091667, 113.85, 'SHL');
    fixes.airway.YIN = fix(24.19, 113.415, 'YIN');
    fixes.airway.BUBDA = fix(25.868333, 113.463333, 'BUBDA');
    fixes.airway.LIG = fix(27.648333, 113.516667, 'LIG');
    fixes.airway.BEBEM = fix(22.95, 116.36, 'BEBEM');
    fixes.airway.SWA = fix(23.44, 116.766667, 'SWA');
    fixes.airway.IKATA = fix(23.765, 117.136667, 'IKATA');
    fixes.airway.TEBON = fix(24.116667, 117.533333, 'TEBON');
    fixes.airway.XLN = fix(24.565, 118.015, 'XLN');
    fixes.airway.FQG = fix(25.74, 119.385, 'FQG');
    fixes.airway.LJG = fix(26.22, 119.548333, 'LJG');
    fixes.airway.DAGMO = fix(27.436667, 119.556667, 'DAGMO');
    fixes.airway.SUMDO = fix(22.900000 , 115.881667 , 'SUMDO');
    fixes.airway.OVGOT = fix(22.783333, 114.75, 'OVGOT');
    fixes.airway.VIPAP = fix(22.761667, 114.531667, 'VIPAP');
    fixes.airway.GLN = fix(22.708333, 114.033333, 'GLN');
    fixes.airway.ADBIN = fix(21.968333, 112.821667, 'ADBIN');
    fixes.airway.MEPOG = fix(21.858333, 112.546667, 'MEPOG');
    
    fixes.airway.POU = fix(23.021667, 113.19, 'POU');
    fixes.airway.GYA = fix(23.07, 112.486667, 'GYA');
    fixes.airway.MUBEL = fix(24.21, 111.27, 'MUBEL');
    fixes.airway.QP = fix(24.67, 110.776667, 'QP');
    fixes.airway.MAMSI = fix(25.205, 110.211667, 'MAMSI');
    fixes.airway.ELKAL = fix(26.096667, 108.396667, 'ELKAL');
    fixes.airway.LMN = fix(23.648333, 114.326667, 'LMN');
    fixes.airway.XEBUL = fix(24.283333, 114.85, 'XEBUL');
    fixes.airway.EGEDA = fix(25.348333, 115.111667, 'EGEDA');
    fixes.airway.PLT = fix(25.808333, 114.875, 'PLT');
    fixes.airway.NODOG = fix(24.576667, 111.295, 'NODOG');
    fixes.airway.LAGEX = fix(26.43, 109.026667, 'LAGEX');
    fixes.airway.SJG = fix(25.776667, 109.61, 'SJG');
    fixes.airway.PA = fix(25.405, 110.06, 'PA');
    fixes.airway.JW = fix(25.008333, 110.016667, 'JW');
    fixes.airway.MOTOM = fix(24.69, 109.7933333, 'MOTOM');
    
    fixes.airway.ZUH = fix(22.221667, 113.466667, 'ZUH');
    fixes.airway.VIBOS = fix(22.625000, 113.328333, 'VIBOS');
    fixes.airway.CON = fix(23.588333, 113.586667, 'CON');
    fixes.airway.NOLON = fix(24.108333, 113.946667, 'NOLON');
    fixes.airway.NF = fix(27.208333, 116.558333, 'NF');
    fixes.airway.WYN = fix(24.35, 114.111667, 'WYN');
    fixes.airway.NNX = fix(25.095, 114.273333, 'NNX');
    fixes.airway.BEMAG = fix(26.018333, 114.001667, 'BEMAG');
    fixes.airway.LIG = fix(27.648333, 113.516667, 'LIG');
    fixes.airway.ONEMI = fix(25.751667, 110.608333, 'ONEMI');
    fixes.airway.VQ = fix(25.561667, 110.476667, 'VQ');
    fixes.airway.ENKUS = fix(24.678333, 109.82, 'ENKUS');
    fixes.airway.LBN = fix(23.763333, 109.146667, 'LBN');
    fixes.airway.SARUG = fix(23.245, 108.71, 'SARUG');
    fixes.airway.NNG = fix(22.605, 108.175, 'NNG');
    fixes.airway.OSIKA = fix(22.863333, 110.555, 'OSIKA');
    fixes.airway.VAPNA = fix(22.708333, 109.12, 'VAPNA');
    fixes.airway.XEREN = fix(22.428333, 107.255, 'XEREN');
    fixes.airway.NL = fix(22.35, 106.858333, 'NL');
    fixes.airway.TEBAK = fix(22.175, 106.675, 'TEBAK');
    fixes.airway.BIPOP = fix(23.35, 111.148333, 'BIPOP');
    
    fixes.airway.SAREX = fix(22.881667, 113.483333, 'SAREX');
    fixes.airway.UBLIM = fix(22.888333, 113.67, 'UBLIM');
    fixes.airway.NOMAR = fix(23.508333, 113.856667, 'NOMAR');
    fixes.airway.SANIP = fix(24.026667, 114.015, 'SANIP');
    fixes.airway.BILAT = fix(23.868333, 114.146667, 'BILAT');
    fixes.airway.MABAG = fix(24.313333, 114.506667, 'MABAG');
    fixes.airway.OSONO = fix(27.765, 115.655, 'OSONO');
    fixes.airway.NUSLA = fix(23.411667, 113.515, 'NUSLA');
    fixes.airway.CEN = fix(23.151667, 113.416667, 'CEN');
    fixes.airway.MIPAG = fix(22.921667, 113.741667, 'MIPAG');
    fixes.airway.TEPID = fix(23.535, 113.385, 'TEPID');
    fixes.airway.YIN = fix(24.19, 113.415, 'YIN');
    fixes.airway.IGONO = fix(23.966667, 114.065, 'IGONO');
    fixes.airway.ATAGA = fix(24.161667, 113.683333, 'ATAGA');
    fixes.airway.SULAS = fix(22.916667, 114.221667, 'SULAS');
    fixes.airway.UBDOB = fix(23.361667, 114.625000, 'UBDOB');
    fixes.airway.UDUTI = fix(21.85, 111.933333, 'UDUTI');
    fixes.airway.AVPAM = fix(23.208333, 111.826667, 'AVPAM');
    fixes.term.LANDA = fix(21.613333, 113.045, 'LANDA');
    
    var route = function(type, path) {
        var options = colors[type];
        var path2 = [];
        path.forEach(function(e, i) { 
            if (e == undefined) {
                console.log("Waypoint missing: "+i);
            } else if (e.getPosition) {
                path2.push(e.getPosition())
            } else {
                path2.push(e);
            }
        });
        options.path = path2;
        options.map = map;
        return new google.maps.Polyline(options);
    };
    var routes = { app: {}, star: {}, starterm: {}, sid: {}, sidterm: {}, airway: {}, transit: {}, holding: {} };

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

    routes.starterm.J104 = route('starterm3', [fixes.term.SIKOU, fixes.term.RAGSO, fixes.term.DASON, fixes.term.COTON, fixes.star.CHALI]);
    routes.starterm.J103 = route('starterm3', [fixes.term.DUMOL, fixes.term.ARROW, fixes.term.ISBAN, fixes.term.ROBIN, fixes.term.TAPPO, fixes.term.PICTA, fixes.term.BEKOL]);
    routes.starterm.J103A = route('starterm3', [fixes.term.SUKER, fixes.term.ARROW]);
    routes.starterm.J103B = route('starterm3', [fixes.term.ROBIN, fixes.star.CHALI]);
    routes.starterm.J101 = route('starterm3', [fixes.term.ELATO, fixes.term.TUBBY, fixes.term.SAMMI, fixes.term.PONTI, fixes.term.BUMDI, fixes.term.SMT]);

    routes.app.RWY34 = route('app2', [fixes.star.MC611, fixes.app.LKCD35D, fixes.sid.PAPA, fixes.app.RW34]);
    routes.app.RWY34A = route('app2', [fixes.star.HAZEL, fixes.app.LKCD35, fixes.app.LKCD35A, fixes.app.LKCD35B, fixes.app.LKCD35C, fixes.app.LKCD35D]);
    routes.app.RWY34B = route('app2', [fixes.term.UJ, fixes.app.ROMEO, fixes.app.ZAOR179, fixes.app.LKCD35C]);
    routes.app.RWY34C = route('app2', [fixes.app.MCU, fixes.app.LKCD35]);

    routes.app.RWY16 = route('app2', [fixes.star.ZUH, fixes.app.ZUHD11, fixes.app.ZUHD11A, fixes.app.MC16IF, fixes.app.ZAO, fixes.app.MC16MAPT, fixes.app.RW16]);
    routes.app.RWY16A = route('app2', [fixes.app.NLG, fixes.app.ZUHD11A]);

    //routes.transit.KAPLI = route('transit', [fixes.term.ALLEY, fixes.term.KAPLI, fixes.term.RAMUS, fixes.term.ARROW, fixes.term.IDOSI]);

    routes.airway.L642 = route('airway', [fixes.term.EPDOS, fixes.airway.ENBOK, fixes.airway.EPKAL, fixes.airway.EGEMU, fixes.airway.EXOTO, fixes.airway.VEPAM]);
    routes.airway.M771 = route('airway', [fixes.term.DUMOL, fixes.airway.DULOP, fixes.airway.DOSUT, fixes.airway.DONDA, fixes.airway.DAMEL]);
    routes.airway.M772 = route('airway', [fixes.airway.DULOP, fixes.airway.ASOBA, fixes.airway.ATBUD, fixes.airway.DABGI, fixes.airway.EMPUL]);
    routes.airway.Q1 = route('starterm', [fixes.airway.DULOP, fixes.term.CARSO]);
    routes.airway.A1 = route('airway', [fixes.term.IDOSI, fixes.airway.IKELA, fixes.airway.LENKO, fixes.airway.BUNTA, fixes.airway.DAN]);
    // Taipei FIR
    routes.airway.A1NE = route('airway', [fixes.term.ELATO, fixes.airway.ANPOG, fixes.airway.KADLO, fixes.airway.MKG, fixes.airway.SWORD, fixes.airway.HLG, fixes.airway.APU, fixes.airway.ANNNA, fixes.airway.DRAKE, fixes.airway.AISAR, fixes.airway.OSTAR, fixes.airway.BULAN]);
    routes.airway.M750 = route('airway', [fixes.term.ENVAR, fixes.airway.DADON, fixes.airway.EXTRA, fixes.airway.RENOT, fixes.airway.TONGA, fixes.airway.TOROX, fixes.airway.ANLOT, fixes.airway.PILOX, fixes.airway.SANAS, fixes.airway.KUDOS, fixes.airway.LEKOS, fixes.airway.MORSU, fixes.airway.MOLKA]);
    routes.airway.G86 = route('airway', [fixes.term.KAPLI, fixes.airway.RECON, fixes.airway.ANDRE, fixes.airway.HCN]);
    routes.airway.G581 = route('airway', [fixes.term.ELATO, fixes.airway.DADON, fixes.airway.COMBO, fixes.airway.CYRUS, fixes.airway.QUOTA, fixes.airway.GRADY, fixes.airway.PARPA, fixes.airway.HCN, fixes.airway.TULTO, fixes.airway.IGURU]);
    routes.airway.R200 = route('airway', [fixes.airway.OLDID, fixes.airway.ANPOG, fixes.airway.EXTRA, fixes.airway.CYRUS]);
    routes.airway.T1 = route('airway', [fixes.term.KAPLI, fixes.airway.COMBO, fixes.airway.EXTRA, fixes.airway.LASSO, fixes.airway.KADLO]);
    routes.airway.B576 = route('airway', [fixes.airway.SALMI, fixes.airway.DUBAN]);
    routes.airway.B591 = route('airway', [fixes.airway.KASKA, fixes.airway.EMRET, fixes.airway.DUBAN, fixes.airway.BERBA, fixes.airway.FITCH, fixes.airway.BESTO, fixes.airway.COPRA, fixes.airway.BAKER, fixes.airway.APU, fixes.airway.WADER, fixes.airway.TINHO, fixes.airway.TITUS, fixes.airway.WAGON, fixes.airway.JICHI, fixes.airway.TACLE, fixes.airway.GID, fixes.airway.TUNNY, fixes.airway.BUSBY, fixes.airway.HCN]);
    routes.airway.L1 = route('airway', [fixes.airway.DADON, fixes.airway.KADLO, fixes.airway.EMRET, fixes.airway.SALMI]);
    routes.airway.A577 = route('airway', [fixes.airway.KABAM, fixes.airway.ANDRE, fixes.airway.PARPA, fixes.airway.MENON, fixes.airway.TNN]);
    routes.airway.M646 = route('airway', [fixes.airway.POTIB, fixes.airway.HCN]);
    routes.airway.W4 = route('airway', [fixes.airway.HCN, fixes.airway.ARLEN, fixes.airway.TNN, fixes.airway.DALIN, fixes.airway.ANLOT, fixes.airway.HLG]);
    routes.airway.W6 = route('airway', [fixes.airway.TNN, fixes.airway.TOROX, fixes.airway.MKG, fixes.airway.HOTEL, fixes.airway.INDIA, fixes.airway.SANDY, fixes.airway.BS]);
    routes.airway.J5 = route('airway', [fixes.airway.HCN, fixes.airway.GUMBO]);
    routes.airway.R583 = route('airway', [fixes.airway.APU, fixes.airway.ROBIN, fixes.airway.LEKOS, fixes.airway.PABSO, fixes.airway.ANGUS, fixes.airway.KIKIT, fixes.airway.BORDO]);
    routes.airway.G587 = route('airway', [fixes.airway.PABSO, fixes.airway.POLAR, fixes.airway.BULAN]);
    routes.airway.W8 = route('airway', [fixes.airway.APU, fixes.airway.TONNY, fixes.airway.DEFOE, fixes.airway.HAPPY, fixes.airway.NK]);
    routes.airway.W2 = route('airway', [fixes.airway.APU, fixes.airway.CAROL, fixes.airway.GENIE, fixes.airway.DUMAS, fixes.airway.HIPPO, fixes.airway.NK]);
    routes.airway.B1 = route('airway', [fixes.airway.ANLOT, fixes.airway.LUCAS, fixes.airway.APU]);
    routes.airway.R595 = route('airway', [fixes.airway.APU, fixes.airway.KUDOS, fixes.airway.GRACE, fixes.airway.LOTTO, fixes.airway.PARTO, fixes.airway.BRENT, fixes.airway.SEDKU]);
    routes.airway.J1 = route('airway', [fixes.term.KAPLI, fixes.airway.TNN]);
    
    // Manila FIR
    routes.airway.B462 = route('airway', [fixes.airway.MEVIN, fixes.airway.MINIO, fixes.airway.TADAO, fixes.airway.LAO]);
    routes.airway.L625 = route('airway', [fixes.airway.MEVIN, fixes.airway.AGVAR, fixes.airway.ALDIS, fixes.airway.AVMUP, fixes.airway.AKOTA, fixes.airway.DABGI, fixes.airway.ARESI]);
    routes.airway.N892 = route('airway', [fixes.airway.KABAM, fixes.airway.MIKIN, fixes.airway.MUMOT, fixes.airway.MAVRA, fixes.airway.ATBUD, fixes.airway.MIGUG, fixes.airway.MONBO, fixes.airway.MESOX]);
    routes.airway.M646 = route('airway', [fixes.airway.POTIB, fixes.airway.AGVAR, fixes.airway.KAPOH, fixes.airway.LAO]);
    routes.airway.M501 = route('airway', [fixes.term.NOMAN, fixes.airway.MIKIN, fixes.airway.ALDIS, fixes.airway.DEMSA, fixes.airway.LAO]);
    routes.airway.A461 = route('airway', [fixes.term.NOMAN, fixes.airway.MUMOT, fixes.airway.AVMUP, fixes.airway.SAN]);
    routes.airway.W16 = route('airway', [fixes.airway.AVMUP, fixes.airway.TAREM]);
    routes.airway.M583 = route('airway', [fixes.term.SABNO, fixes.airway.MAVRA, fixes.airway.AKOTA, fixes.airway.SOMAR]);
    routes.airway.M574 = route('airway', [fixes.airway.AKOTA, fixes.airway.GUKUM]);
    routes.airway.W3 = route('airway', [fixes.airway.AKOTA, fixes.airway.CALDO]);
    // sanya FIR
    routes.airway.A202 = route('airway', [fixes.term.SIKOU, fixes.airway.SAMAS, fixes.airway.ASSAD, fixes.airway.XONUS]);
    routes.airway.A206 = route('airway', [fixes.airway.ASSAD, fixes.airway.HATIN]);
    routes.airway.G221 = route('airway', [fixes.airway.BIGRO, fixes.airway.GIVIV, fixes.airway.SAMAS, fixes.airway.NYB, fixes.airway.GIVIL, fixes.airway.WL, fixes.airway.SYX, fixes.airway.OMGEN, fixes.airway.SAGSU, fixes.airway.BUNTA, fixes.airway.PCA]);    
    routes.airway.R339 = route('airway', [fixes.term.SIKOU, fixes.airway.GIVIV, fixes.airway.LH, fixes.airway.BHY, fixes.airway.ALEKI, fixes.airway.NIKUK, fixes.airway.NNG]);
    routes.airway.W70 = route('airway', [fixes.airway.NYB, fixes.airway.LIDLU, fixes.airway.PEGDU, fixes.airway.BHY]);
    
    // guangzhou FIR
    routes.airway.A461 = route('airway', [fixes.term.BEKOL, fixes.airway.IDUMA, fixes.airway.SHL, fixes.airway.YIN, fixes.airway.BUBDA, fixes.airway.LIG]);
    routes.airway.A470 = route('airway', [fixes.term.DOTMI, fixes.airway.BEBEM, fixes.airway.SWA, fixes.airway.IKATA, fixes.airway.TEBON, fixes.airway.XLN, fixes.airway.FQG, fixes.airway.LJG, fixes.airway.DAGMO]);
    routes.airway.A599 = route('airway', [fixes.airway.LBN, fixes.airway.BIPOP, fixes.airway.AVPAM, fixes.airway.GYA]);
    routes.airway.A599A = route('airway', [fixes.airway.NNX, fixes.airway.PLT, fixes.airway.NF]);
    routes.airway.R200 = route('airway', [fixes.airway.OLDID, fixes.airway.BEBEM, fixes.airway.SUMDO, fixes.airway.OVGOT, fixes.airway.VIPAP, fixes.airway.GLN, fixes.star.ZUH, fixes.airway.ADBIN, fixes.airway.MEPOG, fixes.airway.BIGRO, fixes.airway.LH]);
    routes.airway.B330 = route('airway', [fixes.term.TAMOT, fixes.airway.POU, fixes.airway.GYA, fixes.airway.MUBEL, fixes.airway.QP, fixes.airway.MAMSI, fixes.airway.SJG, fixes.airway.ELKAL]);
    routes.airway.G471 = route('airway', [fixes.airway.POU, fixes.airway.SHL, fixes.airway.LMN, fixes.airway.XEBUL, fixes.airway.EGEDA, fixes.airway.PLT]);
    routes.airway.G586 = route('airway', [fixes.airway.YIN, fixes.airway.NODOG, fixes.airway.QP]);
    routes.airway.G586A = route('airway', [fixes.airway.SJG, fixes.airway.LAGEX]);
    routes.airway.R343 = route('airway', [fixes.airway.ONEMI, fixes.airway.VQ, fixes.airway.MAMSI, fixes.airway.ENKUS, fixes.airway.LBN, fixes.airway.SARUG, fixes.airway.NNG]);
    routes.airway.R473 = route('airway', [fixes.airway.LIG, fixes.airway.BEMAG, fixes.airway.NNX, fixes.airway.WYN, fixes.airway.NOLON, fixes.airway.CON, fixes.airway.POU, fixes.airway.VIBOS, fixes.airway.ZUH, fixes.term.SIERA]);
    routes.airway.R474 = route('airway', [fixes.airway.GYA, fixes.airway.OSIKA, fixes.airway.VAPNA, fixes.airway.NNG, fixes.airway.XEREN, fixes.airway.NL, fixes.airway.TEBAK]);

    routes.airway.W2 = route('airway', [fixes.airway.SJG, fixes.airway.PA, fixes.airway.JW, fixes.airway.MOTOM, fixes.airway.LBN]);
    routes.airway.W6 = route('airway', [fixes.sid.LATOP, fixes.app.NLG, fixes.airway.SAREX, fixes.airway.CON]);
    routes.airway.W7 = route('airway', [fixes.airway.POU, fixes.airway.SAREX, fixes.star.ZUH]);
    routes.airway.W18 = route('airway', [fixes.term.TAMOT, fixes.app.NLG, fixes.airway.UBLIM, fixes.airway.NOMAR, fixes.airway.SANIP, fixes.airway.WYN]);
    routes.airway.W19 = route('airway', [fixes.airway.POU, fixes.airway.NOMAR, fixes.airway.BILAT, fixes.airway.MABAG, fixes.airway.PLT, fixes.airway.OSONO]);
    routes.airway.W20 = route('airway', [fixes.airway.MABAG, fixes.airway.NOLON]);
    routes.airway.W21 = route('airway', [fixes.airway.NUSLA, fixes.airway.CEN, fixes.airway.MIPAG, fixes.airway.GLN]);
    routes.airway.W22 = route('airway', [fixes.airway.GLN, fixes.airway.IDUMA, fixes.airway.SHL, fixes.airway.NUSLA, fixes.airway.TEPID, fixes.airway.YIN]);
    routes.airway.W23 = route('airway', [fixes.app.NLG, fixes.star.ZUH]);
    routes.airway.W44 = route('airway', [fixes.airway.MABAG, fixes.airway.IGONO, fixes.airway.CON]);
    routes.airway.W68 = route('airway', [fixes.term.TAMOT, fixes.airway.IDUMA]);
    routes.airway.W70 = route('airway', [fixes.airway.NYB, fixes.airway.LIDLU, fixes.airway.PEGDU, fixes.airway.BHY]);
    routes.airway.W90 = route('airway', [fixes.airway.NOLON, fixes.airway.TEPID, fixes.airway.POU]);
    routes.airway.W130 = route('airway', [fixes.term.LANDA, fixes.term.UJ]);
    routes.airway.V5 = route('airway', [fixes.airway.BEMAG, fixes.airway.ATAGA, fixes.airway.CON]);
    routes.airway.V17 = route('airway', [fixes.airway.GLN, fixes.airway.SULAS, fixes.airway.UBDOB, fixes.airway.XEBUL]);
    routes.airway.V19 = route('airway', [fixes.airway.LH, fixes.airway.UDUTI, fixes.app.NLG]);
    routes.airway.V20 = route('airway', [fixes.airway.BIGRO, fixes.airway.UDUTI]);
    routes.airway.V21 = route('airway', [fixes.airway.AVPAM, fixes.airway.UDUTI, fixes.airway.MEPOG, fixes.term.UJ]);
    routes.airway.V25 = route('airway', [fixes.airway.AVPAM, fixes.term.UJ]);

    routes.holding.ABBEY = route('star', [pos(22.269093,114.924510),pos(22.277027,114.898600),pos(22.289850,114.880861),pos(22.306100,114.869885),pos(22.324029,114.865765),pos(22.342180,114.868523),pos(22.359100,114.878251),pos(22.373036,114.894990),pos(22.382398,114.920053),pos(22.388114,115.100160),pos(22.380388,115.125868),pos(22.367563,115.143617),pos(22.351312,115.154597),pos(22.333382,115.158717),pos(22.315231,115.155959),pos(22.298311,115.146236),pos(22.284373,115.129507),pos(22.275008,115.104464)]);
    routes.holding.BETTY = route('star', [pos(21.486275,114.559123),pos(21.511285,114.559919),pos(21.530597,114.568307),pos(21.544837,114.582092),pos(21.553441,114.599493),pos(21.555991,114.619009),pos(21.552006,114.639162),pos(21.540967,114.658153),pos(21.521270,114.674695),pos(21.362783,114.729986),pos(21.337804,114.729049),pos(21.318491,114.720674),pos(21.304250,114.706911),pos(21.295644,114.689540),pos(21.293092,114.670059),pos(21.297074,114.649941),pos(21.308111,114.630981),pos(21.327807,114.614461),pos(21.486305,114.558981)]);
    routes.holding.CANTO = route('star', [pos(21.650507,113.707590),pos(21.661177,113.731657),pos(21.662990,113.753984),pos(21.658030,113.773900),pos(21.647515,113.790054),pos(21.632500,113.801364),pos(21.613990,113.806699),pos(21.593240,113.804747),pos(21.570587,113.793388),pos(21.452712,113.666790),pos(21.442147,113.642452),pos(21.440330,113.620160),pos(21.445288,113.600273),pos(21.455801,113.584140),pos(21.470815,113.572843),pos(21.489325,113.567512),pos(21.510075,113.569464),pos(21.532728,113.580820)]);
    routes.holding.DOVAR = route('starterm', [pos(20.860770,115.117046),pos(20.885797,115.116450),pos(20.905491,115.123709),pos(20.920383,115.136620),pos(20.929822,115.153441),pos(20.933319,115.172705),pos(20.930320,115.192969),pos(20.920221,115.212473),pos(20.901356,115.230026),pos(20.745778,115.293882),pos(20.720787,115.294349),pos(20.701093,115.287099),pos(20.686200,115.274209),pos(20.676759,115.257415),pos(20.673260,115.238184),pos(20.676257,115.217954),pos(20.686354,115.198481),pos(20.705217,115.180951)]);
    routes.holding.EATON = route('starterm', [pos(21.123278,115.717250),pos(21.121264,115.690279),pos(21.126654,115.668710),pos(21.137644,115.651880),pos(21.152658,115.640607),pos(21.170363,115.635520),pos(21.189453,115.637311),pos(21.208331,115.646754),pos(21.226004,115.665714),pos(21.296348,115.827803),pos(21.298525,115.854528),pos(21.293132,115.876122),pos(21.282140,115.892968),pos(21.267125,115.904250),pos(21.249420,115.909340),pos(21.230330,115.907548),pos(21.211452,115.898105),pos(21.193777,115.879149),pos(21.123278,115.717250)]);
    routes.holding.FISHA = route('starterm', [pos(22.282466,115.336780),pos(22.290400,115.310867),pos(22.303222,115.293126),pos(22.319473,115.282149),pos(22.337402,115.278029),pos(22.355553,115.280787),pos(22.372473,115.290516),pos(22.386409,115.307257),pos(22.395771,115.332322),pos(22.401486,115.512447),pos(22.393760,115.538157),pos(22.380936,115.555908),pos(22.364684,115.566888),pos(22.346755,115.571009),pos(22.328604,115.568251),pos(22.311684,115.558527),pos(22.297746,115.541797),pos(22.288380,115.516750)]);
    routes.holding.GAMBA = route('starterm', [pos(21.318736,112.926985),pos(21.318478,112.953549),pos(21.311013,112.974422),pos(21.298440,112.989944),pos(21.282408,112.999481),pos(21.264304,113.002558),pos(21.245493,112.998635),pos(21.227639,112.987126),pos(21.211908,112.966290),pos(21.157573,112.797347),pos(21.158008,112.770549),pos(21.165471,112.749697),pos(21.178042,112.734187),pos(21.194073,112.724656),pos(21.212177,112.721580),pos(21.230988,112.725503),pos(21.248841,112.737013),pos(21.264570,112.757857)]);
    routes.holding.HOCKY = route('starterm', [pos(20.597043,114.574759),pos(20.621199,114.581495),pos(20.638260,114.594262),pos(20.649251,114.611037),pos(20.653994,114.629958),pos(20.652395,114.649472),pos(20.644296,114.668031),pos(20.629567,114.683768),pos(20.606913,114.695054),pos(20.440914,114.710553),pos(20.416770,114.703650),pos(20.399707,114.690903),pos(20.388715,114.674157),pos(20.383970,114.655269),pos(20.385567,114.635789),pos(20.393664,114.617261),pos(20.408392,114.601546),pos(20.431045,114.590273)]);
    fixes.term.BAKER = fix(21.217193,114.652085);
    routes.holding.BAKER = route('starterm2', [pos(21.217193,114.652085),pos(21.242202,114.652880),pos(21.261514,114.661253),pos(21.275754,114.675013),pos(21.284359,114.692382),pos(21.286909,114.711862),pos(21.282923,114.731978),pos(21.271884,114.750934),pos(21.252187,114.767445),pos(21.093701,114.822636),pos(21.068721,114.821701),pos(21.049408,114.813340),pos(21.035167,114.799602),pos(21.026561,114.782264),pos(21.024009,114.762818),pos(21.027992,114.742737),pos(21.039029,114.723811),pos(21.058724,114.707321),pos(21.217193,114.652085)]);
    routes.holding.COMBI = route('starterm2', [pos(21.493427,113.462713),pos(21.493171,113.489307),pos(21.485705,113.510205),pos(21.473132,113.525746),pos(21.457100,113.535294),pos(21.438996,113.538375),pos(21.420186,113.534447),pos(21.402331,113.522924),pos(21.386600,113.502063),pos(21.332265,113.332920),pos(21.332699,113.306091),pos(21.340162,113.285213),pos(21.352733,113.269685),pos(21.368765,113.260143),pos(21.386869,113.257063),pos(21.405679,113.260991),pos(21.423533,113.272515),pos(21.439261,113.293384)]);
    routes.holding.MYWAY = route('starterm2', [pos(20.196178,112.718650),pos(20.220810,112.714180),pos(20.238848,112.703080),pos(20.251165,112.687433),pos(20.257433,112.669074),pos(20.257432,112.649536),pos(20.250877,112.630342),pos(20.237487,112.613336),pos(20.215840,112.600018),pos(20.051736,112.569216),pos(20.027121,112.573835),pos(20.009082,112.584919),pos(19.996764,112.600540),pos(19.990494,112.618869),pos(19.990493,112.638373),pos(19.997046,112.657536),pos(20.010434,112.674517),pos(20.032079,112.687819)]);
    
    routes.holding.ATIKO = route('starterm3', [pos(21.808321,113.540610),pos(21.813648,113.548153),pos(21.816230,113.557250),pos(21.815767,113.566750),pos(21.812316,113.575507),pos(21.806293,113.582463),pos(21.798424,113.586782),pos(21.789658,113.587941),pos(21.781053,113.585801),pos(21.722353,113.544771),pos(21.717038,113.537178),pos(21.714455,113.528088),pos(21.714917,113.518595),pos(21.718368,113.509844),pos(21.724391,113.502891),pos(21.732260,113.498575),pos(21.741025,113.497416),pos(21.749631,113.499555),pos(21.808321,113.540610)]);
    routes.holding.BUMDI = route('starterm3', [pos(22.360963,114.314574),pos(22.357408,114.305887),pos(22.351273,114.299018),pos(22.343335,114.294832),pos(22.334552,114.293834),pos(22.325982,114.296144),pos(22.318661,114.301483),pos(22.313469,114.309206),pos(22.311035,114.318382),pos(22.315899,114.393850),pos(22.319491,114.402571),pos(22.325626,114.409439),pos(22.333564,114.413624),pos(22.342347,114.414622),pos(22.350916,114.412312),pos(22.358238,114.406972),pos(22.363429,114.399246),pos(22.365863,114.390066)]);
    routes.holding.CHALI = route('starterm3', [pos(21.295801,113.578030),pos(21.301391,113.585423),pos(21.308961,113.590305),pos(21.317630,113.592114),pos(21.326353,113.590631),pos(21.334077,113.586034),pos(21.339871,113.578878),pos(21.343036,113.570026),pos(21.343189,113.560546),pos(21.320389,113.489511),pos(21.314831,113.482144),pos(21.307261,113.477262),pos(21.298592,113.475453),pos(21.289869,113.476936),pos(21.282145,113.481531),pos(21.276351,113.488684),pos(21.273185,113.497532),pos(21.273031,113.507007)]);
    //routes.holding.PAPA  = route('app2', [pos(21.977495,113.656071),pos(21.982939,113.651361),pos(21.986543,113.644892),pos(21.987878,113.637483),pos(21.986784,113.630028),pos(21.983390,113.623427),pos(21.978108,113.618476),pos(21.971575,113.615771),pos(21.964577,113.615640),pos(21.898402,113.640197),pos(21.892963,113.644943),pos(21.889359,113.651409),pos(21.888023,113.658812),pos(21.889118,113.666262),pos(21.892511,113.672859),pos(21.897792,113.677807),pos(21.904326,113.680510),pos(21.911324,113.680642)]);
    
    routes.holding.TAPPO = route('starterm3', [pos(21.322384,114.242875),pos(21.332960,114.237652),pos(21.341208,114.228797),pos(21.346137,114.217447),pos(21.347153,114.204971),pos(21.344134,114.192874),pos(21.337443,114.182616),pos(21.327888,114.175434),pos(21.316621,114.172193),pos(21.225322,114.180762),pos(21.214750,114.186050),pos(21.206502,114.194897),pos(21.201572,114.206236),pos(21.200555,114.218700),pos(21.203574,114.230785),pos(21.210264,114.241034),pos(21.219818,114.248211),pos(21.231085,114.251449)]);
    fixes.term.GODEN = fix(20.5765,114.309028);
    routes.holding.GODEN = route('starterm3', [pos(20.576496,114.309084),pos(20.587767,114.312253),pos(20.597322,114.319400),pos(20.604012,114.329608),pos(20.607030,114.341645),pos(20.606013,114.354059),pos(20.601083,114.365353),pos(20.592835,114.374164),pos(20.582263,114.379429),pos(20.490964,114.387957),pos(20.479697,114.384734),pos(20.470142,114.377593),pos(20.463451,114.367394),pos(20.460432,114.355369),pos(20.461448,114.342966),pos(20.466377,114.331683),pos(20.474625,114.322878),pos(20.485196,114.317616)]);
    fixes.term.OTKUM = fix(22.0595,114.082194);
    routes.holding.OTKUM = route('starterm3', [pos(22.059491,114.082110),pos(22.068815,114.074619),pos(22.075168,114.064063),pos(22.077791,114.051798),pos(22.076369,114.039305),pos(22.071073,114.028090),pos(22.062542,114.019506),pos(22.051805,114.014589),pos(22.040157,114.013931),pos(21.952511,114.042821),pos(21.943195,114.050389),pos(21.936842,114.060935),pos(21.934218,114.073187),pos(21.935639,114.085668),pos(21.940934,114.096872),pos(21.949464,114.105449),pos(21.960201,114.110363),pos(21.971850,114.111022),pos(22.059491,114.082110)]);
    
    var show07a = [routes.sid.RWY07R2, routes.sid.RWY07L2, routes.sid.RWY07E, routes.sid.OCEAN2A, routes.sid.LAKES2A, routes.sid.BEKOL3A];
    var show07b = [routes.sid.ATENA2A, routes.sid.RASSE3A, routes.sid.LOGAN3A, fixes.sid.COLEY];
    var show07c = [routes.sid.RWY07R1, routes.sid.RWY07L1, routes.app.RWY07L, routes.app.RWY07R, routes.star.ABBEY3A, routes.star.BETTY2A, routes.star.AB2A, routes.star.SIERA6A, routes.star.SIERA6C, routes.star.C2AS6AC, fixes.app.TONIC, fixes.app.STELA, fixes.app.LIMES, fixes.star.GUAVA, fixes.star.SOKOE, fixes.star.SILVA,
        routes.sid.RWY07LS, routes.sid.RWY07RS, routes.sid.PECAN1A, fixes.sid.PORPA, fixes.sid.ROVER, fixes.sid.ATENA, fixes.sid.RAMEN];
    var show25 = [routes.app.RWY25R, routes.app.RWY25L, routes.star.ABBEY2B, routes.star.BETTY2B, routes.star.SIERA6B, routes.star.SIERA6D, routes.star.C2BS6BD, fixes.star.GOODI, fixes.star.MONTY, fixes.app.RIVER, fixes.app.LOTUS,
        routes.sid.RWY25R, routes.sid.RWY25L, routes.sid.RWY25, routes.sid.BEKOL2B, routes.sid.LAKES2B, routes.sid.OCEAN2B, routes.sid.PECAN1B, fixes.sid.PRAWN, fixes.sid.RUMSY, fixes.sid.TUNNA, fixes.sid.TROUT, fixes.sid.SAMON];
    var show34t = [routes.sid.VMMCT, fixes.sid.CAMRI];
    var show34u = [routes.sid.VMMCU1, routes.sid.VMMCU2, routes.sid.ALLEY2U, fixes.sid.DOCTA];
    var show34c = [routes.sid.VMMC34, fixes.sid.MC411, routes.star.SMT4A, routes.star.CHALI4A, routes.app.RWY34, routes.app.RWY34A, routes.app.RWY34B, routes.app.RWY34C, fixes.app.ROMEO, fixes.sid.MC420, fixes.star.MC611];
    var show16 = [routes.sid.VMMCP1, routes.sid.VMMCP2, routes.sid.ALLEY2P, fixes.sid.MULET, routes.star.SMT5B, routes.star.CHALI5B, routes.app.RWY16, routes.app.RWY16A, fixes.star.MC513, fixes.star.INDUS];
    var showmacau = [routes.sidterm.VMMC, routes.starterm.J103A, routes.starterm.J103B, fixes.star.RUNLI, fixes.star.MC611, fixes.star.HAZEL, fixes.sid.PAPA, fixes.star.MC601, fixes.sid.PAPA, fixes.star.HAZEL];
    var showterm = [routes.starterm.J104, routes.starterm.J103, routes.starterm.J101, fixes.term.TAPPO, fixes.term.PICTA, , fixes.term.RAGSO, fixes.term.DASON, fixes.term.COTON, fixes.star.CHALI, 
        fixes.term.NEDLE, fixes.term.PONTI, fixes.term.BUMDI, fixes.term.ROBIN, fixes.term.ARROW, fixes.term.ISBAN, fixes.term.TUBBY];
    
    var showhold1 = [routes.holding.ABBEY, routes.holding.BETTY, routes.holding.CANTO];
    var showhold2 = [routes.holding.DOVAR, routes.holding.EATON, routes.holding.FISHA, routes.holding.GAMBA, routes.holding.HOCKY, routes.starterm.W28, fixes.term.EATON, fixes.term.MEPUT];
    var showhold3 = [routes.holding.BAKER, fixes.term.BAKER, routes.holding.COMBI, routes.holding.MYWAY];
    var showhold4 = [routes.holding.ATIKO, routes.holding.BUMDI, routes.holding.CHALI, /*routes.holding.PAPA,*/ fixes.star.ATIKO];
    var showhold5 = [routes.holding.TAPPO, routes.holding.GODEN, routes.holding.OTKUM, fixes.term.GODEN, fixes.term.OTKUM];

    var updateViews = function() {
        
        var modevhhh = parseInt($('#overlay-option-vhhh').val());
        var modevmmc = parseInt($('#overlay-option-vmmc').val());
        var modejterm = parseInt($('#overlay-option-jterm').val());
        var modehold = parseInt($('#overlay-option-holding').val());
        var modeohold = parseInt($('#overlay-option-otherholds').val());
        
        show07a.forEach(function(e) { e.setVisible( modevhhh == 1 ); });
        show07b.forEach(function(e) { e.setVisible( modevhhh == 2 ); });
        show07c.forEach(function(e) { e.setVisible( modevhhh != 3 ); });
        show25.forEach(function(e) { e.setVisible( modevhhh == 3); });
        
        show16.forEach(function(e) { e.setVisible( modevmmc == 4 ); });
        show34c.forEach(function(e) { e.setVisible( modevmmc == 8 ); });
        show34t.forEach(function(e) { e.setVisible( (modevmmc == 8 ) && (modevhhh != 3) ); });
        show34u.forEach(function(e) { e.setVisible( modevmmc+modevhhh == 11 ); });
        fixes.sid.BREAM.setVisible( (modevhhh != 3) || (modevmmc == 8 ) );
        showmacau.forEach(function(e) { e.setVisible( modevmmc != 0 ) ; });
        showterm.forEach(function(e) { e.setVisible( modevmmc != 0 || modejterm != 0 || modeohold >= 2 ); });
        showhold1.forEach(function(e) { e.setVisible( modehold >= 1); });
        showhold2.forEach(function(e) { e.setVisible( modehold >= 2); });
        showhold3.forEach(function(e) { e.setVisible( modehold >= 3); });
        showhold4.forEach(function(e) { e.setVisible( modeohold == 1 || modeohold == 3); });
        showhold5.forEach(function(e) { e.setVisible( modeohold >= 2); });
    };
    $('#secondaryView').empty();
    $('#secondaryView').append('<style>.overlay-option { margin: 4px; border: 1px solid #112244; background-color: #FFFFFF; height: 24px } .overlay-option-header { float: left; height: 100%; width: 50%; box-sizing: border-box; -moz-box-sizing: border-box; padding: 5px 4px 0; background-color: #285599; color: #CCE5F5; font-size: 11px; font-family: Arial } .overlay-option select { float: left; width: 50%; height: 100%; border: 0px; font-size: 11px; font-family: Arial }</style>');
    var container;
    var select;
    container = $('<div class="overlay-option"><div class="overlay-option-header">Hong Kong</div></div>');
    select = $('<select id="overlay-option-vhhh"><option value="1">07</option><option value="2">07 Noise</option><option value="3">25</option></select>');
    container.append(select);
    $('#secondaryView').append(container);
    
    container = $('<div class="overlay-option"><div class="overlay-option-header">Macau</div></div>');
    select = $('<select id="overlay-option-vmmc"><option value="0">Off</option><option value="4">16</option><option value="8">34</option></select>');
    container.append(select);
    $('#secondaryView').append(container);
    
    container = $('<div class="overlay-option"><div class="overlay-option-header">J101,103,104</div></div>');
    select = $('<select id="overlay-option-jterm"><option value="0">Off</option><option value="1">On</option></select>');
    container.append(select);
    $('#secondaryView').append(container);
    
    container = $('<div class="overlay-option"><div class="overlay-option-header">Hong Kong Holds</div></div>');
    select = $('<select id="overlay-option-holding"><option value="0">Off</option><option value="1">ABC</option><option value="2">ABCDEFGH</option><option value="3">A-H + Alt</option></select>');
    container.append(select);
    $('#secondaryView').append(container);

    container = $('<div class="overlay-option"><div class="overlay-option-header">Other Holds</div></div>');
    select = $('<select id="overlay-option-otherholds"><option value="0">Off</option><option value="1">Macau ABC</option><option value="2">GOT</option><option value="3">Macau ABC + GOT</option></select>');
    container.append(select);
    $('#secondaryView').append(container);

    $('.overlay-option select').change(updateViews);
    
    updateViews();
})();
