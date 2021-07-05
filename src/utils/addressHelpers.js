import addresses from '../config/constants/contracts'

export const getTokenAddress = (chainId = 4) => {
  return addresses.token[chainId]
}