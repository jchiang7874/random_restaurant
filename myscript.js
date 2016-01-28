/**
 * Created by macpro on 9/4/15.
 */


function changeImg() {
    var images = ["img/epic.jpeg", "img/benu.jpg", "img/nanking.jpg", "img/homeroom.jpg", "img/mission-beach-cafe.jpg", "img/the-house.jpg"],
        myImg = $("#blockPhotos"),
        index = 0;
    function changePic() {
        myImg[0].setAttribute("src", images[index]);
        index++;

        if(index >= images.length) {
            index = 0;
        }
    }
    return setInterval(changePic, 1500);
}

changeImg();

var restaurants = [
    {"name": "House of Nanking", "type": "Chinese", "address": "919 Kearny St.", "city": "San Francisco", "phone": "415-421-1429", "dish": "Sautee String Beans", "img": "img/nanking.jpg"},
    {"name": "Epic RoastHouse", "type": "American", "address": "369 The Embarcadero", "city": "San Francisco", "phone": "415-369-9955", "dish": "Steak", "img": "img/epic.jpeg"},
    {"name": "The House", "type": "Asian", "address": "1230 Grant Ave.", "city": "San Francisco", "phone": "415-986-8612", "dish": "Salmon Roll", "img": "img/the-house.jpeg"},
    {"name": "54 Mint", "type": "Italian", "address": "16 Mint Plz", "dish": "Octopus Carpaccio", "phone": "415-543-5100", "img": "54Mint.jpg"},
    {"name": "Gary Danko", "type": "American", "address": "800 N Point St.", "city": "San Francisco", "dish": "Risotto", "phone": "415-749-2060", "img": "img/gary-danko.jpg"},
    {"name": "Benu", "type": "Asian", "address": "22 Hawthorne St.", "city": "San Francisco", "dish": "Pork Belly", "phone": "415-685-4860", "img": "benu.jpg"},
    {"name": "Mission Beach Cafe", "type": "American", "city": "San Francisco", "dish": "Breakfast", "img": "img/mission-beach-cafe.jpg"},
    {"name": "Homeroom", "type": "American", "address": "400 40th St.", "city": "Oakland", "phone": "510-597-0400", "dish": "Mac and Cheese", "img": "img/homeroom.jpg"},
    {"name": "Grand Lake Kitchen", "type": "American", "address": "576 Grand Ave.", "city": "Oakland", "phone": "510-922-9582", "dish": "Breakfast", "img": "img/grand-lake.jpg"},
    {"name": "Shandong Restaurant", "type": "Chinese", "address": "328 10th St.", "city": "Oakland", "phone": "510-839-2299", "dish": "Handmade noodle", "img": "img/shandong.jpg"},
    {"name": "Shandong Restaurant", "type": "Chinese", "address": "328 10th St.", "city": "Oakland", "phone": "510-839-2299", "dish": "Handmade noodle", "img": "img/shandong.jpg"}


];

var s1 = $("#cuisine")[0],
    s2 = $("#dish")[0],
    s3 = $("#city")[0];

s1.addEventListener("change", populate);


function populate() {
    s2.innerHTML = "";
    if (s1.value == "Chinese") {
      restaurants.forEach(function(obj) {
          if(obj.type == "Chinese") {
              var arr = obj.dish;
              var newOption = document.createElement("option");
              newOption.value = arr;
              newOption.innerHTML = arr;
              s2.options.add(newOption);
          }
      })
    } else if (s1.value == "Italian") {
        restaurants.forEach(function(obj) {
            if(obj.type == "Italian") {
                var arr = obj.dish;
                var newOption = document.createElement("option");
                newOption.value = arr;
                newOption.innerHTML = arr;
                s2.options.add(newOption);
            }
        })
    } else if (s1.value == "American") {
        restaurants.forEach(function(obj) {
            if(obj.type == "American") {
                var arr = obj.dish;
                var newOption = document.createElement("option");
                newOption.value = arr;
                newOption.innerHTML = arr;
                s2.options.add(newOption);
            }
        })
    } else if (s1.value == "Japanese") {
        restaurants.forEach(function(obj) {
            if(obj.type == "Japanese") {
                var arr = obj.dish;
                var newOption = document.createElement("option");
                newOption.value = arr;
                newOption.innerHTML = arr;
                s2.options.add(newOption);
            }
        })
    } else if (s1.value == "Asian") {
        restaurants.forEach(function(obj) {
            if(obj.type == "Asian") {
                var arr = obj.dish;
                var newOption = document.createElement("option");
                newOption.value = arr;
                newOption.innerHTML = arr;
                s2.options.add(newOption);
            }
        })
    }
}

var goSearch = $(".go")[0];
goSearch.addEventListener("click", result);


function result() {
    var place, pic, where, contact;

    restaurants.forEach(function(obj) {
        if(obj.type == s1.value && obj.dish == s2.value && obj.city == s3.value) {
            place = obj.name;
            pic = obj.img;
            where = obj.address;
            contact = obj.phone;

            if (obj.img == undefined || obj.img == "") {
                pic = "Picture Coming Soon"
            }
        } else {
            place = "Not your lucky day. Try again."
        }
    });

    var header = $("#search-result")[0],
        photo = $("#result-block")[0],
        imageSrc = $("#restaurant-photo")[0];
        imageSrc.src = pic;
        imageSrc.alt = pic;
    photo.className = "show";
    header.innerText = place;


}

var random = $(".go")[1];

random.addEventListener("click", randomPick);

function randomPick() {
    var num, length;

    length = restaurants.length;
    num = Math.floor(Math.random() * (length+1));

    var header = $("#search-result")[0],
        photo = $("#result-block")[0],
        imageSrc = $("#restaurant-photo")[0];

        imageSrc.src = restaurants[num].img;
        imageSrc.alt = restaurants[num].img;


    photo.className = "show";
    header.innerText = restaurants[num].name;

}









