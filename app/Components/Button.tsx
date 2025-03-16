// components/Button.tsx

"use client";

import React from 'react';
import Link from 'next/link';

// Define the possible variants for the button
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'link';

interface ButtonProps {
  /**
   * The text to display inside the button.
   */
  text: string;

  /**
   * The URL to navigate to when the button is clicked.
   */
  href: string;

  /**
   * The variant/style of the button.
   * Defaults to 'primary'.
   */
  variant?: ButtonVariant;

  /**
   * The target attribute for the link.
   * Useful for opening links in new tabs.
   * Defaults to '_self'.
   */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /**
   * Additional CSS classes for customization.
   */
  className?: string;

  /**
   * Optional ARIA label for accessibility.
   */
  ariaLabel?: string;
}

/**
 * A reusable button component that navigates to other pages.
 * Utilizes Next.js's Link component for client-side navigation.
 */
const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = 'primary',
  target = '_self',
  className = '',
  ariaLabel,
}) => {
  // Base styles common to all buttons
  const baseStyles =
    'px-4 text-center rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Define styles based on the variant prop
  const variantStyles = {
    primary: 'border border-secondary rounded-full px-6 py-3 text-white hover:bg-white hover:text-black transition',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline:
      'border border-secondary text-white hover:bg-white hover:text-black focus:ring-secondary',
    link: 'text-blue-500 hover:underline focus:ring-blue-500',
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        target={target}
        aria-label={ariaLabel || text}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
