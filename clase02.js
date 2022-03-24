class Usuario {
    constructor(name,lastName,books,pets){
        this.name = name
        this.lastName = lastName
        this.books = []
        this.pets = []
    }

    getFullName(){
        return `Nombre completo: ${this.name} ${this.lastName}`
    }

    addPet(pet){
        this.pets.push(pet)
    }

    countPets(){
        return this.pets.length
    }

    addBook({title, author}){
        this.books.push({title:title,author:author})
    }

    getBooksNames(){
        const tt= this.books.map((book)=> book.title);
        return tt
    }
}

//Creo objeto Usuario1
const Usuario1 = new Usuario ("Nicolas", "Bartolome");

//Agrego las mascotas al array mascotas de Usuario1
Usuario1.addPet("Coco");
Usuario1.addPet("Pelusa");
Usuario1.addPet("Pan");

//Agrego los libros al array libros de Usuario1
Usuario1.addBook({title:"El retrato de Dorian Gray" ,author:"Oscar Wilde"});
Usuario1.addBook({title:"Drácula", author:"Bram Stoker"});
Usuario1.addBook({title:"Un momento en Pekín", author:"Lin Yutang"})


//Llamo a la funcion para mostrar el nombre completo de Usuario1
console.log(Usuario1.getFullName());

//Llamo a la función para mostrar la cantidad de mascotas del Usuario1
console.log(Usuario1.countPets());

//Llamo a la función para mostrar solo los titulos de los libros de Usuario1
console.log(Usuario1.getBooksNames());

