/*
    username:"Gigel_Costel"
    reviewScore: 4.5,
    reviewComment: "Good bat. I like hitting people with it."
*/

let commentsArray = [];
let nextID = 1;

const getAllComments = () =>
    {
        return commentsArray;
    }

const addOneComment = (commentData) =>
    {
        const {username,reviewScore,reviewComment} = commentData;
        if (!username,!reviewScore,!reviewComment)
        {
            return false;
        }
        const newcomment = 
        {
            id:nextID++,
            ...commentData,

        }
        commentsArray.push(newcomment);
        return newcomment;
    }

const findOneCommentbyID = (id) => 
    {
        const numericID = Number(id)
        const foundcomment = commentsArray.find(comment => comment.id === numericID);
        return foundcomment || false;
    }

const updateOnecommentbyID = (id,updateData) => 
    {
        const updatecomment = findOneCommentbyID(id);
        if(updatecomment)
            {
                if(updateData)
                    {
                        Object.assign(updatecomment,updateData);
                    }
                return updatecomment;
            }
        return false;
    }

const deleteOneCommentbyID = (id) => 
    {
        const deletecomment = findOneCommentbyID(id);
        if (deletecomment)
            {
                commentsArray = commentsArray.filter(comment => comment.id!==deletecomment.id);
                return true;
            }
        return false;
    }



if(require.main === module)
    {
        //Creating users, 2 valid 1 invalid. Test for impossibilities.
        console.log("addOne Called:",
            addOneComment(
        {
            username:"Gigel_Costel",
            reviewScore: 4.5,
            reviewComment: "Good bat. I like hitting people with it."
        }))
        console.log("addOne Called:",
            addOneComment(
        {
            username:"Minerva A.",
            reviewScore: 5.0,
            reviewComment: "Would reccomend. Yoinked god with it."
        }))
        console.log("addOne Called:",
            addOneComment(
        {
            username: "Faker - Get Faked."
        }))

        //Checking array. Test for impossibilities.
        console.log("getAll Called:",getAllComments());
        console.log("getOnebyId called:",findOneCommentbyID(1));
        console.log("getOnebyId called:",findOneCommentbyID(3));

        //Checking update. Test for impossibilities.
        console.log("updateOnecommentbyID called:", updateOnecommentbyID(1,{username:"Marcel Gioanaaaa"}));
        console.log("updateOnecommentbyID called:", updateOnecommentbyID(3,{username:"Faker - Get Faked."}));

        //Checking delete. Test for impossibilities.
        console.log("deleteOneCommentbyID called:", deleteOneCommentbyID(1));
        console.log("deleteOneCommentbyID called:", deleteOneCommentbyID(3));

        //Final array should only have item 2.
        console.log("getAll Called:",getAllComments());
    }

    module.exports = 
    {
        getAllComments,
        addOneComment,
        findOneCommentbyID,
        updateOnecommentbyID,
        deleteOneCommentbyID,
    }