// primo esercizio

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  comparaEtà = function (altroUser) {
    if (this.age > altroUser.age) {
      return `${this.firstName} è più vecchio di ${altroUser.firstName}`;
    } else if (this.age < altroUser.age) {
      return `${this.firstName} è più giovane di ${altroUser.firstName}`;
    } else {
      return `${this.firstName} e ${altroUser.firstName} hanno la stessa età`;
    }
  };
}

const persona1 = new User("Mario", "Rossi", "21", "Roma");
console.log(persona1);

const persona2 = new User("Gian", "Giorgio", "32", "Milano");
console.log(persona2);

const persona3 = new User("Franco", "Bianchi", "18", "Firenze");

console.log(persona1.comparaEtà(persona2));
console.log(persona2.comparaEtà(persona3));

// secondo esercizio

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
  }
}

const pets = [];

const form = document.getElementById("petForm");
const petList = document.getElementById("petList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  pets.forEach((pet) => {
    if (newPet.sameOwner(pet)) {
      alert(
        `${newPet.petName} e ${pet.petName} hanno lo stesso padrone (${pet.ownerName})!`
      );
    }
  });

  pets.push(newPet);

  updateList();

  form.reset();
});

function updateList() {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Padrone: ${pet.ownerName}`;
    petList.appendChild(li);
  });
}
