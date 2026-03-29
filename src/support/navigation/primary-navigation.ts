export interface PrimaryNavigationItem {
  label: string
  to: string
  requiresAuth?: boolean
  guestOnly?: boolean
}

export const primaryNavigation: PrimaryNavigationItem[] = [
  {
    label: 'Overview',
    to: '/'
  },
  {
    label: 'Dashboard',
    to: '/dashboard',
    requiresAuth: true
  },
  {
    label: 'Login',
    to: '/login',
    guestOnly: true
  },
  {
    label: 'Register',
    to: '/register',
    guestOnly: true
  }
]
