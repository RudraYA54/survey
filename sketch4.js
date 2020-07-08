var database,Yes=0,No=0,feedback=0,form,update
function setup()
{
    createCanvas(400,400)
    database= firebase.database();
    form= new Form()
    form.display();
    update= new Update()
    update.no()
    update.yes()
    update.feedback()
}
function darw()
{
    background("white")
}
    
