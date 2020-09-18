class Form{
    constructor(){
        this.input = createInput("Name");
        this.title = createElement('h2');
        this.button = createButton("PLAY");
        this.greeting = createElement('h2');
    }
    hide(){
        this.input.hide();
        this.title.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
    this.title.html("BRAIN OUT GAME");
    this.title.position(displayWidth/2,50);
    this.button.position(displayWidth/2+100,displayHeight/2+80);
    this.input.position(displayWidth/2,displayHeight/2)
    this.button.mousePressed(()=>{
        this.button.hide();
        this.title.hide();
        this.input.hide();
        
        var name = this.input.value();
        console.log(name);
        this.greeting.html("Hello " + name)
        this.greeting.position(200,200);
        this.greeting.style('color', 'black');
        this.greeting.style('font-size', '100px');
      });
    }
}

