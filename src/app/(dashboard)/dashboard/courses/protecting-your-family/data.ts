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
  id: 'protecting-your-family',
  title: 'Protecting Your Family',
  description: 'Power of attorney, guardianship, and family protection planning. Make sure your family is covered if something happens to you — not just financially, but legally and medically.',
  icon: '🏠',
  totalLessons: 4,
  totalDuration: '30 min',
  level: 'Beginner',
  lessons: [
    {
      id: 1,
      slug: 'healthcare-proxy-medical-decisions',
      title: 'Healthcare Proxy & Medical Decisions',
      duration: '7 min',
      videoId: null,
      content: [
        '"In 30 years of law enforcement, I responded to medical emergencies where families were powerless — not because they did not care, but because they had no legal authority to speak for their loved one. A healthcare proxy is the document that changes that." — Anthony Washington',
        '**What is a Healthcare Proxy?** A healthcare proxy — also called a healthcare power of attorney or medical power of attorney — is a legal document that designates someone you trust to make medical decisions on your behalf if you become unable to make them yourself. This person is called your healthcare agent.',
        '**Why you need one.** If you are involved in a serious accident, suffer a stroke, fall into a coma, or become mentally incapacitated, medical providers need someone who can legally authorize treatment. Without a healthcare proxy, hospitals may be unable to share information with your family — even your spouse, in some situations.',
        '**What decisions can your healthcare proxy make?** Your agent can consent to or refuse medical treatment, authorize surgery, make end-of-life care decisions, access your medical records, and communicate with your medical team. You can also include a living will recording your wishes about life support and resuscitation.',
        '**Who should you choose?** Choose someone who knows you well, respects your values, and can make difficult decisions under pressure. Have an honest conversation with them before naming them. This does not have to be your spouse or oldest child — choose the person best equipped to honor your wishes.',
        '**How to create one in DC, Maryland, and Virginia.** Each state has its own free form. In DC it is called a Healthcare Power of Attorney. In Maryland, an Advance Directive. In Virginia, an Advance Medical Directive. All are available from your state health department website and can be completed without an attorney — they must simply be signed in front of witnesses.',
      ],
      keyTakeaways: [
        'A healthcare proxy designates someone to make medical decisions for you if you cannot make them yourself',
        'Without one, hospitals may refuse to involve your family in your care',
        'Your healthcare agent can be anyone you trust — not necessarily a spouse or family member',
        'A living will records your specific wishes about life support and end-of-life care',
        'DC, Maryland, and Virginia all have free forms — no attorney required',
      ],
      actionStep: 'Download the healthcare proxy form for your state today: DC (doh.dc.gov), Maryland (health.maryland.gov), Virginia (vdh.virginia.gov). Name your agent, sign it in front of two witnesses, and give a copy to your doctor and your healthcare agent.',
    },
    {
      id: 2,
      slug: 'guardianship-for-your-children',
      title: 'Guardianship for Your Children',
      duration: '8 min',
      videoId: null,
      content: [
        '"The hardest calls I ever made were to families with young children and no guardian named anywhere. A judge has to decide quickly where those children go. Do not leave that decision to a courtroom." — Anthony Washington',
        '**What is guardianship?** Guardianship is the legal authority to care for a minor child. If both parents die or become incapacitated, a court must appoint a guardian — the person who will raise the child, make educational decisions, and manage their daily life. Without a named guardian in your will, a judge makes this decision without knowing your family or your wishes.',
        '**How to name a guardian.** The most legally recognized way is in your Last Will and Testament. Name a primary guardian and a contingent (backup) guardian in case your first choice cannot serve. Courts will typically honor your named guardian unless there is a compelling reason not to.',
        '**Choosing the right guardian.** Consider: Do they share your values and parenting philosophy? Do they have a stable home environment? Are they willing and able to take on this responsibility? Are they in good health? Are they financially stable? Choose based on fit — not just family obligation.',
        '**Always talk to your chosen guardian first.** Never assume someone will be willing to serve. Have a direct conversation — explain your wishes, your children\'s needs, and what you hope for their upbringing. A guardian who is surprised may be unprepared to provide the stability your child needs.',
        '**Guardianship vs. financial management.** You may want different people serving as personal guardian and as manager of your child\'s inherited assets. A loving family member may be the best caregiver, while a financially savvy person manages the money. You can name separate people for each role.',
        '**What happens without a named guardian.** The court holds a hearing, considers family members who come forward, and may place your children in temporary foster care during proceedings. The process can take months and cost thousands in legal fees — and the outcome may not reflect your wishes.',
      ],
      keyTakeaways: [
        'Without a named guardian in your will, a judge decides who raises your children',
        'Name a primary and backup guardian in your Last Will and Testament',
        'Choose based on values, stability, and willingness — not just family obligation',
        'Always have the conversation with your chosen guardian before naming them',
        'You can name separate people to raise your children and manage their inherited money',
      ],
      actionStep: 'Decide today who would raise your children if something happened to you. Write their name down. Have the conversation with them this week. When you create or update your will, include them as your named guardian. This one act may be the most important thing you do for your children this year.',
    },
    {
      id: 3,
      slug: 'financial-power-of-attorney',
      title: 'Financial Power of Attorney',
      duration: '7 min',
      videoId: null,
      content: [
        '"People think a financial power of attorney is just paperwork. I watched a family lose their home while their father was hospitalized — no one had legal authority to make mortgage payments on his behalf. That is what a financial POA prevents." — Anthony Washington',
        '**What is a Financial Power of Attorney?** A financial POA is a legal document that grants someone — your agent — the authority to manage your financial affairs on your behalf. This includes paying bills, managing bank accounts, filing taxes, managing real estate, and handling investments.',
        '**Always choose a DURABLE POA.** A durable power of attorney remains in effect even if you become mentally incapacitated — which is when you need it most. A non-durable POA terminates at incapacity and is essentially useless in the situations that matter most. Always specify durable in the document.',
        '**Immediate vs. Springing POA.** An immediate POA grants authority as soon as you sign it. A springing POA only activates when triggered — typically a doctor certifying incapacity. Immediate POAs are faster and simpler. Springing POAs provide extra protection but may cause delays in emergencies.',
        '**What your agent can do.** Depending on how the document is written, your agent may access bank accounts, pay your mortgage and bills, file taxes, manage investments, buy or sell real estate, and apply for government benefits. You can limit or expand these powers based on your needs and trust level.',
        '**A common misconception.** Being married does not give your spouse automatic authority over all your financial affairs. A spouse without a financial POA may be unable to access individual accounts, manage solely-owned property, or conduct financial transactions in your name. The POA is the document that provides this authority clearly and legally.',
        '**Choosing your financial agent.** This person will have legal access to your finances — choose someone with absolute integrity, financial responsibility, and the ability to make difficult decisions. This does not need to be your spouse. Many people choose a financially savvy sibling, adult child, or trusted friend.',
      ],
      keyTakeaways: [
        'A financial POA grants someone legal authority to manage your finances if you are incapacitated',
        'Always choose a DURABLE POA — it stays valid even during mental incapacity',
        'Being married does NOT automatically grant your spouse full financial authority',
        'Your agent must be someone with absolute integrity — they will have access to your finances',
        'You can limit the powers granted — a POA does not have to be all-or-nothing',
      ],
      actionStep: 'Create a durable financial power of attorney this month through LegalZoom, an estate attorney, or your state bar referral service. Name your agent, have the conversation with them about the responsibility, and store the document somewhere accessible. Give a copy to your bank.',
    },
    {
      id: 4,
      slug: 'complete-family-protection-plan',
      title: 'Your Complete Family Protection Plan',
      duration: '8 min',
      videoId: null,
      content: [
        '"Protection is not one document. It is a system. I spent 30 years building systems that kept people safe. Your family deserves the same approach." — Anthony Washington',
        '**The Four Pillars of Family Protection.** A complete plan rests on four documents: a Last Will and Testament (directs assets, names guardians), a Durable Financial Power of Attorney (manages finances if incapacitated), a Healthcare Proxy (directs medical decisions), and a Living Will (records end-of-life wishes). Together these four documents cover every major scenario your family might face.',
        '**The Family Protection Checklist.** Work through each: Do you have a current will naming guardians for minor children? Have you designated beneficiaries on all insurance policies, retirement accounts, and bank accounts? Do you have a durable financial POA naming a trusted agent? Have you created a healthcare proxy? Have you documented your end-of-life wishes in a living will? Does your family know where to find all of these documents?',
        '**Where to store your documents.** Your family cannot use documents they cannot find. Keep originals in a fireproof safe at home or a bank safe deposit box. Give copies to each named agent. Create a Family Emergency Binder with document copies, account numbers, insurance policy numbers, and contacts for your attorney, financial advisor, and doctor. Tell at least two trusted people where the binder is kept.',
        '**Review and update regularly.** Your plan needs periodic review. Revisit after any major life event: marriage or divorce, birth of a child, death of a named agent or beneficiary, significant change in assets, or relocation to a new state. Estate laws vary by state and a document created in one state may need updating when you move.',
        '**The cost of doing nothing.** The average probate proceeding in DC costs 3 to 8 percent of the estate value and takes 9 to 18 months. A guardianship dispute can exceed $10,000 in legal fees. A complete basic estate plan — will, POA, healthcare proxy — can be created for $500 to $2,000 with an attorney, or $200 to $500 using reputable online services. One document done is infinitely better than a perfect plan never started.',
      ],
      keyTakeaways: [
        'A complete family protection plan requires four documents: will, financial POA, healthcare proxy, and living will',
        'Store originals in a fireproof safe and give copies to each named agent',
        'Create a Family Emergency Binder so your family can find everything quickly',
        'Review and update your plan after every major life event',
        'Start with your most urgent need — one document done is better than a perfect plan never started',
      ],
      actionStep: 'Create your Family Emergency Binder this week. Collect what you already have: insurance policies, account numbers, and key contacts. Then schedule time in the next 30 days to complete any missing documents. Your family is counting on you.',
    },
  ],
};
