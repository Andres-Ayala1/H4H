list = [
    {
        name: "Snow",
        photo: "images/dog_2.jpeg",
        description: "Husky from Dallas: 6 yrs.",
        shelter: "Austin Animal Center (2.1 mi away)"
    },
    {
        name: "Kyle",
        photo: "images/dog_3.jpeg",
        description: "Golden Retriever from El Paso: 7 yrs.",
        shelter: "El Paso Animal Services Center (8.9 mi away)"
    },
    {
        name: "Momo",
        photo: "images/siamese.jpeg",
        description: "Siamese cat from Houston: 9 mths.",
        shelter: "Harris County Pets (2hr 31min away)"
    },
    {
        name: "Jake",
        photo: "images/dog_1.jpeg",
        description: "Corgi from San Antonio: 5 mths.",
        shelter: "Austin Humane Society (4.4 mi away)"
    }
]
var index = 0
function newPage() {
    var pet = list[index]
    var name = document.getElementById("name")
    var photo = document.getElementById("photo")
    var description = document.getElementById("description")
    var shelter = document.getElementById("shelter")
    name.textContent = pet.name
    photo.src = pet.photo
    description.textContent = pet.description
    shelter.textContent = pet.shelter
    index += 1
    index = index % list.length 

}