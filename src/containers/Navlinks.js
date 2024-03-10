import Link from 'next/link'


function Navlinks() {
  return (
    <>
      <li className="mr-2"><Link href="/pricing">Pricing</Link></li>
      <li className="mr-2"><Link href="/contact-us">Contact Us</Link></li>
    </>
  )
}

export default Navlinks
