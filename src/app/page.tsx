import directus from '../pages/api/directus';
import Landing from '../components/landing';

async function getGlobals() {
	const { data } = await directus.items('global').readByQuery();
	return data;
}

export default async function HomePage() {
	const global = await getGlobals();
	return (
		<>
			<Landing data={global}  />
		</>
	);
}