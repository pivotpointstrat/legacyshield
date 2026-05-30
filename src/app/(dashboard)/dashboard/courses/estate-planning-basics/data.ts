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
  id: 'estate-planning-basics',
  title: 'Estate Planning Basics',
  description: 'Wills, trusts, beneficiaries, and power of attorney — explained simply. Protect what you have built so your family keeps it. No jargon, no attorneys required to get started.',
  icon: '📋',
  totalLessons: 5,
  totalDuration: '40 min',
  level: 'Beginner',
  lessons: [
    {
      id: 1,
      slug: 'why-you-need-a-will',
      title: 'Why You Need a Will — And What Happens Without One',
      duration: '8 min',
      videoId: 'local:why-your-family-needs-a-plan--right-now',
      content: [
        '"I have sat with families in their most vulnerable moments and watched financial unpreparedness turn hardship into crisis. A home lost to probate. Savings frozen for years. Children placed with relatives no one would have chosen. All of it preventable with one document that most people never get around to writing." — Anthony Washington',
        '**What is a Last Will and Testament?** A will is a legal document that expresses your wishes about how your property and assets should be distributed after you die. It names who receives what, who cares for your minor children, and who is responsible for carrying out your instructions (your executor). Without one, the state makes all of those decisions for you.',
        '**What happens when you die without a will — called dying intestate.** In Washington DC, Maryland, and Virginia, intestacy laws determine who receives your estate. The state does not know your wishes, your relationships, or your values. A stepchild you raised as your own may receive nothing. A family member you were estranged from may receive everything. The court appoints an administrator you did not choose. And your children may be placed with a guardian you never would have selected.',
        '**What a will actually covers.** Your will can direct the distribution of real estate (with some limitations), bank accounts that do not have a beneficiary designation, personal property (furniture, vehicles, jewelry, art, collectibles), and digital assets. It can name a guardian for your minor children — one of the most important decisions any parent can make. It can establish a testamentary trust to hold assets for children until they reach a certain age.',
        '**What a will does NOT cover.** A will does not control assets that have a named beneficiary — life insurance, retirement accounts, and jointly owned property pass outside of your will regardless of what it says. A will does not avoid probate — assets that go through a will must still go through the court-supervised probate process. And a will only takes effect at death — it provides no protection if you become incapacitated while still alive.',
        '**You are not too young, too poor, or too busy.** The most common reasons people give for not having a will are that they think they do not have enough assets, they are too young to worry about it, or they keep meaning to get to it. But consider this: if you have a child, own a car, have a bank account, or simply care about who receives your belongings — you need a will. It can be created online in under an hour for less than $100. The cost of not having one can be years of court proceedings, legal fees, and family conflict.',
      ],
      keyTakeaways: [
        'A will is a legal document that directs how your assets are distributed and who cares for your children when you die',
        'Dying without a will (intestate) means the state decides — and its decisions may not reflect your wishes',
        'A will covers personal property, real estate, and guardian designation — but does NOT avoid probate',
        'Beneficiary designations on accounts override whatever your will says',
        'You are not too young, too poor, or too busy — if you have people or things you care about, you need a will',
      ],
      actionStep: 'Decide today that you will create a will. Visit TrustAndWill.com or FreeWill.com this week — both offer affordable, state-specific will creation online. Set a specific date and time on your calendar. Treat it like an appointment you cannot cancel.',
    },
    {
      id: 2,
      slug: 'trusts-explained-simply',
      title: 'Trusts Explained Simply — What They Are and When You Need One',
      duration: '9 min',
      videoId: 'local:wills-vs-trusts--whats-the-difference',
      content: [
        '"The difference between a will and a trust is the difference between a letter and a locked safe. A will says what you want. A trust makes it happen — privately, immediately, and without the courts." — Anthony Washington',
        '**What is a trust?** A trust is a legal arrangement where you (the grantor) place your assets into a structure managed by a trustee — which can be you while you are living — for the benefit of your beneficiaries. The trust holds the assets during your lifetime and transfers them directly to your beneficiaries when you pass, bypassing the probate process entirely.',
        '**The Revocable Living Trust — the most common type for families.** With a revocable living trust, you create the trust, fund it with your assets, and serve as your own trustee while you are alive. You retain complete control — you can change it, add to it, or dissolve it at any time. When you pass, a successor trustee you have named takes over and distributes the assets to your beneficiaries according to your instructions — without going to court.',
        '**Key advantages of a trust over a will.** A trust avoids probate — assets transfer directly without court involvement, saving your family months or years of waiting and thousands of dollars in fees. A trust is private — unlike a will, which becomes a public record when entered into probate, a trust is never made public. A trust can include conditions — you can specify that a child must reach age 25 before receiving their inheritance, or that funds can only be used for education and housing. A trust provides for incapacity — if you become unable to manage your affairs, your successor trustee steps in immediately, without court involvement.',
        '**How to fund a trust.** Creating a trust document is only the first step. You must also transfer your assets into the trust — a process called funding. This means re-titling your real estate in the name of the trust, transferring bank and investment accounts, and updating ownership of significant personal property. An unfunded trust is essentially useless — the assets will still go through probate. This is the step most people miss.',
        '**When does a trust make the most sense?** A trust is most valuable when you own real estate (especially in multiple states), have significant assets you want to protect from probate, want to leave money to minor children with conditions attached, have a blended family with complex inheritance wishes, or want to keep your financial affairs private. For a working family with a home in DC or Maryland, a revocable living trust is often the single most powerful estate planning tool available.',
      ],
      keyTakeaways: [
        'A revocable living trust avoids probate — assets transfer directly to your family without court involvement',
        'A trust is private — unlike a will, it never becomes public record',
        'You can include conditions in a trust — age requirements, purpose restrictions, and more',
        'You must FUND your trust by transferring assets into it — an empty trust offers no protection',
        'For families who own a home, a trust is often worth the $1,000–$3,000 cost many times over',
      ],
      actionStep: 'If you own a home or significant assets, consult with an estate attorney about a revocable living trust. Many offer free or low-cost consultations. Alternatively, services like Trust & Will offer online trust creation starting around $399. Ask specifically: what assets do I need to transfer into the trust, and how do I fund it?',    },
    {
      id: 3,
      slug: 'beneficiary-designations-estate-planning',
      title: 'Beneficiary Designations — The Fastest Way to Protect Your Family',
      duration: '7 min',
      videoId: null,
      content: [
        '“You could spend $3,000 on a trust, hire the best estate attorney in DC, and write the most comprehensive will ever drafted — and a single outdated beneficiary form could override all of it. That is how powerful these designations are. And that is why so few people take them seriously.” — Anthony Washington',
        '**Beneficiary designations are the foundation of estate planning.** A beneficiary designation is a legal instruction on a financial account that directs who receives the account when you die. It bypasses your will, bypasses probate, and transfers the account directly — often within days of your death. This makes beneficiary designations the fastest, most private, and most powerful estate planning tool most families have.',
        '**Accounts requiring beneficiary designations.** Life insurance policies — the death benefit goes directly to the named beneficiary, income-tax-free. Retirement accounts including 401k, 403b, 457, Traditional IRA, and Roth IRA. Pension plans. Bank accounts with a Payable-on-Death (POD) designation. Investment and brokerage accounts with a Transfer-on-Death (TOD) designation.',
        '**Primary and contingent beneficiaries.** Always name both. Your primary beneficiary receives the account first. Your contingent beneficiary receives it if the primary has passed or disclaims the inheritance. Without a contingent beneficiary, if your primary dies before you, the account may pass through probate — defeating the entire purpose.',
        '**The most common and costly mistakes.** Naming a minor child directly — minor children cannot legally receive large sums. The court appoints a guardian of the property, which involves legal fees and court supervision until the child turns 18. Forgetting to update after divorce — some states revoke beneficiary designations to an ex-spouse automatically, but many do not. Naming your estate as beneficiary — this forces the account through probate.',
        'This process takes 15–30 minutes per account and costs nothing. It could mean the difference between your family receiving $280,000 and receiving nothing.',
      ],
      keyTakeaways: [
        'Beneficiary designations override your will — they are the most powerful estate planning tool most families have',
        'Always name both a primary and a contingent beneficiary on every account',
        'Never name a minor child directly — use a trust or custodian instead',
        'Forgetting to update after divorce is one of the most common and costly estate planning mistakes',
        'This takes 15–30 minutes per account — and it costs nothing',
      ],
      actionStep: 'List every financial account you own: retirement accounts, life insurance, bank accounts, and investment accounts. Check the current beneficiary on each one. Update any that are outdated or blank. Add a POD designation to your bank accounts. This is the most high-impact 30 minutes you will spend on your family’s financial future.',
    },
    {
      id: 4,
      slug: 'power-of-attorney',
      title: 'Power of Attorney — Protecting Your Family While You Are Still Living',
      duration: '8 min',
      videoId: null,
      content: [
        '“Most people think estate planning is only about what happens when you die. But what happens if you are in a car accident and in a coma for two weeks? Without a power of attorney, your family may not be able to pay your mortgage, access your bank accounts, or make medical decisions — even if they are standing right next to you.” — Anthony Washington',
        '**What is a Power of Attorney?** A Power of Attorney (POA) is a legal document that authorizes another person — your agent — to act on your behalf. There are two types critical to estate planning: a Durable Financial Power of Attorney and a Healthcare Power of Attorney.',
        '**The Durable Financial Power of Attorney.** This authorizes your agent to manage your financial affairs — paying bills, managing bank accounts, handling real estate, filing taxes. The word “durable” is critical: it means the POA remains in effect even if you become incapacitated. A non-durable POA terminates if you lose mental capacity — exactly when you need it most. Without a durable POA, your family may need to go to court to establish a conservatorship, costing thousands of dollars and months of time.',
        '**The Healthcare Power of Attorney.** This authorizes your agent to make medical decisions on your behalf if you cannot make them yourself. Who should receive what treatment? Should life support be continued? These decisions need to be made quickly in emergencies. Without a Healthcare POA, doctors may not consult your family at all.',
        '**The Living Will / Advance Directive.** A living will records your specific wishes about end-of-life medical care. Do you want aggressive treatment or comfort care? This document speaks for you when you cannot speak for yourself, and relieves your family of impossible decisions.',
        '**Every adult over 18 should have all four documents:** A will or trust. A durable financial power of attorney. A healthcare power of attorney. A living will. These protect you during your lifetime and protect your family after you are gone.',
      ],
      keyTakeaways: [
        'Estate planning is not just about death — a POA protects your family if you become incapacitated',
        'A Durable Financial POA must say “durable” — otherwise it terminates if you lose mental capacity',
        'A Healthcare POA authorizes someone to make medical decisions when you cannot',
        'A Living Will records your specific end-of-life wishes so your family does not have to guess',
        'All four documents together form a complete estate plan for any adult',
      ],
      actionStep: 'Identify which of the four documents you currently have: will or trust, durable financial POA, healthcare POA, living will. For any you are missing, create them in order of importance. Your state bar association can refer you to estate attorneys. Many legal aid organizations offer free POA preparation for qualifying individuals.',
    },
    {
      id: 5,
      slug: 'where-to-start-today',
      title: 'Where to Start Today — Your Estate Planning Checklist',
      duration: '8 min',
      videoId: null,
      content: [
        '“Every week I did not have a will was a week my family was unprotected. I knew this. I still put it off. Do not be me. Do not be the statistic. The difference between having a plan and not having one is one afternoon and less than $200.” — Anthony Washington',
        '**Your complete estate planning checklist.** Start with what you can do today — for free or almost free — and build from there. The goal is not perfection. The goal is protection. Something is always better than nothing.',
        '**Step 1: Create a basic will (this week, under $100).** Online platforms like FreeWill.com (free), Trust & Will (starts at $159), and Tomorrow (free) make state-specific will creation accessible to everyone. A basic will covers property distribution, guardian designation for minor children, and executor appointment.',
        '**Step 2: Update all beneficiary designations (this week, free).** Log in to every retirement account, life insurance policy, and bank account. Review the named beneficiaries. Update anything outdated. Add a contingent beneficiary everywhere.',
        '**Step 3: Execute a Durable Power of Attorney (within 30 days).** Many states have free POA forms on the state government website. Having this document means your family can act on your behalf in a financial emergency without going to court.',
        '**Step 4: Healthcare Power of Attorney and Living Will (within 30 days).** Your state likely has free advance directive forms online. Hospitals often have social workers who can help at no cost. Give copies to your healthcare agent, your doctor, and your closest family members.',
        '**Step 5: Consider a revocable living trust (within 6 months, if applicable).** If you own real estate, consult an estate attorney. The cost is $1,000–$3,000 but can save your family many times that in probate costs. Store originals in a fireproof safe. Give copies to your executor and healthcare agent. Tell your family where everything is.',
      ],
      keyTakeaways: [
        'Start with a basic will and updated beneficiary designations — both can be done this week for free or near-free',
        'Something is always better than nothing — the greatest mistake is doing nothing',
        'Give copies of your documents to your executor, healthcare agent, and trusted family members',
        'Tell your family where your documents are stored — an unfound estate plan protects no one',
        'Build your estate plan in stages — will and beneficiaries now, trust and POA within 30 days',
      ],
      actionStep: 'Print this checklist and complete one item per week for five weeks: Week 1 — create a basic will. Week 2 — update all beneficiary designations. Week 3 — execute a durable financial POA. Week 4 — complete a healthcare POA and living will. Week 5 — research whether a revocable living trust makes sense for your family. Five weeks. Five actions. A protected family.',
    },
  ],
};
