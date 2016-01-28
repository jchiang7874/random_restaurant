/**
 * Created by macpro on 9/4/15.
 */

//RESTAURANT SLIDESHOW

function changeImg() {
    var images = ["img/epic.jpeg", "img/ozumo.jpeg", "img/benu.jpg", "img/oliveto.jpg", "img/nanking.jpg", "img/homeroom.jpg", "img/54Mint.png", "img/shandong.jpg", "img/mission-beach-cafe.jpeg", "img/the-house.jpg"],
        myImg = $("#blockPhotos"),
        index = 0;
    function changePic() {
        myImg[0].setAttribute("src", images[index]);
        index++;

        if(index >= images.length) {
            index = 0;
        }

        myImg.fadeIn(1000).fadeOut(1800);
    }
    return setInterval(changePic, 2800);

}

changeImg();

//RESTAURANT LIST

var sf = [
    {"name": "House of Nanking", "type": "Chinese", "address": "919 Kearny St.", "city": "San Francisco", "phone": "415-421-1429", "dish": "Sautee String Beans", "img": "img/nanking.jpg", "url": "http://www.yelp.com/biz/house-of-nanking-san-francisco"},
    {"name": "Epic RoastHouse", "type": "American", "address": "369 The Embarcadero", "city": "San Francisco", "phone": "415-369-9955", "dish": "Steak", "img": "img/epic.jpeg", "url": "http://www.yelp.com/biz/epic-steak-san-francisco"},
    {"name": "The House", "type": "Asian", "address": "1230 Grant Ave.", "city": "San Francisco", "phone": "415-986-8612", "dish": "Salmon Roll", "img": "img/the-house.jpg", "url": "http://www.yelp.com/biz/the-house-san-francisco"},
    {"name": "54 Mint", "type": "Italian", "address": "16 Mint Plz", "city": "San Franisco", "dish": "Octopus Carpaccio", "phone": "415-543-5100", "img": "img/54Mint.png", "url": "http://www.yelp.com/biz/54-mint-ristorante-italiano-san-francisco-2"},
    {"name": "Gary Danko", "type": "American", "address": "800 N Point St.", "city": "San Francisco", "dish": "Risotto", "phone": "415-749-2060", "img": "img/gary-danko.jpg", "url": "http://www.yelp.com/biz/gary-danko-san-francisco"},
    {"name": "Benu", "type": "Asian", "address": "22 Hawthorne St.", "city": "San Francisco", "dish": "Pork Belly", "phone": "415-685-4860", "img": "img/benu.jpg", "url": "http://www.yelp.com/biz/benu-san-francisco-4"},
    {"name": "Mission Beach Cafe", "type": "American", "address": "198 Guerrero St.", "city": "San Francisco", "phone": "415-861-0198", "dish": "Breakfast", "img": "img/mission-beach-cafe.jpeg", "url": "http://www.yelp.com/biz/mission-beach-cafe-san-francisco-4"},


];

var oakland = [
    {"name": "Homeroom", "type": "American", "address": "400 40th St.", "city": "Oakland", "phone": "510-597-0400", "dish": "Mac and Cheese", "img": "img/homeroom.jpg", "url": "http://www.yelp.com/biz/homeroom-oakland"},
    {"name": "Grand Lake Kitchen", "type": "American", "address": "576 Grand Ave.", "city": "Oakland", "phone": "510-922-9582", "dish": "Breakfast", "img": "img/grand-lake.jpg", "url": "http://www.yelp.com/biz/grand-lake-kitchen-oakland"},
    {"name": "Shandong Restaurant", "type": "Chinese", "address": "328 10th St.", "city": "Oakland", "phone": "510-839-2299", "dish": "Handmade noodle", "img": "img/shandong.jpg", "url": "http://www.yelp.com/biz/shandong-restaurant-oakland"},
    {"name": "Hopscotch", "type": "Asian", "address": "1915 San Pablo Ave.", "city": "Oakland", "phone": "510-788-6217", "dish": "Yonsei Oysters", "img": "img/hopscotch.jpeg", "url": "http://www.yelp.com/biz/hopscotch-oakland"},
    {"name": "Oliveto", "type": "Italian", "address": "5655 College Ave.", "city": "Oakland", "phone": "510-547-5356", "dish": "Pasta", "img": "img/oliveto.jpg", "url": "http://www.yelp.com/biz/oliveto-cafe-and-restaurant-oakland"},
    {"name": "Vien Huong Restaurant", "type": "Chinese", "address": "712 Franklin St.", "city": "Oakland", "phone": "510-465-5938", "dish": "Ho Fun Noodle", "img": "img/vien-huong.jpg", "url": "http://www.yelp.com/biz/vien-huong-restaurant-oakland?osq=chinese+food"},
    {"name": "Ozumo", "type": "Japanese", "address": "2551 Broadway", "city": "Oakland", "phone": "510-286-9866", "dish": "Robata Grill", "img": "img/ozumo.jpeg", "url": "http://www.yelp.com/biz/ozumo-oakland"},
]

