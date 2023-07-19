import directus from '../../pages/api/directus';
import { notFound } from 'next/navigation';
import InteriorContent from '../../components/interiorcontent';
import CallToAction from '../../components/cta';

async function getPage(slug) {
	try {
		//console.log(slug)
		const page = await directus.items('pages').readByQuery({
			filter: {
				slug: { _eq: slug },
			},fields: [
			'*.*',
			"blocks.*",
			"blocks.item.*",
			"blocks.item.background_image.*",
		]
		});
		//console.log(page)
		return page?.data[0];
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
    
	const page = await getPage(params.slug);
	return (
		<>
		<InteriorContent data={page} />
		</>
	)
}