import BeautyProduct from "../models/productModel.js";
import multer from "multer";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/products");
  },
  filename: (req, file, cb) => {
    //products-7676767abc87abc-56789.jpeg

    const ext = file.mimetype.split("/")[1];
    cb(null, `product-${req.body.name}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("not an image please upload an image ", false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadProductPhoto = upload.single("photo");

export const addProduct = async (req, res) => {
  try {
    const img = req.file.filename;
    const newProduct = await BeautyProduct.create({ ...req.body, img });
    const imagePath = `/img/products/${img}`;
    res
      .status(200)
      .json({ status: "success", data: { product: newProduct, imagePath } });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await BeautyProduct.find();
    res.status(200).json({ status: "sucess", data: allProducts });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
};
