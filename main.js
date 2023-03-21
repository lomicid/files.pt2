// Функція для додавання продукту у список
const fs = require('fs');

const FILE_NAME = 'shoppingList.csv';

// Функція для отримання даних про продукт за його унікальним ідентифікатором
function addProduct(product) {
  fs.appendFileSync(FILE_NAME, `${product.id},${product.name},${product.price}\n`);
  console.log('Product has been added to your shopping list');
}

// Функція для видалення продукту зі списку за його унікальним ідентифікатором
function getProductById(id) {
  const fileData = fs.readFileSync(FILE_NAME, 'utf8');
  const products = fileData.split('\n');
  for (const product of products) {
    const [productId, name, price] = product.split(',');
    if (productId === id) {
      return { id: productId, name, price };
    } 
  }
  return null;
}

// Функція для зміни продукту за його унікальним ідентифікатором
function deleteProductById(id) {
  const fileData = fs.readFileSync(FILE_NAME, 'utf8');
  const products = fileData.split('\n');
  let updatedProducts = '';
  for (const product of products) {
    const [productId] = product.split(',');
    if (productId !== id) {
      updatedProducts += `${product}\n`;
    }
  }
  fs.writeFileSync(FILE_NAME, updatedProducts);
  console.log('Product deleted successfully');
}

function updateProductById(id, updatedProduct) {
  const fileData = fs.readFileSync(FILE_NAME, 'utf8');
  const products = fileData.split('\n');
  let updatedProducts = '';
  for (const product of products) {
    const [productId] = product.split(',');
    if (productId === id) {
      updatedProducts += `${updatedProduct.id},${updatedProduct.name},${updatedProduct.price}\n`;
    } else {
      updatedProducts += `${product}\n`;
    }  
  }
  fs.writeFileSync(FILE_NAME, updatedProducts);
  console.log('Product updated successfully');
}
addProduct({id:'2', name:'Appi', price:125361})
updateProductById('1', {id:'1', name:'Oran', price458123})
