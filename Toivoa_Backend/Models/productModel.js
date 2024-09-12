/*product example

    name: "Baseball Bat",
    vendor: "Bat.Co",
    description: "A bat to hit your enemies with."
    reviewScore: 4.5,
    reviewNr: 1,
    reviewList:[...]
*/

const Reviews = require('./commentModel')

let productArray = [];
let nextID = 1;

const getAllProducts = () =>
    {
        return productArray;
    }

const addOneProduct = (productData) =>
    {
        const {name,vendor,description} = productData;
        if (!name,!vendor,!description)
        {
            return false;
        }
        const newProduct = 
        {
            id:nextID++,
            ...productData,
            reviewNr: 0,
            reviewList: []

        }
        productArray.push(newProduct);
        return newProduct;
    }



const findOneProductbyID = (id) => 
    {
        const numericID = Number(id)
        const foundProduct = productArray.find(product => product.id === numericID);
        return foundProduct || false;
    }

const updateOneProductbyID = (id,updateData) => 
    {
        const updateProduct = findOneProductbyID(id);
        if(updateProduct)
            {
                if(updateData)
                    {
                        Object.assign(updateProduct,updateData);
                    }
                return updateProduct;
            }
        return false;
    }

const deleteOneProductbyID = (id) => 
    {
        const deleteProduct = findOneProductbyID(id);
        if (deleteProduct)
            {
                productArray = productArray.filter(product => product.id!==deleteProduct.id);
                return true;
            }
        return false;
    }



if(require.main === module)
    {
        //Creating users, 2 valid 1 invalid. Test for impossibilities.
        console.log("addOne Called:",
            addOneProduct(
        {
            name: "Baseball Bat",
            vendor: "Bat.Co",
            description: "A bat to hit your enemies with."
        }))
        console.log("addOne Called:",
            addOneProduct(
        {
            name: "Sock",
            vendor: "Sock.Co",
            description: "For special people."
        }))
        console.log("addOne Called:",
            addOneProduct(
        {
            name: "Faker - Get Faked."
        }))

        //Checking array. Test for impossibilities.
        console.log("getAll Called:",getAllProducts());
        console.log("getOnebyId called:",findOneProductbyID(1));
        console.log("getOnebyId called:",findOneProductbyID(3));

        //Checking update. Test for impossibilities.
        console.log("updateOneProductbyID called:", updateOneProductbyID(1,{name:"Baseball Gold Bat"}));
        console.log("updateOneProductbyID called:", updateOneProductbyID(3,{name:"Faker - Get Faked."}));

        //Checking delete. Test for impossibilities.
        console.log("deleteOneProductbyID called:", deleteOneProductbyID(1));
        console.log("deleteOneProductbyID called:", deleteOneProductbyID(3));

        //Final array should only have item 2.
        console.log("getAll Called:",getAllProducts());
    }

    module.exports = 
    {
        getAllProducts,
        addOneProduct,
        findOneProductbyID,
        updateOneProductbyID,
        deleteOneProductbyID,
    }