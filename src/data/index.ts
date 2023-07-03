const data = {
  nav_items: [
    {
      id: 'our_philosophy',
      text: ['Our Philosophy'],
    },
    {
      id: 'the_platform',
      text: ['The Platform'],
    },
    {
      id: 'deliverables',
      text: ['The Deliverables'],
    },
    {
      id: 'code_of_conduct',
      text: ['Code of Conduct'],
    },
    {
      id: 'our_portfolio',
      text: ['Our Portfolio'],
    },
  ],
  sections: [
    {
      wrapperClass: 'lg:flex',
      component: {
        name: 'AppPBlock',
        items: [
          'All it takes is one great designer.',
          'We’ve eliminated the office and the agency overhead, connecting clients directly with the best design talent. This streamlined approach gives us three unfair advantages. 1) We’re not constrained by hiring geography. This opens up the talent pool, so we can be more discerning about who we invite to join our platform. 2) We are able to maintain the highest creative standards, while keeping costs to a minimum. The result is clients get more bang for their buck 3) With fewer mouths to feed, we as designers earn more per project than just about anywhere else.',
        ],
      },
    },
    {
      component: {
        name: 'AppRowGroup',
        rows: [
          {
            head: 'Selective Admissions',
            body: 'This is not an open platform. Designers must apply and go through a multi-step vetting process to prove their abilities. This is a carefully curated roster of creatives.',
          },
          {
            head: 'One-on-One Relationships',
            body: 'We pair companies directly with individual designers to foster close working partnerships, a direct line of communication, and highly efficient work flows.',
          },
          {
            head: 'Flexible Timing',
            body: 'Some of us work at other design studios (this is a second gig), so we ask clients to be accommodating when it comes to timelines and meeting outside of normal working hours.',
          },
          {
            head: 'Detailed Program',
            body: 'We have carefully outlined design deliverables, predetermined check-ins, and sequenced presentations. This allows us to eliminate the project manager and keep the team lean.',
          },
          {
            head: 'Flat-Fee Structure',
            body: 'No need for contractual haggling or back and forth negotiation. We offer simple and straightforward pricing based on a set number of deliverables and rounds of revisions.',
          },
          {
            head: 'Online Interface',
            body: 'We’ve made it easy to connect and collaborate. All communication, meetings, and presentations are all run through a simple email interface and Google Meet.',
          },
        ],
      },
    },
    {
      wrapperClass: 'constrain mx-auto border-2 border-black p-5 lg:p-16',
      component: {
        name: 'AppColGroup',
        cols: [
          {
            title: 'Brand Identity',
            intro:
              'We design and refine your company’s brand identity over three rounds of work, delivering a final presentation that will include the following:',
            items: [
              { head: 'Logo & lock up' },
              { head: 'Color palette' },
              { head: 'Typography' },
              { head: 'Graphic elements of design system' },
              { head: '4-6 branded icons (or illustration style)' },
              { head: 'Initial photo art direction' },
              { head: '8-10 examples of design in action' },
              { head: 'High-level design guidelines' },
              { head: '', body: '' },
              {
                body: 'Reach out to us to learn more about the program or the costs.',
              },
            ],
          },
          {
            title: 'Add-Ons',
            items: [
              {
                head: 'Mechanicals',
                body: "Need to take things to print? Just give us the dieline and the legal essentials and we'll make the product pop (price per SKU).",
              },
              {
                head: 'Pitch deck (15-20 slides)',
                body: 'We’ll give you the sizzle to go with the steak. All we need is the content and we’ll make your Powerpoint look like a million bucks.',
              },
              {
                head: 'Stock photo library (15-20 images)',
                body: 'Don’t have money for a photo shoot yet? No problem. We can source and pull imagery for you to use on web, social media, and more.',
              },
              {
                head: 'Others: company swag, Squarespace templates, social media posts, and more.',
                body: '',
              },
            ],
          },
        ],
      },
    },
    {
      component: {
        name: 'AppNumGroup',
        items: [
          {
            head: 'No hand holding.',
            body: 'Of course you can ask questions, but if you’re someone that requires lots of assistance and personal attention, you’re probably better off at an agency.',
          },
          {
            head: "Respect designers' time.",
            body: 'Our proposition is predicated on simplicity and efficiency to ensure both clients and creatives get the most out of the engagement.',
          },
          {
            head: 'Dial creativity up to 11.',
            body: 'We only work with clients that are open and willing to push creative limits. If you need an Illustrator monkey, or already “know what you want” this is not the place for you.',
          },
          {
            head: 'Quality over quantity.',
            body: 'This is not a scattershot approach. We strategically analyze, consider, and design comprehensive creative concepts to develop your unique brand identity.',
          },
          {
            head: 'No pitching.',
            body: 'We’re not aspiring designers trying to build a portfolio. We are professionals.  We don’t design things for free. If you’re interested in what we can do, buy a ticket and enjoy the show.',
          },
          {
            head: 'Be kind and collaborative.',
            body: 'It seems simple, but sometimes people forget their manners. Plus, you’d be amazed by how much better the work is when everyone is nice to each other.',
          },
        ],
      },
    },
    {
      component: {
        name: 'AppCaptionImage',
        image: {
          src: '/images/lost_and_found.jpg',
          alt: 'Lost and Found',
          width: 1337,
          height: 760,
        },
        caption: {
          title: 'The Lost and Found',
          subtitle: 'A new type of art gallery.',
          description:
            'The Lost and Found is dedicated to helping people discover the amazing art and artists among us. By shedding light on unknown talent, under-appreciated creators, and their untitled works this unique brand is opening up the world of fine art.',
        },
      },
    },
  ],
};

export default data;
