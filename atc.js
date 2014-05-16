(function() {
        
    var styles = '#atc-wrapper { padding: 10px 130px 12px 220px; background-color: rgba(0, 0, 0, 0.4); } #atc-wrapper .atc { display: inline-block; width: 200px; cursor: pointer; border-width: 1px; border-style: solid; border-color: #555; background-color: #777; color: #EEE; padding: 3px 5px; margin: 4px 4px 0 0; font-size: 13px; }';
    styles += '#atc-wrapper .atc-play { border-color: #112244; background-color: #285599; color: #99E5F5; } #atc-wrapper .atc-play.atc-rx { background-color: #5888CC; color: #AAFFFF; } #atc-wrapper .atc-play.atc-rx.atc-rx2 { background-color: #7899DD; color: #CCFFFF; }';
    styles += '#atc-wrapper .atc-icon { float: left; width: 14px; height: 14px; margin-right: 6px; background: url("http://www.microtony.com/playstop.png"); overflow: hidden; } #atc-wrapper .atc-play .atc-icon { background-position: -15px 0 }';
    styles += '#atc-toggle { cursor: pointer; font-size: 14px; text-decoration: underline; }';
    styles += '#sm2-container { height: 10px; width: 10px; overflow: hidden;  display: inline-block; }';
    $('body').append('<style>'+styles+'</style>');

    var controlDiv = $('<div id="atc-wrapper"><div style="display: inline-block; width: 216px; color: #FFF; font-size: 20px">ATC <span style="font-size: 15px">(BETA) <a href="https://github.com/microtony/fr24-overlay-vhhk#atc-faq" target="_blank">FAQ</a></span><div id="sm2-container"></div></div></div>');
    controlDiv.index = 10;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv[0]);
    
    var channels = {};

    var getButton = function(id) {
        return $('#'+id);
    };
    
    var airbanddelegate = {
        onplay: function() {
            getButton(this.id).addClass('atc-play');
        },
        onfinish: function() {
            getButton(this.id).removeClass('atc-play');
        },
        whileplaying: function() {
            if (this.peakData.left > 0) {
                if (this.peakData.left > 0.3) {
                    getButton(this.id).addClass('atc-rx2');
                } else {
                    getButton(this.id).removeClass('atc-rx2');
                }
                getButton(this.id).addClass('atc-rx');
            } else {
                getButton(this.id).removeClass('atc-rx');
            }
        }
    };
    
    var smloaded = function() {
    
        soundManager.flashVersion = (window.location.toString().match(/#flash8/i)?8:9);
        if (soundManager.flashVersion != 8) {
            soundManager.useHighPerformance = true;
        }

        soundManager.setup({
            url: 'http://www.microtony.com/swf2/', // path to load SWF from (overriding default)
            bgColor: '#333333',
            wmode: 'transparent',
            debugMode: true,
            preferFlash: true,
            useFastPolling: 80,
            useHighPerformance: true,
            defaultOptions: {
                autoLoad: false,
                multiShot: true,
                usePeakData: true,
                onplay: airbanddelegate.onplay,
                onfinish: airbanddelegate.onfinish,
                onstop: airbanddelegate.onfinish,
                whileplaying: airbanddelegate.whileplaying
            }
        });
        
        var soundURLs = [
            {name: 'Area East', freq: 118925},
            {name: 'Approach', freq: 119100},
            {name: 'Director', freq: 119500},
            {name: 'Zone', freq: 120600},
            {name: 'Information', freq: 121000},
            {name: 'Area East', freq: 121300},
            {name: 'Departure High', freq: 122000},
            {name: 'Area South', freq: 122950},
            {name: 'Departure', freq: 123800},
            {name: 'Macao', freq: 123950},
            {name: 'Area South', freq: 125800},
            {name: 'Terminal South', freq: 126300},
            {name: 'Terminal East', freq: 126500},
            {name: 'Depature ATIS', freq: 127050},
            {name: 'Area West', freq: 127100},
            {name: 'Terminal West', freq: 127550},
            {name: 'Arrival ATIS', freq: 128200},
            {name: 'Area South', freq: 132150},
        ];
        for (var i=0; i<soundURLs.length; i++) {
            var freqs = ''+soundURLs[i].freq;
            var div = $('<div id="atc-'+freqs+'" class="atc"><div class="atc-icon"></div>'+freqs[0]+freqs[1]+freqs[2]+'.'+freqs[3]+freqs[4]+freqs[5]+' '+soundURLs[i].name+'</div>');
            div.data('cid', i).click(function(){
                var cid = parseInt($(this).data('cid'));
                var channel = soundURLs[cid];
                if (channels['atc'+channel.freq]) {
                    channels['atc'+channel.freq].stop();
                    channels['atc'+channel.freq].destruct();
                    channels['atc'+channel.freq] = null;
                } else {
                    channels['atc'+channel.freq] = soundManager.createSound({
                        id: 'atc-'+channel.freq,
                        url: 'http://icecast.microtony.com:8000/'+channel.freq+'.mp3?random=' + (new Date()).getTime()
                    });
                    channels['atc'+channel.freq].play();
                }
            });
            $('#atc-wrapper').append(div);
        }
        
    };
    
    // check sm loaded
    var smcheck = function() {
        if (typeof soundManager === "undefined") {
            setTimeout(smcheck, 1000);
        } else {
            smloaded();
        }
    };
    var js = document.createElement("script");
    js.src = "http://www.microtony.com/soundmanager2.js";
    document.body.appendChild(js);
    smcheck();
    
})();