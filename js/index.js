// const birthday;       
// const birthday_month; 
// const birthday_day;   
// let selected_sign;    


// const signs = [
//     {
//       name: 'Gemini',
//       image: 'twins.jpg'
//       sound: 'sparkle.mp3'
//     }
//   ]


// function play_sound(selected_sign) {
//   }

const form = document.querySelector(".birthday-form"); // <form> element

function handle_submit(event) {
    event.preventDefault(); // Prevent the default form submission
    console.group("Form submission");
    console.log(form); // <form> element
    console.log(form.elements); // array of form elements
    console.log(form.elements["birthday"].value); // 1990-01-01
    console.groupEnd();

    const birthdayInputValue = form.elements["birthday"].value;

    console.log(birthdayInputValue); // 2024-02-20
    const date = birthdayInputValue.split("-"); // ["2024", "02", "20"]
    const year = date[0]; // 2024
    const day = date[2]; // 20
    const month = date[1]; // 02

    console.log('Year:', year, 'Month:', month, 'Day:', day);

    const errors = [];
    if (birthdayInputValue === "") {
        errors.push("Birthdate is required");
    }
    console.log(errors); 
}

form.addEventListener("submit", handle_submit);