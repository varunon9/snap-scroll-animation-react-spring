import { animated } from 'react-spring';

const IntroducingCreditCardComp = (
  props
) => {
  const { downArrowStyles, userWaitListNumber } = props;

  if (userWaitListNumber) {
    return (
      <div>
        <p className="font-sans text-base">
          <span className="text-brand-grey-dark">
            Congratulations, you have enrolled yourself for {''}
          </span>
          <span>IND Super Credit Card!</span>
        </p>
        <p className="font-sans text-brand-grey-base text-base mt-6">
          Your Waitlist Number
        </p>
        <h1 className="font-sans text-4xl font-bold my-2 text-brand-black">
          #{userWaitListNumber}
        </h1>
        <p className="font-sans text-brand-grey-base text-sm mb-4">
          We will let you know once your card is ready to be activated
        </p>
        <div className="mt-4 mb-3 flex">
          <button
            className="bg-brand-blue-azureRadiance text-center p-[8px] flex-1 rounded-3xl"
          >
            <span className="text-[16px] text-brand-white">Go to Dashboard</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="font-sans text-brand-grey-base text-xl leading-6">
        Introducing
      </p>
      <h1 className="font-sans text-4xl font-extrabold my-2">IND Super</h1>
      <h1 className="font-sans text-4xl font-extrabold my-2">Credit Card!</h1>
      <p className="font-sans text-brand-grey-base text-lg mb-4">
        Join India's biggest Rewards program
      </p>
      <animated.div
        className="flex flex-col items-center mt-8 mb-2"
        style={downArrowStyles}
      >
        <img src="/images/arrow-down.png" className="w-6 animate-bounce" />
        <img src="/images/arrow-down.png" className="w-6 animate-bounce" />
      </animated.div>
    </div>
  );
};

export default IntroducingCreditCardComp;
