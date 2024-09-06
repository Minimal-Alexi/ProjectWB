/*
    username: "Gigel_Costel",
    password: "LupuDacic",
    email: "LupuDacicAuAu@yahoo.com",
    age: 69,
    location: Manastur,
    gender: "M"
*/

let userArray = [];
let nextID = 1;

const getAll = () =>
    {
        return userArray;
    }

const addOne = (userData) =>
    {
        const {username,password,email,age,location,gender} = userData;
        if (!username,!age,!password,!email,!location,!gender)
        {
            return false;
        }
        const newUser = 
        {
            id:nextID++,
            ...userData
        }
        userArray.push(newUser);
        return newUser;
    }

const findOnebyID = (id) => 
    {
        const numericID = Number(id)
        const foundUser = userArray.find(user => user.id === numericID);
        return foundUser || false;
    }

const updateOnebyID = (id,updateData) => 
    {
        const updateUser = findOnebyID(id);
        if(updateUser)
            {
                if(updateData)
                    {
                        Object.assign(updateUser,updateData);
                    }
                return updateUser;
            }
        return false;
    }

const deleteOnebyID = (id) => 
    {
        const deleteUser = findOnebyID(id);
        if (deleteUser)
            {
                userArray = userArray.filter(user => user.id!==deleteUser.id);
                return true;
            }
        return false;
    }


// This is for testing the usermodel.
if(require.main)
    {
        //Creating users, 2 valid 1 invalid. Test for impossibilities.
        console.log("addOne Called:",
            addOne(
        {
            username: "Gigel_Costel",
            password: "LupuDacic",
            email: "LupuDacicAuAu@yahoo.com",
            age: 69,
            location: "Manastur",
            gender: "M"
        }))
        console.log("addOne Called:",
            addOne(
        {
            username: "Minerva_Alexia",
            password: ":3",
            email: "Miss_Metropolia@Metropolia.fi",
            age: 21,
            location: "Hillapelontie",
            gender: "F"
        }))
        console.log("addOne Called:",
            addOne(
        {
            username: "Faker - Get Faked."
        }))

        //Checking array. Test for impossibilities.
        console.log("getAll Called:",getAll());
        console.log("getOnebyId called:",findOnebyID(1));
        console.log("getOnebyId called:",findOnebyID(3));

        //Checking update. Test for impossibilities.
        console.log("updateOnebyId called:", updateOnebyID(1,{username:"Catalin_Fatalau"}));
        console.log("updateOnebyId called:", updateOnebyID(3,{username:"Faker - Get Faked."}));

        //Checking delete. Test for impossibilities.
        console.log("deleteOnebyId called:", deleteOnebyID(1));
        console.log("deleteOnebyId called:", deleteOnebyID(3));
        //Final array should only have item 2.
        console.log("getAll Called:",getAll());
    }