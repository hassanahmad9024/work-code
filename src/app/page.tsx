import React from "react"

const page = () => {
 return(
      <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/profile.jpg" alt="" width="384" height="512"></img>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Hello!
           I am Hassan Ahmad From Taranda Saway Khan. I am excited to learn about secrets of Cybersecurity.I have also other skills but a proper skill of Cyber Security is one of my dream. I am proud of myself to be a part of this institute. I am thankful to the institute for providing us great knowlege of Cyber Security ”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Hassan Ahmad
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Social Media Marketing 
          </div>
        </figcaption>
      </div>
    </figure></div>
  )
}

export default page
