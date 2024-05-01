import React from 'react';
import Link from 'next/link';

// Here's a challenge for you: see if you can get the Home link to stick to 
// the left side of the screen and the other links to stick to the right side!

const NavBar = () => {
    return (
        <nav className='marginTop1 flex justifyCenter gap3'>
            {/* Use <Link> tags to link to pages on your own site */}
            {/* Use <a> tags to link to pages elsewhere on the web */}
            <Link href="/">Home</Link>
            <Link href="/music">Music</Link>
            <Link href="/bio">Bio</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/reference">Next.js</Link>
        </nav>);
}

export default NavBar;
