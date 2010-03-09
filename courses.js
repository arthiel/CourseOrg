//documents used
document.onmousemove = mouseMove;
document.onmouseup = mouseUp;

//my variables
var dragObject = null;

//functions

/* onmousemove ... mouseMove(ev):
 * takes an event and changes the current coordinates
 * of the mouse as it moves.
 */
function mouseMove(ev){
    ev = ev || window.event;
    var mousePos = mouseCoords(ev);
}

/* onmousemove ... mouseCoords(ev):
 * takes an event, and actively chanes the coordinates.
 */
function mouseCoords(ev){
    if(ev.pageX || ev.pageY){
        return{x:ev.pageX, y:ev.pageY};
    }
    return{
        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}

/* onmouseup ... makeClickable(object):
 * makes the given object clickable.
 */
function makeClickable(object){
    object.onmousedown = function(){
        dragObject = this;
    }
}

/* onmouseup ... mouseUp(ev):
 * if the mouse is not clicked, its drag properties do not exist/happen.
 */
function mouseUp(ev){
    dragObject = null;
}