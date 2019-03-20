function drawMap(isCNUser, position){
    // [纬度, 经度]
    // map API:
    // https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}
    // https://map.cargosmart.com:8881/wmts/{z}/{x}/{y}
    // https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    // https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_en&size=1&scale=1&style=8&x={x}&y={y}&z={z}
    var backupMapTile = null;
    var backupMapName = null;
    var zoom = 9
    // var position = ;
    var mymap = L.map('mapContainer').setView(position, zoom);
    if (isCNUser) {
        // http://10.222.47.147:5000/
        // 测试本地tile是否可行
         L.tileLayer('http://10.222.47.147:5000/tiles/OSM/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 9,
        }).addTo(mymap);
        // // loading 高德地图
        // L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_en&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        //     attribution: 'Map data &copy; <a href="http://www.sdmap.gov.cn/MapApi.html">高德地图</a>',
        //     maxZoom: 18,
        //     subdomains: ['1', '2', '3', '4'],
        // }).addTo(mymap);
    }
    else {
        // loading OpenStreetMap API
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiaGFsb2xvbmciLCJhIjoiY2p0NmpxaGhvMGg4aTQ0cGo3YXRjYnp3YyJ9.AGxkzwK6K1rtCcoVSV25Eg',
        }).addTo(mymap);
    }
    var marker = L.marker(position).addTo(mymap)
}