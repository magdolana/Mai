/**
 * Created by owner on 2/25/2015.
 */
var InstrumentLibrary = require('./../lib/Instruments');
var Instruments = function Instruments(){
    function getInstruments(request, response){
        var InstrumentLib = new InstrumentLibrary();
        InstrumentLib.getInstruments(function __getCallback(error, Instruments){
            if(error){
                response.status(400);
                response.json({error:error.message});
            }
            else {
                response.json({Instruments: Instruments});
            }
        });
    }
    return {
        getInstruments: getInstruments

    }

}
module.exports = Instruments;