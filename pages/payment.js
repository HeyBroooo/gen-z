// pages/payment.js
import { useRouter } from 'next/router';
import PaymentDetails from '../components/PaymentDetails';

const PaymentPage = () => {
  const router = useRouter();
  const { razorpay_payment_id, success_message } = router.query;

  return (
    <div>
      {razorpay_payment_id && success_message ? (
        <PaymentDetails
          paymentId={razorpay_payment_id}
          successMessage={success_message}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentPage;
