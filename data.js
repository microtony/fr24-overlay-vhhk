(function() {
    var updater = function() {
        $.getJSON("http://www.microtony.com/fr24/data.php?callback=?", function(data) {
            vhhhauto = data.runway;
            vhhhatc = data.atc;
            vhhhautocb();
            vhhhatccb();
        });
    };
    setInterval(updater, 150000);
    setTimeout(updater, 1000);
})();
