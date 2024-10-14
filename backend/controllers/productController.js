import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

//function for add products---------------------------------------
const addProduct = async (req, res) => {
    try {

        // //CG - Added console.log to inspect the request object
        // console.log('Request Files:', req.files); // Inspect the files object CG
        // console.log('Request Body:', req.body);   // Inspect the request body CG
        // //CG end

        const {name, description, price, category, subCategory, sizes,bestSeller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 &&  req.files.image2[0]
        const image3 = req.files.image3 &&  req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

        //Upload images to cloudinary
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
                return result.secure_url
            })
        )

        //Save in MongoDB
        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestSeller: bestSeller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date:Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save();
        res.json({success:true,message: 'Product added'})  

    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

//function for list products-------------------------------------------
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, products}) 
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
    
}

//function for remove products-------------------------------------------
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message: 'Product removed'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

//function for single products-------------------------------------------
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: error.message})
    }
}

export { addProduct, listProduct, removeProduct, singleProduct }