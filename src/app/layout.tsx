
import './globals.css'
import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import directus from '../pages/api/directus';


async function getNavigation() {
  const links = await directus.items('navigation').readByQuery({
    fields: ['*.*']
  })
  return links!.data
}

async function getBrand() {
    const brand = await directus.items('brand').readByQuery({
        fields: ['*.*']
    })
    return brand.data
}

async function getFooter() {
    const footer = await directus.items('footer').readByQuery({
        fields: ['*.*']
    })
    return footer.data
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = await getNavigation();
  const brand = await getBrand();
  const footer = await getFooter();
  
  console.log(links)
  return (

    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <div id="screen" className="min-h-screen">
          <Nav links={links} brand={brand} url={directus!.url}/>
          
            {children}
        </div>
          <Footer footer={footer} brand={brand} url={directus!.url}/>
        
      </body>
    </html>

  )
}
