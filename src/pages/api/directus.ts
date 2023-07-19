import { Directus } from '@directus/sdk';
const directusurl = process.env.DIRECTUS_API_URL
const directus = new Directus(directusurl!);
export default directus;
