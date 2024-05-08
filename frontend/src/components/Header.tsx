
const Header = () => {
  return (
    <section className="overflow-hidden w-full sticky top-0">
    <div className="flex items-center justify-between  py-5 bg-white">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto mr-14">
            <a href="#">
              <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
            <ul className="flex items-center mr-16">
              <li className="mr-9 font-medium hover:text-gray-700"><a href="#">Features</a></li>
              <li className="mr-9 font-medium hover:text-gray-700"><a href="#">Solutions</a></li>
              <li className="mr-9 font-medium hover:text-gray-700"><a href="#">Resources</a></li>
              <li className="font-medium hover:text-gray-700"><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
            <div className="inline-block">
              <button className="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Create Free Account</button>
            </div>
          </div>
          <div className="w-auto lg:hidden">
            <a href="#">
              <svg className="navbar-burger text-indigo-600" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
      <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
        <div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block" href="#">
                  <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                </a>
              </div>
              <div className="w-auto p-2">
                <a className="navbar-burger" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-16 w-full">
            <ul>
              <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Features</a></li>
              <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Solutions</a></li>
              <li className="mb-12"><a className="font-medium hover:text-gray-700" href="#">Resources</a></li>
              <li><a className="font-medium hover:text-gray-700" href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-end w-full pb-8">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="block">
                  <button className="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button">Create Free Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
  )
}

export default Header