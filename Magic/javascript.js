var escolhidos = []

window.onload = Myfunction()
        
function Myfunction() {

    while(escolhidos.length < 86){
        play = Math.floor(Math.random() * 86 + 1);  

        if(escolhidos.indexOf(play) == -1){
            escolhidos.push(play)
        }

        

    }

    console.log(escolhidos)
    console.log(escolhidos[0])
    
}


function planos(){
        play = Math.floor(Math.random() * 86 + 1);
        document.getElementById("card").src = "./planos/"+escolhidos[0]+".jpg";  

        escolhidos.splice(0, 1)
        console.log(escolhidos)
        console.log(escolhidos[0])

    }

function effect() {
    var h = window.document.getElementById("dado")
    h.style.background = 'green';     
}
function effect1(){
    var h = window.document.getElementById("dado")
    h.style.background = "black"
}
        function myFunction(){
        var play = Math.floor(Math.random() * 6 + 1);
        switch (play) {
            case 1:                        
                document.getElementById("lado").src = "./imgdado/dado1.jpg"
                break            
            case 2:
                document.getElementById("lado").src = "./imgdado/dado2.jpg"
                break
            case 3:
                document.getElementById("lado").src = "./imgdado/dado3.jpg"
                break
            case 4:
                document.getElementById("lado").src = "./imgdado/dado4.jpg"
                break
            case 5:
                document.getElementById("lado").src = "./imgdado/dado5.png"
                break
            case 6:
                document.getElementById("lado").src = "./imgdado/dado6.jpg"
    }
} 



function functionProximo(){
    
    
}






    

   