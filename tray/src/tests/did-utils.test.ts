import { validateSchemaDid, parseSchemaDid, stringifySchemaDid } from '../did/did-utils';
import { SchemaDid, Network, SchemaType } from '../model';

test('DID has no "schema" returns false', () => {
  const invalidDid = `did:node-ipfs:json-schema:0xa937ea507c396d8d417be352825c65f5fdf1e6fb60e8368db03f2cccda05567c`;
  const validationResult = validateSchemaDid(invalidDid);
  expect(validationResult).toBe(false);
});


test('correct DID with public ipfs as network returns true', () => {
  const validDid = `did:schema:public-ipfs:json-schema:0xa937ea507c396d8d417be352825c65f5fdf1e6fb60e8368db03f2cccda05567c`;
  const validationResult = validateSchemaDid(validDid);
  expect(validationResult).toBe(true);
});
/** @exports test-did-utils */
