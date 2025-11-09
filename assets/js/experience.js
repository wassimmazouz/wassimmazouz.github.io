AOS.init();

// Work experience cards (only NEW roles)

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Quantitative Research Intern",
    cardImage: "./assets/images/experience-page/bnp-cib.png",
    place: "BNP Paribas CIB – Global Markets Data & AI Lab",
    time: "(Apr 2025 – Sept 2025 · Frankfurt, DE)",
    desp: `
      <ul>
        <li>Built <b>stochastic-control</b> models for hedging under <b>transaction costs</b> using <b>RL + Monte Carlo</b> on FX options.</li>
        <li>Developed <b>pricing & risk libraries</b> in <b>Python/C++</b> for high-frequency streams; calibrated <b>stochastic vol</b> on intraday surfaces.</li>
        <li>Backtested vs <b>delta-hedging</b> benchmarks, improving <b>downside-risk</b> metrics by <b>15%</b> across vol regimes.</li>
      </ul>
    `,
  },
  {
    title: "Quantitative Research Intern – OCKHAM Team",
    cardImage: "./assets/images/experience-page/ens-lyon.png",
    place: "ENS Lyon – CNRS/INRIA",
    time: "(May 2024 – Aug 2024 · Lyon, FR)",
    desp: `
      <ul>
        <li>Designed <b>large-scale optimization benchmarks</b> (convex & stochastic) for solver comparison in <b>quant model calibration</b>.</li>
        <li>Extended <b>Benchopt</b> to finance use-cases (regression-based pricing, <b>vol surface</b> fitting).</li>
        <li>Shipped <b>reproducible experiments</b> & analytical modules adopted by partner quant teams.</li>
      </ul>
    `,
  },
  {
    title: "Research Assistant – Generative Modeling",
    cardImage: "./assets/images/experience-page/liris.png",
    place: "LIRIS Laboratory – École Centrale de Lyon",
    time: "(Sept 2023 – Apr 2024 · Lyon, FR)",
    desp: `
      <ul>
        <li>Used <b>VQ-VAE</b> to simulate <b>correlated patterns</b>; explored links to <b>random-field</b> theory.</li>
        <li>Built Python modules for <b>preprocessing</b>, training, and <b>Monte Carlo</b> evaluation on large-scale image datasets.</li>
        <li>Published <b>reproducible code</b> & numerical experiments for quantitative validation.</li>
      </ul>
    `,
  },
];

const showCards1 = () => {
  let output = "";
  exp.forEach(({ title, cardImage, place, time, desp }) => {
    output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1" style="height:350px">
        <img src="${cardImage}" class="featured-image" alt="${title} logo"/>
        <article class="card-body">
          <header>
            <div class="title"><h3>${title}</h3></div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            ${desp}
          </header>
        </article>
      </div>
    </div>`;
  });
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

// Volunteership Cards (Benchopt)

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Benchopt",
    cardImage: "./assets/images/experience-page/benchopt.png",
    description: "Open-source benchmarking framework for optimization algorithms; extended for quant finance use-cases.",
  },
];

const showCards2 = () => {
  let output = "";
  volunteershipcards.forEach(({ title, cardImage, description }) => {
    output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height:500px ;width:400px">
        <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px" alt="${title}">
        <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p>
        </div>
      </div>`;
  });
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Community / Sprint Section (Benchopt Coding Sprint)

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Benchopt Coding Sprint – June 2024",
    subtitle: "Contributor",
    image: "./assets/images/experience-page/benchopt-sprint.jfif",
    desp: "Contributed benchmarking tasks & fixes; improved finance-oriented objectives and CI reliability during the June 2024 sprint.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(({ title, image, subtitle, desp }) => {
    output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
          <img src="${image}" alt="${title}">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>`;
  });
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
