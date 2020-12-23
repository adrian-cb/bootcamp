var hotel = {
    Barcelo: {
    name: "Barcelo Costa Ballena Golf & Spa<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
    location: "Costa Ballena, Cádiz",
    descrip: "El hotel Barceló Costa Ballena Golf & Spa****, de arquitectura típicamente andaluza y totalmente renovado en 2018, está situado en Costa Ballena, entre Rota y Chipiona, en plena Costa de la Luz. Se encuentra frente a un campo de golf de 27 hoyos y muy cerca de las playas de arena fina de la costa de Cádiz.",
    img: 
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg"
    },
    Marsol: {
        name: "Marsol<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
        location: "Passeig Jacint Verdaguer, Lloret de Mar, Barcelona",
        descrip: "El hotel Marsol está situado en el paseo marítimo de Lloret de Mar, en la Costa Brava catalana. Ofrece un centro de fitness, un spa y una piscina en la azotea con terraza y tumbonas.",
        img: 
        "https://i.pinimg.com/originals/a3/9d/f4/a39df4ecd2abc314705a9810637a56f5.jpg"
    },
    Indias: {
      name: "Casa de Indias By Intur<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
      location: "Centro histórico de Sevilla, Sevilla",
      descrip: "El hotel se encuentra en la Plaza de la Encarnación, conocida como Plaza de las Setas. En el casco histórico de Sevilla, está a un paso del Palacio de Medinaceli, el Palacio de Dueñas, las calles comerciales, el ayuntamiento, el barrio de Santa Cruz, el puente de Triana, la Catedral, bares y restaurantes. Una ubicación ideal para disfrutar de la Semana Santa.",
      img:
      "https://cf.bstatic.com/images/hotel/max1024x768/183/183230861.jpg"
    },
  
}
var selectedHotel = prompt(
    "Indique hotel sobre el que quiere hacer la reseña: Barcelo, Marsol o Indias",
  );

  document.getElementById("hotel-name").innerHTML =
  "Hotel " + hotel[selectedHotel].name;
  document.getElementById("descript").innerHTML = hotel[selectedHotel].descrip;

  document.getElementById("hotel-location").innerHTML =
  "Ubicado en " + hotel[selectedHotel].location;

  document.getElementById("img-hotel").src  = hotel[selectedHotel].img;

  var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };
  
  var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
  document.getElementById("rating").innerHTML = stars[rating];
  
  var anonymous = confirm("¿Quiere que la reseña sea anonima?");
  document.getElementById("anonymous").checked = anonymous;

  var description = prompt("Escriba una reseña")
  document.getElementById("description").innerHTML = description;