// components/PaymentDetails.js
const PaymentDetails = ({ paymentId, successMessage }) => {
    return (
      <div>
        <h1>Payment Details</h1>
        <p><strong>Payment ID:</strong> {paymentId}</p>
        <p><strong>Message:</strong> {successMessage}</p>
      </div>
    );
  };
  
  export default PaymentDetails;
  