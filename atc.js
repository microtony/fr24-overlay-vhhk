var vhhhatc = [];
var vhhhatccb = function() {};
(function() {
        
    var styles = '#atc-wrapper { position: relative; padding: 5px 125px 9px 276px; background-color: rgba(0, 0, 0, 0.4); } #atc-wrapper .atc { position: relative; display: inline-block; width: 152px; height: 14px; cursor: pointer; border-width: 1px; border-style: solid; border-color: #444; background-color: #666; color: #EEE; padding: 2px 4px; margin: 4px 4px 0 0; font-size: 11px; }';
    styles += '#atc-wrapper .atc-play { border-color: #112244; background-color: #285599; color: #99E5F5; } #atc-wrapper .atc-play.atc-rx { background-color: #5888CC; color: #AAFFFF; } #atc-wrapper .atc-play.atc-rx.atc-rx2 { background-color: #7899DD; color: #CCFFFF; }';
    styles += '#atc-wrapper .atc-icon { float: left; width: 14px; height: 14px; margin-right: 1px; background: url("http://www.microtony.com/fr24/images/playstop.png"); background-position: 0 0; overflow: hidden; } #atc-wrapper .atc-play .atc-icon { background-position: -14px -0px; }';
    styles += '#atc-toggle { cursor: pointer; font-size: 14px; text-decoration: underline; } .atc .atc-unavailable { position: absolute; z-index: 10; top: 0; left: 0; width: 100%; height: 100%; display: block; background: url(\'http://www.microtony.com/fr24/images/unavailable.png\') } .atc.atc-online .atc-unavailable { display: none }';
    styles += '.atc .atc-stereo { position: absolute; z-index: 5; right: 4px; top: 2px; width: 14px; height: 14px; background: url("http://www.microtony.com/fr24/images/playstop.png"); background-position: -28px 0px; display: none; } .atc.atc-play .atc-stereo { display: block; } .atc.atc-play .atc-stereo.atc-left { background-position: -42px 0px }  .atc.atc-play .atc-stereo.atc-right { background-position: -56px 0px }';
    styles += '#sm2-container { height: 10px; width: 10px; overflow: hidden;  display: inline-block; }';
    $('body').append('<style>'+styles+'</style>');

    var controlDiv = $('<div id="atc-wrapper"><div style="position: absolute; left: 208px; top: 8px; width: 216px; color: #FFF; font-size: 16px">ATC <a href="https://github.com/microtony/fr24-overlay-vhhk#atc-faq" target="_blank" style="color: #9DE; font-size: 12px">FAQ</a><div id="sm2-container"></div></div></div>');
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
            getButton(this.id).removeClass('atc-rx');
            getButton(this.id).removeClass('atc-rx2');
            channels[this.id] = null;
        },
        whileplaying: function() {
            if (this.peakData.left > 0 || this.peakData.right > 0) {
                if (this.peakData.left > 0.25 || this.peakData.right > 0.25) {
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
            url: 'http://www.microtony.com/fr24/swf/', // path to load SWF from (overriding default)
            bgColor: '#333333',
            wmode: 'transparent',
            debugMode: false,
            preferFlash: true,
            flashPollingInterval: 80,
            useHighPerformance: true,
            defaultOptions: {
                autoLoad: false,
                multiShot: true,
                usePeakData: true,
                onplay: airbanddelegate.onplay,
                onfinish: airbanddelegate.onfinish,
                onstop: airbanddelegate.onfinish,
                onsuspend: airbanddelegate.onfinish,
                onload: function(success) {
                    if (!success || this.playState!=1) {
                        getButton(this.id).removeClass('atc-play');
                        getButton(this.id).removeClass('atc-rx');
                        getButton(this.id).removeClass('atc-rx2');
                        channels['atc'+channel.freq].stop();
                        setTimeout(channels['atc'+channel.freq].destruct, 1000);
                        channels[this.id] = null;
                    }
                },
                whileplaying: airbanddelegate.whileplaying
            }
        });
        
        var soundURLs = [
            {name: 'Tower North', freq: 118200},
            {name: 'Tower South', freq: 118400},
            {name: 'Area East', freq: 118925},
            {name: 'Approach', freq: 119100},
            {name: 'Director', freq: 119500},
            {name: 'Zone', freq: 120600},
            {name: 'Information', freq: 121000},
            {name: 'Area East', freq: 121300},
            {name: 'Ground North', freq: 121600},
            {name: 'Departure High', freq: 122000},
            {name: 'Ground South', freq: 122550},
            {name: 'Area South', freq: 122950},
            {name: 'Departure', freq: 123800},
            {name: 'Macao', freq: 123950},
            {name: 'Terminal South', freq: 126300},
            {name: 'Terminal East', freq: 126500},
            {name: 'Depature ATIS', freq: 127050},
            {name: 'Area West', freq: 127100},
            {name: 'Terminal West', freq: 127550},
            {name: 'Arrival ATIS', freq: 128200},
            {name: 'VOLMET', freq: 128875},
            {name: 'Delivery', freq: 129900},
            {name: 'Area South', freq: 132150},
        ];
        for (var i=0; i<soundURLs.length; i++) {
            var freqs = ''+soundURLs[i].freq;
            var div = $('<div id="atc-'+freqs+'" class="atc"><div class="atc-unavailable"></div><div class="atc-icon"></div>'+freqs[0]+freqs[1]+freqs[2]+'.'+freqs[3]+freqs[4]+freqs[5]+' '+soundURLs[i].name+'</div>');
            div.data('cid', i).click(function(){
                var cid = parseInt($(this).data('cid'));
                var channel = soundURLs[cid];
                if (channels['atc'+channel.freq]) {
                    channels['atc'+channel.freq].stop();
                    setTimeout(channels['atc'+channel.freq].destruct, 1000);
                    channels['atc'+channel.freq] = null;
                } else {
                    channels['atc'+channel.freq] = soundManager.createSound({
                        id: 'atc-'+channel.freq,
                        url: 'http://icecast.microtony.com:8000/'+channel.freq+'.mp3?random=' + (new Date()).getTime()
                    });
                    channels['atc'+channel.freq].play();
                    $(this).children().removeClass('atc-left').removeClass('atc-right');
                }
            });
            div.append($('<i class="atc-stereo"></i>').click(function(event){
                var cid = parseInt($(this).parent().data('cid'));
                var channel = soundURLs[cid];
                if ($(this).hasClass('atc-left')) {
                    channels['atc'+channel.freq].setPan(100);
                    $(this).removeClass('atc-left').addClass('atc-right');
                } else if ($(this).hasClass('atc-right')) {
                    channels['atc'+channel.freq].setPan(0);
                    $(this).removeClass('atc-right');
                } else {
                    channels['atc'+channel.freq].setPan(-100);
                    $(this).addClass('atc-left');
                }
                event.stopPropagation();
            }));
            $('#atc-wrapper').append(div);
                        
            vhhhatccb = function() {
                $('.atc').removeClass('atc-online');
                for (var i=0; i<vhhhatc.length; i++) {
                    $('#atc-'+vhhhatc[i]).addClass('atc-online');
                }
            };
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

    smcheck();
    
})();