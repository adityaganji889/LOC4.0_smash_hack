const express = require("express");
const router=express.Router();
const UserController=require("./src//Controller/UserController.js")
const OrderController=require("./src//Controller/OrderController.js")
const RawMaterialController=require("./src//Controller/RawMaterialController.js")
const ProductController=require("./src/Controller/ProductController.js")
const multer=require('multer')

let StorageSettings=multer.diskStorage({
    destination:'images',
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"__"+file.originalname)
    }
})

const uploader=multer({storage:StorageSettings})
router.get('/',(req,res)=>console.log("HEllo"));

router.post('/login',UserController.login);

router.post('/register',UserController.register);

router.get('/getAllOrders',OrderController.allOrders);

router.post('/addOrder',OrderController.createOrder);

router.post('/addRawMaterial',RawMaterialController.addStock)

router.get('/allRawMaterials',RawMaterialController.allRawMaterial)

router.post('/allProduct',ProductController.allProducts)

router.post('/addStock',ProductController.addStock)

router.post('/addProduct',uploader.single('image'),ProductController.addProduct)

router.post('/stockRemove',ProductController.stockRemove)

router.post('/createOrder',OrderController.createOrder)

router.post('/generateOrderId',OrderController.generateOrderId)

router.post('/updateOrderStatus',OrderController.updateOrderStatus)

router.post('/addtoCart',UserController.addtoCart)

router.post('/getCart',UserController.getCart)

router.get('/allUsers',UserController.allUsers)

router.post('/removeFromCart',UserController.removeFromCart)

router.post('/removeOrder',OrderController.removeOrder)

router.get('/returnedOrder',OrderController.returnedOrder)

router.post('/myOrders',UserController.myOrders)




module.exports=router