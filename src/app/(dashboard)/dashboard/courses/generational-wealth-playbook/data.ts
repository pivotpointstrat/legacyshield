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
  id: 'generational-wealth-playbook',
  title: 'Generational Wealth Playbook',
  description: 'A complete roadmap for DMV-area working families to build, protect, and pass on wealth. Real strategies, plain language, and action steps you can take this week.',
  icon: '💰',
  totalLessons: 8,
  totalDuration: '75 min',
  level: 'Intermediate',
  lessons: [
    {
      id: 1,
      slug: 'understanding-your-financial-reality',
      title: 'Understanding Your Financial Reality',
      duration: '10 min',
      videoId: null,
      content: [
        '"In law enforcement, before we responded to any situation, we gathered intelligence first. You never walk into a scene blind. Building wealth works the same way. Before you can build anything, you have to know exactly what you are working with. Most families skip this step — and that is why they stay stuck." — Anthony Washington',
        '**Net worth is the foundation of everything.** Net worth is simple: it is what you own minus what you owe. Net Worth = Total Assets − Total Liabilities. Many families in our community have been taught to think about their paycheck — how much comes in, how much goes out. But paycheck-to-paycheck thinking keeps you in a cycle. Wealth thinking is different. Wealth is what remains when the paycheck stops.',
        'Here is why this matters for your family: The median net worth of Black families in the U.S. is approximately $44,100 compared to $284,310 for white families (NCRC, 2024). That gap is not about income alone — it is about what has been built and protected over time. You can change this for your family starting today.',
        '**Your Assets Include:** Home equity (current value minus mortgage balance), retirement accounts (401k, IRA, pension), savings and checking balances, vehicles (current market value), life insurance cash value (whole life policies), and any business interests or investments.',
        '**Your Liabilities Include:** Mortgage balance, car loans, credit card balances, student loans, personal loans, medical debt, and any money owed to family or friends.',
        'Your **Debt-to-Income (DTI) ratio** tells lenders — and you — how much of your monthly income is already spoken for by debt payments. DTI = Total Monthly Debt Payments ÷ Gross Monthly Income × 100. Below 20% is healthy. 20–35% is manageable. 36–50% means debt is limiting your options. Above 50% means debt is controlling your life. If your DTI is above 35%, your first wealth-building priority is debt reduction — we cover that in the next lesson.',
        'A negative net worth is not failure — it is your starting point. You cannot build what you cannot measure. The families who build wealth are not the ones who started with the most. They are the ones who started with a map.',
      ],
      keyTakeaways: [
        'Net worth = what you own minus what you owe — calculate yours today',
        'A negative net worth is not failure — it is your starting point',
        'You cannot build what you cannot measure',
        'Your DTI ratio tells you how much financial freedom you actually have right now',
        'The racial wealth gap is real — and knowledge is the starting point to close it for your family',
      ],
      actionStep: 'Complete your Net Worth calculation this week. List every asset and its current value, then list every debt and its balance. Subtract. Write the number down — even if it is negative. Pull your free credit report at AnnualCreditReport.com. This is your starting line.',
    },
    {
      id: 2,
      slug: 'breaking-the-debt-cycle',
      title: 'Breaking the Debt Cycle',
      duration: '10 min',
      videoId: null,
      content: [
        '"Debt is not a character flaw. In communities like ours, debt was sometimes the only tool available. Credit cards when the car broke down. Loans when the rent came due. I have seen good, hardworking people drowning in debt through no fault of their own. But I have also seen those same people — once they had a plan — climb out and never go back. The difference was always the plan." — Anthony Washington',
        '**The true cost of debt.** Most people think about debt in terms of monthly payments. But debt is not about the monthly payment — it is about total cost over time. Consider $8,500 in credit card debt at 24% APR, paying only the minimum: your monthly payment is about $212, it takes 27+ years to pay off, and you pay $13,800 in interest alone. That is more than $22,000 for an $8,500 debt — over $13,000 transferred from your family’s future directly to a lender. High-interest debt is the #1 wealth killer for working families.',
        '**The Debt Snowball Method** (best for motivation): List all debts from smallest balance to largest. Pay minimums on all. Put every extra dollar toward the smallest balance first. When that debt is gone, roll that payment to the next smallest. Repeat. Quick wins build confidence and momentum. When you pay off that first small debt, you feel it — and that feeling keeps you going.',
        '**The Debt Avalanche Method** (best for saving money): List all debts from highest interest rate to lowest. Pay minimums on all. Put every extra dollar toward the highest interest rate first. When paid off, roll that payment to the next. Repeat. You pay less total interest over time — mathematically the most efficient method.',
        'LegacyShield recommendation: If you need motivation to get started, use the **Snowball**. If you are already disciplined and want to save the most money, use the **Avalanche**. Both work. The best method is the one you will actually stick to.',
        '**Finding money to attack debt:** Before any non-essential purchase over $50, wait 24 hours — this alone eliminates most impulse spending. Audit every subscription — the average American wastes $219/month on unused subscriptions (CNBC, 2022). Direct any extra income — tax refund, overtime, side hustle — immediately to your target debt before it disappears into daily life. Call your credit card companies and ask for a lower interest rate — this works more often than people realize.',
        '**Not all debt is equal.** Wealth-building debt (a mortgage on an appreciating home) can increase your net worth. Neutral debt (a car loan for reliable transportation) is necessary but depreciates. Wealth-destroying debt (credit cards at 20-29% APR, payday loans) transfers your wealth to lenders. Priority rule: aggressively eliminate wealth-destroying debt first.',
      ],
      keyTakeaways: [
        'The minimum payment trap is real — always know the total cost of your debt, not just the monthly payment',
        'Snowball method builds momentum through quick wins — best if you need motivation',
        'Avalanche method saves the most money on interest — best if you are already disciplined',
        'Every extra dollar sent to debt is a guaranteed return equal to your interest rate',
        'Not all debt is bad — eliminate wealth-destroying debt first, manage the rest',
      ],
      actionStep: 'List all your debts with the balance, interest rate, and minimum payment. Choose your method — Snowball or Avalanche. Find one subscription or expense to cut this month and redirect that money to your target debt. Set up automatic payments so you never miss one.',
    },
    {
      id: 3,
      slug: 'life-insurance-as-a-wealth-tool',
      title: 'Life Insurance as a Wealth-Building Tool',
      duration: '10 min',
      videoId: null,
      content: [
        '"I cannot tell you how many times I responded to a scene and later found out the family lost everything — not because the person died, but because there was no life insurance. I watched a grandmother raise three grandchildren on a fixed income because her son left nothing behind. Life insurance is not morbid. It is love. It is saying: if something happens to me, my family will not suffer financially on top of grieving emotionally." — Anthony Washington',
        '**Term vs. Whole Life — the real difference.** Term life insurance covers you for a specific period (10, 20, or 30 years). It is pure protection — no cash value — at the lowest possible cost. A healthy 35-year-old can get $500,000 of coverage for $25–$35/month. Whole life insurance covers you for life and builds cash value over time, but premiums are 5 to 15 times more expensive than equivalent term coverage.',
        '**For most working families, start with term life insurance.** Get the protection your family needs now at a price you can afford. The classic financial advice — buy term and invest the difference — has been backed by decades of research. If you pay $25/month for term instead of $450/month for whole life, you have $425/month to invest. Over 20 years in a low-cost index fund, you will likely build far more wealth than any whole life cash value.',
        '**How much coverage do you actually need? Use the DIME Method:** D = Debt (all outstanding debts), I = Income replacement (annual income × 10–15 years), M = Mortgage (remaining balance), E = Education (estimated cost for children). Add those four numbers together — that is your coverage target. Most families discover they are severely underinsured. The average U.S. life insurance policy is $170,000 — far below what most families actually need.',
        '**Life insurance as a tax-advantaged tool.** Death benefits are income-tax-free — your beneficiary receives the full amount with no federal income tax. Whole life cash value grows tax-deferred. Policy loans are tax-free. And critically: life insurance with a named beneficiary **bypasses probate entirely** — it passes directly to your family, fast, private, and without court involvement.',
        '**What to avoid.** Burial insurance sold door-to-door is typically very expensive per dollar of coverage. Relying only on employer group life (usually 1–2x salary — not enough, and you lose it when you leave). Waiting too long — a 45-year-old pays 2–3x more than a 30-year-old for the same coverage. Life insurance is cheapest when you are young and healthy. Every year you wait, it costs more.',
      ],
      keyTakeaways: [
        'Term life = affordable protection for your family right now — the right choice for most working families',
        'Whole life = long-term wealth and estate planning tool — best for high net-worth situations',
        'Use the DIME method to calculate your real coverage needs',
        'Life insurance bypasses probate — a critical estate planning benefit',
        'Every year you wait to get coverage costs your family more',
      ],
      actionStep: 'Calculate your DIME number this week — how much coverage does your family actually need? Review your current coverage (employer policy + any personal policies). Get a free quote at Policygenius.com or HavenLife.com — a healthy non-smoker can often get $500K of term coverage for under $35/month.',
    },
    {
      id: 4,
      slug: 'homeownership-and-building-equity',
      title: 'Homeownership & Building Equity in the DMV',
      duration: '10 min',
      videoId: null,
      content: [
        '"In this city, I watched neighborhoods transform. I watched families who owned their homes in neighborhoods that nobody wanted wake up one day sitting on $400,000 in equity. And I watched renters in those same neighborhoods get displaced. Homeownership is not just about having a place to live. In Washington DC, it has been the single greatest wealth transfer in many families2019 lives. If you can get in — get in." — Anthony Washington',
        '**Three ways a home builds wealth.** First, forced savings — every mortgage payment builds equity, the portion of your home you truly own. Unlike rent, which disappears, your mortgage payment grows your net worth. Second, appreciation — the DC metro area has historically appreciated at 3–5% annually. A $350,000 home growing at 4%/year is worth $770,000 in 20 years. Third, leverage — you control a $350,000 asset with a $17,500 down payment (5%). No other investment allows this level of leverage for the average family.',
        '**The rent vs. own reality over 20 years in the DMV.** A renter paying $2,200/month spends $528,000 over 20 years and owns nothing. A homeowner paying $2,400/month spends $576,000 — just $48,000 more — but owns an asset worth $550,000 or more in equity. The difference in net wealth created: over $500,000. That is not theory. That is math.',
        '**DC and Maryland programs most families don’t know exist.** The DC Home Purchase Assistance Program (HPAP) offers up to $202,000 in down payment and closing cost assistance for DC residents based on income. DC Open Doors provides down payment assistance for moderate-income buyers. In Maryland, the Maryland Mortgage Program offers competitive rates plus down payment assistance for first-time buyers. At the federal level, FHA loans allow 3.5% down with credit scores as low as 580. VA loans offer 0% down for veterans — one of the best mortgage products available.',
        '**What you need to prepare to buy.** Credit score: aim for 620+ minimum, 740+ gets the best rates. Down payment: 3–20% of purchase price — programs above can help significantly. Debt-to-income ratio: most lenders want DTI below 43%. Stable income: 2 years of employment history preferred. Emergency fund: keep 3–6 months of expenses AFTER closing — do not drain yourself dry to buy a house.',
        '**Timeline to homeownership starting from zero:** Building credit to 620+ takes 6–18 months. Saving your down payment and closing costs takes 12–24 months. Getting pre-approved takes 1–2 weeks. Finding your home and closing takes 2–4 months. Start today — even if buying feels far away. Every step you take now shortens the timeline.',
      ],
      keyTakeaways: [
        'Homeownership is the #1 wealth-builder for working families in the DMV — appreciation, equity, and leverage combined',
        'DC and Maryland have programs that significantly reduce barriers to buying — most families don’t know they exist',
        'Every rent payment builds your landlord’s wealth, not yours',
        'The 20-year difference between renting and owning in DC can exceed $500,000 in net wealth',
        'Start preparing now — credit, savings, and DTI are your three levers',
      ],
      actionStep: 'Check your credit score today — free at Credit Karma or AnnualCreditReport.com. If you are a DC resident, research the HPAP program at dhcd.dc.gov. Calculate what you need: down payment (3–5% of target price) plus 3 months expenses in reserve. Talk to a HUD-approved housing counselor — free in DC through the DC Housing Finance Agency.',
    },
    {
      id: 5,
      slug: 'wills-trusts-and-avoiding-probate',
      title: 'Wills, Trusts & Avoiding Probate',
      duration: '10 min',
      videoId: null,
      content: [
        '"I have seen it happen too many times. A person works their whole life, builds something real — a home, savings, a business — and then they pass without a will. And what happens? The courts decide. Family members fight. Property gets tied up for years. Sometimes it gets lost entirely. A will is not just a legal document. It is your final instruction to the people you love. It says: here is what I built, and here is who I trust with it." — Anthony Washington',
        '**What is a will?** A Last Will and Testament states who receives your property when you die, who will care for your minor children (guardian designation), and who manages your estate (executor). Important: a will does NOT avoid probate. It does not cover assets held jointly or with named beneficiaries. Without a will, your state decides. In DC and Maryland, if you die without a will (called dying intestate), the state’s default rules distribute your estate — which may not reflect your wishes.',
        '**What is a trust?** A Revocable Living Trust places your assets into a legal arrangement you control completely while living. When you pass, assets transfer directly to your beneficiaries — **without probate**. Advantages over a will: it avoids probate, remains private (wills become public record), takes effect immediately, and can include conditions like age requirements before a child receives their inheritance. Cost to create: $1,000–$3,000 with an attorney versus $200–$500 for a basic will.',
        '**What is probate and why you want to avoid it.** Probate is the court-supervised process of distributing an estate after death. It is problematic for three reasons: Time — probate in DC can take 6 months to 3+ years. Cost — attorney and court fees typically consume 3–8% of the estate’s value. Privacy — all probate filings are public record. Assets that avoid probate automatically include: life insurance with a named beneficiary, retirement accounts with a named beneficiary, jointly owned property, assets held in a trust, and payable-on-death bank accounts.',
        '**Power of Attorney — the document every adult needs NOW.** A Durable Power of Attorney designates someone to make financial decisions on your behalf if you become incapacitated. A Healthcare Power of Attorney designates someone to make medical decisions. Without these documents, your family may have to go to court to get legal authority to pay your bills or make medical decisions — even if you are just temporarily incapacitated.',
        '**Every adult over 18 should have:** A will or trust. A durable power of attorney (financial). A healthcare power of attorney. A living will or advance directive stating your medical wishes. This is not just for the wealthy or the elderly. If you own anything, earn income, or have people who depend on you — you need these documents. 69.4% of Black homeowners age 50+ have no will or trust (Urban Institute, 2024). You can change that for your family today.',
      ],
      keyTakeaways: [
        'A will is essential but does not avoid probate — a trust does',
        'Probate costs your family time (months to years), money (3–8% of estate), and privacy',
        'A revocable living trust is the most powerful tool to transfer wealth privately and efficiently',
        'Power of attorney protects your family while you are still living — not just after death',
        '69.4% of Black homeowners 50+ have no will or trust — you can break that statistic for your family',
      ],
      actionStep: 'Start with a basic will this week — online tools like Trust & Will (trustandwill.com) or FreeWill (freewill.com) make it affordable and accessible. If your estate includes a home or significant assets, consult an estate attorney about a living trust. Execute a Durable Power of Attorney. Tell your family where your documents are kept.',
    },
    {
      id: 6,
      slug: 'beneficiary-designations',
      title: 'Beneficiary Designations — The Step Most People Skip',
      duration: '8 min',
      videoId: null,
      content: [
        '"A man worked for 22 years at the same company. Had a 401k worth $280,000. Never updated his beneficiary after his divorce. When he passed, the entire account went to his ex-wife — not his children. His current wife and kids got nothing. One piece of paperwork. That is all it would have taken." — Anthony Washington',
        '**What is a beneficiary designation?** It is a legal instruction attached to a financial account that says: if I die, this account goes directly to this person. The critical point: beneficiary designations **override your will**. It does not matter what your will says. If the beneficiary on your 401k conflicts with your will, the beneficiary designation wins — every time.',
        '**Accounts that require beneficiary designations:** Life insurance policies. 401k, 403b, and 457 retirement plans. Traditional and Roth IRAs. Pension plans. Bank accounts (add a Payable-on-Death or POD designation). Brokerage and investment accounts (Transfer-on-Death or TOD designation). Every one of these can pass directly to your loved ones — outside of probate — if you take the time to fill out the form.',
        '**Primary vs. Contingent beneficiaries.** Your primary beneficiary is the first person in line to receive the account. Your contingent beneficiary is the backup — they receive the account if your primary beneficiary has already passed or is unable to receive it. Always name both. If your primary beneficiary dies before you and there is no contingent named, the account may go through probate anyway — defeating the entire purpose.',
        '**When to update your beneficiary designations.** After marriage. After divorce — this is the most commonly missed update and the source of the most tragic outcomes. After the birth of a child or grandchild. After the death of a named beneficiary. After any major change in your relationship with a named beneficiary. And as a routine review every 3–5 years regardless of life events.',
        'This is the single easiest action in this entire course. It requires no attorney. No court. No fees. Just logging into your retirement account, calling your HR department, or visiting your bank. It takes less than 30 minutes. And it could mean the difference between your family receiving $280,000 and receiving nothing.',
      ],
      keyTakeaways: [
        'Beneficiary designations override your will — they are legally binding regardless of what your will says',
        'Never leave a beneficiary designation blank — the account may go through probate',
        'Always name a contingent (backup) beneficiary in addition to your primary',
        'Update after every major life event — especially divorce and births',
        'This is the simplest, highest-impact action in this course — do it this week',
      ],
      actionStep: 'Log in to every retirement account you have and check your current beneficiary designations today. Review your life insurance policy beneficiaries. Contact your bank and add a Payable-on-Death (POD) designation to your checking and savings accounts. Update anything that is outdated. This single action could save your family thousands and years of legal headaches.',
    },
    {
      id: 7,
      slug: 'teaching-your-children-about-money',
      title: 'Teaching Your Children About Money & Legacy',
      duration: '9 min',
      videoId: null,
      content: [
        '"Generational wealth is not just about what you leave behind. It is about what you pass on while you are still here. The most powerful thing I can tell you is this: the conversation you have with your child about money this weekend is worth more than any dollar amount in a will. Teach them the mindset. The values. The discipline. The rest will follow." — Anthony Washington',
        '**Ages 4–7 — The Foundation.** Introduce the concept of money with coins and bills. Use three jars: Save, Spend, Give. Teach delayed gratification — want something? Save for it. Give age-appropriate allowance for chores. These early habits shape how a child thinks about money for the rest of their life. Most adults2019 financial habits were formed before age 12.',
        '**Ages 8–12 — Building Understanding.** Open a savings account in their name and take them to the bank — make it an event. Explain interest: the bank pays you to keep your money here. Introduce needs vs. wants. Have them set a savings goal and track their progress on paper. Start conversations about what things actually cost: groceries, utilities, rent. Financial awareness at this age is a gift that compounds for decades.',
        '**Ages 13–17 — Growing Responsibility.** First job or side hustle — teach them to budget their income using the 50/30/20 rule. Show them what $100/month invested at 8% average return becomes over 40 years — over $300,000. That number changes how teenagers think about money. Discuss credit scores and how they work. Include them in age-appropriate family financial discussions. If they have earned income, open a **Custodial Roth IRA** — the most powerful financial gift you can give a teenager.',
        '**The Custodial Roth IRA — The Greatest Gift You Can Give.** If your child has any earned income (babysitting, lawn cutting, a part-time job), you can open a Custodial Roth IRA in their name. A 16-year-old who contributes $2,000/year for just 5 years and never adds another dollar will have over $400,000 at age 65 — assuming 8% average return. The habit of investing is established early. And habits formed at 16 last a lifetime. Open one at Fidelity, Charles Schwab, or Vanguard — no minimums required.',
        '**The Family Money Meeting.** Once a month, sit down as a family and talk about money. Not to stress — to plan. Spend 30 minutes covering: what did we earn this month, what did we spend, what are we saving toward, and what does each person commit to this month. This single habit — done consistently — changes the financial trajectory of a family within one generation. The families who build wealth talk about money. The families who struggle treat it as a forbidden topic.',
      ],
      keyTakeaways: [
        'Financial education begins at home — not in school, not from a textbook',
        'Age-appropriate money conversations create lifelong habits that compound over decades',
        'A custodial Roth IRA with small early contributions is a life-changing gift',
        'The monthly family money meeting is the simplest, highest-impact habit in this course',
        'What you teach your children about money is worth more than what you leave them',
      ],
      actionStep: 'Start the conversation — have your first age-appropriate money talk with your child this week. Set up three jars for younger children: Save, Spend, Give. Open a savings account for your child if they don’t have one. If your child has any earned income, research a Custodial Roth IRA at Fidelity or Schwab. Schedule your first family money meeting and put it on the calendar.',
    },
    {
      id: 8,
      slug: '90-day-family-wealth-action-plan',
      title: 'Your 90-Day Family Wealth Action Plan',
      duration: '8 min',
      videoId: null,
      content: [
        '"Motivation is great. But motivation without a plan is just a feeling. I want you to leave this course with something in your hand — a written plan, specific to your family, with real dates attached to real actions. That is what separates the families who build wealth from the families who just talk about it." — Anthony Washington',
        '**Days 1–30: Know Your Numbers.** This month is about honesty and clarity. Calculate your net worth. Pull your free credit report. Calculate your debt-to-income ratio. List all debts with balances and interest rates. Review every beneficiary designation on every account. Inventory all your insurance policies. Have a money conversation with your household. You cannot build what you cannot see.',
        '**Days 31–60: Protect Your Family.** This month is about protection — the foundation everything else is built on. Calculate your DIME life insurance number and compare it to your current coverage. Get life insurance quotes if you are underinsured. Create or update your will. Execute a Durable Power of Attorney. Update all beneficiary designations. Add POD designations to your bank accounts. Research homebuying assistance programs if applicable. Protect first. Build second.',
        '**Days 61–90: Start Building.** This month is about momentum. Choose your debt elimination method — Snowball or Avalanche — and set up automatic payments. Fund your emergency savings account — even $25/week matters. Schedule your first family money meeting. Open a custodial account for your child if applicable. Begin homebuying preparation if that is your goal. Write your family’s one-year wealth goal and post it somewhere you see it every day.',
        '**Your Family Wealth Vision Statement.** Before you close this course, write this down: In one year, my family will ___________. We will have ___________. We will have eliminated ___________ in debt. Our children will know ___________. Our legacy will be ___________. This is not a wish. This is a commitment. Sign it. Date it. Keep it somewhere you see it every day.',
        'You are not alone. Building generational wealth in working-class communities is not easy. The system was not designed with your family in mind. But families just like yours — in this city, in this community — are doing it every day. LegacyShield Pro exists to make sure you never have to figure it out alone. Our community, our workshops, and our network of trusted professionals are here for every step of the journey. The best time to plant a tree was 20 years ago. The second best time is today.',
      ],
      keyTakeaways: [
        'A 90-day plan turns this course into action — not just information or motivation',
        'Days 1–30: Know your numbers — you cannot build what you cannot see',
        'Days 31–60: Protect your family — the foundation everything else is built on',
        'Days 61–90: Start building — momentum compounds just like interest',
        'Write your Family Wealth Vision Statement and mean it — it is a commitment, not a wish',
      ],
      actionStep: 'Download the LegacyShield Pro 90-Day Family Wealth Action Plan worksheet from legacyshieldpro.com/worksheets/90-day-wealth-plan.html. Fill in your specific commitments for each 30-day phase. Sign it. Date it. Share it with your household. The families who write down their goals are significantly more likely to achieve them. Your legacy starts with this page.',
    },
  ],
};
