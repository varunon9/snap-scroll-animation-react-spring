const SuperSaverCreditCardSection = () => {
  return (
    <div className="w-screen h-screen p-6 flex flex-col justify-end max-w-3xl m-auto z-1 snap-center">
      <div>
        <div className="mb-3">
          <span className="rounded bg-brand-blue-azureRadiance text-white py-1 px-4">
            Super Saver Credit Card
          </span>
        </div>
        <div>
          {[
            'Earn 1.25% cashback',
            'Earn >6% interest on your deposits',
            '0 fee (no annual or hidden fees)',
            '0 foreign transaction fee',
          ].map((item, index) => {
            return (
              <div key={index} className="flex items-center my-2">
                <img src="/images/green-tick.png" className="w-4 h-4 mr-3" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
        <h1 className="font-sans text-3xl mb-2 mt-4 font-bold">
          Credit Card for Everyone!
        </h1>
        <p className="font-sans text-brand-grey-base text-lg">
          Get a credit card, no minimum credit score required
        </p>
      </div>
    </div>
  );
};

export default SuperSaverCreditCardSection;
