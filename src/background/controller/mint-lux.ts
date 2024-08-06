import {
  getMintLuxContractAddress,
  MintRabbyAbi,
} from '@/constant/mint-lux/mint-lux-abi';
import { CHAINS } from '@debank/common';
import { ethers, Contract } from 'ethers';
import { preferenceService } from '../service';
import buildinProvider from '../utils/buildinProvider';

export const initMintLuxContract = async () => {
  const account = await preferenceService.getCurrentAccount();
  if (!account) throw new Error('no current account');
  buildinProvider.currentProvider.currentAccount = account.address;
  buildinProvider.currentProvider.currentAccountType = account.type;
  buildinProvider.currentProvider.currentAccountBrand = account.brandName;
  buildinProvider.currentProvider.chainId = CHAINS['ETH'].network;

  const contractAddress = getMintLuxContractAddress();
  const provider = new ethers.providers.Web3Provider(
    buildinProvider.currentProvider
  );
  const signer = provider.getSigner();
  const contract = new Contract(contractAddress, MintRabbyAbi, signer);

  return contract;
};
