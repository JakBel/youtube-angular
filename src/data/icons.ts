export interface ISmallSidebarIcons {
  Icon: string;
  title: string;
  url: string;
}

export const smallIcons: ISmallSidebarIcons[] = [
  {
    Icon: 'home',
    title: 'Home',
    url: '/',
  },
  {
    Icon: 'repeat',
    title: 'Shorts',
    url: '/shorts',
  },
  {
    Icon: 'subscriptions',
    title: 'Subscriptions',
    url: '/subscriptions',
  },
  {
    Icon: 'video_library',
    title: 'Library',
    url: '/library',
  },
];

export interface ILargeSidebarIcons {
  Icon: string;
  title: string;
  url: string;
  isActive?: boolean;
}

// Main
export const largeIconsMain: ILargeSidebarIcons[] = [
  {
    Icon: 'home',
    title: 'Home',
    url: '/',
    isActive: true,
  },
  {
    Icon: 'repeat',
    title: 'Shorts',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'subscriptions',
    title: 'Subscriptions',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'radio',
    title: 'AngularTube Music',
    url: '/',
    isActive: false,
  },
];

// User
export const largeIconsUser: ILargeSidebarIcons[] = [
  {
    Icon: 'account_circle',
    title: 'Your channel',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'history',
    title: 'History',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'play_circle_outline',
    title: 'Your videos',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'av_timer',
    title: 'Watch later',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'download',
    title: 'Downloaded',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'sentiment_very_satisfied',
    title: 'Liked videos',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'playlist_play',
    title: 'Angular',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'playlist_play',
    title: 'Academind',
    url: '/',
    isActive: false,
  },
  {
    Icon: 'playlist_play',
    title: 'Fireship',
    url: '/',
    isActive: false,
  },
];

// Subscriptions
export const largeIconsSubs: ILargeSidebarIcons[] = [
  {
    Icon: 'https://yt3.ggpht.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Angular',
    url: '/@Angular',
    isActive: false,
  },
  {
    Icon: 'https://yt3.ggpht.com/z8m8Nc31z3PdVqbMPzS_MEApQKgXjP6faDEto0lIPXy9S50QSSMtCYHZ5V-opH73q9BAjxpb_g=s68-c-k-c0x00ffffff-no-rj',
    title: 'Academind',
    url: '/@Academind',
    isActive: false,
  },
  {
    Icon: 'https://yt3.ggpht.com/ytc/AIf8zZSxHCCmcQTOyQPN3-WDSOgVrz5rIcd-WoU7XHKfkw=s68-c-k-c0x00ffffff-no-rj',
    title: 'Joshua Morony',
    url: '/@JoshuaMorony',
    isActive: false,
  },
  {
    Icon: 'https://yt3.ggpht.com/ytc/AIf8zZTUVa5AeFd3m5-4fdY2hEaKof3Byp8VruZ0f0FNEA=s68-c-k-c0x00ffffff-no-rj',
    title: 'Fireship',
    url: '/@Fireship',
    isActive: false,
  },
  {
    Icon: 'https://yt3.ggpht.com/vkuccQniLC4wYqYnMjHp7fQLf3aKKPmagPOSoFYr4kLCp2J822-ikXMNMI4afoT67R-nTLzf0Os=s68-c-k-c0x00ffffff-no-rj',
    title: 'Awesome',
    url: '/@Awesome',
    isActive: false,
  },
  {
    Icon: 'https://yt3.ggpht.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s68-c-k-c0x00ffffff-no-rj',
    title: 'Theo - t3.gg',
    url: '/@Theo-t3.gg',
    isActive: false,
  },
];
