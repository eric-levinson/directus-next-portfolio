import directus from "../pages/api/directus";

const CallToAction = (params) => {
    const cta = params!.data;
    const type = cta!.type;
    const heading = cta.title;
    const content = cta.content;
    const buttons = cta.buttons;
    //does cta.configuration contain string 'centered'?
    const centered = cta!.configuration!.includes('centered');
    const card = cta!.configuration!.includes('card');
    
    //does background image exist?
    const background = cta?.background_image ? {backgroundImage: `url("${directus.url}assets/${cta!.background_image!.filename_disk}?width=1200")`} : {backgroundImage: 'none'};
    const containerClasses = `container mx-auto px-6 ${centered ? 'flex justify-center items-center' : ''}`;
    const bgClasses = `bg-cover bg-center bg-slate-800 py-12 ${card ? 'rounded-lg shadow-lg' : ''}`;
  
    return (
      <div className={bgClasses} style={background}>
        <div className={containerClasses}>
          <h1 className="text-4xl font-bold mb-2 text-white">{heading}</h1>
          <p className="text-xl mb-8 text-white">{content}</p>
          {buttons.map((button) => {
                    return (
                        <a key={button!.label} role="button" href={button.href} className="rounded px-8 py-3 text-lg font-semibold dark:bg-gray-800 dark:text-gray-50">
                            {button!.label}
                        </a>
                    )

                })}
        </div>
      </div>
    );
  }
  

export default CallToAction;