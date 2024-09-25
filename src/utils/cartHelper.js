export const fetchCart = async (userId, axios) => {
  try {
    const response = await axios.get(`api/cart/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

export const incrementItem = async (userId, productId, unit, axios) => {
  try {
    const response = await axios.put(`api/cart/${userId}`, {
      productId,
      quantityChange: 1,
      unit,
    });
    return response.data;
  } catch (error) {
    console.error("Error incrementing item:", error);
  }
};

export const decrementItem = async (userId, productId, unit, axios) => {
  try {
    const response = await axios.put(`api/cart/${userId}`, {
      productId,
      quantityChange: -1,
      unit,
    });
    return response.data;
  } catch (error) {
    console.error("Error decrementing item:", error);
  }
};

export const removeItem = async (userId, productId, unit, axios) => {
  try {
    const response = await axios.delete(`api/cart/${userId}`, {
      data: {
        productId,
        unit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error removing item:", error);
  }
};
