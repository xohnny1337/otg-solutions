import { cn } from '@/lib/utils';

interface HoneypotEmailProps {
  email: string;
  className?: string;
  honeypotEmail?: string;
}

export function HoneypotEmail({ email, className, honeypotEmail = 'no-reply@example.com' }: HoneypotEmailProps) {
  // Split email into parts to make it harder for bots to detect
  const [username, domain] = email.split('@');

  return (
    <>
      <style>
        {`
          .honeypot {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
            clip: rect(1px, 1px, 1px, 1px);
            white-space: nowrap;
          }
        `}
      </style>
      {/* Honeypot email that bots will likely scrape */}
      <a href={`mailto:${honeypotEmail}`} className="honeypot">
        {honeypotEmail}
      </a>
      {/* Real email for humans */}
      <a href={`mailto:${email}`} className={cn('hover:underline', className)} aria-label="Send oss en e-post">
        {username}
        {'@'}
        {domain}
      </a>
    </>
  );
}
