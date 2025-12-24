// File: src/components/PillNav.jsx
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Note: You must install GSAP: npm install gsap or yarn add gsap

const PillNav = ({
    // logo, // Removed logo prop
    // logoAlt = 'Logo', // Removed logoAlt prop
    items, // Array of { label, href }
    activeHref,
    className = '',
    ease = 'power3.easeOut',
    baseColor = '#fff',
    pillColor = '#060010',
    hoveredPillTextColor = '#060010',
    pillTextColor,
    initialLoadAnimation = true
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const circleRefs = useRef([]);
    const tlRefs = useRef([]);
    const activeTweenRefs = useRef([]);
    // const logoImgRef = useRef(null); // Removed logoImgRef
    // const logoTweenRef = useRef(null); // Removed logoTweenRef
    const hamburgerRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const navItemsRef = useRef(null);
    // const logoRef = useRef(null); // Removed logoRef

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach(circle => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector('.pill-label');
                const white = pill.querySelector('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                const index = circleRefs.current.indexOf(circle);
                if (index === -1) return;

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.3, ease, overwrite: 'auto' }, 0); // Reduced duration for better feel

                if (label) {
                    tl.to(label, { y: -(h + 8), duration: 0.3, ease, overwrite: 'auto' }, 0); // Reduced duration
                }

                if (white) {
                    gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 0.3, ease, overwrite: 'auto' }, 0); // Reduced duration
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        // Ensure GSAP settings for mobile menu on mount
        const menu = mobileMenuRef.current;
        if (menu) {
            gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
        }

        if (initialLoadAnimation) {
            // const logo = logoRef.current; // Removed logo animation
            const navItems = navItemsRef.current;

            // if (logo) { // Removed logo animation
            //     gsap.set(logo, { scale: 0 });
            //     gsap.to(logo, {
            //         scale: 1,
            //         duration: 0.6,
            //         ease
            //     });
            // }

            if (navItems) {
                gsap.set(navItems, { width: 0, overflow: 'hidden' });
                gsap.to(navItems, {
                    width: 'auto',
                    duration: 0.6,
                    ease
                });
            }
        }

        return () => window.removeEventListener('resize', onResize);
    }, [items, ease, initialLoadAnimation]); // Removed unused dependencies

    const handleEnter = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLeave = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    // const handleLogoEnter = () => { // Removed logo hover handler
    //     const img = logoImgRef.current;
    //     if (!img) return;
    //     logoTweenRef.current?.kill();
    //     gsap.set(img, { rotate: 0 });
    //     logoTweenRef.current = gsap.to(img, {
    //         rotate: 360,
    //         duration: 0.2,
    //         ease,
    //         overwrite: 'auto'
    //     });
    // };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;

        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
            } else {
                gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
            }
        }

        if (menu) {
            if (newState) {
                gsap.set(menu, { visibility: 'visible' });
                gsap.fromTo(
                    menu,
                    { opacity: 0, y: 10, scaleY: 1 },
                    {
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        duration: 0.3,
                        ease,
                        transformOrigin: 'top center'
                    }
                );
            } else {
                gsap.to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: () => {
                        gsap.set(menu, { visibility: 'hidden' });
                    }
                });
            }
        }
    };

    // Simplified link handler to use standard <a> tags
    const handleLinkClick = (href) => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor,
        ['--nav-h']: '42px',
        ['--logo']: '36px',
        ['--pill-pad-x']: '18px',
        ['--pill-gap']: '3px'
    };
    
    // Custom style for the logo background - not needed in PillNav anymore
    // const logoBgStyle = {
    //     background: 'white',
    //     border: '1px solid #e0e0e0',
    //     padding: '0px'
    // };

    // Use your logo color for the pill background to match the brand
    const brandColor = 'black'; 
    cssVars['--base'] = 'white'; 
    cssVars['--pill-bg'] = brandColor; // The color of the pill hover effect (now black)
    cssVars['--hover-text'] = 'white'; // Text color on hover (white for contrast)
    cssVars['--pill-text'] = 'black'; // Text color normally

    return (
        <div className={`w-full absolute top-4 right-0 flex justify-end z-[1000] ${className}`}>
            <nav
                // *** CHANGE: Removed justify-between, only justify-end is needed for pills ***
                className="w-full md:w-max flex items-center justify-end box-border px-4 md:px-16 lg:px-24 xl:px-32 py-2 md:py-3"
                aria-label="Primary"
                style={cssVars}
            >
                {/* *** REMOVED: Logo Section moved to HeroSection *** */}
                {/* <a
                    href={items?.[0]?.href || '#'}
                    aria-label="Home"
                    onMouseEnter={handleLogoEnter}
                    ref={logoRef}
                    className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden transition-all duration-300 md:absolute md:left-4 md:top-0 lg:left-16 xl:left-32"
                    style={{
                        width: 'var(--nav-h)',
                        height: 'var(--nav-h)',
                        ...logoBgStyle
                    }}
                >
                    <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-contain block" />
                </a> */}

                {/* Desktop Menu Pills */}
                <div
                    ref={navItemsRef}
                    className="relative items-center rounded-full hidden md:flex ml-2"
                    style={{
                        height: 'var(--nav-h)',
                        background: 'white', // Pill container background
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                >
                    <ul
                        role="menubar"
                        className="list-none flex items-stretch m-0 p-[3px] h-full"
                        style={{ gap: 'var(--pill-gap)' }}
                    >
                        {/* We map over all items now, as the logo is handled separately as the first item */}
                        {items.map((item, i) => { 
                            const isActive = activeHref === item.href;

                            const pillStyle = {
                                background: 'white',
                                color: 'var(--pill-text)',
                                paddingLeft: 'var(--pill-pad-x)',
                                paddingRight: 'var(--pill-pad-x)'
                            };

                            const PillContent = (
                                <>
                                    <span
                                        className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                                        style={{
                                            background: 'var(--pill-bg)', // The active/hover color (now black)
                                            willChange: 'transform'
                                        }}
                                        aria-hidden="true"
                                        ref={el => {
                                            circleRefs.current[i] = el;
                                        }}
                                    />
                                    <span className="label-stack relative inline-block leading-[1] z-[2]">
                                        <span
                                            className="pill-label relative z-[2] inline-block leading-[1]"
                                            style={{ willChange: 'transform' }}
                                        >
                                            {item.label}
                                        </span>
                                        <span
                                            className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                                            style={{
                                                color: 'var(--hover-text)', // White
                                                willChange: 'transform, opacity'
                                            }}
                                            aria-hidden="true"
                                        >
                                            {item.label}
                                        </span>
                                    </span>
                                    {isActive && (
                                        <span
                                            className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                                            style={{ background: 'var(--pill-bg)' }} // Active color
                                            aria-hidden="true"
                                        />
                                    )}
                                </>
                            );

                            const basePillClasses =
                                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';

                            return (
                                <li key={item.href} role="none" className="flex h-full">
                                    <a
                                        role="menuitem"
                                        href={item.href}
                                        className={basePillClasses}
                                        style={pillStyle}
                                        aria-label={item.ariaLabel || item.label}
                                        onMouseEnter={() => handleEnter(i)}
                                        onMouseLeave={() => handleLeave(i)}
                                    >
                                        {PillContent}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    ref={hamburgerRef}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                    className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
                    style={{
                        width: 'var(--nav-h)',
                        height: 'var(--nav-h)',
                        background: 'black'
                    }}
                >
                    <span
                        className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{ background: 'white' }}
                    />
                    <span
                        className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{ background: 'white' }}
                    />
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div
                ref={mobileMenuRef}
                className="md:hidden absolute top-[60px] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top"
                style={{
                    ...cssVars,
                    background: 'white'
                }}
            >
                <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
                    {items.map(item => {
                        const defaultStyle = {
                            background: '#f0f0f0',
                            color: 'black'
                        };
                        const hoverIn = e => {
                            e.currentTarget.style.background = brandColor;
                            e.currentTarget.style.color = 'white';
                        };
                        const hoverOut = e => {
                            e.currentTarget.style.background = '#f0f0f0';
                            e.currentTarget.style.color = 'black';
                        };

                        const linkClasses =
                            'block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]';

                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={linkClasses}
                                    style={defaultStyle}
                                    onMouseEnter={hoverIn}
                                    onMouseLeave={hoverOut}
                                    onClick={() => toggleMobileMenu()}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;