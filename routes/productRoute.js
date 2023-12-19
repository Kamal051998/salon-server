import express from 'express'
import { addProduct, getAllProducts, uploadProductPhoto } from '../controllers/productConroller.js'



const router=express.Router()

router.get("/",getAllProducts)
router.post('/addproduct',uploadProductPhoto,addProduct)


export default router