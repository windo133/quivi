 function my_init() {
	 document.myform.outputtext.value = document.myform.inputtext.value
         easyrtc.setRoomOccupantListener( loggedInListener);
         easyrtc.easyApp(document.myform.inputtext.value, "self", ["caller"],
             function(myId) {
                console.log("My easyrtcid is " + myId);
             }
         );
     }


     function loggedInListener(roomName, otherPeers) {
        var otherClientDiv = document.getElementById('otherClients');
        while (otherClientDiv.hasChildNodes()) {
            otherClientDiv.removeChild(otherClientDiv.lastChild);
        }
        for(var i in otherPeers) {
            var button = document.createElement('button');
            button.onclick = function(easyrtcid) {
                return function() {
                    performCall(easyrtcid);
                }
            }(i);

            label = document.createTextNode(i);
            button.appendChild(label);
            otherClientDiv.appendChild(button);
        }
    }


    function performCall(easyrtcid) {
        easyrtc.call(
           easyrtcid,
           function(easyrtcid) { console.log("completed call to " + easyrtcid);},
           function(errorMessage) { console.log("err:" + errorMessage);},
           function(accepted, bywho) {
              console.log((accepted?"accepted":"rejected")+ " by " + bywho);
           }
       );
    }
/*	
function addtext() {
	var newtext = document.myform.inputtext.value;
	document.myform.outputtext.value = newtext;
	my_init(newtext);
}
*/