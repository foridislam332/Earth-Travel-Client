import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
    const { user, admin, logOut } = useAuth();
    console.log(admin)

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Blogs', href: '/blogs', current: false },
        { name: 'Create Blogs', href: '/createUserBlog', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [open, setOpen] = useState(false)

    return (
        <>
            <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link to="/">
                                            <h2 className='text-4xl font-bold'><span className='text-cyan-500'>Earth</span>Travel</h2>
                                        </Link>
                                    </div>
                                    <div style={{ margin: 'auto' }} className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <Link className='px-3 py-2 rounded-md text-sm font-medium text-gray-300' onClick={() => setOpen(true)} to="/">Top Spots</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {
                                        admin ? <Link to="/admin" className="text-lg text-white  font-medium hidden md:inline lg:inline">
                                            Admin Pannel
                                        </Link> : ""
                                    }

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                {
                                                    user.photoURL ? <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={user.photoURL}
                                                        alt={user.displayName} /> :
                                                        <FontAwesomeIcon className='text-cyan-500 user_icon' icon={faUserAlt} />
                                                }
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            {user.displayName}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            {
                                                                admin ? <Link to="/admin" className="text-lg text-gray-900  font-medium">
                                                                    Admin Pannel
                                                                </Link> : ""
                                                            }
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        user.email ? <a
                                                            href="#"
                                                            onClick={logOut}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-700')}
                                                        >
                                                            Sign out
                                                        </a> : <NavLink
                                                            to="/login"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign In
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                                <Link className='px-3 py-2 rounded-md text-sm font-medium text-gray-300' onClick={() => setOpen(true)} to="/">Top Spots</Link>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* sidebar */}
            <Transition.Root show={open} as={Fragment} className="mt-12 z-50">
                <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex z-50">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="w-screen max-w-xs">
                                    <div className="h-full flex flex-col bg-gray-800 shadow-xl overflow-y-scroll">
                                        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                            <div className="flex items-start justify-between border-b border-gray-300">
                                                <Dialog.Title className="text-lg font-medium text-white uppercase">Top Spots</Dialog.Title>
                                                <div className="ml-3 h-7 flex items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root text-center">
                                                    <ul role="list" className="mt-2 divide-y divide-gray-200">
                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">South Island</Link>

                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">New Zealand</Link>

                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">Paris</Link>

                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">Bora Bora</Link>

                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">Maui</Link>

                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">Tahiti</Link>

                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">London</Link>

                                                        <Link onClick={() => setOpen(false)} className='text-lg font-bold text-white bg-gray-900 hover:bg-cyan-600 px-6 py-2 block' to="/">Rome</Link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Navigation;