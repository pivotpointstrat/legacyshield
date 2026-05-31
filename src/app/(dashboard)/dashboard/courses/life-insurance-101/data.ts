export interface Lesson {
  id: number;
  slug: string;
  title: string;
  duration: string;
  videoId: string | null;
  content: string[];
  keyTakeaways: string[];
  actionStep: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  totalLessons: number;
  totalDuration: string;
  level: string;
  lessons: Lesson[];
}

export const course: Course = {
  id: 'life-insurance-101',
  title: 'Life Insurance 101',
  description: 'Learn the difference between term and whole life, how much coverage you actually need, and how to stop overpaying. No agent. No pressure. Just the truth.',
  icon: '🛡️',
  totalLessons: 6,
  totalDuration: '45 min',
  level: 'Beginner',
  lessons: [
    {
      id: 1,
      slug: 'what-is-life-insurance',
      title: 'What Is Life Insurance?',
      duration: '7 min',
      videoId: 'local:life-insurance-101--what-you-need-to-know',
      content: [
        'Life insurance is a contract between you and an insurance company. You pay a monthly or annual premium, and in exchange, the company agrees to pay a lump sum — called a death benefit — to your chosen beneficiaries when you die. That money can cover funeral costs, replace your income, pay off your mortgage, fund your children\'s education, or simply give your family time to grieve without financial panic.',
        'Here\'s the reality in the DC metro area: the average household carries significant debt — mortgages, car payments, student loans — and most families are living paycheck to paycheck. If you died tomorrow, how long could your family survive on savings alone? For most people, the honest answer is: not long. Life insurance changes that math.',
        'There are two main categories of life insurance: **term life** and **permanent life** (which includes whole life and universal life). Term life is simple — it covers you for a set period of time. Permanent life covers you for your entire life and builds cash value over time. In the next lesson, we\'ll break down exactly what those differences mean for you.',
        'One of the most common misconceptions is that life insurance is for old people or sick people. That\'s backwards. The younger and healthier you are, the cheaper your premiums are. A 35-year-old in good health can get $500,000 of term coverage for less than $25 per month. Waiting until you\'re 50 can cost 3-5 times more — or you might not qualify at all.',
        'Think of life insurance not as planning for death — think of it as protecting the life you\'ve built. Your family depends on your income. Life insurance is what keeps those promises intact, even if you\'re not here to keep them yourself.',
      ],
      keyTakeaways: [
        'Life insurance pays a death benefit to your beneficiaries when you die',
        'The younger and healthier you are, the cheaper your premiums — don\'t wait',
        'Two main types: term life (temporary) and permanent life (lifelong + cash value)',
        '$500K in coverage can cost less than $25/month for a healthy 35-year-old',
        'Life insurance protects your family\'s financial future, not just covers burial costs',
      ],
      actionStep: 'Write down three financial obligations your family would struggle to cover if you died tomorrow (mortgage, childcare, car payment, etc.). That list is the start of your coverage calculation.',
    },
    {
      id: 2,
      slug: 'term-vs-whole-life',
      title: 'Term vs. Whole Life Insurance',
      duration: '8 min',
      videoId: null,
      content: [
        'This is the question that trips up most families — and it\'s where a lot of insurance agents make their biggest commissions. So let\'s be straight with each other.',
        '**Term life insurance** covers you for a specific period — typically 10, 20, or 30 years. If you die during that term, your beneficiaries receive the full death benefit. If the term expires and you\'re still alive, the coverage ends. That\'s it. No cash value, no investment component — just pure protection at the lowest possible cost. For most working families, this is the right choice.',
        '**Whole life insurance** (also called permanent insurance) covers you for your entire life. It also builds cash value over time — a portion of each premium goes into an account that grows slowly, and you can borrow against it. That sounds appealing. But here\'s the catch: whole life premiums are typically 5 to 15 times more expensive than equivalent term coverage. A $500,000 whole life policy might cost $400-600/month versus $25-35/month for the same term coverage.',
        'The classic financial advice — backed by decades of research — is: **buy term and invest the difference**. If you buy a $25/month term policy instead of a $450/month whole life policy, you have $425/month to invest. Put that into a low-cost index fund over 20 years, and you\'ll likely build far more wealth than the cash value component of any whole life policy.',
        'There ARE situations where permanent insurance makes sense — high net-worth individuals using it for estate planning, business owners with key-person coverage needs, or people with certain health conditions who need guaranteed coverage. But for a working DC family trying to protect their household? Term life is almost always the smarter, more affordable answer.',
        'Bottom line: don\'t let an agent sell you a whole life policy by making it sound like an investment. It\'s an insurance product with expensive fees built in. Separate your insurance from your investments — you\'ll come out ahead.',
      ],
      keyTakeaways: [
        'Term life = coverage for a set period (10/20/30 years) at low cost — best for most families',
        'Whole life = lifelong coverage + cash value, but 5-15x more expensive',
        '\'Buy term and invest the difference\' is time-tested advice for working families',
        'Whole life commissions are high — know who benefits when an agent pushes it',
        'Permanent insurance CAN make sense for high net-worth estate planning scenarios',
      ],
      actionStep: 'Get a free term life insurance quote at policygenius.com or haven life. Just 5 minutes. See exactly what $500K of 20-year coverage would cost for your age and health — you may be surprised how affordable it is.',
    },
    {
      id: 3,
      slug: 'how-much-coverage',
      title: 'How Much Coverage Do I Need?',
      duration: '8 min',
      videoId: null,
      content: [
        'This is the most important practical question in life insurance — and most people either wildly underestimate or just guess. Let\'s calculate it properly.',
        'The most commonly used framework is the **DIME method**: Debt, Income, Mortgage, and Education. Add up each category to arrive at your coverage number.',
        '**Debt**: Add up all your outstanding debts — car loans, credit cards, student loans, personal loans. These don\'t disappear when you die; they become your family\'s burden. Write that number down.',
        '**Income**: Multiply your annual salary by the number of years your family would need to replace it. If your kids are young, that might be 10-15 years. If your spouse could return to work quickly, maybe 5 years. A common rule of thumb is 10x your annual income. So if you earn $75,000/year, that\'s $750,000 in income replacement.',
        '**Mortgage**: If you own a home, add your outstanding mortgage balance. Your family shouldn\'t have to sell the house to survive.',
        '**Education**: If you have children, estimate the cost of their college education. In-state public university is currently around $100,000+ for four years. Private school is $200,000+. Even if they get scholarships, having a cushion matters.',
        'Add those four numbers together. That\'s your starting point. For a typical DC-area family — $75K income, $300K mortgage, two kids, $50K in other debt — you might land at $1.2-1.5 million in coverage needs.',
        'That sounds like a lot. But here\'s the good news: a $1 million 20-year term policy for a healthy 35-year-old costs roughly $40-60/month. That\'s less than a car insurance payment. Don\'t let the death benefit number scare you off — the premium is what matters.',
      ],
      keyTakeaways: [
        'Use the DIME method: Debt + Income (10x) + Mortgage + Education',
        'Most DC families need $750K–$1.5M in coverage',
        '$1M in 20-year term coverage often costs $40–60/month for a healthy adult',
        'Don\'t guess — calculate. Under-insurance is just as dangerous as none at all',
        'Reassess your coverage needs every 3-5 years or after major life changes',
      ],
      actionStep: 'Calculate your DIME number right now: (all debts) + (annual income × 10) + (mortgage balance) + (education costs per child). That is your target coverage amount.',
    },
    {
      id: 4,
      slug: 'comparing-quotes',
      title: 'How to Compare Quotes',
      duration: '7 min',
      videoId: null,
      content: [
        'Shopping for life insurance doesn\'t have to be complicated — but there are a few things you need to understand before you start clicking through quote tools.',
        '**Start with independent brokers, not captive agents.** A captive agent works for one company (like State Farm or Allstate) and can only sell their products. An independent broker shops across dozens of companies on your behalf. Use sites like Policygenius, SelectQuote, or Ladder to compare multiple carriers at once.',
        '**Understand the underwriting categories.** Insurance companies classify applicants by health risk. The main tiers are: Preferred Plus (best rates, for the healthiest applicants), Preferred, Standard Plus, Standard, and Substandard (smokers, certain health conditions). The difference between Preferred Plus and Standard can be 40-60% in premium cost. Being honest on your application is critical — misrepresentation can void your policy.',
        '**Compare these specific things between quotes:**',
        'First, the coverage amount and term length — make sure you\'re comparing apples to apples. Second, the AM Best rating of the insurance company — you want A or better. This rating tells you if the company will actually be able to pay claims 20 years from now. Third, whether the policy is convertible — meaning you can convert it to permanent life without a new medical exam. Fourth, whether the policy is guaranteed renewable — meaning they can\'t cancel you as long as you pay premiums.',
        '**Watch out for these red flags**: Policies that require you to re-qualify every year. Policies with exclusions buried in the fine print. Agents who push you toward whole life without explaining the cost difference. And anyone who says you must decide today.',
        'Getting quotes takes 10 minutes. Getting the wrong policy takes years to undo.',
      ],
      keyTakeaways: [
        'Use independent brokers (Policygenius, SelectQuote) — they shop dozens of carriers at once',
        'Health underwriting categories affect your premium by 40-60% — honesty matters',
        'Check AM Best rating — you want A or better for long-term claim reliability',
        'Look for convertible and guaranteed renewable terms',
        'Never feel pressured to decide same-day — take the time you need',
      ],
      actionStep: 'Go to policygenius.com and run a free quote comparison. Compare at least 3 carriers for your age and coverage target. Screenshot your best option and save it for reference.',
    },
    {
      id: 5,
      slug: 'the-application-process',
      title: 'The Application Process',
      duration: '7 min',
      videoId: null,
      content: [
        'Once you\'ve chosen a policy and carrier, the application process begins. Understanding what to expect prevents delays and ensures your coverage starts as quickly as possible.',
        '**The application itself** asks for your personal information, health history, lifestyle habits (smoking, dangerous hobbies), and your beneficiary designations. Answer everything honestly. Misrepresentation — even unintentional — can give the insurer grounds to deny a claim or cancel your policy. That\'s the last thing your family needs.',
        '**Medical underwriting** typically involves one of three processes: a full medical exam (paramedical exam) where a nurse comes to your home or office, takes blood and urine samples, and records your vitals; simplified underwriting where you answer detailed health questions but skip the physical exam; or guaranteed issue where no medical questions are asked (these policies are usually smaller coverage amounts and more expensive per dollar of coverage).',
        'For most healthy adults under 50, a paramedical exam will qualify you for the best rates. Don\'t fear it — it\'s free, comes to you, and typically takes 20-30 minutes. The results also give you a useful snapshot of your own health.',
        '**Your beneficiaries** are the people who will receive the death benefit. Name them specifically — full legal name, date of birth, Social Security number, and relationship to you. You can name primary beneficiaries (first in line) and contingent beneficiaries (backup). Keep this updated after major life events: marriage, divorce, birth of a child. A beneficiary designation on a life insurance policy overrides your will.',
        '**Approval timelines** vary: fully underwritten policies can take 4-8 weeks. Accelerated underwriting (no exam) is often 48 hours to 2 weeks. Some carriers offer instant approval for younger, healthier applicants. Once approved, your coverage is effective as soon as you pay your first premium.',
      ],
      keyTakeaways: [
        'Answer all application questions honestly — misrepresentation can void your policy',
        'Paramedical exams are free, come to you, and get you the best rates',
        'Name beneficiaries specifically — names, DOB, SSN, relationship',
        'Update beneficiaries after marriage, divorce, or birth of a child',
        'Coverage starts the moment you pay your first premium after approval',
      ],
      actionStep: 'Write down the full legal name, date of birth, and relationship of everyone you would want as a beneficiary on your policy. Have this ready before you start your application — it speeds up the process significantly.',
    },
    {
      id: 6,
      slug: 'putting-it-all-together',
      title: 'Putting It All Together',
      duration: '8 min',
      videoId: null,
      content: [
        'You\'ve covered a lot of ground. Let\'s bring it all together into a clear action plan — because knowing this information only matters if you actually use it.',
        '**Here is your 5-step life insurance action plan:**',
        'Step 1: Calculate your DIME number (Debt + Income replacement + Mortgage + Education). This is your target coverage amount. For most DC-area families, this lands between $750,000 and $1.5 million.',
        'Step 2: Decide on term length. If you have young children, a 20-30 year term makes sense — it covers them through college and covers your peak earning years. If you\'re older and your kids are grown, a 10-15 year term may be sufficient to cover remaining debts and provide income replacement for your spouse.',
        'Step 3: Get quotes from at least 3 independent brokers or comparison sites. Policygenius, SelectQuote, and Ladder are good starting points. Focus on A-rated carriers, guaranteed renewable terms, and convertibility options.',
        'Step 4: Apply. Choose your best option and submit your application. Be thorough and honest. Complete any required paramedical exam. Name your beneficiaries carefully.',
        'Step 5: Review every 3-5 years or after major life changes — marriage, divorce, new child, income change, mortgage payoff. Life insurance is not a set-it-and-forget-it product. Your needs evolve.',
        '**One final thought:** The most common reason families don\'t have life insurance isn\'t cost — it\'s inertia. People mean to get it, they just never do. Don\'t let that be your story. The application takes less than an hour. The protection it provides lasts decades. Your family is counting on you to take this step.',
        'You now know more about life insurance than most people ever will. Use that knowledge. Take the next step today.',
      ],
      keyTakeaways: [
        'Five steps: Calculate → Term length → Compare quotes → Apply → Review every 3-5 years',
        'Most DC families need $750K–$1.5M in coverage on a 20-30 year term',
        'Use independent brokers and compare at least 3 carriers',
        'Update your coverage after every major life event',
        'The biggest risk isn\'t getting the wrong policy — it\'s waiting too long to get any policy',
      ],
      actionStep: 'Set a calendar reminder for 7 days from now: "Apply for life insurance." Then go to policygenius.com today and run your first quote. You don\'t have to buy today — but you should know your number.',
    },
  ],
};
