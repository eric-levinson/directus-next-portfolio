import React from 'react'
import CallToAction from './cta';

//export default const

export default function InteriorContent(params) {
    let page = params.data;
    let blocks = page.blocks;
    //console.log(blocks)
    let title = page?.title ? page!.title : 'Page Title';
    let content = page?.content ? page!.content : 'Page Content';


    return (
        <>

            {blocks!.map((block) => {

                switch (block.collection) {
                    case 'block_cta':
                        return (
                            <SectionContainer>
                                <CallToAction data={block.item} />
                            </SectionContainer>
                        )
                    default:
                        return null;
                }

            })}
            <div className='container mx-auto'>
                <div className="grid place-content-center">
                    <h1 className="text-3xl font-bold underline mb-6 mt-6">{title}</h1>
                    <div className="prose prose-lg dark:prose-invert mt-8 mb-8" dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>


        </>
    )
}

function SectionContainer({ children }) {
    return (
        <div className="container mx-auto py-8">
            <div className="grid place-items-center">
                {children}
            </div>
        </div>
    )
}