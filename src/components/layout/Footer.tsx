import IconMail from '~icons/feather/mail';
import IconGithub from '~icons/simple-icons/github';
import IconGoodreads from '~icons/simple-icons/goodreads';
import IconInstagram from '~icons/simple-icons/instagram';
import IconLinkedin from '~icons/simple-icons/linkedin';
import IconMedium from '~icons/simple-icons/medium';
import IconSteam from '~icons/simple-icons/steam';
import IconThreads from '~icons/simple-icons/threads';
import IconYoutube from '~icons/simple-icons/youtube';

import UnstyledLink from '@/components/atoms/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className='dark:to-dark bg-linear-to-r from-blue-100 to-sky-100 dark:from-sky-950'>
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
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, label, name }) => (
        <UnstyledLink
          key={name}
          className='animated-underline focus-visible:ring-primary-300 rounded-sm text-sm font-medium text-blue-950 focus:outline-none focus-visible:ring dark:text-gray-200'
          href={href}
          aria-label={name}
        >
          {label}
        </UnstyledLink>
      ))}
    </div>
  );
}

function SocialLinks() {
  const emailAddress = 'marta_panc@me.com';

  return (
    <div className='mt-8 flex space-x-4 md:mt-2'>
      <div className='flex items-center'>
        <a
          href={'mailto:' + emailAddress}
          className='focus-visible:ring-primary-300 rounded-sm align-middle focus:outline-none focus-visible:ring'
        >
          <IconMail
            className='hover:text-primary-500 dark:hover:text-primary-300 h-7 w-7 align-middle text-blue-900 dark:text-gray-300'
            aria-label='Send an Email'
          />
        </a>
      </div>
      {socialLinks.map(({ href, icon: Icon, id }) => (
        <UnstyledLink
          key={id}
          className='focus-visible:ring-primary-300 inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring'
          href={href}
          aria-label={id}
        >
          <Icon
            aria-label={id}
            className='hover:text-primary-500 dark:hover:text-primary-300 my-auto h-6 w-6 align-middle text-blue-900 transition-colors dark:text-gray-300'
          />
        </UnstyledLink>
      ))}
    </div>
  );
}

function Copyright() {
  const year = new Date().getFullYear();

  return <div className='mt-10 flex md:mt-0'>© {year} ~ Marta Pancaldi</div>;
}

type FooterLink = {
  href: string;
  label: string;
  name: string;
};
const footerLinks: FooterLink[] = [
  {
    href: 'https://links.martacodes.it/',
    label: 'Links',
    name: "Marta's Links",
  },
  {
    href: 'https://github.com/martapanc/martacodes.it',
    label: 'Source Code',
    name: 'Sourcecode',
  },
  {
    href: 'https://things.martacodes.it/blog',
    label: 'Blog',
    name: 'Blog',
  },
  {
    href: 'https://things.martacodes.it/updates',
    label: 'Updates',
    name: 'Updates',
  },
  {
    href: '/contacts',
    label: 'Feedback',
    name: 'Contacts',
  },
];

type SocialLink = {
  href: string;
  icon: React.ComponentType<{ className?: string; 'aria-label'?: string }>;
  id: string;
};
const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/martapanc',
    icon: IconGithub,
    id: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/martapancaldi',
    icon: IconLinkedin,
    id: 'Linkedin',
  },
  {
    href: 'https://www.instagram.com/pancakemarta',
    icon: IconInstagram,
    id: 'Instagram',
  },
  {
    href: 'https://www.threads.net/@pancakemarta',
    icon: IconThreads,
    id: 'Threads',
  },
  {
    href: 'https://medium.com/@marta.panc',
    icon: IconMedium,
    id: 'Medium',
  },
  {
    href: 'https://www.goodreads.com/topolinamarta',
    icon: IconGoodreads,
    id: 'Goodreads',
  },
  {
    href: 'https://youtube.com/@pancakemarta',
    icon: IconYoutube,
    id: 'Youtube',
  },
  {
    href: 'https://steamcommunity.com/id/martap/',
    icon: IconSteam,
    id: 'Steam',
  },
];

//TODO: extract links
