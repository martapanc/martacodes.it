import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import {
  SiGithub,
  SiGoodreads,
  SiInstagram,
  SiLinkedin,
  SiMedium,
  SiSteam,
  SiYoutube,
} from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className='dark:to-dark bg-gradient-to-r from-blue-300 to-sky-100 dark:from-sky-950'>
      <main className='layout flex flex-col items-center py-6'>
        <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
          <FooterLinks />
        </div>

        <div className='mt-4 flex w-full flex-col-reverse items-center md:flex-row md:justify-between'>
          <Copyright />

          <SocialLinks />
        </div>
      </main>
    </footer>
  );
}

function FooterLinks() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, label }) => (
        <UnstyledLink
          key={label}
          className='animated-underline focus-visible:ring-primary-300 rounded-sm text-sm font-medium text-blue-950 focus:outline-none focus-visible:ring dark:text-gray-200'
          href={href}
        >
          {t(label)}
        </UnstyledLink>
      ))}
    </div>
  );
}

function SocialLinks() {
  const emailAddress = 'info@martacodes.it';

  return (
    <div className='mt-8 flex space-x-4 md:mt-2'>
      <div className='flex items-center'>
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
          <socialLink.icon
            size={50}
            className='hover:text-primary-500 dark:hover:text-primary-300 my-auto h-6 w-6 align-middle text-blue-900 transition-colors dark:text-gray-300'
          />
        </UnstyledLink>
      ))}
    </div>
  );
}

function Copyright() {
  const year = new Date().getFullYear();

  return <div className='mt-10 flex md:mt-0'>© {year} Marta Pancaldi</div>;
}

type FooterLink = {
  href: string;
  label: string;
};
const footerLinks: FooterLink[] = [
  {
    href: 'https://martas-links.vercel.app',
    label: 'footerMenu.links',
  },
  {
    href: '/recruiters-info',
    label: 'footerMenu.recruiters',
  },
  {
    href: 'https://github.com/martapanc/martacodes.it',
    label: 'footerMenu.sourceCode',
  },
  {
    href: 'https://martapancaldi.hashnode.dev/',
    label: 'footerMenu.blog',
  },
  {
    href: 'https://www.polywork.com/marta_pancaldi',
    label: 'footerMenu.updates',
  },
  {
    href: '/',
    label: 'footerMenu.analytics',
  },
  {
    href: '/',
    label: 'footerMenu.guestbook',
  },
  {
    href: '/',
    label: 'footerMenu.feedback',
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
    href: 'https://medium.com/@marta.panc',
    icon: SiMedium,
    id: 'Medium',
  },
  {
    href: 'https://www.goodreads.com/topolinamarta',
    icon: SiGoodreads,
    id: 'Goodreads',
  },
  {
    href: 'https://www.youtube.com/channel/UCvQWDSKE8fY7srB8hO1vWNw',
    icon: SiYoutube,
    id: 'Youtube',
  },
  {
    href: 'https://steamcommunity.com/id/martap/',
    icon: SiSteam,
    id: 'Steam',
  },
];

//TODO: extract links
