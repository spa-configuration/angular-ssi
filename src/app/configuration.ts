export interface Configuration {
  message: string;
}

declare global {
  interface Window {
    configuration: Configuration;
  }
}

const configuration: Configuration = window.configuration || {
  message: 'Development',
};


export default configuration;
