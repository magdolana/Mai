/**
 * Created by owner on 2/25/2015.
 */
var fs = require('fs'),
    _ = require('underscore'),
    path = require('path');
var InstrumentsObj ;
 var Instruments = function Instruments() {
    function getInstruments(callback) {
        var InstrumentsFile = path.join(__dirname, '/Instruments/Instruments.json');
        fs.exists(InstrumentsFile, function (exists) {
            if (exists) {
                fs.readFile(InstrumentsFile, 'utf8', function (err, data) {
                    if (err) throw err;
                    InstrumentsObj = JSON.parse(data);
                    var instrumentNames = [];

                    _.each(InstrumentsObj, function (Instrument) {
                        instrumentNames.push(Instrument.Name);
                    });
                    return callback(null, instrumentNames);
                        });






            }





            else {
                createInstrumentsFile(InstrumentsFile, function __createCallback(err, data) {
                    if (err) {
                        var error = new Error("Instruments file not found " + err.message);
                        return callback(error, null)
                    }
                    else {
                        return callback(null, "")
                    }
                });
            }
        })
    }

    function createInstrumentsFile(filePath, callback) {
        var InstrumentsFile = fs.createWriteStream(filePath);
        InstrumentsFile.on('error', function (err) {
            return callback(err, null);
        });
        InstrumentsFile.write(JSON.stringify([{Model: 2010, Name: "HPLC"}, {Model: 2011, Name: "GC"}, {
            Model: 2012,
            Name: "ELISA"
        }]));
        InstrumentsFile.end();
        InstrumentsFile.on('close', function(){
            return callback(null, filePath);
        });
    }

    return {
        getInstruments: getInstruments,
        createInstrumentsFile: createInstrumentsFile

    }




}
module.exports = Instruments;