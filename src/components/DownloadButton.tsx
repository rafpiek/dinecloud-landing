import Image from 'next/image';
import Link from 'next/link';
import appStoreSvg from '@/assets/images/app-store.svg';
import googlePlaySvg from '@/assets/images/google-play.svg';

interface DownloadButtonProps {
  href: string;
  variant: 'app-store' | 'google-play';
  className?: string;
}

export const DownloadButton = ({ href, variant, className = '' }: DownloadButtonProps) => {
  const imgSrc = variant === 'app-store' ? appStoreSvg : googlePlaySvg;
  const alt = variant === 'app-store' ? 'Download on App Store' : 'Get it on Google Play';

  return (
    <Link 
      href={href}
      className={`inline-flex items-center justify-center w-full transition-all duration-300 hover:opacity-90 ${className}`}
    >
      <Image 
        src={imgSrc}
        alt={alt}
        className="w-full h-auto max-w-[240px]"
        priority
      />
    </Link>
  );
}; 