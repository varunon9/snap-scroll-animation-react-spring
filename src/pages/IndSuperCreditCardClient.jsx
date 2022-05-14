import { useEffect, useRef, useCallback } from 'react';
import { useSpring, useSprings, animated } from 'react-spring';

import BackgroundSvgEarn from '../components/BackgroundSvgEarn';
import BackgroundSvgCashback from '../components/BackgroundSvgCashback';
import BackgroundSvgIntro from '../components/BackgroundSvgIntro';
import EarnFreeStocksSection from '../components/EarnFreeStocksSection';
import SuperSaverCreditCardSection from '../components/SuperSaverCreditCardSection';
import SuperCreditCardSection from '../components/SuperCreditCardSection';
import { creditCardsInitialTransforms } from '../constants';
import JoinTheWaitListComp from '../components/JoinTheWaitListComp';
import IntroducingCreditCardComp from '../components/IntroducingCreditCardComp';

const SCROLL_THROTTLE_MS = 100; // in ms

const IndSuperCreditCardClient = () => {
  const totalSubscribersCount = 98001;
  const waitListNumber = 0; // put some value to render post subscription screen

  // this will hold 4 content sections/slides
  const contentContainerRef = useRef(null);

  const clientHeightRef = useRef(0);

  // throttle scroll event
  const scrollInProgressRef = useRef(false);

  // scroll offset
  const [scrollYOffsetSpring, scrollYOffsetSpringApi] = useSpring(() => ({
    yOffset: 0,
  }));

  // background SVGs styles
  const [backgroundSvgIntroStyles, backgroundSvgIntroStylesApi] = useSpring(
    () => ({ opacity: 1 })
  );
  const [backgroundSvgEarnStyles, backgroundSvgEarnStylesApi] = useSpring(
    () => ({ opacity: 0 })
  );
  const [backgroundSvgCashbackStyles, backgroundSvgCashbackStylesApi] =
    useSpring(() => ({ opacity: 0 }));

  // credit cards
  const [creditCardSpringsStyles, creditCardSpringsStylesApi] = useSprings(
    3,
    (index) => ({
      opacity: 1,
      transform: creditCardsInitialTransforms[index],
    })
  );

  // down arrow
  const [downArrowStyles, downArrowStylesApi] = useSpring(() => ({
    opacity: 1,
  }));

  // super saver credit card & super credit card - vertical
  const [verticalCreditCardImgStyles, verticalCreditCardImgStylesApi] =
    useSprings(2, (index) => ({
      opacity: 0,
      transform: `translate3d(0, 0, ${
        index === 0 ? -75 : 0
      }px) rotate3d(0, 1, 0, ${index === 0 ? 180 : 0}deg)`,
    }));

  // 5% cashback style
  const [fivePercentSvgStyles, fivePercentSvgStylesApi] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-50%)',
  }));

  const onScroll = useCallback((event) => {
    //  number of pixels that an element's content is scrolled vertically.
    const yOffset = event.currentTarget.scrollTop;
    const clientHeight = clientHeightRef.current;

    if (scrollInProgressRef.current) {
      return;
    } else {
      scrollInProgressRef.current = true;
      setTimeout(() => {
        scrollInProgressRef.current = false;
      }, SCROLL_THROTTLE_MS);
    }

    scrollYOffsetSpringApi.start({
      yOffset,
    });

    backgroundSvgIntroStylesApi.start({
      opacity: scrollYOffsetSpring.yOffset.to(
        [0, clientHeight, clientHeight + 1],
        [1, 0, 0]
      ),
    });
    backgroundSvgEarnStylesApi.start({
      opacity: scrollYOffsetSpring.yOffset.to(
        [0, clientHeight, 2 * clientHeight, 3 * clientHeight, 4 * clientHeight],
        [0, 0, 1, 1, 0]
      ),
    });
    backgroundSvgCashbackStylesApi.start({
      opacity: scrollYOffsetSpring.yOffset.to(
        [0, 2 * clientHeight, 3 * clientHeight, 4 * clientHeight],
        [0, 0, 0, 1]
      ),
    });

    creditCardSpringsStylesApi.start((index) => ({
      opacity: scrollYOffsetSpring.yOffset.to(
        [0, 0.3 * clientHeight, 0.7 * clientHeight, 0.7 * clientHeight + 1],
        [1, 1, 0, 0]
      ),
      transform: scrollYOffsetSpring.yOffset.to(
        [0, 0.4 * clientHeight, 0.7 * clientHeight, 0.7 * clientHeight + 1],
        [
          creditCardsInitialTransforms[index],
          'translate3d(0, 10%, 0) rotate3d(0, 0, 0, 0deg)',
          'translate3d(20%, 10%, 0) rotate3d(0, 0, 1, -90deg)',
          'translate3d(20%, 10%, 0) rotate3d(0, 0, 1, -90deg)',
        ]
      ),
    }));

    downArrowStylesApi.start({
      opacity: scrollYOffsetSpring.yOffset.to(
        [0, 0.1 * clientHeight, 0.1 * clientHeight + 1],
        [1, 0, 0]
      ),
    });

    verticalCreditCardImgStylesApi.start((index) => ({
      opacity: scrollYOffsetSpring.yOffset.to(
        [0, 1.1 * clientHeight, 2 * clientHeight, 3 * clientHeight],
        [0, 0, 1, 1]
      ),
      transform: scrollYOffsetSpring.yOffset.to(
        [
          0,
          2 * clientHeight,
          2.5 * clientHeight,
          3 * clientHeight,
          4 * clientHeight,
        ],
        [
          `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
            index === 0 ? 180 : 0
          }deg)`,
          `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
            index === 0 ? 180 : 0
          }deg)`,
          `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
            index === 0 ? 90 : 90
          }deg)`,
          `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
            index === 0 ? 0 : 180
          }deg)`,
          `translate3d(0, 0, ${index === 0 ? -75 : 0}px) rotate3d(0, 1, 0, ${
            index === 0 ? 0 : 180
          }deg)`,
        ]
      ),
    }));

    fivePercentSvgStylesApi.start({
      opacity: scrollYOffsetSpring.yOffset.to(
        [0, 3.15 * clientHeight, 4 * clientHeight],
        [0, 0, 1]
      ),
      transform: scrollYOffsetSpring.yOffset.to(
        [0, 3 * clientHeight, 4 * clientHeight],
        ['translateX(-50%)', 'translateX(-50%)', 'translateX(0%)']
      ),
    });
  }, []);

  useEffect(() => {
    clientHeightRef.current = document.documentElement.clientHeight;
    contentContainerRef.current?.addEventListener('scroll', onScroll);

    return () => {
      contentContainerRef.current?.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const onSubscribeButtonClick = () => {};

  return (
    <div>
      <div className="z-10 w-full flex flex-row fixed">
        <div className="flex-1" />
        <div
          onClick={() => {}}
          className="font-sans text-base text-brand-grey-light p-4"
        >
          Exit
        </div>
      </div>
      <div>
        <div className="w-screen h-screen flex flex-col justify-end max-w-3xl m-auto z-[-2] left-0 right-0  fixed">
          <animated.div
            className="absolute w-full h-full"
            style={backgroundSvgIntroStyles}
          >
            <BackgroundSvgIntro />
          </animated.div>
          <animated.div
            className="absolute w-full h-full"
            style={backgroundSvgEarnStyles}
          >
            <BackgroundSvgEarn />
          </animated.div>
          <animated.div
            className="absolute w-full h-full"
            style={backgroundSvgCashbackStyles}
          >
            <BackgroundSvgCashback />
          </animated.div>
        </div>
        <div className="w-screen h-screen flex flex-col justify-end max-w-3xl m-auto z-[-1] left-0 right-0 fixed">
          <div className="w-full h-full" style={{ perspective: '1000px' }}>
            {creditCardSpringsStyles.map((springStyles, index) => {
              const imgSrc = `https://cdn.indiawealth.in/public/images/ind-credit-card-${
                index + 1
              }.png`;
              return (
                <animated.img
                  src={imgSrc}
                  className={`absolute top-[10%] left-[10%] w-3/4 max-w-sm md:left-1/4 ${
                    index === 0 ? 'drop-shadow-2xl' : ''
                  }`}
                  style={springStyles}
                  key={index}
                />
              );
            })}
          </div>
          <div className="absolute w-full h-full">
            {verticalCreditCardImgStyles.map((style, index) => {
              const imgName =
                index === 0
                  ? 'super-saver-credit-card.png'
                  : 'super-credit-card.png';
              return (
                <animated.img
                  src={`https://cdn.indiawealth.in/public/images/${imgName}`}
                  className="absolute top-[5%] left-1/4 w-1/2 drop-shadow-2xl md:w-1/3 md:left-1/3"
                  style={{
                    ...style,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                  key={index}
                />
              );
            })}
          </div>
          <animated.div
            className="absolute w-full h-full"
            style={fivePercentSvgStyles}
          >
            <img
              src="images/five-percent-cashback.png"
              className="w-3/4 absolute top-1/4 md:top-1/3 md:left-1/4 max-w-xs"
            />
          </animated.div>
        </div>
        <div
          className="w-full h-screen overflow-y-scroll"
          ref={contentContainerRef}
          style={{ scrollSnapType: 'y mandatory' }}
        >
          <div className="w-screen h-screen p-6 flex flex-col justify-end max-w-3xl m-auto z-1 snap-center">
            <IntroducingCreditCardComp
              downArrowStyles={downArrowStyles}
              userWaitListNumber={waitListNumber}
            />
          </div>
          <EarnFreeStocksSection />
          <SuperSaverCreditCardSection />
          <SuperCreditCardSection />
          <div className="w-screen h-screen px-6 pt-6 pb-2 flex flex-col justify-end max-w-3xl m-auto z-1 snap-center">
            <JoinTheWaitListComp
              onSubscribeButtonClick={onSubscribeButtonClick}
              subscriptionInProgress={false}
              totalSubscribersCount={totalSubscribersCount}
              userWaitListNumber={waitListNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndSuperCreditCardClient;
