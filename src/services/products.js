export async function getProductsByName(productName){
  const res =  await fetch(`http://3.143.212.203/api/v1/search?q=${productName}`);
  const data = await res.json();
  return data
}


export async function getProductByID(id){
  const res =  await fetch(`http://3.143.212.203/api/v1/items/${id}`);
  const data = await res.json();
  return data
}


export async function getProductsFlask(name){
  const res =  await fetch(`https://proyectoflaskoldwave.herokuapp.com/api/search?q=${name}`);
  const data = await res.json();
  return data
}


