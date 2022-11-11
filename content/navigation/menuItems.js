export const menuItems = [
    {
        primaryLink: 'Home',
        link: '/',
        subLinks: [
            {
                name: 'tutorial',
                subLinksExist: false,
                link: '/tutorial'
            },
            {
                name: 'contact',
                subLinksExist: false,
                link: '/contact'
            },
            {
                name: 'about',
                subLinksExist: false,
                link: '/about'
            },
            {
                name: 'FAQ',
                subLinksExist: false,
                link: '/faq'
            },
            {
                name: 'version',
                subLinksExist: false,
                link: '/version'
            },
            {
                name: 'health check',
                subLinksExist: false,
                link: '/healthcheck'
            }
        ]
    },
    {
        primaryLink: 'Configuration',
        link: '/Configuration',
        subLinks: [
            {
                name: 'merchants',
                link: 'merchants',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Billing Groups',
                        link: '/billinggroup'
                    },
                    {
                        label: 'Billing Group Chain',
                        link: '/2'
                    },
                    {
                        label: 'Payment Channels',
                        link: '/3'
                    },
                    {
                        label: 'Relationship Managers',
                        link: '/3'
                    },
                    {
                        label: 'Fee Templates',
                        link: '/3'
                    },
                    {
                        label: 'Billing Group Disbursement Hold',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'partners',
                subLinksExist: false,
                link: '/partners'
            },
            {
                name: 'ODFIs',
                link: '/odfis',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Bank Expenses',
                        link: '/1'
                    },
                    {
                        label: 'Expense Batches',
                        link: '/2'
                    },
                    {
                        label: 'Routing Numbers',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'business units',
                link: '/businessunits',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Support Contacts',
                        link: '/1'
                    }
                ]
            },
            {
                name: 'profile',
                link: '/profile',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'API Profiles',
                        link: '/1'
                    },
                    {
                        label: 'Heartland Users',
                        link: '/2'
                    },
                    {
                        label: 'External Users',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'system',
                subLinksExist: false,
                link: '/system'
            }
        ]
    },
     {
        primaryLink: 'Support',
        link: '/Support',
        subLinks: [
            {
                name: 'automation',
                link: '/automation',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Alerts',
                        link: '/1'
                    },
                    {
                        label: 'Subscriptions',
                        link: '/2'
                    },
                    {
                        label: 'Jobs',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'consumers',
                link: '/consumers',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Blacklist',
                        link: '/1'
                    },
                    {
                        label: 'Whitelist',
                        link: '/2'
                    },
                    {
                        label: 'Provisional Whitelist',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'invoices',
                link: '/invoices',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Billing Group',
                        link: '/1'
                    },
                    {
                        label: 'Partner',
                        link: '/2'
                    }
                ]
            },
            {
                name: 'logging',
                link: '/logging',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Failed Api Calls',
                        link: '/1'
                    },
                    {
                        label: 'Logs',
                        link: '/2'
                    },
                    {
                        label: 'Emails',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'ACH files',
                link: '/achfiles',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'ACH Entry Finder',
                        link: '/1'
                    },
                    {
                        label: 'ACH Rejects',
                        link: '/2'
                    }
                ]
            },
            {
                name: 'returns',
                link: '/returns',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Return Files',
                        link: '/1'
                    },
                    {
                        label: 'Return Details',
                        link: '/2'
                    },
                    {
                        label: 'Exceptions',
                        link: '/3'
                    },
                    {
                        label: 'Reinitiations',
                        link: '/3'
                    },
                    {
                        label: 'Notices Of Change',
                        link: '/3'
                    },
                    {
                        label: 'Return Reconciliations',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'bulwark',
                link: '/bulwark',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Risk Rule Configuration',
                        link: '/1'
                    },
                    {
                        label: 'Risk Rule Enforcement',
                        link: '/2'
                    }
                ]
            }
        ]
     },
    {
        primaryLink: 'Terminal',
        link: '/Terminal',
        subLinks: [
            {
                name: 'virtual terminal',
                subLinksExist: false,
                link: '/virtualterminal'
            },
            {
                name: 'history log',
                subLinksExist: false,
                link: '/historylog'
            }
        ]
    },
    {
        primaryLink: 'Sagacity',
        link: '/Sagacity',
        subLinks: [
            {
                name: 'management',
                link: '/management',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Business Units',
                        link: '/1'
                    },
                    {
                        label: 'Merchants',
                        link: '/2'
                    },
                    {
                        label: 'Users',
                        link: '/3'
                    },
                    {
                        label: 'Global',
                        link: '/3'
                    },
                    {
                        label: 'GIACT Invoices',
                        link: '/3'
                    },
                ]
            },
            {
                name: 'history',
                link: '/history',
                subLinksExist: true,
                sublinks: [
                    {
                        label: 'Bank Accounts',
                        link: '/1'
                    },
                    {
                        label: 'Consumers',
                        link: '/2'
                    },
                    {
                        label: 'Verification Requests',
                        link: '/3'
                    },
                    {
                        label: 'Authentication Requests',
                        link: '/3'
                    },
                    {
                        label: 'Statics',
                        link: '/3'
                    },
                    {
                        label: 'Failed API Calls',
                        link: '/3'
                    },
                ]
            }
        ]
    }
]