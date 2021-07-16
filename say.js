"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const synth = window.speechSynthesis;
function say(frase) {
    if (synth === undefined)
        return;
    const utterThis = new SpeechSynthesisUtterance(frase);
    // const voices = synth.getVoices();
    // utterThis.voice = voices[0];
    utterThis.pitch = 1.0;
    utterThis.rate = 1.0;
    synth.speak(utterThis);
}
exports.say = say;
//# sourceMappingURL=say.js.map