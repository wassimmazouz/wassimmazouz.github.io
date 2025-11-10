// Hero.jsx — simplified intro only
const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  const line1 = <h1>Hi, my name is</h1>;
  const line2 = <h2 className="big-heading">Wassim Mazouz.</h2>;
  const line3 = <h3 className="big-heading">I turn data into decisions.</h3>;

  const items = [line1, line2, line3];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
