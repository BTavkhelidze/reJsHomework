//! 1) დაწერეთ ფუნცქია რომელიც დაგვილოგავს მაუსის კორდინატებს მას შემდეგ რაც გავაჩერებთ მაუსს, გამოიყენეთ დიბაუნს ტექნიკა

function mouseCoordinantes() {}

document.addEventListener('mousemove', (event) => {
  console.log(event.clientX, event.clientY);
});
