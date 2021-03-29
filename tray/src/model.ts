/** @file Data Model */

/**
 * Enumeration for supported schema types.
 */
export enum SchemaType {
  JsonSchema = 'json-schema',
  Xsd = 'xsd',
}

/**
 * Enumeration for supported storage networks.
 */
export enum Network {
  NodeIpfs = 'node-ipfs',
  PublicIpfs = 'public-ipfs',
}

/**
 * Object representation of a schema DID.
 */
export interface SchemaDid {
  did: string,
  method: string,
  network: Network,
  typeHint?: SchemaType,
  hash:string
}

/**
 * Object representation of all configuration data.
 */
export interface ConfigObject {
  publicIpfsConfig?: PublicIpfsConfig;
  nodeRuntimeConfig?: NodeRuntimeConfig;
}

/**
 * Configuration properties related to public IPFS.
 */
export interface PublicIpfsConfig {
  nodeUrl: string,
  enablePin: boolean
}

/**
 * Configuration properties related to the network'ed Node IPFS.
 */
export interface NodeRuntimeConfig  {
  accountMap: {
    [key: string]: any;
  }
  ipfs: {
    host: string;
    port: string;
    protocol: string;
  };
  web3Provider: string;
  enablePin: boolean;
}
