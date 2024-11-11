export const supplierListApi = async (page, limit, search, searchKey) => {
  console.log('search: ', search);
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const url = new URL(`https://admin.memate.au/api/supplier-lists`);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);

    if (search) url.searchParams.append("search", search);
    if (searchKey) url.searchParams.append("starts_with", searchKey);

    const response = await fetch(`${url}`, requestOptions);
    const result = await response.json(); 
    console.log("API response:", result);

    return result;

  } catch (error) {
    console.error("Error fetching Supplier:", error);
    return [];
  }
};

export const singlePostSupplier = async (slug) => {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "3fa85f64d51b6c8e74313f7c69aef82d");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  try {
    const response = await fetch(`https://admin.memate.au/api/single-supplier/${slug}`, requestOptions);
    const result = await response.json(); 
    console.log("API response:", result);

    return result;

  } catch (error) {
    console.error("Error fetching Single Supplier:", error);
    return [];
  }
};
