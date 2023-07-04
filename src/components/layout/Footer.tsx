import { useTheme } from 'next-themes';
import { IconType } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import {
  SiGithub,
  SiGoodreads,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === 'dark'
          ? 'to-dark bg-gradient-to-r from-sky-950'
          : 'bg-gradient-to-r from-blue-300 to-sky-100'
      }`}
    >
      <main className='layout flex flex-col items-center py-6'>
        <FooterLinks />

        <p className='mt-12 font-medium text-blue-600 dark:text-blue-300'>
          Reach out to me
        </p>

        <SocialLinks />
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, label }) => (
        <UnstyledLink
          key={label}
          className='animated-underline focus-visible:ring-primary-300 rounded-sm text-sm font-medium text-blue-950 focus:outline-none focus-visible:ring dark:text-gray-200'
          href={href}
        >
          {label}
        </UnstyledLink>
      ))}
    </div>
  );
}

function SocialLinks() {
  const emailAddress = 'info@martacodes.it';

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <a
          href={'mailto:' + emailAddress}
          className='focus-visible:ring-primary-300 rounded-sm align-middle focus:outline-none focus-visible:ring'
        >
          <FiMail className='hover:text-primary-500 dark:hover:text-primary-300 h-7 w-7 align-middle text-blue-900 dark:text-gray-300' />
        </a>
      </div>
      {socialLinks.map((socialLink) => (
        <UnstyledLink
          key={socialLink.id}
          className='focus-visible:ring-primary-300 inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring'
          href={socialLink.href}
        >
          <socialLink.icon className='hover:text-primary-500 dark:hover:text-primary-300 my-auto h-6 w-6 align-middle text-blue-900 transition-colors dark:text-gray-300' />
        </UnstyledLink>
      ))}
    </div>
  );
}

type FooterLink = {
  href: string;
  label: string;
};
const footerLinks: FooterLink[] = [
  {
    href: 'https://github.com/martapanc/martacodes.it',
    label: 'Source Code',
  },
  {
    href: 'https://martapancaldi.hashnode.dev/',
    label: 'Blog',
  },
  {
    href: 'https://www.polywork.com/marta_pancaldi',
    label: 'Updates',
  },
  {
    href: '/',
    label: 'Analytics',
  },
  {
    href: '/',
    label: 'Guestbook',
  },
  {
    href: '/',
    label: 'Feedback',
  },
];

type SocialLink = {
  href: string;
  icon: IconType;
  id: string;
};
const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/martapanc',
    icon: SiGithub,
    id: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/martapancaldi',
    icon: SiLinkedin,
    id: 'Linkedin',
  },
  {
    href: 'https://www.instagram.com/pancakemarta',
    icon: SiInstagram,
    id: 'Instagram',
  },
  {
    href: 'https://www.goodreads.com/topolinamarta',
    icon: SiGoodreads,
    id: 'Goodreads',
  },
  {
    href: 'https://twitter.com/_pancakem_',
    icon: SiTwitter,
    id: 'Twitter',
  },
];
