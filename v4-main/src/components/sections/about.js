import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const aboutRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {return;}
    sr.reveal(aboutRef.current, srConfig());
  }, [prefersReducedMotion]);

  const techStack = [
    'Python',
    'PyTorch',
    'pandas · NumPy',
    'scikit-learn',
    'XGBoost · LightGBM',
    'PySpark',
    'SQL',
    'Docker · Git',
    'MLflow',
  ];

  return (
    <StyledAboutSection id="about" ref={aboutRef}>
      <h2 className="numbered-heading">About</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I’m Wassim Mazouz — a quant & ML engineer focused on building research-grade models
              and tooling for markets. My work spans reinforcement learning for hedging under
              frictions, bandit algorithms for pricing signals, and robust benchmarking for
              large-scale optimization.
            </p>

            <p>
              Recently at{' '}
              <a href="https://cib.bnpparibas/" target="_blank" rel="noreferrer">
                BNP Paribas CIB
              </a>
              , I worked on deep RL hedging with order-book transaction costs. Before that, at{' '}
              <a href="https://www.ens-lyon.fr/en" target="_blank" rel="noreferrer">
                ENS Lyon
              </a>
              , I contributed to the open-source{' '}
              <a href="https://benchopt.github.io" target="_blank" rel="noreferrer">
                Benchopt
              </a>{' '}
              ecosystem to improve reproducibility and cross-platform scalability (incl. Windows),
              and took part in the Benchopt coding sprint (June 2024). Earlier, at LIRIS, I built
              VQ-VAE pipelines for image representations and optimized generative synthesis.
            </p>

            <p>Here are a few tools & technologies I use frequently:</p>
          </div>

          <ul className="skills-list">
            {techStack.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jfif"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Wassim Mazouz"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
