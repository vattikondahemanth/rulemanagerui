interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },

  {
    title: true,
    name: 'Admin Panel'
  },
    {
      name: 'Menu',
      url: '/atlasmenu',
      icon: 'icon-puzzle',
      children: [
        // {
        //   name: 'Overview',
        //   url: '/atlasmenu/overview',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'By Group',
        //   url: '/atlasmenu/Bygroup',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'By Responsible',
        //   url: '/atlasmenu/Byresponsible',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Phone Number',
        //   url: '/atlasmenu/Phonenumber',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Apidocument',
        //   url: '/atlasmenu/Apidocument',
        //   icon: 'icon-puzzle'
        // },
        // {
        //   name: 'Adminstration',
        //   url: '/atlasmenu',
        //   icon: 'icon-puzzle',
        //   children: [
        //     {
        //         name: 'Department',
        //         url: '/atlasmenu/Departments',
        //         icon: 'icon-puzzle'
        //     },
        //   ]
        // },
        {
          name: 'Rule',
          url: '/atlasmenu/rule',
          icon: 'icon-puzzle'
        },
      ]
      },
     
      
  
];
