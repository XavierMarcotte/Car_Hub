import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'
function Footer() {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src="/logo.svg" alt='logo' width={118} height={18} className='object-contain'/>
                <p className='text-base text-gray-700'>
                  Car Hub 2023 <br />
                  Tout droit réservé &copy;
                </p>
            </div>
            <div className='footer__links'>
              {footerLinks.map((link) => (
                <div key={link.title} className='footer__link'>
                  <h3 className='font-bold'>{link.title}</h3>
                  {link.links.map((item) => (
                    <Link key={item.title} href={item.url} className='text-gray-500'>{item.title}</Link>
                  ))}
                </div>
              ))}
            </div>
        </div>
        <div className='flex justify-between items-center flex-wrap mt-10 broder-t border-grey-100 sm:px-16 ox-6 oy-10'>
          <p>@2023 CarHub. Tout droit réservé</p>
          <div className='footer__copyrights-link'>
            <Link href='' className='text-grey-500'>Vie privée</Link>
            <Link href='' className='text-grey-500'>Termes d'utilisations</Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer