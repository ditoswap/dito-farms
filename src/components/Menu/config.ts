import { MenuEntry } from 'dito-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.ditoswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.ditoswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: '/nft-marketplace',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery (Coming Soon)',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  //   // href: '',
  // },
  // {
  //   label: 'IFO (Coming Soon)',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  //   // href: '',
  // },
  // {
  //   label: 'Referrals (Coming Soon)',
  //   // icon: 'ReferralsIcon',
  //   icon: 'HandshakeIcon',
  //   href: '',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xAAC271161c2a8283DfAAbb1b9696C6EFF031e980',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xAAC271161c2a8283DfAAbb1b9696C6EFF031e980',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/ditoswap/',
      },
      {
        label: 'Docs',
        href: 'https://ditoswap.gitbook.io/dito-swap/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@ditoswap',
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: '',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: '',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: '',
  },
]

export default config