//POPULATE LIST

var s1 = $("#city")[0],
    s2 = $("#cuisine")[0],
    goSearch = $(".go")[0],
    searchAgain = $(".search-again")[0];

goSearch.addEventListener("click", populate);
searchAgain.addEventListener("click", populate);
s1.addEventListener("change", unDisableCuisine);
s2.addEventListener("change", unDisableBtn);


function populate() {
    var selection, place, pic, choices, link, dish, total,

        header = $("#search-result")[0],
        photo = $("#result-block")[0],
        location = $(".address")[0],
        contact = $(".phone")[0],
        link = $(".link")[0],
        dish = $(".dish")[0],
        total = $(".total")[0],
        info = $(".result-info")[0],
        phoneLink = $(".phoneNo")[0];

    if (s1.value == "SF") {
        choices = sf.filter(function(obj) {return obj.type == s2.value;});
    } else {
        choices = oakland.filter(function(obj) {return obj.type == s2.value;});
    }

    selection = Math.floor(Math.random() * choices.length);

        imageSrc = $("#restaurant-photo")[0];

    if (choices.length == 0) {
        $(".link, #search-result, .address, .phone, .dish").hide();
        total.className = "total noResult";
        total.innerText = "Sorry, your search results returned no restaurants.";
        photo.className = "hide";
        info.className = "result-info hide";
        $(".map")[0].className = "map hide";
        imageSrc.src = "";
        imageSrc.alt = "";
        $("footer")[0].className = "footer";
    } else {
        $(".link, #search-result, .address, .phone, .dish").show();
        total.innerText = "Number of restaurants: " + choices.length;
        total.className = "total";
    }

    place = choices[selection].name;
    pic = choices[selection].img;

    imageSrc.src = pic;
    imageSrc.alt = pic;
    link.href = choices[selection].url;
    dish.innerText = "Must try: " + choices[selection].dish;
    photo.className = "show";
    header.innerText = place;
    location.innerText = choices[selection].address + " " + choices[selection].city;
    contact.innerText = choices[selection].phone;
    phoneLink.href = "tel://" + choices[selection].phone;
    searchAgain.className = "search-again show";
    info.className = "result-info show";
    $(".map")[0].className = "map";
    $("footer")[0].className = "footer show";

    s1.addEventListener("change", changeBtn);
    s2.addEventListener("change", changeBtn);

    initMap();

}

function changeBtn() {
    searchAgain.className = "search-again hide";
}

function unDisableCuisine() {
    if (s1.value != "Select your city") {
        s2.disabled = false;
    }
}

function unDisableBtn() {
    if (s1.value != "Select your city" && s2.value != "Select a cuisine") {
        goSearch.disabled = false;
    }
}


//POPUP

function toggle_visibility(id) {
    var elem = document.getElementById(id);
    if(elem.style.display == 'block') {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'block';
    }
}

//MAP

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 37.4217429, lng: -37.4217429}
    });
    var geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map);
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementsByClassName('address')[0].innerText;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}



/**
 * Created by macpro on 9/10/15.
 */

