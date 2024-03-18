
// birthday form  birthday form   birthday form   birthday form   birthday form   birthday form   birthday form   birthday form   birthday form   

// lovely signs
const zodiacSigns = [
    { name: 'San', start: '03-21', end: '04-19' },
    { name: 'Totoro', start: '04-20', end: '05-20' },
    { name: 'No-Face', start: '05-21', end: '06-20' },
    { name: 'Sophie', start: '06-21', end: '07-22' },
    { name: 'Howl', start: '07-23', end: '08-22' },
    { name: 'Satsuki', start: '08-23', end: '09-22' },
    { name: 'Chihiro', start: '09-23', end: '10-22' },
    { name: 'Yubaba', start: '10-23', end: '11-21' },
    { name: 'Kiki', start: '11-22', end: '12-21' },
    { name: 'Moro', start: '12-22', end: '12-31' },
    { name: 'Moro', start: '01-01', end: '01-19' },
    { name: 'Haku', start: '01-20', end: '02-18' },
    { name: 'Ponyo', start: '02-19', end: '03-20' }
];

// initially hides all character divs 
const characterDivs = document.querySelectorAll('.character');
characterDivs.forEach(characterDiv => {
    characterDiv.style.display = 'none';
});

// determines the zodiac sign based on the input date
function getZodiacSign(birthday) {
    const month = birthday.getMonth() + 1; // js months are zero-based
    const day = birthday.getDate();
    const dateString = `${month}-${day}`;

    for (const sign of zodiacSigns) {
        const start = new Date(`${birthday.getFullYear()}-${sign.start}`);
        const end = new Date(`${birthday.getFullYear()}-${sign.end}`);
        if (birthday >= start && birthday <= end) {
            return sign.name;
        }
    }

    return null; // if no sign is found return null 
}

const form = document.querySelector(".birthday-form");

// play that sound!!
function playCharacterAudio(zodiacSign) {
    const audioElement = document.getElementById(`${zodiacSign.toLowerCase()}-audio`);
    if (audioElement) {
        audioElement.play();
    }
}


// listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission

    const birthdayInputValue = form.elements["birthday"].value;
    const birthday = new Date(birthdayInputValue); 

    const zodiacSign = getZodiacSign(birthday);

    if (zodiacSign) {
        console.log("Your Studio Ghibli is:", zodiacSign);
        
        // hides all character divs again
        characterDivs.forEach(characterDiv => {
            characterDiv.style.display = 'none';
        });
        // shows the character based on the sign
        const characterDiv = document.querySelector(`.character.${zodiacSign.toLowerCase()}`);
        // plays sound 
        playCharacterAudio(zodiacSign);
        if (characterDiv) {
            characterDiv.style.display = 'grid'; // displays the character div
        }
        // hides the icon container and left section when form is submitted
        const iconContainer = document.querySelector('.icon-container');
        const leftSection = document.querySelector('.left');
        if (iconContainer && leftSection) {
            iconContainer.style.display = 'none';
            leftSection.style.display = 'none';
            // show #back-home
            document.getElementById('back-home').style.display = 'inline-block';
        }
    } else {
        console.log("Unable to determine your zodiac sign.");
    }
});


// icon container buttons icon container buttons icon container buttons icon container buttons icon container buttons icon container buttons icon container buttons icon container buttons icon container buttons 


// event listener for icon container buttons
const iconButtons = document.querySelectorAll('.sign');
iconButtons.forEach(button => {
    button.addEventListener('click', function() {
        const zodiacSign = this.getAttribute('data-sign');
        if (zodiacSign) {
            // hide .left and .icon-container
            const leftElement = document.querySelector('.left');
            const iconContainer = document.querySelector('.icon-container');
            leftElement.style.display = 'none';
            iconContainer.style.display = 'none';
            
            // hide all character divs
            const characterDivs = document.querySelectorAll('.character');
            characterDivs.forEach(characterDiv => {
                characterDiv.style.display = 'none';
            });
            
            // show the character corresponding to the clicked button
            const characterDiv = document.querySelector(`.character.${zodiacSign.toLowerCase()}`);
            if (characterDiv) {
                characterDiv.style.display = 'grid'; // display the character div

            }
            // play character sound
            playCharacterAudio(zodiacSign);
            // show #back-home
            document.getElementById('back-home').style.display = 'inline-block';
        }
    });
});

function handle_submit(event) {
    event.preventDefault(); // prevent default form submission
    console.group("Form submission");
    console.log(form); // form element
    console.log(form.elements); // array of form elements
    console.log(form.elements["birthday"].value); // 2003-02-05
    console.groupEnd();

    const birthdayInputValue = form.elements["birthday"].value;

    console.log(birthdayInputValue); // 2003-02-05
    const date = birthdayInputValue.split("-"); // ["2003", "02", "05"]
    const year = date[0]; // 2003
    const day = date[2]; // 02
    const month = date[1]; // 05

    console.log('Year:', year, 'Month:', month, 'Day:', day);

    const errors = [];
    if (birthdayInputValue === "") {
        errors.push("Birthdate is required");
    }
    console.log(errors); 
}

form.addEventListener("submit", handle_submit);

// function to stop the audio element
function stopCharacterAudio() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
        audioElement.pause();
        // reset the audio to the verrrry beginning
        audioElement.currentTime = 0; 
    });
}

// back-home  back-home    back-home   back-home  back-home   back-home    back-home    back-home   back-home    back-home   

// listener for #back-home
document.getElementById('back-home').addEventListener('click', function() {
    // pause the audio element
    stopCharacterAudio();
    // shows .left and .icon-container
    const leftElement = document.querySelector('.left');
    const iconContainer = document.querySelector('.icon-container');
    leftElement.style.display = 'block';
    iconContainer.style.display = 'grid';
    
    // hides all character divs
    const characterDivs = document.querySelectorAll('.character');
    characterDivs.forEach(characterDiv => {
        characterDiv.style.display = 'none';
    });

    // hides #back-home
    this.style.display = 'none';
});


// help pop-up  help pop-up   help pop-up   help pop-up  help pop-up   help pop-up   help pop-up   help pop-up   help pop-up   help pop-up   help pop-up  


function helpMe() {
    var popup = document.getElementById("helpPopup");
    popup.classList.toggle("show");
}
