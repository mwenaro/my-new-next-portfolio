import { Button, Container, Logo, Subtitle } from '@/components'
import { Github, Slack, Twitter } from 'lucide-react'
import Link from 'next/link'

const footerLinks:any = [
 
]

export const Footer = () => (
  <footer className='mt-12 border-t border-transparent-white pt-[5.6rem] text-sm'>
    <Container className='flex flex-col justify-between lg:flex-row'>
      <div>
        <div className='flex h-full flex-row justify-between lg:flex-col'>
          <div className='flex items-center text-[#c178f1]'>
            <Logo />
          </div>
          <div className='mt-auto flex space-x-4 text-grey'>
            <Twitter className='w-5 h-5' />
            <Github className='w-5 h-5' />
            <Slack className='w-5 h-5' />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='grid grid-cols-2 md:grid-cols-4 '>
          {footerLinks.map((column:any) => (
            <div
              key={column.title}
              className='mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]'
            >
              <p className='mb-3 font-medium'>{column.title}</p>
              <ul>
                {column.links.map((link:any) => (
                  <li key={link.title} className='[&_a]:last:mb-0'>
                    <Link
                      className='mb-3 block text-grey transition-colors hover:text-off-white'
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </Container>
    <hr className='mt-2 border-t border-transparent-white' />
    <div className='text-center text-grey my-2 md:my-5 text-[10px] font-thin md:text-sm'>
          By Mwero Abdalla
    </div>
  </footer>
)
