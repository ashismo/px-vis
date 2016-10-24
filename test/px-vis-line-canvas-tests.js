document.addEventListener("WebComponentsReady", function() {
  runTests();
});

function runTests(){
  suite('px-vis-line does Polymer exist?', function() {
    test('Polymer exists', function() {
      assert.isTrue(Polymer !== null);
    });
  });

  suite('px-vis-line with two series renders to canvas', function() {
    var baseScale = document.getElementById('baseScale'),
        baseCanvas = document.getElementById('baseCanvas'),
        baseLine1 = document.getElementById('baseLine1'),
        baseLine2 = document.getElementById('baseLine2');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1,linePath2;

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y2": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y2": 21
          },{
            "x": 1397160780000,
            "y": 10,
            "y2": 3
          },{
            "x": 1397189940000,
            "y": 4,
            "y2": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y2": 27
          }
        ],
        completeSeriesConfig = {
          "mySeries":{
            "type":"line",
            "name":"mySeries",
            "x":"x",
            "y":"y",
            "color": "rgb(93,165,218)"
          },
          "mySeries2":{
            "type":"line",
            "name":"mySeries2",
            "x":"x",
            "y":"y2",
            "color": "rgb(250,164,58)"
          }
        },
        chartExtents = {"x":[1397102460000,1397219100000],"y":[0,27]},
        w = 500,
        h = 300,
        m = {
          "top": 10,
          "right": 5,
          "bottom": 20,
          "left": 15
        };

      baseCanvas.set('width',w);
      baseCanvas.set('height',h);
      baseCanvas.set('margin',m);

      baseScale.set('width',w);
      baseScale.set('height',h);
      baseScale.set('margin',m);
      baseScale.set('completeSeriesConfig',completeSeriesConfig);
      baseScale.set('chartExtents',chartExtents);
      baseScale.set('chartData',d);

      baseLine1.set('completeSeriesConfig',completeSeriesConfig);
      baseLine1.set('seriesId',"mySeries");
      baseLine1.set('chartData',d);

      baseLine2.set('completeSeriesConfig',completeSeriesConfig);
      baseLine2.set('seriesId',"mySeries2");
      baseLine2.set('chartData',d);
      setTimeout(function(){
        linePath1 = baseLine1.lineGroup;
        linePath2 = baseLine2.lineGroup;
        done();
      },100);;
    });

    test('baseLine1 fixture is created', function() {
      assert.isTrue(baseLine1 !== null);
    });
    test('baseLine2 fixture is created', function() {
      assert.isTrue(baseLine2 !== null);
    });

    test('context has correct total lines ', function() {
      assert.equal(baseCanvas.canvasContext._pxLinesTotal, 2);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(baseCanvas.canvasContext._pxLinesRedraw, 2);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(baseCanvas.canvasContext._pxLinesSeries).length, 2);
      assert.equal(baseCanvas.canvasContext._pxLinesSeries['mySeries'], true);
      assert.equal(baseCanvas.canvasContext._pxLinesSeries['mySeries2'], true);
    });
  }); //suite


  suite('px-vis-line with two series renders progressively to canvas', function() {
    var progressiveScale = document.getElementById('progressiveScale'),
        progressiveCanvas = document.getElementById('progressiveCanvas'),
        progressiveLine1 = document.getElementById('progressiveLine1'),
        progressiveLine2 = document.getElementById('progressiveLine2');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1,linePath2;

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y2": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y2": 21
          },{
            "x": 1397160780000,
            "y": 10,
            "y2": 3
          },{
            "x": 1397189940000,
            "y": 4,
            "y2": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y2": 27
          },{
            "x": 1397212460000,
            "y": 1,
            "y2": 1
          },{
            "x": 1397231620000,
            "y": 6,
            "y2": 21
          },{
            "x": 1397260780000,
            "y": 10,
            "y2": 3
          },{
            "x": 1397289940000,
            "y": 4,
            "y2": 10
          },{
            "x": 1397319100000,
            "y": 6,
            "y2": 27
          }
        ],
        completeSeriesConfig = {
          "mySeries":{
            "type":"line",
            "name":"mySeries",
            "x":"x",
            "y":"y",
            "color": "rgb(93,165,218)"
          },
          "mySeries2":{
            "type":"line",
            "name":"mySeries2",
            "x":"x",
            "y":"y2",
            "color": "rgb(250,164,58)"
          }
        },
        chartExtents = {"x":[1397102460000,1397319100000],"y":[0,27]},
        w = 500,
        h = 300,
        m = {
          "top": 10,
          "right": 5,
          "bottom": 20,
          "left": 15
        };

      progressiveCanvas.set('width',w);
      progressiveCanvas.set('height',h);
      progressiveCanvas.set('margin',m);

      progressiveScale.set('width',w);
      progressiveScale.set('height',h);
      progressiveScale.set('margin',m);
      progressiveScale.set('completeSeriesConfig',completeSeriesConfig);
      progressiveScale.set('chartExtents',chartExtents);
      progressiveScale.set('chartData',d);

      progressiveLine1.set('completeSeriesConfig',completeSeriesConfig);
      progressiveLine1.set('seriesId',"mySeries");
      progressiveLine1.set('chartData',d);

      progressiveLine2.set('completeSeriesConfig',completeSeriesConfig);
      progressiveLine2.set('seriesId',"mySeries2");
      progressiveLine2.set('chartData',d);
      setTimeout(function(){
        linePath1 = progressiveLine1.lineGroup;
        linePath2 = progressiveLine2.lineGroup;
        done();
      },100);;
    });

    test('progressiveLine1 fixture is created', function() {
      assert.isTrue(progressiveLine1 !== null);
    });
    test('progressiveLine2 fixture is created', function() {
      assert.isTrue(progressiveLine2 !== null);
    });

    test('context has correct total lines ', function() {
      assert.equal(progressiveCanvas.canvasContext._pxLinesTotal, 2);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(progressiveCanvas.canvasContext._pxLinesRedraw, 2);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(progressiveCanvas.canvasContext._pxLinesSeries).length, 2);
      assert.equal(progressiveCanvas.canvasContext._pxLinesSeries['mySeries'], true);
      assert.equal(progressiveCanvas.canvasContext._pxLinesSeries['mySeries2'], true);
    });
  }); //suite


  suite('px-vis-line with two series renders to canvas without progressive rendering', function() {
    var canvasOnceScale = document.getElementById('canvasOnceScale'),
        canvasOnce = document.getElementById('canvasOnce'),
        canvasOnceLine1 = document.getElementById('canvasOnceLine1'),
        canvasOnceLine2 = document.getElementById('canvasOnceLine2');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1,linePath2;

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y2": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y2": 21
          },{
            "x": 1397160780000,
            "y": 10,
            "y2": 3
          },{
            "x": 1397189940000,
            "y": 4,
            "y2": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y2": 27
          }
        ],
        completeSeriesConfig = {
          "mySeries":{
            "type":"line",
            "name":"mySeries",
            "x":"x",
            "y":"y",
            "color": "rgb(93,165,218)"
          },
          "mySeries2":{
            "type":"line",
            "name":"mySeries2",
            "x":"x",
            "y":"y2",
            "color": "rgb(250,164,58)"
          }
        },
        chartExtents = {"x":[1397102460000,1397219100000],"y":[0,27]},
        w = 500,
        h = 300,
        m = {
          "top": 10,
          "right": 5,
          "bottom": 20,
          "left": 15
        };

      canvasOnce.set('width',w);
      canvasOnce.set('height',h);
      canvasOnce.set('margin',m);

      canvasOnceScale.set('width',w);
      canvasOnceScale.set('height',h);
      canvasOnceScale.set('margin',m);
      canvasOnceScale.set('completeSeriesConfig',completeSeriesConfig);
      canvasOnceScale.set('chartExtents',chartExtents);
      canvasOnceScale.set('chartData',d);

      canvasOnceLine1.set('completeSeriesConfig',completeSeriesConfig);
      canvasOnceLine1.set('seriesId',"mySeries");
      canvasOnceLine1.set('chartData',d);

      canvasOnceLine2.set('completeSeriesConfig',completeSeriesConfig);
      canvasOnceLine2.set('seriesId',"mySeries2");
      canvasOnceLine2.set('chartData',d);
      setTimeout(function(){
        linePath1 = canvasOnceLine1.lineGroup;
        linePath2 = canvasOnceLine2.lineGroup;
        done();
      },100);;
    });

    test('canvasOnceLine1 fixture is created', function() {
      assert.isTrue(canvasOnceLine1 !== null);
    });
    test('canvasOnceLine2 fixture is created', function() {
      assert.isTrue(canvasOnceLine2 !== null);
    });

    test('context has correct total lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesTotal, 2);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesRedraw, 2);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(canvasOnce.canvasContext._pxLinesSeries).length, 2);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries'], true);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries2'], true);
    });
  }); //suite

  suite('px-vis-line mutes correctly', function() {
    var canvasOnceScale = document.getElementById('canvasOnceScale'),
        canvasOnce = document.getElementById('canvasOnce'),
        canvasOnceLine1 = document.getElementById('canvasOnceLine1'),
        canvasOnceLine2 = document.getElementById('canvasOnceLine2');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1,linePath2;

    suiteSetup(function(done){
      var mutedSeries = {
        "mySeries" : false,
        "mySeries2" : true
      };
      canvasOnceLine1.set('mutedSeries',mutedSeries);
      canvasOnceLine2.set('mutedSeries',mutedSeries);

      setTimeout(function(){
        linePath1 = canvasOnceLine1.lineGroup;
        linePath2 = canvasOnceLine2.lineGroup;
        done();
      },100);;
    });

    test('context has correct total lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesTotal, 2);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesRedraw, 2);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(canvasOnce.canvasContext._pxLinesSeries).length, 2);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries'], true);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries2'], true);
    });
  }); //suite

  suite('px-vis-line unmutes correctly', function() {
    var canvasOnceScale = document.getElementById('canvasOnceScale'),
        canvasOnce = document.getElementById('canvasOnce'),
        canvasOnceLine1 = document.getElementById('canvasOnceLine1'),
        canvasOnceLine2 = document.getElementById('canvasOnceLine2');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1,linePath2;

    suiteSetup(function(done){
      var mutedSeries = {
        "mySeries" : false,
        "mySeries2" : false
      };
      canvasOnceLine1.set('mutedSeries',mutedSeries);
      canvasOnceLine2.set('mutedSeries',mutedSeries);

      setTimeout(function(){
        linePath1 = canvasOnceLine1.lineGroup;
        linePath2 = canvasOnceLine2.lineGroup;
        done();
      },100);;
    });

    test('context has correct total lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesTotal, 2);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesRedraw, 2);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(canvasOnce.canvasContext._pxLinesSeries).length, 2);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries'], true);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries2'], true);
    });
  }); //suite

  suite('px-vis-line mutes to 0 correctly', function() {
    var canvasOnceScale = document.getElementById('canvasOnceScale'),
        canvasOnce = document.getElementById('canvasOnce'),
        canvasOnceLine1 = document.getElementById('canvasOnceLine1'),
        canvasOnceLine2 = document.getElementById('canvasOnceLine2');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1,linePath2;

    suiteSetup(function(done){
      var mutedSeries = {
        "mySeries" : false,
        "mySeries2" : true
      };
      canvasOnceLine1.set('mutedOpacity',0);
      canvasOnceLine2.set('mutedOpacity',0);
      canvasOnceLine1.set('mutedSeries',mutedSeries);
      canvasOnceLine2.set('mutedSeries',mutedSeries);

      setTimeout(function(){
        linePath1 = canvasOnceLine1.lineGroup;
        linePath2 = canvasOnceLine2.lineGroup;
        done();
      },100);;
    });

    test('context has correct total lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesTotal, 2);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(canvasOnce.canvasContext._pxLinesRedraw, 2);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(canvasOnce.canvasContext._pxLinesSeries).length, 2);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries'], true);
      assert.equal(canvasOnce.canvasContext._pxLinesSeries['mySeries2'], true);
    });
  }); //suite


  suite('px-vis-line renders parallel axis to canvas', function() {
    var parallelCanvasScale = document.getElementById('parallelCanvasScale'),
        parallelCanvasSVG = document.getElementById('parallelCanvasSVG'),
        parallelCanvasLine = document.getElementById('parallelCanvasLine');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1;

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y2": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y2": 21
          },{
            "x": 1397160780000,
            "y": 10,
            "y2": 3
          },{
            "x": 1397189940000,
            "y": 4,
            "y2": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y2": 27
          }
        ],
        completeSeriesConfig = {
          "x":{
            "type":"line",
            "name":"mySeries",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(93,165,218)"
          }
        },
        dim = ['y','y2'],
        chartExtents = {"x":['y','y2'],"y":{'y':[0,27],'y2':[0,27]}},
        w = 500,
        h = 300,
        m = {
          "top": 10,
          "right": 5,
          "bottom": 20,
          "left": 15
        };

      parallelCanvasSVG.set('width',w);
      parallelCanvasSVG.set('height',h);
      parallelCanvasSVG.set('margin',m);

      parallelCanvasScale.set('width',w);
      parallelCanvasScale.set('height',h);
      parallelCanvasScale.set('margin',m);
      parallelCanvasScale.set('completeSeriesConfig',completeSeriesConfig);
      parallelCanvasScale.set('chartExtents',chartExtents);
      parallelCanvasScale.set('dimensions',dim);
      parallelCanvasScale.set('axes',dim);
      parallelCanvasScale.set('chartData',d);

      parallelCanvasLine.set('completeSeriesConfig',completeSeriesConfig);
      parallelCanvasLine.set('seriesId',"x");
      parallelCanvasLine.set('chartData',d);

      setTimeout(function(){
        linePath1 = parallelCanvasLine.lineGroup;
        done();
      },1000);;
    });

    test('parallelCanvasLine fixture is created', function() {
      assert.isTrue(parallelCanvasLine !== null);
    });

    test('context has correct total lines ', function() {
      assert.equal(parallelCanvasSVG.canvasContext._pxLinesTotal, 1);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(parallelCanvasSVG.canvasContext._pxLinesRedraw, 1);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(parallelCanvasSVG.canvasContext._pxLinesSeries).length, 1);
      assert.equal(parallelCanvasSVG.canvasContext._pxLinesSeries['x'], true);
    });

  }); //suite

  suite('px-vis-line renders parallel axis with gradient to canvas', function() {
    var parallelGradientCanvasScale = document.getElementById('parallelGradientCanvasScale'),
        parallelGradientCanvasSVG = document.getElementById('parallelGradientCanvasSVG'),
        parallelGradientCanvasLine = document.getElementById('parallelGradientCanvasLine');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1;

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y2": 1
          },{
            "x": 1397131620000,
            "y": 6,
            "y2": 21
          },{
            "x": 1397160780000,
            "y": 10,
            "y2": 3
          },{
            "x": 1397189940000,
            "y": 4,
            "y2": 10
          },{
            "x": 1397219100000,
            "y": 6,
            "y2": 27
          }
        ],
        completeSeriesConfig = {
          "x":{
            "type":"line",
            "name":"mySeries",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(93,165,218)"
          }
        },
        dim = ['y','y2'],
        chartExtents = {"x":['y','y2'],"y":{'y':[0,27],'y2':[0,27]}},
        w = 500,
        h = 300,
        m = {
          "top": 10,
          "right": 5,
          "bottom": 20,
          "left": 15
        };

      parallelGradientCanvasSVG.set('width',w);
      parallelGradientCanvasSVG.set('height',h);
      parallelGradientCanvasSVG.set('margin',m);

      parallelGradientCanvasScale.set('width',w);
      parallelGradientCanvasScale.set('height',h);
      parallelGradientCanvasScale.set('margin',m);
      parallelGradientCanvasScale.set('completeSeriesConfig',completeSeriesConfig);
      parallelGradientCanvasScale.set('chartExtents',chartExtents);
      parallelGradientCanvasScale.set('dimensions',dim);
      parallelGradientCanvasScale.set('axes',dim);
      parallelGradientCanvasScale.set('chartData',d);

      parallelGradientCanvasLine.set('completeSeriesConfig',completeSeriesConfig);
      parallelGradientCanvasLine.set('seriesId',"x");
      parallelGradientCanvasLine.set('chartData',d);

      setTimeout(function(){
        linePath1 = parallelGradientCanvasLine.lineGroup;
        done();
      },1000);;
    });

    test('parallelCanvasLine fixture is created', function() {
      assert.isTrue(parallelGradientCanvasLine !== null);
    });

    test('context has correct total lines ', function() {
      assert.equal(parallelGradientCanvasSVG.canvasContext._pxLinesTotal, 1);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(parallelGradientCanvasSVG.canvasContext._pxLinesRedraw, 1);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(parallelCanvasSVG.canvasContext._pxLinesSeries).length, 1);
      assert.equal(parallelGradientCanvasSVG.canvasContext._pxLinesSeries['x'], true);
    });

  }); //suite

  suite('px-vis-line renders parallel axis with categories to canvas', function() {
    var parallelCategoryCanvasScale = document.getElementById('parallelCategoryCanvasScale'),
        parallelCategoryCanvasSVG = document.getElementById('parallelCategoryCanvasSVG'),
        parallelCategoryCanvasLine = document.getElementById('parallelCategoryCanvasLine');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1;

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y2": 1,
            'cat': 'a'
          },{
            "x": 1397131620000,
            "y": 6,
            "y2": 21,
            'cat': 'a'
          },{
            "x": 1397160780000,
            "y": 10,
            "y2": 3,
            'cat': 'b'
          },{
            "x": 1397189940000,
            "y": 4,
            "y2": 10,
            'cat': 'a'
          },{
            "x": 1397219100000,
            "y": 6,
            "y2": 27,
            'cat': 'b'
          }
        ],
        completeSeriesConfig = {
          "x":{
            "type":"line",
            "name":"mySeries",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(93,165,218)"
          },
          "a":{
            "type":"line",
            "name":"a",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(93,165,218)"
          },
          "b":{
            "type":"line",
            "name":"b",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(250,164,58)"
          }
        },
        dim = ['y','y2'],
        chartExtents = {"x":['y','y2'],"y":{'y':[0,27],'y2':[0,27]}},
        categories = ['a','b'],
        w = 500,
        h = 300,
        m = {
          "top": 10,
          "right": 5,
          "bottom": 20,
          "left": 15
        };

      parallelCategoryCanvasSVG.set('width',w);
      parallelCategoryCanvasSVG.set('height',h);
      parallelCategoryCanvasSVG.set('margin',m);

      parallelCategoryCanvasScale.set('width',w);
      parallelCategoryCanvasScale.set('height',h);
      parallelCategoryCanvasScale.set('margin',m);
      parallelCategoryCanvasScale.set('completeSeriesConfig',completeSeriesConfig);
      parallelCategoryCanvasScale.set('chartExtents',chartExtents);
      parallelCategoryCanvasScale.set('dimensions',dim);
      parallelCategoryCanvasScale.set('axes',dim);
      parallelCategoryCanvasScale.set('chartData',d);

      parallelCategoryCanvasLine.set('completeSeriesConfig',completeSeriesConfig);
      parallelCategoryCanvasLine.set('seriesId',"x");
      parallelCategoryCanvasLine.set('categoryKey','cat');
      parallelCategoryCanvasLine.set('categories',categories);
      parallelCategoryCanvasLine.set('chartData',d);

      setTimeout(function(){
        linePath1 = parallelCategoryCanvasLine.lineGroup;
        done();
      },1000);;
    });

    test('parallelCanvasLine fixture is created', function() {
      assert.isTrue(parallelCategoryCanvasLine !== null);
    });

    test('context has correct total lines ', function() {
      assert.equal(parallelCategoryCanvasSVG.canvasContext._pxLinesTotal, 1);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(parallelCategoryCanvasSVG.canvasContext._pxLinesRedraw, 1);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(parallelCategoryCanvasSVG.canvasContext._pxLinesSeries).length, 1);
      assert.equal(parallelCategoryCanvasSVG.canvasContext._pxLinesSeries['x'], true);
    });

  }); //suite

  suite('px-vis-line renders parallel axis with categories and gradient to canvas', function() {
    var parallelCategoryGradientCanvasScale = document.getElementById('parallelCategoryGradientCanvasScale'),
        parallelCategoryGradientCanvasSVG = document.getElementById('parallelCategoryGradientCanvasSVG'),
        parallelCategoryGradientCanvasLine = document.getElementById('parallelCategoryGradientCanvasLine');

    var colorOrder = commonColors.properties.seriesColorOrder.value;
    var colorSet = commonColors.properties.dataVisColors.value;
    var linePath1;

    suiteSetup(function(done){
      var d = [{
            "x": 1397102460000,
            "y": 1,
            "y2": 1,
            'cat': 'a'
          },{
            "x": 1397131620000,
            "y": 6,
            "y2": 21,
            'cat': 'a'
          },{
            "x": 1397160780000,
            "y": 10,
            "y2": 3,
            'cat': 'b'
          },{
            "x": 1397189940000,
            "y": 4,
            "y2": 10,
            'cat': 'a'
          },{
            "x": 1397219100000,
            "y": 6,
            "y2": 27,
            'cat': 'b'
          }
        ],
        completeSeriesConfig = {
          "x":{
            "type":"line",
            "name":"mySeries",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(93,165,218)"
          },
          "a":{
            "type":"line",
            "name":"a",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(93,165,218)"
          },
          "b":{
            "type":"line",
            "name":"b",
            "x":['y','y2'],
            "y":['y','y2'],
            "color": "rgb(250,164,58)"
          }
        },
        dim = ['y','y2'],
        chartExtents = {"x":['y','y2'],"y":{'y':[0,27],'y2':[0,27]}},
        categories = ['a','b'],
        w = 500,
        h = 300,
        m = {
          "top": 10,
          "right": 5,
          "bottom": 20,
          "left": 15
        };

      parallelCategoryGradientCanvasSVG.set('width',w);
      parallelCategoryGradientCanvasSVG.set('height',h);
      parallelCategoryGradientCanvasSVG.set('margin',m);

      parallelCategoryGradientCanvasScale.set('width',w);
      parallelCategoryGradientCanvasScale.set('height',h);
      parallelCategoryGradientCanvasScale.set('margin',m);
      parallelCategoryGradientCanvasScale.set('completeSeriesConfig',completeSeriesConfig);
      parallelCategoryGradientCanvasScale.set('chartExtents',chartExtents);
      parallelCategoryGradientCanvasScale.set('dimensions',dim);
      parallelCategoryGradientCanvasScale.set('axes',dim);
      parallelCategoryGradientCanvasScale.set('chartData',d);

      parallelCategoryGradientCanvasLine.set('completeSeriesConfig',completeSeriesConfig);
      parallelCategoryGradientCanvasLine.set('seriesId',"x");
      parallelCategoryGradientCanvasLine.set('categoryKey','cat');
      parallelCategoryGradientCanvasLine.set('categories',categories);
      parallelCategoryGradientCanvasLine.set('chartData',d);

      setTimeout(function(){
        linePath1 = parallelCategoryGradientCanvasLine.lineGroup;
        done();
      },1000);
    });

    test('parallelCanvasLine fixture is created', function() {
      assert.isTrue(parallelCategoryGradientCanvasLine !== null);
    });

    test('context has correct total lines ', function() {
      assert.equal(parallelCategoryGradientCanvasSVG.canvasContext._pxLinesTotal, 1);
    });

    test('context has drawn 2 lines ', function() {
      assert.equal(parallelCategoryGradientCanvasSVG.canvasContext._pxLinesRedraw, 1);
    });

    test('context has added both to its list', function() {
      assert.equal(Object.keys(parallelCategoryGradientCanvasSVG.canvasContext._pxLinesSeries).length, 1);
      assert.equal(parallelCategoryGradientCanvasSVG.canvasContext._pxLinesSeries['x'], true);
    });
  }); //suite

  // suite('px-vis-line polar works', function() {
  //   var polarScale = document.getElementById('polarScale'),
  //       polarCanvas = document.getElementById('polarCanvas'),
  //       polarLine = document.getElementById('polarLine');
  //
  //   var colorOrder = commonColors.properties.seriesColorOrder.value;
  //   var colorSet = commonColors.properties.dataVisColors.value;
  //   var linePath;
  //
  //   suiteSetup(function(done){
  //     var d = [{
  //           "x": 0,
  //           "y": 0
  //         },{
  //           "x": 0,
  //           "y": 3
  //         },{
  //           "x": Math.PI/2,
  //           "y": 3
  //         },{
  //           "x": Math.PI,
  //           "y": 5
  //         },{
  //           "x": Math.PI * 3/2,
  //           "y": 3
  //         },{
  //           "x": Math.PI * 2,
  //           "y": 5
  //         }
  //       ],
  //       completeSeriesConfig = {
  //         "mySeries": {
  //           "type":"line",
  //           "name":"Data",
  //           "y":"y",
  //           "x":"x",
  //           "color":"rgb(93,165,218)"
  //         }
  //       },
  //       w = 500,
  //       h = 500,
  //       min = 480/2,
  //       offset = [250,250],
  //       m = {
  //         "top": 10,
  //         "right": 10,
  //         "bottom": 10,
  //         "left": 10
  //       };
  //
  //     polarScale.set('width',min);
  //     polarScale.set('margin',m);
  //     polarScale.set('amplitudeKeys',['y']);
  //     polarScale.set('chartData',d);
  //
  //     polarCanvas.set('width',w);
  //     polarCanvas.set('height',h);
  //     polarCanvas.set('margin',m);
  //     polarCanvas.set('offset',offset);
  //
  //     polarLine.set('seriesId',"mySeries");
  //     polarLine.set('completeSeriesConfig',completeSeriesConfig);
  //     polarLine.set('chartData',d);
  //
  //     // needed for the debounce in line
  //     setTimeout(function(){
  //       linePath =  polarLine.lineGroup;
  //       done();
  //     },100);
  //   });
  //
  //   test('polarLine fixture is created', function() {
  //     assert.isTrue(polarLine !== null);
  //   });
  //
  //   test('context has correct total lines ', function() {
  //     assert.equal(polarCanvas.canvasContext._pxLinesTotal, 1);
  //   });
  //
  //   test('context has drawn 1 lines ', function() {
  //     debugger
  //     assert.equal(polarCanvas.canvasContext._pxLinesRedraw, 1);
  //   });
  // }); //suite

  //
  // suite('px-vis-line polar with degrees and counter clockwise works', function() {
  //   var polarDegreeScale = document.getElementById('polarDegreeScale'),
  //       polarDegreeSVG = document.getElementById('polarDegreeSVG'),
  //       polarDegreeLine = document.getElementById('polarDegreeLine');
  //
  //   var colorOrder = commonColors.properties.seriesColorOrder.value;
  //   var colorSet = commonColors.properties.dataVisColors.value;
  //   var linePath;
  //
  //   suiteSetup(function(done){
  //     var d = [{
  //           "x": 0,
  //           "y": 0
  //         },{
  //           "x": 0,
  //           "y": 3
  //         },{
  //           "x": 90,
  //           "y": 3
  //         },{
  //           "x": 180,
  //           "y": 5
  //         },{
  //           "x": 270,
  //           "y": 3
  //         },{
  //           "x": 0,
  //           "y": 5
  //         }
  //       ],
  //       completeSeriesConfig = {
  //         "mySeries": {
  //           "type":"line",
  //           "name":"Data",
  //           "y":"y",
  //           "x":"x",
  //           "color":"rgb(93,165,218)"
  //         }
  //       },
  //       w = 500,
  //       h = 500,
  //       min = 480/2,
  //       offset = [250,250],
  //       m = {
  //         "top": 10,
  //         "right": 10,
  //         "bottom": 10,
  //         "left": 10
  //       };
  //     polarDegreeSVG.set('width',w);
  //     polarDegreeSVG.set('height',h);
  //     polarDegreeSVG.set('margin',m);
  //     polarDegreeSVG.set('offset',offset);
  //
  //     polarDegreeScale.set('width',min);
  //     polarDegreeScale.set('margin',m);
  //     polarDegreeScale.set('amplitudeKeys',['y']);
  //     polarDegreeScale.set('chartData',d);
  //
  //     polarDegreeLine.set('seriesId',"mySeries");
  //     polarDegreeLine.set('completeSeriesConfig',completeSeriesConfig);
  //     polarDegreeLine.set('chartData',d);
  //
  //     // needed for the debounce in line
  //     setTimeout(function(){
  //       linePath =  polarDegreeLine.lineGroup.select('path.series-line');
  //       done();
  //     },100);
  //   });
  //
  //   test('polarDegreeLine fixture is created', function() {
  //     assert.isTrue(polarDegreeLine !== null);
  //   });
  //
  //   test('polarDegreeLine linePath created', function() {
  //     assert.equal(linePath.node().tagName,'path');
  //   });
  //
  //   test('polarDegreeLine line series ID', function() {
  //     assert.equal(linePath.attr('series-id'),'line_mySeries');
  //   });
  //
  //   test('polarDegreeLine line series has the right color', function() {
  //     assert.equal(linePath.attr('stroke').split(' ').join(''),colorSet[ colorOrder[0] ]);
  //   });
  //
  //   test('polarDegreeLine line d', function() {
  //     //extract just the ints. who cares about the decimals
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = re.exec(linePath.attr('d'));
  //
  //     assert.closeTo(Number(matches[1]),0,1);
  //     assert.closeTo(Number(matches[2]),0,1);
  //     assert.closeTo(Number(matches[3]),0,1);
  //     assert.closeTo(Number(matches[4]),-144,1);
  //     assert.closeTo(Number(matches[5]),144,1);
  //     assert.closeTo(Number(matches[6]),-8,1);
  //     assert.closeTo(Number(matches[7]),2,1);
  //     assert.closeTo(Number(matches[8]),240,1);
  //     assert.closeTo(Number(matches[9]),-144,1);
  //     assert.closeTo(Number(matches[10]),2,1);
  //     assert.closeTo(Number(matches[11]),0,1);
  //     assert.closeTo(Number(matches[12]),-240,1);
  //   });
  // }); //suite
  //
  // suite('px-vis-line polar with degrees and counter clockwise works', function() {
  //   var polarCCWScale = document.getElementById('polarCCWScale'),
  //       polarCCWSVG = document.getElementById('polarCCWSVG'),
  //       polarCCWLine = document.getElementById('polarCCWLine');
  //
  //   var colorOrder = commonColors.properties.seriesColorOrder.value;
  //   var colorSet = commonColors.properties.dataVisColors.value;
  //   var linePath;
  //
  //   suiteSetup(function(done){
  //     var d = [{
  //           "x": 0,
  //           "y": 0
  //         },{
  //           "x": 0,
  //           "y": 3
  //         },{
  //           "x": Math.PI/2,
  //           "y": 3
  //         },{
  //           "x": Math.PI,
  //           "y": 5
  //         },{
  //           "x": Math.PI * 3/2,
  //           "y": 3
  //         },{
  //           "x": Math.PI * 2,
  //           "y": 5
  //         }
  //       ],
  //       completeSeriesConfig = {
  //         "mySeries": {
  //           "type":"line",
  //           "name":"Data",
  //           "y":"y",
  //           "x":"x",
  //           "color":"rgb(93,165,218)"
  //         }
  //       },
  //       w = 500,
  //       h = 500,
  //       min = 480/2,
  //       offset = [250,250],
  //       m = {
  //         "top": 10,
  //         "right": 10,
  //         "bottom": 10,
  //         "left": 10
  //       };
  //     polarCCWSVG.set('width',w);
  //     polarCCWSVG.set('height',h);
  //     polarCCWSVG.set('margin',m);
  //     polarCCWSVG.set('offset',offset);
  //
  //     polarCCWScale.set('width',min);
  //     polarCCWScale.set('margin',m);
  //     polarCCWScale.set('amplitudeKeys',['y']);
  //     polarCCWScale.set('chartData',d);
  //
  //     polarCCWLine.set('seriesId',"mySeries");
  //     polarCCWLine.set('completeSeriesConfig',completeSeriesConfig);
  //     polarCCWLine.set('chartData',d);
  //
  //     // needed for the debounce in line
  //     setTimeout(function(){
  //       linePath =  polarCCWLine.lineGroup.select('path.series-line');
  //       done();
  //     },100);
  //   });
  //
  //   test('polarCCWLine fixture is created', function() {
  //     assert.isTrue(polarCCWLine !== null);
  //   });
  //
  //   test('polarCCWLine linePath created', function() {
  //     assert.equal(linePath.node().tagName,'path');
  //   });
  //
  //   test('polarCCWLine line series ID', function() {
  //     assert.equal(linePath.attr('series-id'),'line_mySeries');
  //   });
  //
  //   test('polarCCWLine line series has the right color', function() {
  //     assert.equal(linePath.attr('stroke').split(' ').join(''),colorSet[ colorOrder[0] ]);
  //   });
  //
  //   test('polarCCWLine line d', function() {
  //     //extract just the ints. who cares about the decimals
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = re.exec(linePath.attr('d'));
  //
  //     assert.closeTo(Number(matches[1]),0,1);
  //     assert.closeTo(Number(matches[2]),0,1);
  //     assert.closeTo(Number(matches[3]),0,1);
  //     assert.closeTo(Number(matches[4]),-144,1);
  //     assert.closeTo(Number(matches[5]),-144,1);
  //     assert.closeTo(Number(matches[6]),-8,1);
  //     assert.closeTo(Number(matches[7]),-2,1);
  //     assert.closeTo(Number(matches[8]),240,1);
  //     assert.closeTo(Number(matches[9]),144,1);
  //     assert.closeTo(Number(matches[10]),2,1);
  //     assert.closeTo(Number(matches[11]),5,1);
  //     assert.closeTo(Number(matches[12]),-240,1);
  //   });
  // }); //suite
  //
  //
  // suite('px-vis-line polar with degrees and counter clockwise works', function() {
  //   var polarDegreeCCWScale = document.getElementById('polarDegreeCCWScale'),
  //       polarDegreeCCWSVG = document.getElementById('polarDegreeCCWSVG'),
  //       polarDegreeCCWLine = document.getElementById('polarDegreeCCWLine');
  //
  //   var colorOrder = commonColors.properties.seriesColorOrder.value;
  //   var colorSet = commonColors.properties.dataVisColors.value;
  //   var linePath;
  //
  //   suiteSetup(function(done){
  //     var d = [{
  //           "x": 0,
  //           "y": 0
  //         },{
  //           "x": 0,
  //           "y": 3
  //         },{
  //           "x": 90,
  //           "y": 3
  //         },{
  //           "x": 180,
  //           "y": 5
  //         },{
  //           "x": 270,
  //           "y": 3
  //         },{
  //           "x": 0,
  //           "y": 5
  //         }
  //       ],
  //       completeSeriesConfig = {
  //         "mySeries": {
  //           "type":"line",
  //           "name":"Data",
  //           "y":"y",
  //           "x":"x",
  //           "color":"rgb(93,165,218)"
  //         }
  //       },
  //       w = 500,
  //       h = 500,
  //       min = 480/2,
  //       offset = [250,250],
  //       m = {
  //         "top": 10,
  //         "right": 10,
  //         "bottom": 10,
  //         "left": 10
  //       };
  //     polarDegreeCCWSVG.set('width',w);
  //     polarDegreeCCWSVG.set('height',h);
  //     polarDegreeCCWSVG.set('margin',m);
  //     polarDegreeCCWSVG.set('offset',offset);
  //
  //     polarDegreeCCWScale.set('width',min);
  //     polarDegreeCCWScale.set('margin',m);
  //     polarDegreeCCWScale.set('amplitudeKeys',['y']);
  //     polarDegreeCCWScale.set('chartData',d);
  //
  //     polarDegreeCCWLine.set('seriesId',"mySeries");
  //     polarDegreeCCWLine.set('completeSeriesConfig',completeSeriesConfig);
  //     polarDegreeCCWLine.set('chartData',d);
  //
  //     // needed for the debounce in line
  //     setTimeout(function(){
  //       linePath =  polarDegreeCCWLine.lineGroup.select('path.series-line');
  //       done();
  //     },100);
  //   });
  //
  //   test('polarDegreeCCWLine fixture is created', function() {
  //     assert.isTrue(polarDegreeCCWLine !== null);
  //   });
  //
  //   test('polarDegreeCCWLine linePath created', function() {
  //     assert.equal(linePath.node().tagName,'path');
  //   });
  //
  //   test('polarDegreeCCWLine line series ID', function() {
  //     assert.equal(linePath.attr('series-id'),'line_mySeries');
  //   });
  //
  //   test('polarDegreeCCWLine line series has the right color', function() {
  //     assert.equal(linePath.attr('stroke').split(' ').join(''),colorSet[ colorOrder[0] ]);
  //   });
  //
  //   test('polarDegreeCCWLine line d', function() {
  //     //extract just the ints. who cares about the decimals
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = re.exec(linePath.attr('d'));
  //
  //     assert.closeTo(Number(matches[1]),0,1);
  //     assert.closeTo(Number(matches[2]),0,1);
  //     assert.closeTo(Number(matches[3]),0,1);
  //     assert.closeTo(Number(matches[4]),-144,1);
  //     assert.closeTo(Number(matches[5]),-144,1);
  //     assert.closeTo(Number(matches[6]),-8,1);
  //     assert.closeTo(Number(matches[7]),-2,1);
  //     assert.closeTo(Number(matches[8]),240,1);
  //     assert.closeTo(Number(matches[9]),144,1);
  //     assert.closeTo(Number(matches[10]),2,1);
  //     assert.closeTo(Number(matches[11]),0,1);
  //     assert.closeTo(Number(matches[12]),-240,1);
  //   });
  // }); //suite
  //
  // suite('px-vis-line polar missing data works', function() {
  //   var polarMissingScale = document.getElementById('polarMissingScale'),
  //       polarMissingSVG = document.getElementById('polarMissingSVG'),
  //       polarMissingLine = document.getElementById('polarMissingLine');
  //
  //   var colorOrder = commonColors.properties.seriesColorOrder.value;
  //   var colorSet = commonColors.properties.dataVisColors.value;
  //   var linePath;
  //
  //   suiteSetup(function(done){
  //     var d = [{
  //           "x": 0,
  //           "y": 0
  //         },{
  //           "x": 0,
  //           "y": 3
  //         },{
  //           "x": Math.PI/2,
  //           "y": null
  //         },{
  //           "x": Math.PI
  //         },{
  //           "x": Math.PI * 3/2,
  //           "y": 3
  //         },{
  //           "x": Math.PI * 2,
  //           "y": 5
  //         }
  //       ],
  //       completeSeriesConfig = {
  //         "mySeries": {
  //           "type":"line",
  //           "name":"Data",
  //           "y":"y",
  //           "x":"x",
  //           "color":"rgb(93,165,218)"
  //         }
  //       },
  //       w = 500,
  //       h = 500,
  //       min = 480/2,
  //       offset = [250,250],
  //       m = {
  //         "top": 10,
  //         "right": 10,
  //         "bottom": 10,
  //         "left": 10
  //       };
  //     polarMissingSVG.set('width',w);
  //     polarMissingSVG.set('height',h);
  //     polarMissingSVG.set('margin',m);
  //     polarMissingSVG.set('offset',offset);
  //
  //     polarMissingScale.set('width',min);
  //     polarMissingScale.set('margin',m);
  //     polarMissingScale.set('amplitudeKeys',['y']);
  //     polarMissingScale.set('chartData',d);
  //
  //     polarMissingLine.set('seriesId',"mySeries");
  //     polarMissingLine.set('completeSeriesConfig',completeSeriesConfig);
  //     polarMissingLine.set('chartData',d);
  //
  //     // needed for the debounce in line
  //     setTimeout(function(){
  //       linePath =  polarMissingLine.lineGroup.select('path.series-line');
  //       done();
  //     },100);
  //   });
  //
  //   test('polarMissingLine fixture is created', function() {
  //     assert.isTrue(polarMissingLine !== null);
  //   });
  //
  //   test('polarMissingLine linePath created', function() {
  //     assert.equal(linePath.node().tagName,'path');
  //   });
  //
  //   test('polarMissingLine line series ID', function() {
  //     assert.equal(linePath.attr('series-id'),'line_mySeries');
  //   });
  //
  //   test('polarMissingLine line series has the right color', function() {
  //     assert.equal(linePath.attr('stroke').split(' ').join(''),colorSet[ colorOrder[0] ]);
  //   });
  //
  //   test('polarMissingLine line d', function() {
  //     //extract just the ints. who cares about the decimals
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = re.exec(linePath.attr('d'));
  //
  //     assert.closeTo(Number(matches[1]),0,1);
  //     assert.closeTo(Number(matches[2]),0,1);
  //     assert.closeTo(Number(matches[3]),0,1);
  //     assert.closeTo(Number(matches[4]),-144,1);
  //     assert.closeTo(Number(matches[5]),-144,1);
  //     assert.closeTo(Number(matches[6]),2,1);
  //     assert.closeTo(Number(matches[7]),-5,1);
  //     assert.closeTo(Number(matches[8]),-240,1);
  //   });
  // }); //suite
  //
  //
  // suite('px-vis-line renders radar to SVG', function() {
  //   var radarScale = document.getElementById('radarScale'),
  //       radarSVG = document.getElementById('radarSVG'),
  //       radarLine = document.getElementById('radarLine');
  //
  //   var colorOrder = commonColors.properties.seriesColorOrder.value;
  //   var colorSet = commonColors.properties.dataVisColors.value;
  //   var linePath;
  //
  //   suiteSetup(function(done){
  //     var d = [{
  //           "x": 1397102460000,
  //           "y": 1,
  //           "y1": 1,
  //           "y2": 1
  //         },{
  //           "x": 1397131620000,
  //           "y": 6,
  //           "y1": 15,
  //           "y2": 21
  //         },{
  //           "x": 1397160780000,
  //           "y": 10,
  //           "y1": 8,
  //           "y2": 3
  //         },{
  //           "x": 1397189940000,
  //           "y": 4,
  //           "y1": 10,
  //           "y2": 10
  //         },{
  //           "x": 1397219100000,
  //           "y": 6,
  //           "y1": 20,
  //           "y2": 27
  //         }
  //       ],
  //       completeSeriesConfig = {
  //         "x":{
  //           "type":"line",
  //           "name":"mySeries",
  //           "x":['y','y1','y2'],
  //           "y":['y','y1','y2'],
  //           "color": "rgb(93,165,218)"
  //         }
  //       },
  //       dim = ['y','y1','y2'],
  //       w = 500,
  //       h = 500,
  //       min = 480/2,
  //       offset = [250,250],
  //       m = {
  //         "top": 10,
  //         "right": 10,
  //         "bottom": 10,
  //         "left": 10
  //       };
  //
  //     radarSVG.set('width',w);
  //     radarSVG.set('height',h);
  //     radarSVG.set('margin',m);
  //     radarSVG.set('offset',offset);
  //
  //     radarScale.set('width',min);
  //     radarScale.set('margin',m);
  //     radarScale.set('amplitudeKeys',dim);
  //     radarScale.set('centerOffset',50);
  //     radarScale.set('chartData',d);
  //
  //     radarLine.set('completeSeriesConfig',completeSeriesConfig);
  //     radarLine.set('seriesId',"x");
  //     radarLine.set('chartData',d);
  //
  //     setTimeout(function(){
  //       linePath = radarLine.lineGroup.selectAll('path.series-line');
  //       done();
  //     },500);;
  //   });
  //
  //   test('radarLine fixture is created', function() {
  //     assert.isTrue(radarLine !== null);
  //   });
  //
  //   test('radarLine linePath created', function() {
  //     assert.equal(linePath.node().tagName,'path');
  //   });
  //
  //   test('radarLine linePath created 5 lines', function() {
  //     assert.equal(linePath.nodes().length,5);
  //   });
  //
  //   test('radarLine lines have a series ID', function() {
  //     assert.equal(d3.select(linePath.nodes()[0]).attr('series-id'),'line_1397102460000');
  //     assert.equal(d3.select(linePath.nodes()[1]).attr('series-id'),'line_1397131620000');
  //     assert.equal(d3.select(linePath.nodes()[2]).attr('series-id'),'line_1397160780000');
  //     assert.equal(d3.select(linePath.nodes()[3]).attr('series-id'),'line_1397189940000');
  //     assert.equal(d3.select(linePath.nodes()[4]).attr('series-id'),'line_1397219100000');
  //   });
  //
  //   test('radarLine line series has the right color', function() {
  //     assert.equal(d3.select(linePath.nodes()[0]).attr('stroke').split(' ').join(''),colorSet[ colorOrder[0] ]);
  //   });
  //
  //   test('radarLine line d', function() {
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = [];
  //     for(var i = 0; i < 5; i++){
  //       matches.push(re.exec(Px.d3.select(linePath.nodes()[i]).attr('d')));
  //     }
  //
  //     assert.closeTo(Number(matches[0][1]),0,1);
  //     assert.closeTo(Number(matches[0][2]),-50,1);
  //     assert.closeTo(Number(matches[0][3]),43,1);
  //     assert.closeTo(Number(matches[0][4]),24,1);
  //     assert.closeTo(Number(matches[0][5]),-43,1);
  //     assert.closeTo(Number(matches[0][6]),25,1);
  //     assert.closeTo(Number(matches[0][7]),0,1);
  //     assert.closeTo(Number(matches[0][8]),-50,1);
  //
  //     assert.closeTo(Number(matches[1][1]),0,1);
  //     assert.closeTo(Number(matches[1][2]),-86,1);
  //     assert.closeTo(Number(matches[1][3]),131,1);
  //     assert.closeTo(Number(matches[1][4]),75,1);
  //     assert.closeTo(Number(matches[1][5]),-169,1);
  //     assert.closeTo(Number(matches[1][6]),98,1);
  //     assert.closeTo(Number(matches[1][7]),0,1);
  //     assert.closeTo(Number(matches[1][8]),-86,1);
  //
  //     assert.closeTo(Number(matches[2][1]),0,1);
  //     assert.closeTo(Number(matches[2][2]),-115,1);
  //     assert.closeTo(Number(matches[2][3]),87,1);
  //     assert.closeTo(Number(matches[2][4]),50,1);
  //     assert.closeTo(Number(matches[2][5]),-55,1);
  //     assert.closeTo(Number(matches[2][6]),32,1);
  //     assert.closeTo(Number(matches[2][7]),0,1);
  //     assert.closeTo(Number(matches[2][8]),-115,1);
  //
  //     assert.closeTo(Number(matches[3][1]),0,1);
  //     assert.closeTo(Number(matches[3][2]),-71,1);
  //     assert.closeTo(Number(matches[3][3]),99,1);
  //     assert.closeTo(Number(matches[3][4]),57,1);
  //     assert.closeTo(Number(matches[3][5]),-99,1);
  //     assert.closeTo(Number(matches[3][6]),57,1);
  //     assert.closeTo(Number(matches[3][7]),0,1);
  //     assert.closeTo(Number(matches[3][8]),-71,1);
  //
  //     assert.closeTo(Number(matches[4][1]),0,1);
  //     assert.closeTo(Number(matches[4][2]),-86,1);
  //     assert.closeTo(Number(matches[4][3]),162,1);
  //     assert.closeTo(Number(matches[4][4]),93,1);
  //     assert.closeTo(Number(matches[4][5]),-207,1);
  //     assert.closeTo(Number(matches[4][6]),120,1);
  //     assert.closeTo(Number(matches[4][7]),0,1);
  //     assert.closeTo(Number(matches[4][8]),-86,1);
  //   });
  //
  // }); //suite
  //
  // suite('px-vis-line radar small lines stop at 25', function() {
  //   var radarScale = document.getElementById('radarScale'),
  //       chartExtents = {"x":["y","y1","y2"],"y":[15,20] },
  //       linePath;
  //
  //   suiteSetup(function(done) {
  //     radarScale.set('chartExtents',chartExtents);
  //
  //     setTimeout(function(){
  //       linePath = radarLine.lineGroup.selectAll('path.series-line');
  //       done();
  //     },500);;
  //   });
  //
  //   test('radarLine line d', function() {
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = [];
  //     for(var i = 0; i < 5; i++){
  //       matches.push(re.exec(Px.d3.select(linePath.nodes()[i]).attr('d')));
  //     }
  //
  //     assert.closeTo(Number(matches[0][1]),0,1);
  //     assert.closeTo(Number(matches[0][2]),-25,1);
  //     assert.closeTo(Number(matches[0][3]),21,1);
  //     assert.closeTo(Number(matches[0][4]),12,1);
  //     assert.closeTo(Number(matches[0][5]),-21,1);
  //     assert.closeTo(Number(matches[0][6]),12,1);
  //     assert.closeTo(Number(matches[0][7]),0,1);
  //     assert.closeTo(Number(matches[0][8]),-25,1);
  //
  //     assert.closeTo(Number(matches[1][1]),0,1);
  //     assert.closeTo(Number(matches[1][2]),-25,1);
  //     assert.closeTo(Number(matches[1][3]),43,1);
  //     assert.closeTo(Number(matches[1][4]),24,1);
  //     assert.closeTo(Number(matches[1][5]),-240,1);
  //     assert.closeTo(Number(matches[1][6]),139,1);
  //     assert.closeTo(Number(matches[1][7]),0,1);
  //     assert.closeTo(Number(matches[1][8]),-25,1);
  //
  //     assert.closeTo(Number(matches[2][1]),0,1);
  //     assert.closeTo(Number(matches[2][2]),-25,1);
  //     assert.closeTo(Number(matches[2][3]),21,1);
  //     assert.closeTo(Number(matches[2][4]),12,1);
  //     assert.closeTo(Number(matches[2][5]),-21,1);
  //     assert.closeTo(Number(matches[2][6]),12,1);
  //     assert.closeTo(Number(matches[2][7]),0,1);
  //     assert.closeTo(Number(matches[2][8]),-25,1);
  //
  //     assert.closeTo(Number(matches[3][1]),0,1);
  //     assert.closeTo(Number(matches[3][2]),-25,1);
  //     assert.closeTo(Number(matches[3][3]),21,1);
  //     assert.closeTo(Number(matches[3][4]),12,1);
  //     assert.closeTo(Number(matches[3][5]),-21,1);
  //     assert.closeTo(Number(matches[3][6]),12,1);
  //     assert.closeTo(Number(matches[3][7]),0,1);
  //     assert.closeTo(Number(matches[3][8]),-25,1);
  //
  //     assert.closeTo(Number(matches[4][1]),0,1);
  //     assert.closeTo(Number(matches[4][2]),-25,1);
  //     assert.closeTo(Number(matches[4][3]),207,1);
  //     assert.closeTo(Number(matches[4][4]),119,1);
  //     assert.closeTo(Number(matches[4][5]),-438,1);
  //     assert.closeTo(Number(matches[4][6]),253,1);
  //     assert.closeTo(Number(matches[4][7]),0,1);
  //     assert.closeTo(Number(matches[4][8]),-25,1);
  //   });
  //
  // }); //suite
  //
  // suite('px-vis-line radar with missing data', function() {
  //   var radarMissingScale = document.getElementById('radarMissingScale'),
  //       radarMissingSVG = document.getElementById('radarMissingSVG'),
  //       radarMissingLine = document.getElementById('radarMissingLine');
  //
  //   var colorOrder = commonColors.properties.seriesColorOrder.value;
  //   var colorSet = commonColors.properties.dataVisColors.value;
  //   var linePath;
  //
  //   suiteSetup(function(done){
  //     var d = [{
  //           "x": 1397102460000,
  //           "y": 1,
  //           "y1": null,
  //           "y2": 1
  //         },{
  //           "x": 1397131620000,
  //           "y": 6,
  //           "y1": 15
  //         },{
  //           "x": 1397160780000,
  //           "y": 10,
  //           "y1": 8,
  //           "y2": 3
  //         },{
  //           "x": 1397189940000,
  //           "y": 4,
  //           "y1": 10,
  //           "y2": 10
  //         },{
  //           "x": 1397219100000,
  //           "y1": 20,
  //           "y2": 27
  //         }
  //       ],
  //       completeSeriesConfig = {
  //         "x":{
  //           "type":"line",
  //           "name":"mySeries",
  //           "x":['y','y1','y2'],
  //           "y":['y','y1','y2'],
  //           "color": "rgb(93,165,218)"
  //         }
  //       },
  //       dim = ['y','y1','y2'],
  //       w = 500,
  //       h = 500,
  //       min = 480/2,
  //       offset = [250,250],
  //       m = {
  //         "top": 10,
  //         "right": 10,
  //         "bottom": 10,
  //         "left": 10
  //       };
  //
  //     radarMissingSVG.set('width',w);
  //     radarMissingSVG.set('height',h);
  //     radarMissingSVG.set('margin',m);
  //     radarMissingSVG.set('offset',offset);
  //
  //     radarMissingScale.set('width',min);
  //     radarMissingScale.set('margin',m);
  //     radarMissingScale.set('amplitudeKeys',dim);
  //     radarMissingScale.set('centerOffset',50);
  //     radarMissingScale.set('chartData',d);
  //
  //     radarMissingLine.set('completeSeriesConfig',completeSeriesConfig);
  //     radarMissingLine.set('seriesId',"x");
  //     radarMissingLine.set('chartData',d);
  //
  //     setTimeout(function(){
  //       linePath = radarMissingLine.lineGroup.selectAll('path.series-line');
  //       done();
  //     },500);;
  //   });
  //
  //   test('radarMissingLine fixture is created', function() {
  //     assert.isTrue(radarMissingLine !== null);
  //   });
  //
  //   test('radarMissingLine linePath created', function() {
  //     assert.equal(linePath.node().tagName,'path');
  //   });
  //
  //   test('radarMissingLine linePath created 5 lines', function() {
  //     assert.equal(linePath.nodes().length,5);
  //   });
  //
  //   test('radarMissingLine lines have a series ID', function() {
  //     assert.equal(d3.select(linePath.nodes()[0]).attr('series-id'),'line_1397102460000');
  //     assert.equal(d3.select(linePath.nodes()[1]).attr('series-id'),'line_1397131620000');
  //     assert.equal(d3.select(linePath.nodes()[2]).attr('series-id'),'line_1397160780000');
  //     assert.equal(d3.select(linePath.nodes()[3]).attr('series-id'),'line_1397189940000');
  //     assert.equal(d3.select(linePath.nodes()[4]).attr('series-id'),'line_1397219100000');
  //   });
  //
  //   test('radarMissingLine line series has the right color', function() {
  //     assert.equal(d3.select(linePath.nodes()[0]).attr('stroke').split(' ').join(''),colorSet[ colorOrder[0] ]);
  //   });
  //
  //   test('radarMissingLine full lines d', function() {
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = [];
  //     matches.push(re.exec(Px.d3.select(linePath.nodes()[2]).attr('d')));
  //     matches.push(re.exec(Px.d3.select(linePath.nodes()[3]).attr('d')));
  //
  //     assert.closeTo(Number(matches[0][1]),0,1);
  //     assert.closeTo(Number(matches[0][2]),-115,1);
  //     assert.closeTo(Number(matches[0][3]),87,1);
  //     assert.closeTo(Number(matches[0][4]),50,1);
  //     assert.closeTo(Number(matches[0][5]),-55,1);
  //     assert.closeTo(Number(matches[0][6]),32,1);
  //     assert.closeTo(Number(matches[0][7]),0,1);
  //     assert.closeTo(Number(matches[0][8]),-115,1);
  //
  //     assert.closeTo(Number(matches[1][1]),0,1);
  //     assert.closeTo(Number(matches[1][2]),-71,1);
  //     assert.closeTo(Number(matches[1][3]),99,1);
  //     assert.closeTo(Number(matches[1][4]),57,1);
  //     assert.closeTo(Number(matches[1][5]),-99,1);
  //     assert.closeTo(Number(matches[1][6]),57,1);
  //     assert.closeTo(Number(matches[1][7]),0,1);
  //     assert.closeTo(Number(matches[1][8]),-71,1);
  //   });
  //
  //   test('radarMissingLine missing first point line d', function() {
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = re.exec(Px.d3.select(linePath.nodes()[4]).attr('d'));
  //
  //     assert.closeTo(Number(matches[1]),162,1);
  //     assert.closeTo(Number(matches[2]),93,1);
  //     assert.closeTo(Number(matches[3]),-207,1);
  //     assert.closeTo(Number(matches[4]),120,1);
  //   });
  //
  //   test('radarMissingLine missing second point line d', function() {
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?Z\\s?',
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?'
  //     ].join(''));
  //
  //     var matches = re.exec(Px.d3.select(linePath.nodes()[0]).attr('d'));
  //
  //     assert.closeTo(Number(matches[1]),0,1);
  //     assert.closeTo(Number(matches[2]),-50,1);
  //     assert.closeTo(Number(matches[3]),-43,1);
  //     assert.closeTo(Number(matches[4]),25,1);
  //     assert.closeTo(Number(matches[5]),0,1);
  //     assert.closeTo(Number(matches[6]),-50,1);
  //   });
  //
  //   test('radarMissingLine missing third point line d', function() {
  //     var re = new RegExp([
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'L\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //       'M\\s?(-?\\d+)\\.?\\d*e?-?\\d*,?\\s?(-?\\d+)\\.?\\d*e?-?\\d*\\s?',
  //     ].join(''));
  //
  //     var matches = re.exec(Px.d3.select(linePath.nodes()[1]).attr('d'));
  //
  //     assert.closeTo(Number(matches[1]),0,1);
  //     assert.closeTo(Number(matches[2]),-86,1);
  //     assert.closeTo(Number(matches[3]),131,1);
  //     assert.closeTo(Number(matches[4]),75,1);
  //     assert.closeTo(Number(matches[5]),0,1);
  //     assert.closeTo(Number(matches[6]),-86,1);
  //   });
  //
  // }); //suite

} //runTests
