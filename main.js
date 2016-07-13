var noble = require('noble');
noble.on('stateChange', function(state) {
  if (state === 'poweredOn')
    // noble.startScanning([], true);
    noble.startScanning();
  else
    noble.stopScanning();
});

noble.on('discover', function(peripheral) { 

  var macAddress = peripheral.uuid;
  var rss = peripheral.rssi;
  var address = peripheral.address;
  var localName = peripheral.advertisement.localName; 
  console.log (peripheral);
  console.log('found device: ', macAddress, ' ', localName, ' ', rss, ' ',address);   
});