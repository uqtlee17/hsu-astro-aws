import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    {
      text: 'About',
      href: getPermalink('/about'),
      links: [
        { text: 'Our Mission & Values', href: getPermalink('/about#mission') },
        { text: 'Why Partner With HSU', href: getPermalink('/about#capabilities') },
        { text: 'History & Milestones', href: getPermalink('/about#history') },
        { text: 'Executive Leadership', href: getPermalink('/about#leadership') },
        { text: 'Our Team', href: getPermalink('/our-team') },
        { text: 'Partners & Collaborators', href: getPermalink('/about#partners') },
      ],
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        { text: 'All Services Overview', href: getPermalink('/services') },
        { text: 'Laboratory Services', href: getPermalink('/services#pillars') },
        { text: 'Bio-Repository & Storage', href: getPermalink('/services#pillars') },
        { text: 'Research IT & Portals', href: getPermalink('/services#pillars') },
        { text: 'Participant Recruitment', href: getPermalink('/services#pillars') },
        { text: 'Quality & Governance', href: getPermalink('/services/governance') },
      ],
    },
    { text: 'Publications', href: getPermalink('/publications') },
    { text: 'Studies', href: getPermalink('/studies') },
    { text: 'News', href: getBlogPermalink() },
  ],
  actions: [
    { text: 'Get In Touch', href: getPermalink('/contact'), variant: 'primary' as const },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Contact',
      links: [
        { text: 'Email: hsu@imb.uq.edu.au' },
        { text: 'Phone: +61 7 3346 2618' },
        { text: 'Location: QBP Building 80, St Lucia' },
        { text: 'Hours: Mon-Fri, 9am - 5pm' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Submit a Sample', href: getPermalink('/submit-sample') },
        { text: 'Request Supplies', href: getPermalink('/request-supplies') },
        { text: 'HSU Research Portal Login', href: getPermalink('/login') },
        { text: 'OpenSpecimen LIMS Login', href: 'https://uqhsu.openspecimen.org/' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [],
  footNote: `
    © Human Studies Unit · All rights reserved.
  `,
};
