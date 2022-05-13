const JoinTheWaitListComp = (props) => {
  const {
    onSubscribeButtonClick,
    subscriptionInProgress,
    totalSubscribersCount,
    userWaitListNumber,
  } = props;

  return (
    <div>
      <p className="font-sans text-brand-grey-base text-base">
        {userWaitListNumber ? '' : 'Join the Waitlist!'}
      </p>
      <h1 className="font-sans text-3xl my-2 font-bold">
        Flat 5%* rewards on all transactions!
      </h1>
      <p className="font-sans text-brand-grey-base text-base">
        For first 1 Lakh users to enroll on first month spends
      </p>
      <p className="mt-2 font-sans text-brand-grey-base text-xs mb-[-8px]">
        {userWaitListNumber
          ? ''
          : 'By proceeding I allow INDmoney to fetch my credit score from the bureaus (CRIF/Experian)'}
      </p>
      <div className="mt-4 mb-3 flex">
        <button
          className="bg-brand-blue-azureRadiance text-center p-[8px] flex-1 rounded-3xl"
          onClick={onSubscribeButtonClick}
          disabled={subscriptionInProgress}
        >
          <span className="text-[16px] text-brand-white">{userWaitListNumber ? 'Go to Dashboard' : 'Join the waitlist'}</span>
        </button>
      </div>
      <p className="font-sans text-brand-grey-base text-xs text-center">
        <span>{totalSubscribersCount}</span> users have already enrolled!
      </p>
      <p className="flex flex-col items-center my-2">
        <img src="/images/sbm-bank.png" className="w-36" />
      </p>
    </div>
  );
};

export default JoinTheWaitListComp;
