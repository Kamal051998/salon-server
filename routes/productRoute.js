import express from 'express'
import { addProduct, categoryProducts, getAllProducts, uploadProductPhoto } from '../controllers/productConroller.js'



const router=express.Router()

router.get("/",getAllProducts)
router.post('/addproduct',uploadProductPhoto,addProduct)
router.post('/category',categoryProducts)

export default router