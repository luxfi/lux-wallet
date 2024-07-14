import { t } from 'i18next';
import { CHAINS_LIST } from '@debank-lux/common';
import { getChainList } from './chain';

export const GET_WALLETCONNECT_CONFIG = () => {
  return {
    // 1h
    maxDuration: 3600000,
    clientMeta: {
      description: t('global.appDescription'),
      url: 'https://lux.link',
      icons: [
        'https://static-assets.lux.link/files/122da969-da58-42e9-ab39-0a8dd38d94b8.png',
      ],
      name: 'Lux',
    },
    projectId: 'ed21a1293590bdc995404dff7e033f04',
    v2Whitelist: [
      'AMBER',
      'Zerion',
      'Bitget',
      'TP',
      'WALLETCONNECT',
      'WalletConnect',
      'FIREBLOCKS',
      'MPCVault',
      'MetaMask',
      'Rainbow',
      'imToken',
      'MATHWALLET',
      'TRUSTWALLET',
      'Utila',
      'IMTOKEN',
    ],
  };
};

export const allChainIds = getChainList('mainnet').map((item) => item.id);
