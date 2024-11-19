ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-76.342450, -34.535935, -65.979292, -27.722928]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_map_1 = new ol.format.GeoJSON();
var features_map_1 = format_map_1.readFeatures(json_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map_1.addFeatures(features_map_1);
var lyr_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_map_1, 
                style: style_map_1,
                popuplayertitle: "map",
                interactive: true,
                title: '<img src="styles/legend/map_1.png" /> map'
            });

lyr_OSMStandard_0.setVisible(true);lyr_map_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_map_1];
lyr_map_1.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_map_1.set('fieldImages', {'objectid': 'Range', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_map_1.set('fieldLabels', {'objectid': 'no label', 'shape_leng': 'header label - always visible', 'dis_elec': 'no label', 'cir_sena': 'inline label - always visible', 'cod_comuna': 'no label', 'codregion': 'inline label - always visible', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', });
lyr_map_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});