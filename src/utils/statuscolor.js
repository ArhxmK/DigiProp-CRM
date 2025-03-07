export const getStatusColor = (status) => {
  if (status === "In Process" || status === "processing") {
    return "#D98D00";
  } else if (status === "Delivered" || status === "delivered") {
    return "#286167";
  } else {
    return "#6C757D";
  }
};
