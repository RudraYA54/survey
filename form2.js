class Form
{
    constructor()
    {
        this.yes=createButton("yes")
        this.no=createButton("no")
        this.name=createInput("")
        this.question=createElement('h2')
        this.ask=createElement('h3')
        this.thank=createElement('h4')
    }
       display()
       {
           
           this.yes.position(200,225)
           this.no.position(200,275)
           this.name.position(200,325)
           this.ask.html("Your Name")
           this.ask.position(200,350)
           this.question.html("Shold there be food a distribution for the poor everyday in the society?")
           this.question.position(200,20)
           this.yes.mousePressed(()=>{
            this.yes.hide()
            this.no.hide()
            this.name.hide()
            this.ask.hide()
            this.question.hide()
            this.thank.html("Thank you for your feedback")
            this.thank.position(200,200)
            feedback+=1
            update.updateFeed(feedback)
            Yes+=1
            update.updateYes(Yes)
            hide();
           })
           this.no.mousePressed(()=>{
            this.yes.hide()
            this.no.hide()
            this.name.hide()
            this.ask.hide()
            this.question.hide()
            this.thank.html("Thank you for your feedback")
            this.thank.position(200,200)
            feedback+=1
            update.updateFeed(feedback)
            No+=1
            update.updateNo(No)
            hide();
           })
       }

}
