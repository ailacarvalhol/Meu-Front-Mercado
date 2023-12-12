

async function GetAllProduct() {
    const productList = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .catch((error)=> console.log(error))
    // .then(json => { return (json) })
    return productList;
}

export default GetAllProduct;