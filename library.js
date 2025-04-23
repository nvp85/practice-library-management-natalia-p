

class LibraryItem {
    static nextId = 0; // I'm trying to implement automatically generated ids

    constructor(title, isAvailable, type) {
        this.id = LibraryItem.generateNextId();
        this.title = title;
        this.type = type;
        this.isAvailable = isAvailable;
    }

    checkOut() {
        if (!this.isAvailable) {
            console.log(`The ${this.type} "${this.title}" is not available.`);
        } else {
            console.log(`The ${this.type} "${this.title}" has been lent out successfully.`);
            this.isAvailable = false;
        }
    }
    returnItem() {
        if (this.isAvailable) {
            console.log(`The ${this.type} "${this.title}" was not lent out.`);
        } else {
            console.log(`The ${this.type} "${this.title}" has been returned successfully.`);
            this.isAvailable = true;      
        }
    }

    static generateNextId() {
        return this.nextId++; // inside a static method "this" refers to the class?
    }
}

class Book extends LibraryItem{
    constructor(title, isAvailable, author, genre) {
        super(title, isAvailable, "Book");
        this.author = author;
        this.genre = genre;
    }

    toString() {
        let availablility = this.isAvailable ? "yes" : "no"
        return `Book, ID: ${this.id}:\nTitle: ${this.title}; Author: ${this.author}; Genre: ${this.genre}; Available: ${availablility}.`
    }
}

class DVD extends LibraryItem{
    constructor(title, isAvailable, director, duration) {
        super(title, isAvailable, "DVD");
        this.director = director;
        this.duration = duration;
    }

    toString() {
        let availablility = this.isAvailable ? "yes" : "no"
        return `DVD, ID: ${this.id}:\nTitle: ${this.title}; Director: ${this.director}; Duration: ${this.duration}; Available: ${availablility}.`
    }
}

class Magazine extends LibraryItem{
    constructor(title, isAvailable, issueNumber, publisher) {
        super(title, isAvailable, "Magazine");
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }

    toString() {
        let availablility = this.isAvailable ? "yes" : "no"
        return `Magazine, ID: ${this.id}:\nTitle: ${this.title}; Issue Number: ${this.issueNumber}; Publisher: ${this.publisher}; Available: ${availablility}.`
    }
}

let book = new Book("The Dispossessed", true, "Ursula K. Le Guin", "Science Fiction");
let dvd = new DVD("Pulp Fiction", true, "Quentin Tarantino", "2h 29m");
let magazine = new Magazine("The Magazine of Fantasy & Science Fiction", true, "July 1995", "Mystery House");

// description of the items
console.log(book.toString());
console.log(dvd.toString());
console.log(magazine.toString());

// test the checkout method inherited from the parent class
book.returnItem();
book.checkOut();
console.log(book.toString());
book.checkOut();
book.returnItem();
console.log(book.toString());

// test accessing and displaying unique properties of each child class
console.log(book.author);
console.log(book.author);
console.log(dvd.duration);
console.log(magazine.publisher);

console.log(Book.nextId); // how to prevent inheritance of a static property?