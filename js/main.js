'use script';

//Variables
//I take all inputs from the DOM
const inputs = document.querySelectorAll('.commands_section input');

//Functions
function handleClick() {
  return true;
}

//"documentElement" returns the element that is the root of the document, that means the whole document. That lets us access the root section of the css
//"style" means we are going to change a css property
//"setProperty" stablishes a property. To do that we have to name the css property first, then the new value for it
function handleUpdate() {
  if (handleClick()) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix //to include the "px" or not to the end, if not only the number value is attached
    );
  } else {
    return;
  }
}

//Events
//I apply a "change" event over all inputs to listen to the event and triggers the function when changing.
//I include as well a "mousemove" event when somebody is changing radically the input for the function to be triggered as well
//I include as well a "click" event not to trigger the changes unless there is a click on the input before the mouse is moving, if not, only moving it over will trigger the function anyway and we don't want that to be accurate
inputs.forEach((eachInput) => {
  eachInput.addEventListener('change', handleUpdate);
});
inputs.forEach((eachInput) => {
  eachInput.addEventListener('mousemove', handleUpdate);
});
inputs.forEach((eachInput) => {
  eachInput.addEventListener('click', handleClick);
});
