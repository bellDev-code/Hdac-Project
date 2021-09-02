import { Web3Provider } from '@ethersproject/providers';

const GetLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;

  return library;
};

export default GetLibrary;
