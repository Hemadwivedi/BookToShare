const Product=require('../models/book');
exports.getAddBook = (req, res, next) => {
    //here add route
    res.render('route', {
      pageTitle: 'Add Product',
      path: 'route path',
      editing: false
    });
  };
exports.postAddBook = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null, title, imageUrl, description, price);
    product.save().then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };
  exports.getEditBook=(req,res,next)=>{
      const editMode=req.query.edit;
      if(!editMode){
          //will have to replce it with correct root
          return res.redirect('/');
      }
      const prodId=req.params.productId;
      Product.findById(prodId,product=>{
          if(!product){
              return res.redirect('/');
//page reder setup
 }

 
      //here also set the path
   res.render('renderpath',{
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing: editMode,
    product: product
      })
    })
  }
  exports.postEditBook = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const updatedProduct = new Product(
      prodId,
      updatedTitle,
      updatedImageUrl,
      updatedDesc,
      updatedPrice
    );
    updatedProduct.save();
    //setUpPath
    res.redirect('setuppath');
  };
  
  exports.getBook = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('setupPath', {
        prods: products,
        pageTitle: 'Admin Products',
        path: 'setUpPath'
      });
    });
  };
  
  exports.postDeletebook = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('setupPath');
  };
  
