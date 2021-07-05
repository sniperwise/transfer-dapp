import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import { getTokenContract } from '../utils/contractHelpers';
import useWeb3 from './useWeb3';

export const useToken = () => {
  const web3 = useWeb3();
  const { chainId } = useWeb3React();
  return useMemo(() => getTokenContract(web3, chainId || 4), [web3, chainId]);
};
