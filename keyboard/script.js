window.onload = function() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // start
    let keyboard = document.getElementById('keyboard');

    // end

    alphabet.forEach(letter => {
        // start
        let keyButton = document.createElement('input');
        keyButton.type = 'button';
        keyButton.value = letter;
        keyButton.addEventListener('click', event => {
            console.log(event)
            highlightLetter(event.target.id)
        })

        keyButton.classList.add('key');
        keyButton.id = letter;
        keyboard.appendChild(keyButton);
        // end
    });
}

// start
document.addEventListener('keydown', event => {
    highlightLetter(event.key)
});
// end


function highlightLetter(letter){
    // start
    console.log(letter)
    let output = document.getElementById('output-text');
    output.innerText = output.innerText + letter;
    let key = document.getElementById(letter);
    if (key == null){               // if pressed key isn't on virtual keyboard, returns immediately//
        return
    }
    key.classList.toggle('selected');
    setTimeout(function(){          // sets the greying of keys to be on for 150 ms//
        key.classList.toggle('selected');
    }, 150);
        // end
}
