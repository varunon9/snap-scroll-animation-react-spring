const EarnFreeStocksSection = () => {
  return (
    <div className="w-screen h-screen p-6 flex flex-col justify-end max-w-3xl m-auto z-1 snap-center">
      <div>
        <div className="flex">
          <img src="images/apple.png" className="w-[76px]" />
          <div className="flex-1" />
          <img src="images/amazon.png" className="w-[76px]" />
        </div>
        <p className="font-sans text-2xl text-center">Shop at</p>
        <div
          className="w-4/5 m-auto rounded-xl h-14 border-brand-blue-azureRadiance text-brand-blue-azureRadiance border-2 my-4 relative overflow-hidden"
          style={{ background: 'rgba(1, 122, 255, 0.1)' }}
        >
          <div
            className="absolute top-0 w-full"
            style={{
              animation: 'ind-credit-card-stocks-slide-up 10s ease infinite',
            }}
          >
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              Amazon
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              Uber
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              Dominos
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              Netflix
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              Apple
            </div>
          </div>
        </div>
        <p className="font-sans text-2xl text-center">Get</p>
        <div className="w-4/5 m-auto rounded-xl h-14 border-brand-blue-azureRadiance text-brand-white border-2 bg-brand-blue-azureRadiance my-4 relative overflow-hidden">
          <div
            className="absolute top-0 w-full"
            style={{
              animation: 'ind-credit-card-stocks-slide-down 10s ease infinite',
            }}
          >
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              AAPL
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              NFLX
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              DPZ
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              UBER
            </div>
            <div className="text-4xl font-bold h-14 flex justify-center items-center">
              AMZN
            </div>
          </div>
        </div>
        <p className="font-sans text-2xl text-center">Stocks</p>
        <div className="flex">
          <img src="images/microsoft.png" className="w-[82px]" />
          <div className="flex-1" />
          <img src="images/netflix.png" className="w-[67px]" />
        </div>
        <h1 className="font-sans text-4xl mb-2 mt-16 font-bold">
          Earn free stocks on every purchase at your favourite brands
        </h1>
        <p className="font-sans text-brand-grey-base text-lg">
          All your lifetime!
        </p>
      </div>
    </div>
  );
};

export default EarnFreeStocksSection;
