import React from 'react';
import { DbkButton } from '../../components/DbkButton';
import bridgeImg from '@/ui/assets/ecology/bridge-img.svg';
import dkbNftImg from '@/ui/assets/ecology/dbk-nft.png';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const DbkChainHome = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { t } = useTranslation();
  return (
    <div className="px-[20px] py-[40px] flex flex-col gap-[28px]">
      <div
        className="rounded-[8px] bg-[#ffffff24] p-[24px] relative cursor-pointer"
        style={{ boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.08)' }}
        onClick={() => {
          console.log(`Navigating to: ${url}/bridge`); // Debugging log
          history.push(`${url}/bridge`);
        }}
      >
        <div className="text-[white] font-semibold text-[20px] leading-[24px] mb-[8px]">
          {t('page.ecology.dbk.home.bridge')}
        </div>
        <div className="text-[#ffffff6e] text-[13px] leading-[16px] mb-[28px]">
          {t('page.ecology.dbk.home.bridgePoweredBy')}
        </div>
        <DbkButton className="w-[100px]">
          {t('page.ecology.dbk.home.bridgeBtn')}
        </DbkButton>
        <img
          src={bridgeImg}
          alt=""
          className="absolute bottom-[18px] right-[12px]"
        />
      </div>
      <div
        className="rounded-[8px] bg-[#ffffff24] p-[24px] relative cursor-pointer"
        style={{ boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.08)' }}
        onClick={() => {
          console.log(`Navigating to: ${url}/mintNft`); // Debugging log
          history.push(`${url}/mintNft`);
        }}
      >
        <div className="text-[white] font-semibold text-[20px] leading-[24px] mb-[8px]">
          {t('page.ecology.dbk.home.mintNFT')}
        </div>
        <div className="text-[#ffffff6e] text-[13px] leading-[16px] mb-[28px]">
          {t('page.ecology.dbk.home.mintNFTDesc')}
        </div>
        <DbkButton className="w-[100px]">
          {t('page.ecology.dbk.home.mintNFTBtn')}
        </DbkButton>
        <img
          src={dkbNftImg}
          alt=""
          className="absolute bottom-[12px] right-[12px]"
        />
      </div>
    </div>
  );
};
