'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai';
import logo from '../../../Laviree/laviree/public/logoNavWhite.png';
import {useMediaQuery} from 'react-responsive';
import { Page } from '../../../Laviree/laviree/sanity/types/Page';
interface NavBarProps {
    pages: Page[];
}
const NavBar:React.FC<NavBarProps > = ({pages}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isXL = useMediaQuery({minWidth: 1200});
    const isLarge = useMediaQuery({minWidth: 992});
    const isMedium = useMediaQuery({minWidth: 768});

    return (
        <div className="bg-black text-white w-full items-center px-12">
            <div className="container">
                <nav className=" flex justify-between items-center px-12 py-2">

                    <div className="px-12 flex items-center">
                        <Link href="/">
                            <Image src={logo} alt="logo" className="w-24"/>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {pages.slice(0, 3).map((page) => (
                            <Link key={page.title} href={`/${page.slug}`}>
                                <span>{page.title}</span>
                            </Link>
                        ))}

                        <div>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <AiOutlineMenu size={24}/>
                            </button>
                        </div>
                        {isOpen && (
                            <div className="dropdown-menu">
                                {pages.slice(isXL ? 3 : isLarge ? 2 : isMedium ? 1 : 0).map((page) => (
                                    <Link key={page.title} href={`/${page.slug}`}>
                                        {page.title}
                                    </Link>
                                ))}
                            </div>
                    )}<style jsx>{`
                      .dropdown-menu {
                        position: absolute;
                        top: 4rem;
                        right: 0rem;
                        width: 23vw;
                        height: 23vw;
                        background-color: rgba(0, 0, 0, 0.8);
                        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
                      }
                    `}</style>
                    </div>
                </nav>
            </div>

        </div>

    );
}
export default NavBar;