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
  id: 'banking-credit-foundations',
  title: 'Banking & Credit Foundations',
  description: 'Build your credit score, eliminate predatory debt, and set up a banking foundation that works for your family. The tools the financial system never explained to you — until now.',
  icon: '🏦',
  totalLessons: 5,
  totalDuration: '35 min',
  level: 'Beginner',
  lessons: [
    {
      id: 1,
      slug: 'understanding-your-credit-score',
      title: 'Understanding Your Credit Score',
      duration: '7 min',
      videoId: 'local:your-first-steps-with-legacyshield-pro',
      content: [
        '"A credit score is not a measure of your worth as a person. It is a tool — and like any tool, once you understand how it works, you can use it to your advantage." — Anthony Washington',
        '**What is a credit score?** A credit score is a three-digit number between 300 and 850 that represents your creditworthiness — how likely you are to repay borrowed money on time. Lenders, landlords, insurance companies, and even some employers use it to make decisions about you. The most widely used scoring model is the FICO score.',
        '**The five factors that make up your FICO score.** Payment history (35%) — whether you pay on time is the single biggest factor. Amounts owed (30%) — how much of your available credit you are using, called your credit utilization ratio. Length of credit history (15%) — how long your accounts have been open. Credit mix (10%) — having different types of credit like cards, loans, and a mortgage. New credit (10%) — how many new accounts or inquiries you have recently.',
        '**Credit score ranges and what they mean.** Exceptional: 800–850 — you qualify for the best rates on any loan. Very good: 740–799 — excellent terms on most products. Good: 670–739 — you qualify for most loans at reasonable rates. Fair: 580–669 — higher interest rates, some lenders may decline. Poor: Below 580 — limited access to credit, high rates, likely denials.',
        '**How to check your credit score for free.** You are entitled to one free credit report per year from each of the three bureaus — Equifax, Experian, and TransUnion — at AnnualCreditReport.com. Many banks and credit cards also provide free score monitoring. Credit Karma provides free access to your TransUnion and Equifax scores and reports at any time. Checking your own score never hurts it.',
        '**The racial credit gap is real — and it is not your fault.** Research consistently shows that Black Americans have lower average credit scores than white Americans — not because of individual behavior, but because of systemic barriers: historical redlining that prevented homeownership and wealth building, discriminatory lending practices, and unequal access to banking. Understanding this context matters because it means your score may not reflect your true financial character — and there are strategic ways to rebuild it.',
      ],
      keyTakeaways: [
        'Your credit score is a three-digit number from 300–850 based on five factors',
        'Payment history (35%) is the single most important factor',
        'Credit utilization — how much of your available credit you use — accounts for 30% of your score',
        'Check your free credit reports at AnnualCreditReport.com — checking never hurts your score',
        'The racial credit gap is real and systemic — your score is a starting point, not a judgment',
      ],
      actionStep: 'Go to AnnualCreditReport.com today and pull your free reports from all three bureaus — Equifax, Experian, and TransUnion. Review each one carefully. Write down your current score range and identify which of the five factors is your weakest area. That is where we focus next.',
    },
    {
      id: 2,
      slug: 'how-to-dispute-credit-errors',
      title: 'How to Dispute Credit Report Errors',
      duration: '7 min',
      videoId: null,
      content: [
        '"In law enforcement, I learned that records are not always accurate. The same is true for credit reports. You have the legal right to challenge anything that is wrong — and millions of Americans have errors that are costing them money right now." — Anthony Washington',
        '**How common are credit report errors?** According to a Federal Trade Commission study, one in five Americans has an error on at least one of their credit reports. One in twenty has an error significant enough to cause them to be denied credit or pay a higher interest rate. Errors can include accounts that do not belong to you, incorrect late payment records, duplicate accounts, wrong personal information, and outdated negative items.',
        '**Your legal rights under the Fair Credit Reporting Act.** The FCRA gives you the right to dispute any information on your credit report that you believe is inaccurate or incomplete. Credit bureaus must investigate your dispute within 30 days and correct or remove any information they cannot verify. This is your legal right — not a favor they are doing for you.',
        '**Step 1: Identify the error.** Pull all three of your credit reports. Errors often appear on only one report. Look for accounts you do not recognize, late payments you know you made on time, incorrect account balances, duplicate accounts for the same debt, negative items older than seven years (which must be removed), and personal information errors like incorrect addresses or Social Security numbers.',
        '**Step 2: File your dispute.** You can dispute errors online, by phone, or by mail. Disputing by certified mail creates the strongest paper trail. Write a dispute letter identifying the specific item, explaining why it is inaccurate, and requesting its correction or removal. Include supporting documentation — bank statements, payment records, or correspondence. Send it to the bureau reporting the error.',
        '**Step 3: Follow up.** The bureau must investigate and respond within 30 days. If they confirm the error, it must be corrected or removed. If they do not respond within 30 days, the item must be removed by default. If the bureau sides with the creditor and you still believe the information is wrong, you can escalate to the Consumer Financial Protection Bureau (CFPB) at consumerfinance.gov or consult a credit repair attorney.',
        '**What credit repair companies will not tell you.** Legitimate negative information — a genuine late payment, a real collection account — cannot be legally removed from your report before its expiration date, regardless of what credit repair companies promise. Most charge $50–$100 per month for services you can do yourself for free. Save that money and dispute errors directly.',
      ],
      keyTakeaways: [
        'One in five Americans has a credit report error — many significant enough to affect their score',
        'The Fair Credit Reporting Act gives you the legal right to dispute any inaccurate information',
        'Bureaus must investigate disputes within 30 days and remove unverifiable information',
        'Disputing by certified mail creates the strongest paper trail',
        'You can do everything a credit repair company does — for free',
      ],
      actionStep: 'Review your three credit reports from AnnualCreditReport.com this week. Identify any item that looks unfamiliar or incorrect. File a dispute directly with the relevant bureau — Equifax (equifax.com/dispute), Experian (experian.com/disputes), or TransUnion (transunion.com/credit-disputes). Keep a record of everything you send.',
    },
    {
      id: 3,
      slug: 'debt-payoff-strategies',
      title: 'Debt Payoff Strategies That Actually Work',
      duration: '7 min',
      videoId: null,
      content: [
        '"Debt is not a moral failing. It is a condition — and conditions can be changed with the right strategy and consistent effort. I have seen people turn their finances around completely. The key is having a plan and sticking to it." — Anthony Washington',
        '**Know exactly what you owe.** Before you can eliminate debt, you need a complete picture. List every debt you carry: credit cards, car loans, student loans, medical bills, personal loans. For each one record the creditor, the current balance, the minimum payment, and the interest rate (APR). This list — however uncomfortable it is to write — is the foundation of your payoff plan.',
        '**The Debt Avalanche Method.** List your debts from highest interest rate to lowest. Pay the minimum on everything except the highest-rate debt — throw every extra dollar at that one until it is paid off. Then roll that payment into the next highest-rate debt. This method saves the most money in interest over time. It is mathematically optimal. If your goal is to minimize the total cost of your debt, this is your strategy.',
        '**The Debt Snowball Method.** List your debts from smallest balance to largest. Pay minimums on everything except the smallest balance — attack it aggressively until it is gone. Then roll that payment into the next smallest balance. This method may cost slightly more in total interest, but research shows it is more psychologically effective — the quick wins build momentum and motivation. If you have struggled to maintain discipline in the past, this may be your better strategy.',
        '**Predatory debt in the DMV: What to avoid.** The DC metro area has a disproportionate concentration of payday lenders, check-cashing stores, and rent-to-own furniture companies in lower-income and predominantly Black neighborhoods. These products carry effective APRs of 200 to 400 percent. A $300 payday loan can become a $900 obligation in weeks. If you currently have predatory debt, it is your highest priority — these accounts are designed to trap you.',
        '**Negotiating with creditors.** Many people do not realize that credit card interest rates are negotiable. A single phone call asking for a rate reduction — especially if you have made consistent payments — succeeds more often than not. Collection accounts can often be settled for 30 to 50 cents on the dollar. Medical debt is frequently negotiable and hospitals are required to offer financial assistance programs. Do not pay full price on a negotiable debt without asking.',
        '**Building the debt payoff habit.** Automation is your most powerful tool. Set up automatic minimum payments on all accounts to protect your payment history. Set up an automatic transfer to a dedicated debt payoff account every payday — even $25 matters. Review your list monthly, celebrate payoffs, and adjust your strategy as your situation changes.',
      ],
      keyTakeaways: [
        'Start with a complete list of every debt: creditor, balance, minimum payment, and interest rate',
        'The Debt Avalanche (highest rate first) saves the most money',
        'The Debt Snowball (smallest balance first) builds the most momentum',
        'Predatory debt — payday loans, rent-to-own — is your highest priority to eliminate',
        'Call your creditors to negotiate lower rates and settlement amounts — it works more often than you think',
      ],
      actionStep: 'Create your debt list today. Write down every debt with its balance, minimum payment, and interest rate. Choose the Avalanche or Snowball method based on your personality and current situation. Then automate your minimums and identify one extra dollar amount — even $50/month — to apply to your target debt starting this month.',
    },
    {
      id: 4,
      slug: 'choosing-the-right-bank-and-accounts',
      title: 'Choosing the Right Bank and Accounts',
      duration: '7 min',
      videoId: null,
      content: [
        '"The bank you choose matters more than most people realize. The wrong bank can nickel-and-dime you out of hundreds of dollars a year. The right bank can be the foundation everything else is built on." — Anthony Washington',
        '**Why your bank choice matters.** Banking fees are one of the most insidious ways wealth is extracted from working families. Overdraft fees averaging $35 per occurrence, monthly maintenance fees, minimum balance fees, ATM fees, and paper statement fees — a family paying all of these could lose $500 to $1,000 per year in fees alone. That is money that should be building your wealth.',
        '**Traditional banks vs. credit unions vs. online banks.** Traditional banks — Chase, Bank of America, Wells Fargo — offer convenience and extensive ATM networks but typically charge higher fees. Credit unions are member-owned not-for-profit institutions that typically offer lower fees, better interest rates on loans, and higher rates on savings. They require membership — often based on your employer, location, or community. Online banks — Ally, Marcus, Chime — offer the lowest fees and often the highest savings rates, but have no physical branches.',
        '**What to look for in a checking account.** No monthly maintenance fees (or a fee that is easy to waive). Free overdraft protection or overdraft forgiveness. A large free ATM network. A strong mobile app and online banking platform. FDIC or NCUA insurance — this protects your deposits up to $250,000 if the bank fails. Avoid accounts with minimum balance requirements that could trap you in fee cycles.',
        '**The high-yield savings account opportunity.** Traditional savings accounts at big banks typically offer 0.01% to 0.10% annual interest — essentially nothing. High-yield savings accounts at online banks like Ally, Marcus, or Discover regularly offer 4% to 5% APY or higher. On a $5,000 emergency fund, the difference is $5 per year at a big bank vs. $200 to $250 per year at an online bank. Move your savings.',
        '**Building a two-account system.** Many financial experts recommend a simple two-account structure: a checking account at a local credit union or bank for daily spending and bill pay, and a high-yield savings account at an online bank for your emergency fund and savings goals. Keep only what you need in checking. Let your savings grow in a high-yield account. This separation also creates a psychological barrier that reduces impulse spending.',
        '**Banking while Black in the DMV.** Washington DC has a documented history of banking deserts — neighborhoods with limited bank branch access — disproportionately affecting Black communities. If you have been unbanked or underbanked due to past banking issues, look into second-chance checking accounts offered by many credit unions, or start with a Chime or Current account, which have no credit checks and no minimum balance requirements.',
      ],
      keyTakeaways: [
        'Banking fees can cost a family $500 to $1,000 per year — choose an account with no monthly fees',
        'Credit unions typically offer better rates and lower fees than traditional banks',
        'High-yield savings accounts at online banks offer 4–5% APY vs. nearly 0% at big banks',
        'A two-account system — local checking plus online high-yield savings — is an effective foundation',
        'Second-chance checking accounts are available for those with past banking issues',
      ],
      actionStep: 'Review your current bank account this week. List every fee you paid in the last 90 days. If you are paying monthly maintenance fees, research credit unions in your area (dccu.org, nfcu.org for military families) or open a free Chime or Ally account. Then open a high-yield savings account and move your emergency fund into it.',
    },
    {
      id: 5,
      slug: 'building-your-banking-foundation',
      title: 'Building Your Banking Foundation for Wealth',
      duration: '7 min',
      videoId: null,
      content: [
        '"A strong banking foundation is not about having a lot of money. It is about having the right structure. You can build a house on sand or on concrete. Your finances work the same way." — Anthony Washington',
        '**The Credit-Building Ladder.** If your credit score needs work, there is a clear path upward. Step one: become an authorized user on a family member or trusted friend\'s credit card with good standing — their positive history begins to appear on your report. Step two: open a secured credit card, where you deposit $200 to $500 as collateral and use it for small purchases you pay off monthly. Step three: after 12 months of on-time payments, graduate to an unsecured card. Step four: add an installment loan — a credit-builder loan from a credit union is designed specifically for this purpose.',
        '**The Emergency Fund: Your Most Important Financial Asset.** Before investing, before extra debt payments, before anything else — build an emergency fund of three to six months of essential expenses. In the DC metro area, where cost of living is high, that means $10,000 to $20,000 for most families. This fund is not for vacations or appliances — it is the buffer that keeps one car repair or medical bill from derailing everything you have built.',
        '**Automating your financial growth.** The most effective financial behavior change is removing willpower from the equation. Set up automatic transfers on payday: a fixed amount to your high-yield savings, a fixed amount to your debt payoff account, and a fixed amount to your investment account if you have one. Pay yourself first — before discretionary spending — and you will build wealth consistently without feeling deprived.',
        '**Understanding credit utilization.** Your credit utilization ratio — how much of your available credit limit you are using — accounts for 30% of your FICO score. Keep utilization below 30% across all cards, and below 10% for the highest score impact. If your card has a $1,000 limit, do not carry more than $100 to $300 in balances. Request credit limit increases regularly — a higher limit with the same balance lowers your utilization.',
        '**The LegacyShield Banking Checklist.** You are on solid financial footing when you have: a free checking account with no monthly fees, a high-yield savings account with at least one month of expenses saved, a credit score above 670 and improving, no predatory debt (payday loans, title loans, rent-to-own), at least one credit card used only for purchases you can pay in full monthly, and automatic transfers set up for savings and debt payoff.',
        '**Next steps: Building wealth from here.** Banking and credit are the foundation — not the destination. Once your foundation is stable, the next steps are contributing to a retirement account (even $50/month in a Roth IRA makes a difference), increasing your life insurance coverage as your income grows, and revisiting your estate plan annually. The courses ahead in LegacyShield will walk you through each of these steps.',
      ],
      keyTakeaways: [
        'The Credit-Building Ladder: authorized user → secured card → unsecured card → installment loan',
        'An emergency fund of 3–6 months of expenses is your most important financial asset',
        'Automate savings and debt payoff on payday — remove willpower from the equation',
        'Keep credit utilization below 30% (ideally below 10%) for the best score impact',
        'Strong banking is the foundation — not the destination — for building generational wealth',
      ],
      actionStep: 'Set up one automatic transfer today — even $25 per payday to a savings account. Then review your credit utilization on your most-used card. If it is above 30%, make a plan to pay it below that threshold this month. These two moves alone — automation and utilization management — will improve your financial position within 60 days.',
    },
  ],
};
