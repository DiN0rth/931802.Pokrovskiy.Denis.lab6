OpenColumn = (name) => {
    let Left = document.querySelector("#left");
    let Cat = document.querySelector("#lcat");
    let Right = document.querySelector("#right");
    let Dog = document.querySelector("#rdog");

    if(name == "left"){
    Left.style.width = "800px";
    Cat.style.display="block";
    Cat.style.width="75%";
    Right.style.width = "0";
    Dog.style.display="none";
    }

    if(name == "both"){
    Left.style.width="400px";
    Cat.style.display="block";
    Cat.style.width="400px";
    Right.style.width="400px";
    Dog.style.display="block";
    Dog.style.width="400px";
    }

    if(name == "right"){
    Left.style.width="0";
    Cat.style.display="none";
    Right.style.width="800px";
    Dog.style.display="block";
    Dog.style.width="75%";
    }
}