const data = {
  nav_items: [
    {
      id: 'designers',
      text: ['By Designers,', 'for Designers'],
    },
    {
      id: 'what_we_provide',
      text: ['What We Provide'],
    },
  ],
  sections: [
    {
      component: {
        name: 'AppPBlock',
        items: [
          'We’re a group of prizefighting designers looking to advance our collective ambitions and are always in search of others to join our team. In the interest of transparency, we want to be clear that while Flyweight does take a fee, designers take home the majority of the profits (a five-figure sum for each project). The money the organization makes goes toward business / resource management, so all we have to do is focus on design.',
        ],
      },
    },
    {
      component: {
        name: 'AppRowGroup',
        rows: [
          {
            head: 'New Business Outreach',
            body: 'We strategically target and market, using the gravitas of our larger collective to bring in new business and keep each individual designer well fed.',
          },
          {
            head: 'Project Facilitation',
            body: 'We keep things in scope and on track. Projects are structured with rigorous client guardrails, strategic kick-off questions, and carefully written prompts to solicit objective feedback. ',
          },
          {
            head: 'Design Budgets',
            body: 'No one wants to pay for things out of pocket. We allocate funds for type and photography, so you can do your best work without costs eating into profit.',
          },
          {
            head: 'Consultative Resources',
            body: 'Sometimes, you just need to chat things through. We provide a direct line of communication to strategists and other designers to pressure test your thinking.',
          },
          {
            head: 'Billing & Payment',
            body: 'It sucks having to chase down clients and project payments. We manage all the billing and pay you directly, so you’re not left playing the role of debt collector.',
          },
        ],
      },
    },
  ],
};

export default data;
