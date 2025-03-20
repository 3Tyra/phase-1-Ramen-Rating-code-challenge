const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran Restaurant", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya Restaurant", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya Restaurant", image: "tonkotsu.jpg", rating: 5, comment: "Rich and creamy broth!" },
    { id: 4, name: "Beef Ramen", restaurant: "Shibuya Restaurant", image: "Beef.jpg", rating: 7, comment: "Amazing!" },
    { id: 5, name: "Pork Ramen", restaurant: "Shigansh Restaurant", image: "pork.jpg", rating: 3, comment: "The pork was tough and a bit chewy!" }
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });

   
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    document.querySelector("#new-ramen button").addEventListener("click", function(event) {
        event.preventDefault();  

        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value, 
            image: document.getElementById("new-image").value, 
            rating: document.getElementById("new-rating").value, 
            comment: document.getElementById("new-comment").value 
        };


        ramens.push(newRamen);

       
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);

        
        handleClick(newRamen);

       
        document.getElementById("new-name").value = "";
        document.getElementById("new-restaurant").value = "";
        document.getElementById("new-image").value = "";
        document.getElementById("new-rating").value = "";
        document.getElementById("new-comment").value = "";
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);