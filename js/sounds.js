/*
 * Author: Khanh Vong
 * Description: Script to control the sounds HTML <audio> tag.
 * Date: 4/21/2020
 */

// Play background automatically on load
var backgroundAudio = document.getElementById("backgroundAudio");
backgroundAudio.loop = true;
backgroundAudio.volume = 1;
backgroundAudio.play();

// Mute function to mute any outgoing volume
function mute() { 
    // Get properties from mute button
    var muteButton = document.getElementById("muteButton");
    if (muteButton.innerHTML === "Mute") {
        muteButton.innerHTML = "Unmute";
        backgroundAudio.volume = 0;
        // Add any other sound to mute here
    } else {
        muteButton.innerHTML = "Mute";
        backgroundAudio.volume = 1; 
        // Add any other sound to unmute here
    }
} 

// Function for playing sound at specify volume, no loop
function playSound(audioId, volume){
    // Verify that argument has been given
    if (audioId !== undefined && volume !== undefined) {
        var sound = document.getElementById(audioId);
        sound.volume = volume;
        sound.play();
    }
    else{
        console.Log("audioId and volume argument 'undefined' for playsound method");
    }

}

