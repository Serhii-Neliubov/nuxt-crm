export interface IMenuItem {
  name: string,
  icon: string,
  url: string,
}

export const MENU_DATA: IMenuItem[] = [
  {
    icon: 'radix-icons:dashboard',
    name: 'Home',
    url: '/',
  },
  {
    icon: 'gridicons:products',
    name: 'Products',
    url: '/products',
  },
  {
    icon: 'Payments',
    name: 'ph:contactless-payment',
    url: '/payments',
  },
  {
    icon: 'Orders',
    name: 'fluent:receipt-28-regular',
    url: '/orders',
  },
  {
    icon: 'Customers',
    name: 'mingcute:group-line',
    url: '/customers',
  },
  {
    icon: 'Feedback',
    name: 'fluent:person-feedback-48-regular',
    url: '/feedback',
  },
  {
    icon: 'Settings',
    name: 'radix-icons:great',
    url: '/settings',
  },
  {
    icon: 'Help Center',
    name: 'radix-icons:question-mark',
    url: '/help',
  },
]