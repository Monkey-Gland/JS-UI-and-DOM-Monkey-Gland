var stage = new Kinetic.Stage({
    container: 'canvas',
    width: 400,
    height:400
});

var layer = new Kinetic.Layer();

var rect = new Kinetic.Rect({
    x:0,
    y:0,
    width:100,
    height:100,
    fill:"#f00"
});

layer.add(rect);
stage.add(layer);
