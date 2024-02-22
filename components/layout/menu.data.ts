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
    icon: 'gridicons:product',
    name: 'Products',
    url: '/products',
  },
  {
    icon: 'ph:contactless-payment',
    name: 'Payment',
    url: '/payments',
  },
  {
    icon: 'fluent:receipt-28-regular',
    name: 'Orders',
    url: '/orders',
  },
  {
    icon: 'mingcute:group-line',
    name: 'Customers',
    url: '/customers',
  },
  {
    icon: 'fluent:person-feedback-48-regular',
    name: 'Feedback',
    url: '/feedback',
  },
  {
    icon: 'material-symbols:settings-outline',
    name: 'Settings',
    url: '/settings',
  },
  {
    icon: 'radix-icons:question-mark',
    name: 'Help Center',
    url: '/help',
  },
]