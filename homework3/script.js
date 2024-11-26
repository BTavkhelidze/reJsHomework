//! 1) დაწერეთ ფუნცქია რომელიც დაგვილოგავს მაუსის კორდინატებს მას შემდეგ რაც გავაჩერებთ მაუსს, გამოიყენეთ დიბაუნს ტექნიკა

function mouseCoordinantes() {}

document.addEventListener('mousedown', (event) => {
  console.log(event.clientX, event.clientY);
});

// დებაუნსის ფუნქცია
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// მაუსის კოორდინატების დალოგვის ფუნქცია
function logMouseCoordinates(event) {
  console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
}

// დებაუნსირებული ფუნქცია
const debouncedLogMouseCoordinates = debounce(logMouseCoordinates, 500);

// მაუსის მოძრაობის მონიტორინგი
document.addEventListener('mousemove', debouncedLogMouseCoordinates);
