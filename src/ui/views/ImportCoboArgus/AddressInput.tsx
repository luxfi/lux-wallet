import { CHAINS_ENUM, CHAINS } from '@luxfi/common';
import { Input } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface Props {
  onChange: (value: string) => void;
  value: string;
  chainEnum: CHAINS_ENUM;
  error: string;
}

export const AddressInput: React.FC<Props> = ({
  onChange,
  value,
  chainEnum,
  error,
}) => {
  const chain = CHAINS[chainEnum];
  const { t } = useTranslation();

  return (
    <div>
      <div
        className={clsx(
          'flex items-start',
          'rounded-[6px] py-16 px-12',
          'bg-l-neutral-card-1',
          {
            'border-lux-neutral-line': !error,
          },
          'focus-within: border border-[#ffffff80]',
          {
            'border-[#ffffff80]': error,
          }
        )}
      >
        <img className="w-20 h-20 mr-8" src={chain.logo} alt={chain.name} />

        <Input.TextArea
          spellCheck={false}
          bordered={false}
          autoFocus
          onChange={(v) => onChange(v.target.value)}
          value={value}
          placeholder={t('page.newAddress.coboSafe.inputSafeModuleAddress')}
          className="p-0 min-h-[22px] text-l-neutral-title-1"
          autoSize={{
            minRows: 1,
            maxRows: 3,
          }}
        />
      </div>
      <div className="mt-12 text-13 text-[#ffffff80]">{error}</div>
    </div>
  );
};
