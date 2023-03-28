let technology= [
    {
      name: "Launch vehicle",
      portraitImage: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscapeImage : "/assets/technology/image-launch-vehicle-landscape.jpg",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      name: "Spaceport",
      portraitImage: "/assets/technology/image-spaceport-portrait.jpg",
      landscapeImage : "/assets/technology/image-spaceport-landscape.jpg",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      name: "Space capsule",
      portraitImage: "/assets/technology/image-space-capsule-portrait.jpg",
      landscapeImage : "/assets/technology/image-space-capsule-landscape.jpg",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ];


  document.addEventListener("click", function(e) {
    const target = e.target;
    const clickedElement = target.classList[0] ; 
    const circless = document.querySelectorAll('.circles div');
  
    if(clickedElement == 'circle1') n =0;
    else if(clickedElement == 'circle2') n =1;
    else if(clickedElement == 'circle3') n =2;
    else return;
  
    circless.forEach(circle => {
      if(circle.classList.contains('active-circle')) circle.classList.remove('active-circle');
    });
   
    target.classList.add('active-circle');
  
  
    document.querySelector('.name').innerHTML = technology[n].name;
    document.querySelector('.portrait-img').src = technology[n].portraitImage;
    document.querySelector('.landscape-img').src = technology[n].landscapeImage;
    document.querySelector('.text-content').innerHTML = technology[n].description;
  
  });