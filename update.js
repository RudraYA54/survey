class Update
{
    constructor()
    {
        
    }
    feedback()
    {
        database.ref('Feedback').on("value",(data)=>{
            feedback=data.val()
        })
    }
    updateFeed(feedcount)
    {
        database.ref('/').update({
            Feedback:feedcount
        })
    }
    yes()
    {
        database.ref('yes').on("value",(data)=>{
            Yes=data.val()
        })
    }
    updateYes(yescount)
    {
       database.ref('/').update({
           yes:yescount
       })
    }
    no()
    {
        database.ref('no').on("value",(data)=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            No=data.val()
        })
    }
    updateNo(nocount)
    {
        database.ref("/").update({
            no:nocount
        })
    }
}