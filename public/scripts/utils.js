function isIOS() {

    var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    while (iDevices.length) {
        if (navigator.platform === iDevices.pop()){ return true; }
    }

    return false;
}