// Minimal stroke-icon set, all 24x24, all sharing one factory so stroke
// weight / caps / joins stay consistent across the brochure.

function Icon({ children, size = 22, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.4" />
  </Icon>
);

export const DocIcon = (p) => (
  <Icon {...p}>
    <path d="M6 2h9l5 5v15H6z" />
    <path d="M15 2v5h5M9 12h6M9 16h6" />
  </Icon>
);

export const FenceIcon = (p) => (
  <Icon {...p}>
    <path d="M5 4l1.6 4L5 11M9 4l1.6 4L9 11M13 4l1.6 4L13 11M17 4l1.6 4L17 11" />
    <path d="M3 11h18M3 15h18M3 19h18" />
  </Icon>
);

export const SunIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4.6" />
    <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.2 2.2M17.6 17.6l2.2 2.2M2.5 12h3M18.5 12h3M4.2 19.8l2.2-2.2M17.6 6.4l2.2-2.2" />
  </Icon>
);

export const GateIcon = (p) => (
  <Icon {...p}>
    <path d="M4 21V9l8-5 8 5v12" />
    <path d="M4 21h16M9 21v-7h6v7M7 9h10" />
  </Icon>
);

export const DropIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3s6.5 7.1 6.5 11.6A6.5 6.5 0 0 1 5.5 14.6C5.5 10.1 12 3 12 3z" />
  </Icon>
);

export const RoadIcon = (p) => (
  <Icon {...p}>
    <path d="M8 3 4 21M16 3l4 18M12 3v3M12 9.5v3M12 16v3" />
  </Icon>
);

export const WifiIcon = (p) => (
  <Icon {...p}>
    <path d="M3 8.5a15 15 0 0 1 18 0M6.2 12.2a10.5 10.5 0 0 1 11.6 0M9.6 15.8a5.8 5.8 0 0 1 4.8 0" />
    <circle cx="12" cy="19.3" r="1.1" fill="currentColor" stroke="none" />
  </Icon>
);

export const BusIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="6" width="18" height="11" rx="2" />
    <path d="M3 12h18M7 17v2M17 17v2" />
    <circle cx="7.5" cy="19.3" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="19.3" r="1.2" fill="currentColor" stroke="none" />
  </Icon>
);

export const ShieldIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3l7 3v6c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6l7-3z" />
    <path d="M8.7 12l2.3 2.3 4.3-4.3" />
  </Icon>
);

export const BedIcon = (p) => (
  <Icon {...p}>
    <path d="M3 18v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6M3 18v2M21 18v2M3 13h18" />
    <rect x="5" y="10.5" width="5.5" height="3" rx="1" />
  </Icon>
);

export const BathIcon = (p) => (
  <Icon {...p}>
    <path d="M4 12h16a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1z" />
    <path d="M6 12V6a2 2 0 0 1 3.5-1.3M4 21h16" />
  </Icon>
);

export const KitchenIcon = (p) => (
  <Icon {...p}>
    <path d="M4 3v9a3 3 0 0 0 3 3v6M4 3h3M4 7.5h3M9 3v15M15 3a3 3 0 0 0-3 3v3h6V6a3 3 0 0 0-3-3zM13.5 12v9" />
  </Icon>
);

export const GlobeIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </Icon>
);

export const ChevronIcon = (p) => (
  <Icon {...p}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
);

export const ArrowIcon = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M6.6 3H12c5 0 9 4 9 9s-4 9-9 9H6.6C4.6 21 3 19.4 3 17.4V6.6C3 4.6 4.6 3 6.6 3z" />
    <path d="M15 7l-3 5 3 5" />
    <circle cx="7.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </Icon>
);

export const CheckIcon = (p) => (
  <Icon {...p}>
    <path d="M5 12l5 5 9-9" />
  </Icon>
);

export const StarIcon = (p) => (
  <Icon {...p}>
    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
  </Icon>
);

export const BuildingIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18M9 3v18M15 9v12M6 13h1M6 17h1M11 13h2M11 17h2M17 13h1M17 17h1" />
  </Icon>
);

export const KeyIcon = (p) => (
  <Icon {...p}>
    <circle cx="8" cy="11" r="4.5" />
    <path d="M12 11h9M18 9v4" />
  </Icon>
);
