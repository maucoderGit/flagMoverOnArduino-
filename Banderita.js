var cinco = require("johnny-five");
var circuito = new cinco.Board();
var bombillo, motorcito, celda, turno = 1;

circuito.on("ready", prender);

function prender()
{
    var configuracion = {pin:"A0", freq: 50};
    celda = new cinco.Sensor(configuracion);

    bombillo = new cinco.led(13);
    bombillo.on();

    motorcito = new cinco.Servo(9);
    motorcito.to(0)

    ondear();
}


function ondear()
{
    console.log("luz: " + celda.value);
    var luz = celda.value;
    if(luz > 800)
    {
        if(turno)
        {
            turno = 0;
            motorcito.to(170)
        }
        else
        {
            turno = 1;
            motorcito.to(190);
        }
    } 
    else
    {
        motorcito.to(35)
    }
    setTimeOut(ondear, 1000);
}
