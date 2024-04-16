class ProductManager {
    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: this.#initId()
        }
        
        if (title, description, price, thumbnail, code, stock) {            
            const productsCheck = []
            productsCheck.push(product)
            const productsCheckSome = productsCheck.some((product)=>product.code === code)
            //console.log(productsCheck.some((product)=>product.code === code));
            if(productsCheckSome) return console.log("No es posible agregar ese producto")
        }else{
            return this.products.push(product);
        }
        //if(this.products.some((product)=>product.code ==! code))
        //console.log(this.product.some((product)=>product.code ==! code));
    }

    #initId(){
        let idCode = this.products.length + 1
        return idCode
    }

    getProducts(){
        return this.products
    }

    getProductById(productId){
        const checkId = this.products.find((product) => product.id === productId)
        if(!checkId) return "Not found"
        else return checkId
    }
}

const productManager = new ProductManager()

productManager.addProduct("REMERA HIGH PLEASURE", "Remera manga corta con cuello redondo", 29000, "https://acdn.mitiendanube.com/stores/001/343/102/products/tezza-90321-c88ac45352b76c5a7c16700049342456-640-0.webp,", 4, 1)
productManager.addProduct("REMERA SMILE", "Fresca y cómoda para el verano, su tela permite que el pase del aire muy facilimente", 29000, "https://acdn.mitiendanube.com/stores/001/343/102/products/tezza-15361-b5442d7cbc68f9a81516700036167374-480-0.webp", 4, 3)
productManager.addProduct()

console.log(productManager.getProducts());
console.log(productManager.getProductById(1));
