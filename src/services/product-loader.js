export const getProducts = (limit = 20) => {
  return fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
    method: "get",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(async (res) => {
      if (!res.ok) {
        // create error instance with HTTP status text
        const error = new Error(res.statusText);
        error.json = res.json();
        throw error;
      }

      const data = await res.json();
      return data.map(({ image, ...product }) => ({
        ...product,
        image: `${image}?random=${Math.random()}`,
      }));
    })
    .catch((err) => {
      //   error.value = err;
      // In case a custom JSON error response was provided
      if (err.json) {
        return err.json.then(() => {
          // set the JSON response message
          //   error.value.message = json.message;
        });
      }
    });
};
