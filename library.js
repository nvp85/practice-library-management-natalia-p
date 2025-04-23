

class LibraryItem {
    constructor(id, title, isAvailable, type) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.isAvailable = isAvailable;
    }

    checkOut() {
        if (!this.isAvailable) {
            console.log(`The ${this.type} "${this.title}" is not available.`);
        } else {
            console.log(`The ${this.type} "${this.title}" is lent out.`);
            this.isAvailable = false;
        }
    }
    returnItem() {
        console.log(`The ${this.type} "${this.title}" is returned.`);
        this.isAvailable = true;
    }
}

class Book extends LibraryItem{
    constructor(id, title, isAvailable, author, genre) {
        super(id, title, isAvailable, "Book");
        this.author = author;
        this.genre = genre;
    }

    toString() {
        let availablility = this.isAvailable ? "yes" : "no"
        return `Book:\nTitle: ${this.title}; Author: ${this.author}; Genre: ${this.genre}; Available: ${availablility}.`
    }
}

class DVD extends LibraryItem{
    constructor(id, title, isAvailable, director, duration) {
        super(id, title, isAvailable, "DVD");
        this.director = director;
        this.duration = duration;
    }

    toString() {
        let availablility = this.isAvailable ? "yes" : "no"
        return `DVD:\nTitle: ${this.title}; Director: ${this.director}; Duration: ${this.duration}; Available: ${availablility}.`
    }
}

class Magazine extends LibraryItem{
    constructor(id, title, isAvailable, issueNumber, publisher) {
        super(id, title, isAvailable, "Magazine");
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

    toString() {
        let availablility = this.isAvailable ? "yes" : "no"
        return `Magazine:\nTitle: ${this.title}; Issue Number: ${this.issueNumber}; Publisher: ${this.publisher}; Available: ${availablility}.`
    }
}

let book = new Book(1, "The Dispossessed", true, "Ursula K. Le Guin", "Science Fiction");
let dvd = new DVD(2, "Pulp Fiction", true, "Quentin Tarantino", "2h 29m");
let magazine = new Magazine(3, "The Magazine of Fantasy & Science Fiction", true, "July 1995", "Mystery House");

// description of the items
console.log(book.toString());
console.log(dvd.toString());
console.log(magazine.toString());

// test the checkout method inherited from the parent class
book.checkOut();
console.log(book.toString());
book.checkOut();

// test accessing and displaying unique properties of each child class
console.log(book.author);
console.log(dvd.duration);
console.log(magazine.publisher);