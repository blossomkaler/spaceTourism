let destinations = [
    {
      name: "Moon",
      image: "/assets/destination/image-moon.png",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days"
    },

    {
      name: "Mars",
      image: "/assets/destination/image-mars.png",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months"
    },

    {
      name: "Europa",
      image: "/assets/destination/image-europa.png",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years"
    },

    {
      name: "Titan",
      image: "/assets/destination/image-titan.png",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years"
    }
  ];

document.addEventListener("click", function(e) {
  const target = e.target;
  const clickedElement = target.classList[0] ; 
  const options = document.querySelectorAll('.options div');

  if(clickedElement == 'moon') n =0;
  else if(clickedElement == 'mars') n =1;
  else if(clickedElement == 'europa') n =2;
  else if(clickedElement == 'titan') n =3;
  else return;

  options.forEach(option => {
    if(option.classList.contains('underline')) option.classList.remove('underline');
  });
 
  target.classList.add('underline');

  document.querySelector('.planet').innerHTML = destinations[n].name;
  document.querySelector('.planet-img').src = destinations[n].image;
  document.querySelector('.text-content').innerHTML = destinations[n].description;
  document.querySelector('.num-1').innerHTML = destinations[n].distance;
  document.querySelector('.num-2').innerHTML = destinations[n].travel;

});


 

