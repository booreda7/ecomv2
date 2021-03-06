import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Confirmation = ({ orderInfo, orderError }) => {
  if (orderError) {
    return (
      <div className="confirmation">
        <Typography variant="h5">Error: {orderError}</Typography>
        <Button component={Link} variant="outlined" type="button" to="/ecomv2">
          Back to home
        </Button>
      </div>
    );
  }
  return (
    <div className="confirmation">
      <Typography variant="h5">
        Thank you {orderInfo.customer.firstname} {orderInfo.customer.lastname}{" "}
        for your purchase!
      </Typography>
      <Button component={Link} variant="contained" type="button" to="/ecomv2">
        Continue shopping
      </Button>
    </div>
  );
};

export default Confirmation;