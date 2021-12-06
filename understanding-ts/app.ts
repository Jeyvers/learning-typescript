// Interfaces > mostly uses PascalNamingConvention
// What is an interface? 
// Classes help enforce the cohesion rule
// An object is an instance of a class
// Question mark after variable in constructors make the variables optional
// I keep getting errors the tutor isn't getting, yet we're doing the same thing. 

// Access Modifiers
// Public, Private and protected
// Prefixing the field with the chosen access modifiers gives it the access chosen. By default, every field has a public modifier
// Creating your constructor variables with an access modifiers simplifies your code. 

class Point {
    constructor(private x?: number, private y?: number) {
    } 

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    // Use case 1
    getX() {
        return this.x;
    }
    // setX 
    setX(value: number) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0')
        }
    }
}

let point = new Point(20, 28);
point.setX(10);
point.draw();

