import Image from 'next/image'

const icons = [
  { name: 'TypeScript', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/ts-icon_psqmnq.png' },
  { name: 'Next.js', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/next-icon_xjuiw8.png' },
  { name: 'React', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/react-icon_acdadf.png' },
  { name: 'Tailwind CSS', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/tailwind-icon_uhidsh.png' },
  { name: 'Node.js', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363985/rizkeeps.com/icons/node-icon_cdtkmf.png' },
  { name: 'Python', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/python-icon_jxp9vp.png' },
  { name: 'PostgreSQL', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363986/rizkeeps.com/icons/postgreesql-icon_gwhms5.png' },
  { name: 'Docker', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363984/rizkeeps.com/icons/docker-icon_dug4se.png' },
  { name: 'GCP', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363984/rizkeeps.com/icons/gcp-icon_lsrnqr.png' },
  { name: 'Git', url: 'https://res.cloudinary.com/dg4b8sell/image/upload/v1692363984/rizkeeps.com/icons/git-icon_tcljf3.png' },
]

export function TechStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
      {icons.map((icon) => (
        <div key={icon.name} className="group relative flex flex-col items-center">
          <Image
            src={icon.url}
            alt={icon.name}
            width={28}
            height={28}
            className="h-7 w-7 opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          />
          <span className="pointer-events-none absolute -bottom-7 whitespace-nowrap rounded bg-greycard px-2 py-1 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  )
}
