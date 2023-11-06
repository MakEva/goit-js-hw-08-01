import throttle from "lodash.throttle";

const ref = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
};
const STORAGE_KEY = "feedback-form-state";
let formDataObj = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

ref.form.addEventListener("submit", onFormSubmit);
ref.form.addEventListener("input", throttle(onFormInput, 500));

formChecking();

function formChecking() {
    let savedStorage = localStorage.getItem(STORAGE_KEY);
    if (savedStorage) {
        let parsedStorage = JSON.parse(savedStorage);
        ref.input.value = parsedStorage.email || "";
        ref.message.value = parsedStorage.message || "";
    }
};

function onFormInput(evt) {
    formDataObj[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataObj));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (ref.input.value === "" || ref.message.value === "") {
        alert("Заповніть, будь ласка, всі поля форми!");
        return;
    }
    ref.form.reset();
    console.log(formDataObj);
    localStorage.removeItem(STORAGE_KEY);
    formDataObj = {};
    
}




// JSON.parse(localStorage.getItem(STORAGE_KEY)) ||