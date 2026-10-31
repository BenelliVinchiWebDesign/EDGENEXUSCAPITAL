const nav = [
  ["index.html", "Home"],
  ["investments.html", "Investments"],
  ["strategy.html", "Investment Strategy"],
  ["company.html", "Company Information"],
  ["legal.html", "Legal & Risks"],
  ["contact.html", "Contact"],
];
const note =
  "Illustrative only. These figures are based on proposed headline rates supplied for the website, not verified contractual terms. They do not predict or guarantee returns. Capital is at risk.";
function cards() {
  return [
    [
      "Series 1",
      "0.7% monthly",
      "8.4% simple annual equivalent",
      "Client also supplied 8.5% annual: discrepancy requires signed terms.",
    ],
    [
      "Series 2",
      "3% quarterly",
      "12% simple annual equivalent",
      "Subject to contractual payment and eligibility conditions.",
    ],
    [
      "Series 3",
      "15% annually",
      "15% simple annual equivalent",
      "Single annual payment, subject to contractual terms.",
    ],
  ]
    .map(
      (s, i) =>
        `<article class="card ${i === 2 ? "series-three" : ""}"><span class="eyebrow">SERIES ${i + 1}</span><h3>${s[1]}</h3><div class="rate">${s[2].split(" ")[0]}</div><p>${s[2]}</p><p class="small">${s[3]}</p><a href="application.html" class="textlink">Enquire about this series →</a></article>`,
    )
    .join("");
}
function graph() {
  return `<div class="card"><h3>Illustrative one-year interest on £100,000</h3><p class="small">Simple, non-compounded illustration assuming all scheduled interest is paid. Excludes fees, taxes, defaults and reinvestment.</p><div class="bars">${[
    ["Series 1", 8400, 56],
    ["Series 2", 12000, 80],
    ["Series 3", 15000, 100],
  ]
    .map(
      (x) =>
        `<div class="barline"><span>${x[0]}</span><div class="bartrack"><div class="barfill" style="width:${x[2]}%"></div></div><b>£${x[1]}</b></div>`,
    )
    .join(
      "",
    )}</div><p class="small">Series 1 uses 0.7% × 12 = 8.4%, not the unverified 8.5% figure. This chart shows interest only, not repayment of principal.</p></div>`;
}
const pages = {
  "index.html": [
    "Invest with Edge Nexus Capital LTD",
    "Investment opportunities",
    "Explore investment opportunities and request an investment pack.",
    `<section class="home56-hero"><div class="wrap home56-hero-inner"><div class="home56-hero-copy"><span class="home56-eyebrow">EDGE NEXUS CAPITAL LTD</span><h1>Invest with<br><em>Edge Nexus Capital LTD</em></h1><p>Embark on your investment journey with Edge Nexus Capital today and be part of a future that seeks attractive financial returns while contributing to meaningful global causes.</p><div class="home57-hero-actions"><a class="home56-btn home56-gold" href="application.html">Subscribe <span aria-hidden="true">→</span></a><a class="home57-secondary" href="investments.html">Explore the Investment →</a></div></div></div></section><section class="home57-intro"><div class="wrap home57-content"><span class="home56-eyebrow">AN INTRODUCTION</span><h2>Explore investment opportunities with <em>Edge Nexus Capital LTD</em></h2><p>As of 29 April 2024, the investment opportunity described in the client-supplied materials was presented as a way for prospective investors to participate in a portfolio of selected projects with the potential for attractive returns. Edge Nexus Capital LTD provides a point of contact for learning about the bond opportunity and requesting the investment pack.</p><a class="home57-textlink" href="investments.html">Discover the investment options →</a></div></section><section class="home56-pillars home57-why"><div class="wrap"><span class="home56-eyebrow">WHY INVEST WITH EDGE NEXUS CAPITAL LTD</span><h2>Our investment approach</h2><div class="home56-pillar-grid"><a class="home56-pillar" href="investments.html"><span class="home56-icon" aria-hidden="true"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 39h32M13 32V23h7v9M23 32V16h7v16M33 32V9h7v23"/><path d="M11 17l11-8 9 3 8-8"/></svg></span><span><strong>Attractive Returns</strong><small>Edge Nexus Capital LTD is dedicated to pursuing opportunities intended to generate funds for investor repayments and attractive returns. All payments remain subject to the bond terms, issuer performance and investment risk.</small></span></a><a class="home56-pillar" href="legal.html"><span class="home56-icon" aria-hidden="true"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4 41 11v12c0 11-8 17-17 21C15 40 7 34 7 23V11z"/><path d="m15 24 6 6 13-14"/></svg></span><span><strong>Transparency and Integrity</strong><small>We believe in maintaining high standards of transparency and integrity, with clear information and relevant documentation available to investors throughout the investment process.</small></span></a><a class="home56-pillar" href="strategy.html"><span class="home56-icon" aria-hidden="true"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 4 19 10-19 10L5 14zM5 24l19 10 19-10M5 34l19 10 19-10"/></svg></span><span><strong>Risk Management</strong><small>Our investment strategy revolves around risk management and diversification across trading approaches and projects.</small></span></a></div><div class="home57-why-actions"><a class="home57-textlink" href="strategy.html">Learn more about our investment strategy →</a></div></div></section><section class="home56-contact home57-contact"><div class="wrap home56-contact-inner"><span class="home56-rule">✦</span><h2>Request an <em>Investment Pack</em></h2><p>Learn more about the bond, proposed investment terms, risk information and how to submit an enquiry.</p><div class="home56-contact-actions"><a class="home56-btn home56-outline" href="application.html">Request Investment Pack <span aria-hidden="true">→</span></a><a class="home56-link" href="contact.html">Contact Us</a></div></div></section>`,
  ],
  "investments.html": [
    "Investments",
    "Edge Nexus Capital LTD",
    "Explore the proposed bond series, minimum subscription and issuer documents.",
    `<section class="invest-hero"><div class="wrap invest-hero-grid"><div class="invest-hero-copy"><span class="eyebrow">INVESTMENTS</span><h2>INVEST WITH<br>EDGE NEXUS CAPITAL LTD</h2><p>Explore bond investment opportunities through Edge Nexus Capital LTD, with three proposed interest-payment structures and a straightforward investment enquiry process. </p><a class="btn invest-gold-btn" href="application.html">ENQUIRE ABOUT SUBSCRIPTION →</a></div><div class="invest-hero-image" role="img" aria-label="Illustrative bank vault with gold bullion"></div></div></section><section class="invest-series"><div class="wrap"><div class="invest-heading"><span class="eyebrow">INVESTMENT OPTIONS</span><h2>SELECT YOUR BOND SERIES</h2><p>Choose the payment schedule that fits your objectives. All terms are proposed and subject to definitive issuer documentation and eligibility.</p></div><div class="invest-series-grid"><article class="invest-series-card"><img src="investments-handshake.jpg" alt="Illustrative growing savings and coins"><div class="invest-series-body"><span class="invest-series-icon">◇</span><div><span class="eyebrow">SERIES 1</span><h3>0.7% Monthly</h3><p>8.4% simple annual equivalent</p><span class="series-tier">INCOME SERIES</span><small>Monthly interest schedule; the supplied 8.5% annual figure requires reconciliation with signed terms.</small></div></div></article><article class="invest-series-card"><img src="investments-gold.jpg" alt="Illustrative luxury watch and gold"><div class="invest-series-body"><span class="invest-series-icon">▦</span><div><span class="eyebrow">SERIES 2</span><h3>3.0% Quarterly</h3><p>12.0% simple annual equivalent</p><span class="series-tier">GROWTH SERIES</span><small>Quarterly payment schedule, subject to the bond’s contractual conditions.</small></div></div></article><article class="invest-series-card"><img src="investments-bond.jpg" alt="Illustrative premium aircraft and car"><div class="invest-series-body"><span class="invest-series-icon">↗</span><div><span class="eyebrow">SERIES 3</span><h3>15.0% Annually</h3><p>Single annual interest payment</p><span class="series-tier">PREMIUM SERIES</span><small>Annual payment schedule, subject to final terms and issuer ability to pay.</small></div></div></article></div></div></section><section class="invest-highlights"><div class="wrap invest-highlights-grid"><div><span>♢</span><strong>PROGRAMME STRUCTURE</strong><small>Secured limited recourse; assess security and enforcement terms</small></div><div><span>▤</span><strong>LISTING VENUE</strong><small>Vienna MTF · Vienna Stock Exchange</small></div><div><span>◷</span><strong>MINIMUM TERM</strong><small>One year proposed, subject to final terms</small></div><div><span>▣</span><strong>PAYMENT CHOICES</strong><small>Three proposed series with different interest schedules</small></div></div></section><section class="section invest-details"><div class="wrap"><div class="invest-heading"><span class="eyebrow">SUBSCRIPTION INFORMATION</span><h2>Your investment journey</h2><p>Proposed minimum subscription: <strong>£5,000</strong> (five bonds of £1,000 each). Please confirm eligibility and the definitive terms before applying.</p></div><div class="two"><article class="card subscription-card"><span class="eyebrow">EDGE NEXUS CAPITAL LTD</span><h3>Subscription enquiries</h3><p>Contact Edge Nexus Capital LTD to request the investment pack and discuss the subscription process. The underlying <strong>£50,000,000 secured limited recourse bond programme</strong>, issued by XI8 Capital Plc, was approved for Vienna MTF programme listing on 18 June 2024, effective 20 June 2024.</p><div class="listing-venue"><span class="eyebrow">LISTING VENUE</span><strong>Wiener Börse · Vienna MTF</strong><span>Vienna Stock Exchange</span></div><p class="small">The official announcement relates to the debt issuance programme. Individual notes are announced separately.</p><a class="btn subscription-action" href="application.html">Enquire about subscription →</a><a class="subscription-pdf" href="documents/vienna-stock-exchange-xi8-programme-listing-2024.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf">↗ View official Vienna Stock Exchange listing PDF</a><p class="small subscription-caption">Vienna Stock Exchange publication no. 1967 · 19 June 2024</p></article><article class="card"><h3>Instrument details</h3><table class="facts"><tr><td>Issuer</td><td>XI8 Capital Plc</td></tr><tr><td>ISIN supplied</td><td>GB00BRT5YT12</td></tr><tr><td>Nominal per bond</td><td>£1,000 (proposed)</td></tr><tr><td>Minimum subscription</td><td>5 bonds / £5,000 (proposed)</td></tr><tr><td>Term</td><td>One year minimum (proposed)</td></tr></table><p class="small">The client describes all three payment structures under one ISIN. Confirm the legal mechanism and final terms with the issuer.</p></article></div><div class="investment-illustration">${graph()}</div><a class="btn" href="application.html">Request investment pack</a></div></section>`,
  ],
  "company.html": [
    "Company Information",
    "ABOUT EDGE NEXUS CAPITAL LTD",
    "Explore the company, intermediary role and service arrangements.",
    `<section class="premium-page-intro company-intro"><div class="wrap premium-intro-grid"><div><span class="eyebrow">ABOUT EDGE NEXUS CAPITAL LTD</span><h1>Built around <em>clarity, confidence &amp; connection.</em></h1><p>Edge Nexus Capital LTD provides an introduction point for investment information, capital introduction and related services. Explore the platform, the participating organisations and the documentation behind each opportunity.</p><a class="btn home-primary" href="contact.html">CONTACT OUR TEAM →</a></div><div class="premium-intro-art company-art" role="img" aria-label="Contemporary financial district office architecture"></div></div></section><section class="premium-light-section"><div class="wrap"><div class="premium-section-heading"><span class="eyebrow">OUR COMPANY</span><h2>Platform, partners &amp; responsibilities</h2><p>Understanding the distinction between the intermediary, service partners and the legal bond issuer is an important part of evaluating an investment.</p></div><div class="premium-info-grid"><article class="premium-info-card"><span class="premium-card-number">01</span><h3>Platform and Brand</h3><p>Edge Nexus Capital LTD is identified as the platform, brand and intellectual-property owner. Corporate ownership and operational arrangements remain subject to documentary confirmation.</p></article><article class="premium-info-card"><span class="premium-card-number">02</span><h3>Licensed Brokerage</h3><p>ACEX Global Limited, Mauritius company C227611; FSC licence GB25204622, Investment Dealer (Full Service Dealer, Excluding Underwriting). Verify the exact activities and entity arrangements for this website.</p></article><article class="premium-info-card"><span class="premium-card-number">03</span><h3>Capital Introduction</h3><p>Edge Nexus Capital LTD is described as the capital-introduction intermediary. FCA relationship and any principal firm/FRN remain to be confirmed. No authorisation claim is made here.</p></article></div></div></section><section class="premium-dark-feature"><div class="wrap premium-feature-grid"><div><span class="eyebrow">INVESTMENT PARTNERS &amp; ISSUERS</span><h2>Know who stands behind each investment.</h2><p>Edge Nexus Capital LTD introduces investment opportunities and coordinates enquiries. Where a bond is issued by a separate company, the issuer and its legal obligations are identified in the definitive documentation. Edge Nexus Capital LTD is not itself the bond issuer.</p><p>The supplied group description spans investment information, capital introduction and related services. Legal ownership and operational entity descriptions need reconciliation before public release.</p><a class="btn home-secondary" href="legal.html">LEGAL &amp; RISKS →</a></div><div class="premium-feature-graphic"><div class="premium-feature-icon">N</div><span>EDGE NEXUS<br>CAPITAL LTD</span></div></div></section><section class="premium-page-cta"><div class="wrap"><div><span class="eyebrow">NEXT STEPS</span><h2>Have questions about our investment process?</h2></div><a class="btn home-primary" href="contact.html">GET IN TOUCH →</a></div></section>`,
  ],
  "strategy.html": [
    "Investment Strategy",
    "INVESTMENT STRATEGY",
    "How to invest and explore the investment approach.",
    `<section class="strategy-feature"><div class="wrap strategy-feature-grid"><div class="strategy-feature-copy"><span class="eyebrow">INVESTMENT STRATEGY</span><h2>HOW TO INVEST WITH<br>EDGE NEXUS CAPITAL LTD</h2><p>Investing with Edge Nexus Capital LTD is a straightforward process. Interested parties are invited to contact us through our official channels for a copy of our <strong>investment pack</strong> and an application form to apply for the Bonds.</p><p>Once submitted, the application will be processed by Avenir Registrars Ltd for compliance purposes. Once approved, payment for the Bonds will be submitted via them.</p><p>Avenir will handle the issuing of the Bond certificates and remit the funds to the Company.</p><p>Full details will be provided in the application paperwork.</p><a class="btn strategy-gold-button" href="application.html">REQUEST INVESTMENT PACK →</a></div><div class="strategy-feature-image" role="img" aria-label="Modern glass office building"></div></div></section><section class="strategy-bond-intro"><div class="wrap"><h1>Edge Elite Multi-Manager Bond</h1><p>The board will invest in an institutional alpha-grade trading strategy. Drawing on years of experience across eight elite trading strategies backed by fully licensed teams, the strategy is described as having a proven three-year live track record and is now packaged as an exchange-listed, regulated bond.</p></div></section><section class="strategy-showcase"><div class="wrap"><div class="strategy-showcase-head"><span class="eyebrow">WHY WE ARE RAISING CAPITAL</span><h2>Scaling Proprietary, <span>Battle-Tested</span> Strategies.</h2><p>Matching historical performance with institutional capital capacity — capital directly scales our investment ecosystem.</p></div><div class="strategy-photo-grid"><article class="strategy-photo-card"><img src="strategy-office.jpg" alt="Modern office boardroom" loading="lazy"><div class="strategy-card-body"><span class="strategy-card-icon" aria-hidden="true">◇</span><div><h3>Proprietary Licensed Edge</h3><p>Capital directly scales our 8 in-house, fully licensed trading strategies — run by institutional talent, built on robust quantitative models, fully owned by Edge Nexus with a proven 3-year live track record.</p></div></div></article><article class="strategy-photo-card"><img src="strategy-trading.jpg" alt="Professional trading workstations" loading="lazy"><div class="strategy-card-body"><span class="strategy-card-icon" aria-hidden="true">▦</span><div><h3>Algorithmic Portfolio Harmonization</h3><p>Capital is deployed across our 8 core strategies based on real-time correlation matrix data from the Edge Nexus platform — ensuring optimal risk dispersion, zero systemic market overlap, and maximum capital efficiency.</p></div></div></article><article class="strategy-photo-card"><img src="strategy-lounge.jpg" alt="Contemporary corporate workplace" loading="lazy"><div class="strategy-card-body"><span class="strategy-card-icon" aria-hidden="true">↗</span><div><h3>Expanding Institutional Capacity</h3><p>Providing our battle-tested systems with the dedicated balance sheet depth needed to execute high-conviction systematic strategies at scale without diluting historical alpha.</p></div></div></article></div><div class="strategy-next"><div><h2>Next steps</h2><p>Request the investment pack and final terms through Edge Nexus Capital LTD to assess the proposed investment and its risks.</p></div><a class="btn" href="application.html">Request investment pack →</a></div></div></section>`,
  ],
  "contact.html": [
    "Contact",
    "GET IN TOUCH",
    "Speak with Edge Nexus Capital LTD about the investment pack, eligibility and enquiries.",
    `<section class="premium-page-intro contact-intro"><div class="wrap premium-intro-grid"><div><span class="eyebrow">CONTACT EDGE NEXUS CAPITAL LTD</span><h1>Let’s discuss your <em>next step.</em></h1><p>Whether you are exploring bond opportunities, requesting an investment pack or have a question about the process, our team is here to help you find the right information.</p><div class="premium-hero-actions"><a class="btn home-primary" href="application.html">REQUEST INVESTMENT PACK →</a><a class="btn home-secondary" href="#contact-enquiry">EMAIL OUR TEAM ↓</a></div></div><div class="premium-intro-art contact-art" role="img" aria-label="Premium modern office building"></div></div></section><section class="premium-light-section contact-details-section"><div class="wrap"><div class="premium-section-heading"><span class="eyebrow">DIRECT CONTACT</span><h2>Everything you need to get in touch</h2><p>For enquiries about investment documentation, subscription eligibility or next steps, use our official contact details below.</p></div><div class="contact-rework-grid"><aside class="contact-enquiry-panel"><span class="eyebrow">ENQUIRIES</span><h3>Email our team</h3><p>For information about bond opportunities, investment packs or the subscription process, please contact Edge Nexus Capital LTD directly.</p><form id="contact-enquiry" class="form contact-email-form"><label for="contact-name">Full name</label><input id="contact-name" name="name" required autocomplete="name" placeholder="Your full name"><label for="contact-email">Email address</label><input id="contact-email" name="email" type="email" required autocomplete="email" placeholder="you@example.com"><label for="contact-subject">Subject</label><input id="contact-subject" name="subject" required placeholder="What is your enquiry about?"><label for="contact-message">Your message</label><textarea id="contact-message" name="message" rows="5" required placeholder="Write your message to our team..."></textarea><button class="btn home-primary" type="submit">SEND ENQUIRY →</button><p id="contact-formstatus" role="status" class="small">Your enquiry will be sent securely to our team.</p></form><a class="contact-enquiry-email" href="mailto:edgenexus@xi8capital.com?subject=Edge%20Nexus%20Enquiry">edgenexus@xi8capital.com ↗</a></aside><div class="premium-info-grid contact-card-grid"><article class="premium-info-card"><span class="premium-card-number">✉</span><h3>Email enquiries</h3><p>Our main contact for general questions and investment pack requests.</p><a class="premium-contact-link" href="mailto:edgenexus@xi8capital.com?subject=Edge%20Nexus%20Enquiry">edgenexus@xi8capital.com ↗</a></article><article class="premium-info-card"><span class="premium-card-number">⌖</span><h3>London office</h3><p>Edge Nexus Capital LTD<br>6th Floor, 99 Gresham Street<br>London, EC2V 7NG<br>United Kingdom</p></article><article class="premium-info-card"><span class="premium-card-number">↗</span><h3>Investment enquiries</h3><p>Request the investment pack, ask about the proposed bond series and learn about the application process.</p><a class="premium-contact-link" href="application.html">OPEN ENQUIRY FORM →</a></article></div></div></div></section><section class="premium-dark-feature contact-bottom-feature"><div class="wrap premium-feature-grid"><div><span class="eyebrow">BEFORE YOU APPLY</span><h2>Information first. Decisions with confidence.</h2><p>Request the current investment pack and definitive issuer documentation. Review the risks, eligibility criteria and proposed terms before making any investment decision.</p><a class="btn home-secondary" href="legal.html">REVIEW LEGAL &amp; RISKS →</a></div><div class="premium-feature-graphic"><div class="premium-feature-icon">N</div><span>EDGE NEXUS<br>CAPITAL LTD</span></div></div></section>`,
  ],
  "application.html": [
    "Application Enquiry",
    "REQUEST INVESTMENT PACK",
    "Send an enquiry to Edge Nexus Capital LTD. No subscription or payment occurs here.",
    `<section class="premium-page-intro application-intro"><div class="wrap premium-intro-grid"><div><span class="eyebrow">INVESTMENT PACK &amp; ENQUIRIES</span><h1>Begin with the <em>right information.</em></h1><p>Request the investment pack and application paperwork from Edge Nexus Capital LTD. This is an initial enquiry only—not an investment subscription or payment instruction.</p><a class="btn home-secondary" href="#investment-enquiry">START YOUR ENQUIRY ↓</a></div><div class="premium-intro-art application-art" role="img" aria-label="Contemporary business and finance workplace"></div></div></section><section class="premium-light-section premium-application-section" id="investment-enquiry"><div class="wrap"><div class="premium-section-heading"><span class="eyebrow">ENQUIRY FORM</span><h2>Request your investment pack</h2><p>Complete the details below to send a secure enquiry to our team.</p></div><div class="premium-application-grid"><div class="premium-form-card"><form id="application" class="form"><label for="name">Full name</label><input id="name" name="name" required autocomplete="name" placeholder="Your full name"><label for="email">Email address</label><input id="email" name="email" type="email" required autocomplete="email" placeholder="you@example.com"><label for="series">Interested bond series</label><select id="series" name="series"><option>Not sure yet</option><option>Series 1</option><option>Series 2</option><option>Series 3</option></select>
<label for="investment-amount">Investment Amount (£)</label>
<input type="number" id="investment-amount" name="investment_amount" min="1" step="1" placeholder="e.g. 10000" required>
<label for="message">Your message (optional)</label><textarea id="message" name="message" rows="5" placeholder="Tell us what you'd like to know"></textarea><label class="check"><input type="checkbox" required> I understand this is an enquiry only and does not constitute an investment application or commitment.</label><button class="btn home-primary" type="submit">SEND INVESTMENT ENQUIRY →</button><p id="formstatus" role="status" class="small"></p></form></div><aside class="premium-application-aside"><div class="premium-aside-card"><span class="eyebrow">BEFORE APPLYING</span><h3>What happens next?</h3><ol><li>Request the current investment pack and eligibility information.</li><li>Review the definitive terms and risk disclosures.</li><li>Contact the team with questions before proceeding.</li><li>Follow the instructions in the formal application paperwork, if eligible.</li></ol><p class="small">Do not send money, identity documents or sensitive financial information through this enquiry form.</p></div><div class="premium-aside-card premium-aside-dark"><span class="eyebrow">COMPANY CONTACT</span><h3>Edge Nexus Capital LTD</h3><p>6th Floor, 99 Gresham Street<br>London, EC2V 7NG<br>United Kingdom</p><a href="mailto:edgenexus@xi8capital.com?subject=Edge%20Nexus%20Investment%20Pack">edgenexus@xi8capital.com ↗</a><p class="small">The form sends your enquiry securely to our team for a response.</p></div></aside></div></div></section>`,
  ],
  "legal.html": [
    "Legal & Risks",
    "REGULATORY & PROGRAMME INFORMATION",
    "Company disclosures, investment risks and the bond programme directory.",
    `<section class="premium-page-intro legal-intro"><div class="wrap premium-intro-grid"><div><span class="eyebrow">LEGAL &amp; RISKS</span><h1>Information you can <em>review with confidence.</em></h1><p>Explore the bond programme directory, understand the named service providers and review key investment risks before considering an application.</p><a class="btn home-secondary" href="#programme-directory">VIEW PROGRAMME DIRECTORY ↓</a></div><div class="premium-intro-art legal-art" role="img" aria-label="Architectural detail of a financial district building"></div></div></section><section class="premium-light-section premium-legal-section legal-content" id="programme-directory"><div class="wrap"><div class="premium-section-heading"><span class="eyebrow">PROGRAMME MEMORANDUM · 18 JUNE 2024</span><h2>Bond Programme Directory</h2><p>Transcribed from page 89 of the supplied Bond Programme memorandum screenshot. The named parties and addresses should be checked against current programme documents before use.</p></div><div class="directory-grid"><article class="directory-card"><h3>Registered Office of the Issuer</h3><p>XI8 Capital Plc<br>Salisbury House<br>London Wall<br>London<br>EC2M 5PS</p></article><article class="directory-card"><h3>Auditors</h3><p>Howsons Chartered Accountants and Auditors<br>Winton House<br>Stoke Road<br>Stoke-on-Trent<br>ST4 2RW</p></article><article class="directory-card"><h3>Trustee</h3><p>Amicorp Limited<br>F15 Floor Kestrel House<br>Knightrider Street<br>Maidstone<br>Kent<br>ME15 6LU</p></article><article class="directory-card"><h3>Listing Agent</h3><p>Walkers Listing Agent<br>5th Floor, The Exchange<br>George’s Dock, IFSC<br>Dublin 1 D01 W3P9<br>Ireland</p></article><article class="directory-card"><h3>Issuing and Principal Paying Agent</h3><p>XI8 Capital Plc<br>Salisbury House<br>London Wall<br>London<br>EC2M 5PS</p></article><article class="directory-card"><h3>Registrar</h3><p>Avenir Registrars<br>5 St John’s Lane<br>London<br>EC1M 4BH</p></article><article class="directory-card"><h3>Legal Advisers as to English Law to the Issuer</h3><p>Druces LLP<br>Salisbury House<br>London Wall<br>London<br>EC2M 5PS</p></article></div></div></section><section class="premium-legal-risk"><div class="wrap"><span class="eyebrow">BEFORE YOU INVEST</span><h2>Legal Disclaimer &amp; Risk Disclosures</h2><div class="premium-risk-grid"><div><h3>Investment information</h3><p>The information on this website is for general information only and does not constitute personal investment advice, an offer, or a guarantee of return. Bond terms, issuer obligations, regulatory status and investor eligibility must be checked against current signed documentation.</p></div><div><h3>Capital &amp; liquidity risk</h3><p>Listing or admission to trading does not guarantee liquidity, repayment or regulatory protection. Investments may be illiquid and capital may be lost.</p><p>Do not assume FCA endorsement or FSCS coverage. Independent legal, tax and financial advice may be appropriate.</p></div></div><p class="premium-reg-links"><a href="https://www.fca.org.uk/firms/financial-services-register" target="_blank" rel="noopener noreferrer">FCA Financial Services Register ↗</a> <a href="https://www.fscmauritius.org/" target="_blank" rel="noopener noreferrer">Mauritius FSC ↗</a></p></div></section>`,
  ],
};
const key = location.pathname.split("/").pop() || "index.html";
const p = pages[key] || pages["index.html"];
document.title = p[0] + " | Edge Nexus Capital LTD";
const legalFooterDisclosure = `<section class="legal-footer-disclosure" aria-label="Company and regulatory information"><span class="eyebrow">COMPANY & REGULATORY INFORMATION</span><h2>Important information</h2><p>The following information summarises company and service arrangements supplied for review. Certain permissions, group relationships and technical claims require independent confirmation before public launch.</p><p><strong>Service categories:</strong> Investment Dealer (Full Service / Excluding Underwriting) | FCA representative relationship (details to be verified) | Data Protection Registration – Recruitment (verification required) | Listed Bond – Edge Elite Multi-Manager Fund (status to be verified) | Quarterly Reporting Advisor – Model Manager Bond (status to be verified).</p><h3>Licensed Broker-Dealer & Regulatory Status</h3><p>Edge Nexus Capital LTD is described as a trading name of ACEX Global Limited, incorporated in the Republic of Mauritius (Co. No. <strong>C227611</strong>) and licensed by the Financial Services Commission of Mauritius as an Investment Dealer (Full Service Dealer, Excluding Underwriting), Licence No. <strong>GB25204622</strong>. The precise service-provider and trading-name arrangements require confirmation.</p><h3>Group Structure</h3><p>Client-provided information identifies Edge Nexus Capital LTD, registered in England & Wales, as the proposed owner of the Edge Nexus Capital LTD platform, brand and intellectual property. The group describes its operating activities as ring-fenced from the separately licensed broker. Corporate ownership and operational responsibilities require documentary confirmation.</p><h3>Recruitment Licence & Alpha Exchange</h3><p>Client-provided information describes Alpha Exchange services including FIA profiles, fund screening, consultant matchmaking and talent placement as activities of Edge Nexus Capital LTD. Its employment-agency status, ICO registration and separation from regulated financial services must be verified. Employment-agency registration does not itself authorise investment services.</p><h3>Capital Introduction & FCA Disclosure</h3><p>Edge Nexus Capital LTD is described as conducting capital introduction and matchmaking between trading teams and allocators. <strong>FCA representative status, principal firm, Firm Reference Number and permissions remain to be confirmed</strong> before making any claim of authorisation or of permissions under Articles 25 and 53 of the Regulated Activities Order. Professional-client classifications are governed by applicable FCA rules.</p><h3>Data Security</h3><p>The client describes AES-256 encryption, SOC 2 Type II compliant infrastructure and restricted Alpha Exchange API data use. These security and data-sharing claims require independent technical and contractual verification before publication.</p><h3>Liability & Due Diligence</h3><p>Edge Nexus Capital LTD describes an intermediary role connecting investors and investment counterparties. Prospective investors must undertake their own legal, financial and regulatory due diligence and review the relevant contracts directly. Any limitation of liability remains subject to applicable law and regulatory obligations; statutory rights cannot be excluded by this summary.</p><h3>Risk Disclosure & Access</h3><p>Trading and investing in financial instruments involves a significant risk of loss and may not be suitable for all investors. Client materials describe a proposed £5,000 minimum allocation and a separate Edge Nexus Capital LTD Managed Allocation Fund SPC retail wrapper. <strong>The fund’s existence, retail eligibility, AIFM, custody, segregation and UCIS treatment have not been verified</strong>; none of these protections should be assumed. Past performance is not a reliable indicator of future results. Investments may fall in value and investors may receive less than they invested.</p></section>`;
document.body.classList.toggle("legal-page", key === "legal.html");
document.getElementById("app").innerHTML =
  `<header><div class="wrap nav"><a href="index.html" class="logo"><img src="edge-nexus-logo-v62.png" alt="Edge Nexus Capital LTD"></a><div class="header-actions"><button class="menu" aria-label="Toggle navigation" aria-expanded="false">☰</button></div><nav>${nav.map(([href, label]) => `<a href="${href}" ${href.startsWith("https://") ? 'target="_blank" rel="noopener noreferrer"' : ""} ${href === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}</nav><a class="home54-header-subscribe" href="application.html">Subscribe</a></div></header><main><section class="hero ${key === "index.html" ? "homehero" : ""}" ${key === "strategy.html" || key === "investments.html" || key === "index.html" || key === "company.html" || key === "legal.html" || key === "contact.html" || key === "application.html" ? 'style="display:none"' : ""}><div class="wrap hero-layout"><div class="hero-copy"><span class="eyebrow">${p[1]}</span><h1>${p[0]}</h1><p>${p[2]}</p>${key === "index.html" ? '<a href="investments.html" class="btn">Explore investments</a>' : ""}</div><div class="hero-art" aria-hidden="true"><div class="art-ring art-ring-one"></div><div class="art-ring art-ring-two"></div><div class="art-slab art-slab-one"></div><div class="art-slab art-slab-two"></div><div class="art-glow"></div></div></div></section>${p[3]}</main><footer><div class="wrap">${key === "legal.html" ? legalFooterDisclosure : ""}<img src="edge-nexus-logo-v62.png" class="footer-logo" alt="Edge Nexus Capital LTD">${`<p>© 2026 ACEX Global Limited, Republic of Mauritius (Co. No. C227611). FSC Mauritius Licence No. GB25204622. Edge Nexus Capital LTD trading-name and ownership arrangements subject to confirmation.</p><p>Proposed platform and brand owner: Edge Nexus Capital LTD, England & Wales. Edge Nexus Capital LTD.com — website and trading-name arrangements subject to confirmation. Not affiliated with similarly named entities unless expressly stated.</p><p><a href="legal.html">Legal Disclaimer</a></p>`}<div class="footer-language"><label for="site-language">🌐 <span class="language-label-text">Language</span></label><select id="site-language" class="language-select" aria-label="Translate website"><option value="en">English</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="es">Español</option><option value="it">Italiano</option><option value="pt">Português</option><option value="ar">العربية</option><option value="zh-CN">中文</option><option value="hi">हिन्दी</option></select></div></div></footer>`;
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  const open = document.querySelector("header nav").classList.toggle("show");
  menu.setAttribute("aria-expanded", String(open));
});

// One submission handler per form. The API address is provided by backend-config.js.
function installEnquiryForm(formId, kind, statusId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const privacyLabel = document.createElement("label");
  privacyLabel.className = "check";
  const privacy = document.createElement("input");
  privacy.type = "checkbox";
  privacy.required = true;
  privacyLabel.append(privacy, document.createTextNode(
    " I acknowledge that my enquiry details will be processed to respond to my request. See the privacy information."
  ));
  const button = form.querySelector('button[type="submit"]');
  form.insertBefore(privacyLabel, button);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById(statusId);
    if (button.disabled) return;
    if (!form.reportValidity()) return;

    const value = (id) => document.getElementById(id)?.value?.trim() || "";
    const payload = kind === "contact" ? {
      kind, name: value("contact-name"), email: value("contact-email"),
      subject: value("contact-subject"), message: value("contact-message"),
      consent: privacy.checked
    } : {
      kind, name: value("name"), email: value("email"),
      subject: "Edge Nexus Capital LTD - Investment Pack Enquiry",
      series: value("series"),
      investment_amount: Number(value("investment-amount")),
      message: value("message") || "Please send me the current investment pack and application information.",
      consent: privacy.checked
    };

    const base = (window.EDGE_API_BASE || "").replace(/\/$/, "");
    if (!base) {
      status.textContent = "Enquiries are not configured yet. Please contact the team by email.";
      return;
    }
    button.disabled = true;
    status.textContent = "Submitting your enquiry securely…";
    try {
      const response = await fetch(base + "/api/public/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Submission failed: " + response.status);
      status.textContent = "Thank you! Your enquiry has been submitted successfully.";
      form.reset();
    } catch (error) {
      console.error("Enquiry submission error:", error);
      status.textContent = "Unable to send your enquiry. Please try again or contact the team directly.";
    } finally {
      button.disabled = false;
    }
  });
}

installEnquiryForm("application", "investment_pack", "formstatus");
installEnquiryForm("contact-enquiry", "contact", "contact-formstatus");

// Translation opens an external translation service for the live, public website.
// Financial/legal copy requires independently reviewed translations before multilingual launch.
// Keep the selector independent of the footer so it remains fixed during scrolling.
const languageControl = document.querySelector(".footer-language");
if (languageControl) document.body.appendChild(languageControl);
const languageSelect = document.getElementById("site-language");
if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    if (lang === "en") return;
    if (
      location.protocol === "file:" ||
      ["localhost", "127.0.0.1"].includes(location.hostname)
    ) {
      alert(
        "Publish the website to a public HTTPS address before using external page translation. The original English disclosures remain authoritative.",
      );
      languageSelect.value = "en";
      return;
    }
    const source = encodeURIComponent(location.href);
    window.open(
      "https://translate.google.com/translate?sl=en&tl=" +
        encodeURIComponent(lang) +
        "&u=" +
        source,
      "_blank",
      "noopener,noreferrer",
    );
    languageSelect.value = "en";
  });
}
