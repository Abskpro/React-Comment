# First npm packages for developing a comment box


# Directly add comments box to react 
# each comment box has it's own tree
# each comment box is stored in the nested object 
# each comment has a reply button

#example of a nested array of comment

[
    {
        id:1,
        name:"abhishek",    
        comment:"this is very good",
        reply:[
            {
                id:1.1,
                name:"john",    
                comment:"I completely agree with you"
                reply:[
                    {
                         
                    }
                ]
            }
        ]
    },
    {
        id:2,
        name:"sam",
        comment:"this is bullshit"
    },
    {
        id:3,
        name:"sam",
        comment:"this is bullshit"
    }

]


#each comment will have name of user with comment and reply of comment as an array which will be empty array where object will be pushed 



