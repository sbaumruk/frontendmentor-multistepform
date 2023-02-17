export const addons: {
    name: string;
    title: string;
    description: string;
    price: { monthly: number; yearly: number };
}[] = [
        {
            name: 'online',
            title: 'Online service',
            description: 'Access to multiplayer games',
            price: {
                monthly: 1,
                yearly: 10
            }
        },
        {
            name: 'storage',
            title: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            price: {
                monthly: 2,
                yearly: 20
            }
        },
        {
            name: 'profile',
            title: 'Customizable profile',
            description: 'Custom theme on your profile',
            price: {
                monthly: 2,
                yearly: 20
            }
        }
    ];

export const plans: {
    name: string;
    price: { monthly: number; yearly: number };
    imgSrc?: string;
    promo?: string;
}[] = [
        {
            name: 'Arcade',
            price: {
                monthly: 9,
                yearly: 90
            },
            imgSrc: '/images/icon-arcade.svg',
            promo: "2 months free"
        },
        {
            name: 'Advanced',
            price: {
                monthly: 12,
                yearly: 120
            },
            imgSrc: '/images/icon-advanced.svg',
            promo: "2 months free"
        },
        {
            name: 'Pro',
            price: {
                monthly: 15,
                yearly: 150
            },
            imgSrc: '/images/icon-pro.svg',
            promo: "2 months free"
        }
    ]