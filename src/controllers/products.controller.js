import Product from "../models/Product";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;
  const newProduct = new Product({ name, category, price, imgURL });
  const productSaved = await newProduct.save();
  console.log("productSaved");
  console.log(productSaved);
  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(201).json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  product
    ? res.status(200).json(product)
    : res.status(400).json("product not found");
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(productId);
  deletedProduct
    ? res.status(200).json(`Product ${productId} deleted`)
    : res.status(400).json(`Product ${productId} not found`);
};
