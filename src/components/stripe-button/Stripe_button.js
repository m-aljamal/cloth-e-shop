import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
function Stripe_button({price}) {
    const priceForStripr = price * 100
    const publishablekey = 'pk_test_sUGDV5JFtlQCoZAM6v3HPW1500WwmxWMs3'

    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
    
    return (
        <div>
            <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing LTD'
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripr}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
            />
        </div>
    );

    }
export default Stripe_button