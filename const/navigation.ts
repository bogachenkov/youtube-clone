import {
  SvgIconComponent,
  HomeOutlined,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  HistoryOutlined,
  SlideshowOutlined,
  PlaylistPlayOutlined,
  WatchLaterOutlined,
  ThumbUpOutlined,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlined,
  FeedbackOutlined,
  SportsEsportsOutlined,
  StreamOutlined,
  SpaOutlined,
  SchoolOutlined,
  SportsBaseballOutlined
} from '@mui/icons-material';

export type SectionLinkType = {
  href: string;
  label: string;
  Icon: SvgIconComponent
}

export type SidebarSectionType = {
  name?: string;
  links: SectionLinkType[]
}

const MAIN_SECTION:SidebarSectionType = {
  links: [
    {
      href: '/',
      label: 'home',
      Icon: HomeOutlined
    },
    // {
    //   label: 'shorts',
    //   Icon: ''
    // },
    {
      href: '/explore',
      label: 'explore',
      Icon: ExploreOutlined
    },
    {
      href: '/subscriptions',
      label: 'subscriptions',
      Icon: SubscriptionsOutlined
    },
  ]
}

const PERSONAL_SECTION:SidebarSectionType = {
  links: [
    {
      href: '/library',
      label: 'library',
      Icon: VideoLibraryOutlined
    },
    {
      href: '/history',
      label: 'history',
      Icon: HistoryOutlined
    },
    // {
    //   label: 'your videos',
    //   Icon: SlideshowOutlined
    // },
    {
      href: '/playlists',
      label: 'playlists',
      Icon: PlaylistPlayOutlined
    },
    {
      href: '/playlist?list=WL',
      label: 'watch later',
      Icon: WatchLaterOutlined
    },
    {
      href: '/playlist?list=LL',
      label: 'liked videos',
      Icon: ThumbUpOutlined
    }
  ]
}

const MORE_FROM_YOUTUBE_SECTION:SidebarSectionType = {
  name: 'More from YouTube',
  links: [
    {
      href: '/gaming',
      label: 'gaming',
      Icon: SportsEsportsOutlined
    },
    {
      href: '/streams',
      label: 'streams',
      Icon: StreamOutlined
    },
    {
      href: 'fashionbeauty',
      label: 'fashion & beauty',
      Icon: SpaOutlined
    },
    {
      href: '/learning',
      label: 'learning',
      Icon: SchoolOutlined
    },
    {
      href: '/sports',
      label: 'sports',
      Icon: SportsBaseballOutlined
    },
  ]
}

const SUPPORT_SECTION:SidebarSectionType = {
  links: [
    {
      href: '/account',
      label: 'settings',
      Icon: SettingsOutlined
    },
    {
      href: '/reporthistory',
      label: 'report history',
      Icon: FlagOutlined
    },
    {
      href: '/?modal=help',
      label: 'help',
      Icon: HelpOutlined
    },
    {
      href: '/?modal=feedback',
      label: 'send feedback',
      Icon: FeedbackOutlined
    }
  ]
}

const SIDEBAR_SECTIONS = [
  MAIN_SECTION,
  PERSONAL_SECTION,
  MORE_FROM_YOUTUBE_SECTION,
  SUPPORT_SECTION
 ] as const;

export default SIDEBAR_SECTIONS;