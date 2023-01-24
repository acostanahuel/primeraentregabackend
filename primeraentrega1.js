const code = () => {
    let id = parseInt(Math.random() * 1000);
    return (id);
  }
  
  class Product {
    constructor(title, description, price, thumbnail, code, stock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
  
  class ProductManager{
    constructor(){
      this.products = new Array();
    }
    getProduct = () => {return this.products}

    addProduct = (title, description, price, thumbnail, code, stock) => {
        let newProduct = new Product(title, description, price, thumbnail, code, stock);
        
        if(!this.products.some(product => product.code === newProduct.code)){
          this.products.push(newProduct)
        } else {
          console.log(`El elemento ${newProduct.title} ${newProduct.description} con la ID: ${newProduct.code} ya existe`);
        }
      }
    
      getProductById = (ID) => {
        let position = this.products.findIndex(prod => prod.code === ID);
        position === -1 ? console.log("No existe el elemento buscado por ID"): console.log(this.products[position]);
    
     }
  }
   


  let productManager = new ProductManager();
  console.log(productManager.getProduct());
  
  productManager.addProduct("Cerveza","Lager",350 ,"lager.jpg", 1234 , 20);       
  productManager.addProduct("Cerveza","Amber",400 ,"amber.jpg", code () , 34);
  productManager.addProduct("Cerveza","Lager",350 ,"lager.jpg", 1234, 20);
  productManager.addProduct("Cerveza","Ipa",580,"ipa.jpg", code (), 17);
  console.log(productManager.getProduct());




  console.log("-----------------------------");
  console.log(productManager.getProductById(1234));
  console.log(productManager.getProductById(9999999));
