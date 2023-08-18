'use server'
import Image from 'next/image'

export default async function Home() {
  const icons = [{
    name: 'typescript',
    url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/ts-icon_psqmnq.png'
    },
    {
      name: 'tailwindcss',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/tailwind-icon_uhidsh.png'
    },
    {
      name: 'html',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/html-icon_aoid5w.png'
    },
    {
      name: 'mysql',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/mysql-icon_mgi3b5.png'
    },
    {
      name: 'reactJS',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/react-icon_acdadf.png'
    },
    {
      name: 'postgreesql',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/postgreesql-icon_gwhms5.png'
    },
    {
      name: 'python',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/python-icon_jxp9vp.png'
    },
    {
      name: 'nodeJS',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/node-icon_cdtkmf.png'
    },
    {
      name: 'nextJS',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/next-icon_xjuiw8.png'
    },
    {
      name: 'javascript',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/js-icon_srcsaf.png'
    },
    {
      name: 'flask',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363984/rizkeeps.com/icons/flask-icon_cy83ay.png'
    },
    {
      name: 'css',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/css-icon_slvryr.png'
    },
    {
      name: 'GCP',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363984/rizkeeps.com/icons/gcp-icon_lsrnqr.png'
    },
    {
      name: 'git',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363984/rizkeeps.com/icons/git-icon_tcljf3.png'
    },
    {
      name: 'docker',
      url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363984/rizkeeps.com/icons/docker-icon_dug4se.png'
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center min-h-[90vh] gap-4'>
      <h1 className='text-white text-2xl sm:text-4xl md:text-6xl font-extrabold text-center'>RIZKEEPS</h1>
      <p className='text-center w-[80%] sm:w-[60%] text-sm sm:text-2xl md:text-3xl font-thin text-greytext'>I Love the process of creating a solution, specifically with digital product. Mainly, I do it by code as a software engineer, and other times I analyze it and do it with design.</p>

      <p className='font-bold text-yellow text-sm sm:text-lg opacity-60 py-6'>Tech, Tools, Frameworks</p>
      <div className="flex flex-wrap w-[50%] opacity-60 gap-6 justify-center">
        {
          icons.map((icon, index) => (
            <img className='justify-center w-[20px] sm:w-max' src={icon.url}/>
          ))
        }
      </div>
    </div>
  )
}
