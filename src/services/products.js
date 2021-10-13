export async function getProductsByName(productName){
  const res =  await fetch(`https://d1eylshvb8atwe.cloudfront.net/api/v1/search?q=${productName}`);
  const data = await res.json();
  return data
}


export async function getProductByIDFast(id){
  const res =  await fetch(`https://d1eylshvb8atwe.cloudfront.net/api/v1/items/${id}`);
  const data = await res.json();
  return data
}


export async function getProductsFlask(product){
  const res =  await fetch(`https://54.183.179.149:8080/api/search?q=${product}`);
  const data = await res.json();
  return data
}


export async function getProductByIDFlask(id){
  const res =  await fetch(`https://54.183.179.149:8080/api/item/${id}`);
  const data = await res.json();
  return data
}
