// a script for phantom.js

var page = require('webpage').create(),
    system = require('system'),
    address,
    output,
    height,
    width;

if (system.args.length != 5) {
    console.log('Usage: phantomjs render.js [infile] [outfile] [width] [height]');
    phantom.exit(1);
}

address = system.args[1];
output = system.args[2];
width = system.args[3];
height = system.args[4];
page.viewportSize = {width: width, height: height};
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.60 Safari/537.17'

page.open(address, function(status) {
  if(status !== 'success') {
    console.log('Unable to load the address!');
    phantom.exit();
  } else {
    page.evaluate(function() {
      document.body.style.background = '#fff'
    })
    page.viewportSize = {width: width, height: height};
    page.render(output);
    phantom.exit();
  }
});
