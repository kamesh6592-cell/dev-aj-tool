const template1 = `
\`\`\`html

<html lang="en">
  <head>
    <title>Visit www.pixelrocket.store to learn how to become a frontend web developer</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="css/tailwind/tailwind.min.css"/>
    <link rel="icon" type="image/png" sizes="32x32" href="favicon.png"/>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js" defer="defer"></script>
  </head>
  <body class="antialiased bg-body text-body font-body">
    <div>
      <div>
        <p class="mb-0 py-3 bg-lime-500 text-center">Want to learn how to build templates like this one? Visit <a href="#!">www.pixelrocket.store</a></p>
      </div>
      <div>
        <section class="relative bg-teal-900" x-data="{ mobileNavOpen: false }"><img class="absolute top-0 left-0 w-full h-full" src="fauna-assets/headers/bg-waves.png" alt=""/>
          <nav class="py-6">
            <div class="container mx-auto px-4">
              <div class="relative flex items-center justify-between"><a class="inline-block" href="#!"><img class="h-8" src="images/logo-white.svg" alt=""/></a>
                <ul class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                  <li class="mr-8"><a class="inline-block text-white hover:text-lime-500 font-medium" href="about.html">About us</a></li>
                  <li class="mr-8"><a class="inline-block text-white hover:text-lime-500 font-medium" href="pricing.html">Pricing</a></li>
                  <li class="mr-8"><a class="inline-block text-white hover:text-lime-500 font-medium" href="contact.html">Contact us</a></li>
                  <li><a class="inline-block text-white hover:text-lime-500 font-medium" href="blog.html">Blog</a></li>
                </ul>
                <div class="flex items-center justify-end">
                  <div class="hidden md:block"><a class="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium text-white hover:text-teal-900 border border-white hover:bg-white rounded-full transition duration-200" href="contact.html"><span class="mr-2">Get in touch</span>                      <span class="transform group-hover:translate-x-0.5 transition-transform duration-200">
                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></span></a></div>
                  <button class="md:hidden text-white hover:text-lime-500" x-on:click="mobileNavOpen = !mobileNavOpen">
                    <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.19995 23.2H26.7999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.19995 16H26.7999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.19995 8.79999H26.7999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div class="relative pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-62">
            <div class="container mx-auto px-4 relative">
              <div class="max-w-lg xl:max-w-xl mx-auto text-center">
                <h1 class="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight text-white mb-8">Energizing a Green Future</h1>
                <p class="max-w-md xl:max-w-none text-lg text-white opacity-80 mb-10">Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p><a class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" href="#!">See our solutions</a>
              </div>
            </div>
          </div>
          <div class="hidden fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50" :class="{'block': mobileNavOpen, 'hidden': !mobileNavOpen}">
            <div class="fixed inset-0 bg-violet-900 opacity-20" x-on:click="mobileNavOpen = !mobileNavOpen"></div>
            <nav class="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
              <div class="flex items-center justify-between"><a class="inline-block" href="#!"><img class="h-8" src="fauna-assets/logos/sign-logo-flow.svg" alt=""/></a>
                <div class="flex items-center"><a class="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="#!">Login</a>
                  <button x-on:click="mobileNavOpen = !mobileNavOpen">
                    <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="pt-20 pb-12 mb-auto">
                <ul class="flex-col">
                  <li class="mb-6"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">About us</a></li>
                  <li class="mb-6"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">Pricing</a></li>
                  <li class="mb-6"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">Contact us</a></li>
                  <li><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">Blog</a></li>
                </ul>
              </div>
              <div class="flex items-center justify-between"><a class="inline-flex items-center text-lg font-medium text-teal-900" href="#!"><span>
                    <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.4 6.39999H25.6C26.92 6.39999 28 7.47999 28 8.79999V23.2C28 24.52 26.92 25.6 25.6 25.6H6.4C5.08 25.6 4 24.52 4 23.2V8.79999C4 7.47999 5.08 6.39999 6.4 6.39999Z" stroke="#646A69" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M28 8.8L16 17.2L4 8.8" stroke="#646A69" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></span>                  <span class="ml-2">Newsletter</span></a>
                <div class="flex items-center"><a class="inline-block mr-4" href="#!">
                    <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_282_7847)">
                        <path d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z" fill="#022C22"></path>
                      </g>
                    </svg></a>                  <a class="inline-block mr-4" href="#!">
                    <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"></path>
                    </svg></a>                  <a class="inline-block" href="#!">
                    <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path>
                    </svg></a></div>
              </div>
            </nav>
          </div>
        </section>
      </div>
      <section class="py-12 lg:py-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div class="text-center">
                <h5 class="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">5,000 Mwh</h5><span class="text-base lg:text-lg text-gray-700">Renewable Energy Generated</span>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div class="text-center">
                <h5 class="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">2,500+</h5><span class="text-base lg:text-lg text-gray-700">Renewable Energy Generated</span>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
              <div class="text-center">
                <h5 class="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">10,000+</h5><span class="text-base lg:text-lg text-gray-700">Renewable Energy Generated</span>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 px-4">
              <div class="text-center">
                <h5 class="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">15%</h5><span class="text-base lg:text-lg text-gray-700">Renewable Energy Generated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="p-4 bg-white">
        <div class="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-lime-500 rounded-3xl">
          <div class="container mx-auto px-4">
            <div class="flex mb-4 items-center">
              <svg width="8" height="8" viewbox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
              </svg><span class="inline-block ml-2 text-sm font-medium">Solutions</span>
            </div>
            <div class="border-t border-teal-900 border-opacity-25 pt-14">
              <h1 class="font-heading text-4xl sm:text-6xl mb-24">Key to clean future</h1>
              <div class="flex flex-wrap -mx-4">
                <div class="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <circle cx="16" cy="16" r="4" fill="#022C22"></circle>
                      <circle cx="24" cy="32" r="4" fill="#022C22"></circle>
                      <circle cx="32" cy="16" r="4" fill="#022C22"></circle>
                    </svg>
                    <div class="mt-6">
                      <h5 class="text-2xl font-medium mb-3">EV charging </h5>
                      <p class="mb-6">EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.</p><a class="inline-block text-lg  font-medium hover:text-teal-700" href="#!">Read more</a>
                    </div>
                  </div>
                </div>
                <div class="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22"></rect>
                      <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22"></rect>
                      <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22"></rect>
                      <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22"></rect>
                      <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22"></rect>
                      <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22"></rect>
                      <rect x="26.1213" y="27.5355" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5355)" fill="#022C22"></rect>
                      <rect x="11.9792" y="13.3934" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3934)" fill="#022C22"></rect>
                    </svg>
                    <div class="mt-6">
                      <h5 class="text-2xl font-medium mb-3">Solar Energy</h5>
                      <p class="mb-6">Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p><a class="inline-block text-lg  font-medium hover:text-teal-700" href="#!">Read more</a>
                    </div>
                  </div>
                </div>
                <div class="w-full sm:w-1/2 px-4 mb-16 sm:mb-0">
                  <div>
                    <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23C23.4477 23 23 23.4477 23 24C23 24.5523 23.4477 25 24 25Z" fill="#022C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22"></path>
                    </svg>
                    <div class="mt-6">
                      <h5 class="text-2xl font-medium mb-3">Wind Energy</h5>
                      <p class="mb-6">Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.</p><a class="inline-block text-lg  font-medium hover:text-teal-700" href="#!">Read more</a>
                    </div>
                  </div>
                </div>
                <div class="w-full sm:w-1/2 px-4">
                  <div>
                    <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36Lnan nanL24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22"></path>
                    </svg>
                    <div class="mt-6">
                      <h5 class="text-2xl font-medium mb-3">Hydropower</h5>
                      <p class="mb-6">This technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It's one of the oldest forms of renewable energy.</p><a class="inline-block text-lg  font-medium hover:text-teal-700" href="#!">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 lg:py-24 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto mb-24 text-center">
            <h1 class="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">Our commitment to green energy is paving the way for a cleaner, healthier planet. </h1><a class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200" href="#!">Get in touch</a>
          </div>
          <div class="flex justify-center">
            <div class="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><img class="block w-full" src="fauna-assets/about/about-image2.png" alt=""/></div>
            <div class="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><img class="block w-full" src="fauna-assets/about/about-image3.png" alt=""/></div>
            <div class="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><img class="block w-full" src="fauna-assets/about/about-image4.png" alt=""/></div>
            <div class="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><img class="block w-full" src="fauna-assets/about/about-image2.png" alt=""/></div>
            <div class="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8"><img class="block w-full" src="fauna-assets/about/about-image3.png" alt=""/></div>
            <div class="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8"><img class="block w-full" src="fauna-assets/about/about-image4.png" alt=""/></div>
          </div>
        </div>
      </section>
      <section class="py-12 lg:py-24">
        <div class="container mx-auto px-4">
          <div class="text-center mb-20">
            <h1 class="font-heading text-6xl mb-6">FAQ</h1>
            <p class="text-gray-700">Here you will find the answers to the frequently asked questions.</p>
          </div>
          <div class="max-w-4xl mx-auto">
            <button class="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion">
              <div>
                <div class="pr-5">
                  <h5 class="text-lg font-medium">What is green energy?</h5>
                </div>
                <div class="overflow-hidden h-0 pr-5 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''">
                  <p class="text-gray-700 mt-4">We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.</p>
                </div>
              </div><span class="flex-shrink-0">
                <div :class="{'hidden': accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.69995V18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="hidden" :class="{'hidden': !accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div></span>
            </button>
            <button class="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion">
              <div>
                <div class="pr-5">
                  <h5 class="text-lg font-medium">How does green energy benefit the environment?</h5>
                </div>
                <div class="overflow-hidden h-0 pr-5 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''">
                  <p class="text-gray-700 mt-4">We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.</p>
                </div>
              </div><span class="flex-shrink-0">
                <div :class="{'hidden': accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.69995V18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="hidden" :class="{'hidden': !accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div></span>
            </button>
            <button class="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion">
              <div>
                <div class="pr-5">
                  <h5 class="text-lg font-medium">What green energy solutions does your company offer?</h5>
                </div>
                <div class="overflow-hidden h-0 pr-5 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''">
                  <p class="text-gray-700 mt-4">We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.</p>
                </div>
              </div><span class="flex-shrink-0">
                <div :class="{'hidden': accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.69995V18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="hidden" :class="{'hidden': !accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div></span>
            </button>
            <button class="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion">
              <div>
                <div class="pr-5">
                  <h5 class="text-lg font-medium">What support services do you offer after installing green energy solutions?</h5>
                </div>
                <div class="overflow-hidden h-0 pr-5 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''">
                  <p class="text-gray-700 mt-4">We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.</p>
                </div>
              </div><span class="flex-shrink-0">
                <div :class="{'hidden': accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.69995V18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="hidden" :class="{'hidden': !accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div></span>
            </button>
            <button class="flex w-full py-6 px-8 mb-24 items-start justify-between text-left shadow-md rounded-2xl" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion">
              <div>
                <div class="pr-5">
                  <h5 class="text-lg font-medium">How do solar panels work?</h5>
                </div>
                <div class="overflow-hidden h-0 pr-5 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''">
                  <p class="text-gray-700 mt-4">We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.</p>
                </div>
              </div><span class="flex-shrink-0">
                <div :class="{'hidden': accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.69995V18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div class="hidden" :class="{'hidden': !accordion}">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div></span>
            </button>
            <div class="sm:flex py-10 px-5 sm:px-10 bg-orange-50 rounded-2xl">
              <div class="mb-4 sm:mb-0 sm:mr-6">
                <svg width="48" height="48" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                  <path d="M13.676 15.5617C11.7951 17.8602 10.6666 20.7983 10.6666 24C10.6666 27.2017 11.7951 30.1398 13.6761 32.4383L18.9201 27.1943C18.3372 26.2694 18 25.174 18 24C18 22.8259 18.3372 21.7306 18.92 20.8057L13.676 15.5617Z" fill="#022C22"></path>
                  <path d="M15.5616 13.6761L20.8056 18.9201C21.7306 18.3372 22.8259 18 24 18C25.174 18 26.2694 18.3372 27.1943 18.9201L32.4383 13.6761C30.1398 11.7951 27.2017 10.6666 24 10.6666C20.7982 10.6666 17.8601 11.7951 15.5616 13.6761Z" fill="#022C22"></path>
                  <path d="M34.3239 15.5617L29.0799 20.8057C29.6628 21.7307 30 22.8259 30 24C30 25.174 29.6627 26.2693 29.0799 27.1943L34.3238 32.4383C36.2048 30.1398 37.3333 27.2017 37.3333 24C37.3333 20.7983 36.2048 17.8602 34.3239 15.5617Z" fill="#022C22"></path>
                  <path d="M32.4382 34.3239L27.1942 29.0799C26.2693 29.6628 25.174 30 24 30C22.8259 30 21.7307 29.6628 20.8057 29.0799L15.5617 34.3239C17.8602 36.2048 20.7983 37.3333 24 37.3333C27.2016 37.3333 30.1397 36.2048 32.4382 34.3239Z" fill="#022C22"></path>
                </svg>
              </div>
              <div>
                <h5 class="text-xl font-medium mb-4">Still have questions?</h5>
                <p class="text-gray-700"><span>For assistance, please visit our</span>                                  <a class="inline-block text-black font-medium underline" href="#!">Contact Us</a>                                  <span>page or call our customer support hotline at</span>                                  <span class="text-black font-medium">(671) 555-0110</span>                                  <span>. Our dedicated team is ready to help you on your journey to a greener, more sustainable future.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 lg:py-24 overflow-hidden" x-data="{ activeSlide: 1, slideCount: 3 }">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div class="max-w-lg mx-auto md:mx-0 overflow-hidden">
                <div class="flex -mx-4 transition-transform duration-500" :style="'transform: translateX(-' + (activeSlide - 1) * 100 + '%)'"><img class="block flex-shrink-0 w-full px-4" src="fauna-assets/testimonials/photo-lg.png" alt=""/><img class="block flex-shrink-0 w-full px-4" src="fauna-assets/testimonials/photo-lg.png" alt=""/><img class="block flex-shrink-0 w-full px-4" src="fauna-assets/testimonials/photo-lg.png" alt=""/></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-4">
              <div class="max-w-lg mx-auto md:mr-0 overflow-hidden">
                <div class="flex -mx-4 transition-transform duration-500" :style="'transform: translateX(-' + (activeSlide - 1) * 100 + '%)'">
                  <div class="flex-shrink-0 px-4 w-full">
                    <h4 class="text-3xl lg:text-4xl font-medium mb-10">“Flow transformed my energy use. Efficient, green tech, outstanding service!”</h4><span class="block text-xl font-medium">Jenny Wilson</span>                                      <span class="block mb-12 lg:mb-32 text-lg text-gray-700">Solar energy service</span>
                  </div>
                  <div class="flex-shrink-0 px-4 w-full">
                    <h4 class="text-3xl lg:text-4xl font-medium mb-10">“Efficient, green tech, outstanding service”</h4><span class="block text-xl font-medium">John Jones</span>                                      <span class="block mb-12 lg:mb-32 text-lg text-gray-700">CE0 Solar Company</span>
                  </div>
                  <div class="flex-shrink-0 px-4 w-full">
                    <h4 class="text-3xl lg:text-4xl font-medium mb-10">“Flow transformed my energy use, efficient, green tech, outstanding service.”</h4><span class="block text-xl font-medium">James Harrison</span>                                      <span class="block mb-12 lg:mb-32 text-lg text-gray-700">Developer</span>
                  </div>
                </div>
                <div>
                  <button class="inline-block mr-4 text-gray-700 hover:text-lime-500" x-on:click="activeSlide = activeSlide &gt; 1 ? activeSlide - 1 : slideCount">
                    <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.4 16H7.59998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M16 24.4L7.59998 16L16 7.59998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                  <button class="inline-block text-gray-700 hover:text-lime-500" x-on:click="activeSlide = activeSlide &lt; slideCount ? activeSlide + 1 : 1">
                    <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.59998 16H24.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M16 7.59998L24.4 16L16 24.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div>
          <section>
            <div class="p-4">
              <div class="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-teal-900 rounded-2xl">
                <div class="container mx-auto px-4">
                  <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                      <div class="max-w-md xl:max-w-none">
                        <h1 class="font-heading text-4xl xs:text-5xl sm:text-6xl tracking-sm text-white mb-6">Learn Frontend Web Development</h1>
                        <p class="text-lg text-white opacity-80">Visit www.pixelrocket.store and learn how to become a frontend web developer</p>
                      </div>
                    </div>
                    <div class="w-full lg:w-1/3 px-4 lg:text-right"><a class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" href="#!">Get Started</a></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="relative py-12 lg:py-24 bg-orange-50 overflow-hidden"><img class="absolute bottom-0 left-0" src="fauna-assets/footer/waves-lines-left-bottom.png" alt=""/>
        <div class="container px-4 mx-auto relative">
          <div class="flex flex-wrap mb-16 -mx-4">
            <div class="w-full lg:w-2/12 xl:w-2/12 px-4 mb-16 lg:mb-0"><a class="inline-block mb-4" href="#!"><img src="images/logo.svg" alt=""/></a></div>
            <div class="w-full md:w-7/12 lg:w-6/12 px-4 mb-16 lg:mb-0">
              <div class="flex flex-wrap -mx-4">
                <div class="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                  <h3 class="mb-6 font-bold">Platform</h3>
                  <ul>
                    <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Solutions</a></li>
                    <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">How it works</a></li>
                    <li><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Pricing</a></li>
                  </ul>
                </div>
                <div class="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                  <h3 class="mb-6 font-bold">Resources</h3>
                  <ul>
                    <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Blog</a></li>
                    <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Help Center</a></li>
                    <li><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Support</a></li>
                  </ul>
                </div>
                <div class="w-full xs:w-1/3 px-4">
                  <h3 class="mb-6 font-bold">Company</h3>
                  <ul>
                    <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">About</a></li>
                    <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Our Mission</a></li>
                    <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Careers</a></li>
                    <li><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#!">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full md:w-5/12 lg:w-4/12 px-4">
              <div class="max-w-sm p-8 bg-teal-900 rounded-2xl mx-auto md:mr-0">
                <h5 class="text-xl font-medium text-white mb-4">Your Source for Green Energy Updates</h5>
                <p class="text-sm text-white opacity-80 leading-normal mb-10">Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.</p>
                <div class="flex flex-col">
                  <input class="h-12 w-full px-4 py-1 placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full" type="email" placeholder="Your e-mail..."/><a class="h-12 inline-flex mt-3 py-1 px-5 items-center justify-center font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" href="#!">Get in touch</a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mb-3 justify-between">
            <div class="flex items-center mb-3"><a class="inline-block mr-4 text-black hover:text-lime-500" href="#!">
                <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_230_4832)">
                    <path d="M11.5481 19.9999V10.8776H14.6088L15.068 7.32147H11.5481V5.05138C11.5481 4.02211 11.8327 3.32067 13.3104 3.32067L15.1919 3.3199V0.139138C14.8665 0.0968538 13.7496 -9.15527e-05 12.4496 -9.15527e-05C9.735 -9.15527e-05 7.87654 1.65687 7.87654 4.69918V7.32147H4.80652V10.8776H7.87654V19.9999H11.5481Z" fill="currentColor"></path>
                  </g>
                </svg></a>              <a class="inline-block mr-4 text-black hover:text-lime-500" href="#!">
                <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"></path>
                </svg></a>              <a class="inline-block text-black hover:text-lime-500" href="#!">
                <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path>
                </svg></a></div>
            <div class="text-center">Created by <a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="https://www.pixelrocket.store" target="_blank">Pixelrocket</a><span> • Distributed by </span><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="https://www.ThemeWagon.store" target="_blank">ThemeWagon</a></div>
            <p class="text-sm text-gray-500 mb-3">© 2024 Flow. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  </body>
</html>
\`\`\`
`
const template2 = `
\`\`\`html
<html lang="en"><head>
    <title>Visit www.pixelrocket.store to learn how to become a frontend web developer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&amp;display=swap" rel="stylesheet">
    <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,300,500&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/tailwind/tailwind.min.css">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon.png">
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js" defer="defer"></script>
  </head>
  <body class="antialiased bg-body text-body font-body">
    <div>
      <p class="py-4 bg-green-500 text-green-900 text-center">Want to learn how to build websites like this one? <a href="https://www.pixelrocket.store">Visit Pixel Rocket</a></p>
      <section class="relative overflow-hidden" x-data="{ mobileNavOpen: false }">
        <div class="container px-4 mx-auto">
          <div class="flex items-center justify-between pt-6 -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-wrap items-center">
                <div class="w-auto"><a class="relative z-10 inline-block" href="index.html"><img src="images/logo.svg" alt=""></a></div>
              </div>
            </div>
            <div class="w-auto p-2">
              <div class="flex flex-wrap items-center">
                <div class="w-auto hidden lg:block">
                  <ul class="flex items-center mr-12">
                    <li class="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="about.html">About</a></li>
                    <li class="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="pricing.html">Pricing</a></li>
                    <li class="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="blog.html">Blog</a></li>
                    <li class="text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
                <div class="w-auto hidden lg:block">
                  <div class="inline-block"><a class="inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300" href="login.html">Login</a></div>
                </div>
                <div class="w-auto lg:hidden">
                  <button class="relative z-10 inline-block" x-on:click="mobileNavOpen = !mobileNavOpen">
                    <svg class="text-green-500" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                      <path d="M37 32H19M37 24H19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50" :class="{'block': mobileNavOpen, 'hidden': !mobileNavOpen}">
          <div class="fixed inset-0 bg-black opacity-60" x-on:click="mobileNavOpen = !mobileNavOpen"></div>
          <nav class="relative z-10 px-9 pt-8 h-full bg-black overflow-y-auto">
            <div class="flex flex-wrap justify-between h-full">
              <div class="w-full">
                <div class="flex items-center justify-between -m-2">
                  <div class="w-auto p-2"><a class="inline-block" href="#"><img src="images/logo.svg" alt=""></a></div>
                  <div class="w-auto p-2">
                    <button class="inline-block text-white" x-on:click="mobileNavOpen = !mobileNavOpen">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center py-16 w-full">
                <ul>
                  <li class="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="about.html">About</a></li>
                  <li class="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="pricing.html">Pricing</a></li>
                  <li class="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="blog.html">Blog</a></li>
                  <li class="text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="contact.html">Contact</a></li>
                </ul>
              </div>
              <div class="flex flex-col justify-end w-full pb-8"><a class="inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300" href="login.html">Login</a></div>
            </div>
          </nav>
        </div>
        <div class="relative pt-20 lg:pt-28">
          <div class="relative z-10 container px-4 mx-auto">
            <div class="relative mb-24 text-center md:max-w-4xl mx-auto"><img class="absolute top-44 -left-36" src="template-assets/images/headers/star2.svg" alt=""><img class="absolute top-10 -right-36" src="template-assets/images/headers/star2.svg" alt=""><span class="inline-block mb-2.5 text-sm text-green-400 font-medium tracking-tighter">Savings Card</span>
              <h1 class="font-heading mb-10 text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter">Making credit history with our card</h1><a class="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300" href="#">Start now</a>
            </div>
            <div class="relative max-w-max mx-auto"><img src="template-assets/images/headers/card-half.png" alt=""><img class="absolute top-7 -right-64" src="template-assets/images/headers/star.svg" alt=""></div>
          </div>
        </div><img class="absolute top-0 left-48" src="template-assets/images/headers/layer-blur.svg" alt=""><img class="absolute bottom-0 right-0" src="template-assets/images/headers/lines2.svg" alt="">
      </section>
      <section class="pt-20 pb-24 bg-blueGray-950">
        <div class="container px-4 mx-auto">
          <div class="text-center"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Why us</span>
            <h2 class="font-heading mb-6 text-7xl lg:text-8xl text-white tracking-8xl md:max-w-md mx-auto">Protecting you and your money</h2>
            <p class="mb-20 text-gray-300 md:max-w-md mx-auto">Global Bank is a strategic branding agency focused on brand creation, rebrands, and brand</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="relative mb-8 overflow-hidden rounded-5xl"><img class="w-full transform hover:scale-125 transition duration-1000" src="template-assets/images/cards/bg-image1.png" alt="">
                <div class="absolute bottom-0 left-0 w-full bg-gradient-card p-8"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Features</span>                  <a class="group inline-block max-w-sm" href="#">
                    <h3 class="mb-4 text-3xl text-white tracking-3xl hover:underline">Safeguarded with leading banks</h3></a>                  <a class="group inline-flex items-center" href="#"><span class="mr-3.5 text-white font-medium">Learn more</span>
                    <svg class="transform group-hover:rotate-90 transition duration-300" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.75L1 11.25" stroke="white" stroke-width="1.43182" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M11.5 10.3781V0.75H1.87187" stroke="white" stroke-width="1.43182" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></a></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="relative mb-8 overflow-hidden rounded-5xl"><img class="w-full transform hover:scale-125 transition duration-1000" src="template-assets/images/cards/bg-image2.png" alt="">
                <div class="absolute bottom-0 left-0 w-full bg-gradient-card p-8"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Security</span>                  <a class="group inline-block max-w-sm" href="#">
                    <h3 class="mb-4 text-3xl text-white tracking-3xl hover:underline">Safeguarded with leading banks</h3></a>                  <a class="group inline-flex items-center" href="#"><span class="mr-3.5 text-white font-medium">Learn more</span>
                    <svg class="transform group-hover:rotate-90 transition duration-300" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.75L1 11.25" stroke="white" stroke-width="1.43182" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M11.5 10.3781V0.75H1.87187" stroke="white" stroke-width="1.43182" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></a></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
              <div class="relative mb-8 overflow-hidden rounded-5xl"><img class="w-full transform hover:scale-125 transition duration-1000" src="template-assets/images/cards/bg-image3.png" alt="">
                <div class="absolute bottom-0 left-0 w-full bg-gradient-card p-8"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Progress</span>                  <a class="group inline-block max-w-sm" href="#">
                    <h3 class="mb-4 text-3xl text-white tracking-3xl hover:underline">Safeguarded with leading banks</h3></a>                  <a class="group inline-flex items-center" href="#"><span class="mr-3.5 text-white font-medium">Learn more</span>
                    <svg class="transform group-hover:rotate-90 transition duration-300" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.75L1 11.25" stroke="white" stroke-width="1.43182" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M11.5 10.3781V0.75H1.87187" stroke="white" stroke-width="1.43182" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-24 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="mb-20 md:max-w-xl text-center mx-auto"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Core Card</span>
            <h2 class="font-heading text-7xl lg:text-8xl text-white tracking-tighter-xl">Features</h2>
          </div>
          <div class="relative mb-10 py-20 px-16 bg-gradient-radial-dark overflow-hidden border border-gray-900 border-opacity-30 rounded-5xl">
            <div class="max-w-6xl mx-auto">
              <div class="relative z-10 flex flex-wrap items-center -m-8">
                <div class="w-full md:w-1/2 p-8">
                  <div class="max-w-md mx-auto text-center">
                    <h2 class="mb-6 text-7xl text-white tracking-tighter-xl">Making credit history</h2>
                    <p class="text-white text-opacity-60">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i</p>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-8"><img class="mx-auto md:mr-0" src="template-assets/images/features/dashboard.png" alt=""></div>
              </div>
            </div><img class="absolute bottom-0 left-0" src="template-assets/images/features/bg-gray.png" alt="">
          </div>
          <div class="flex flex-wrap -m-5">
            <div class="w-full md:w-1/2 p-5">
              <div class="relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900 border-opacity-30 rounded-5xl"><img class="mb-14" src="template-assets/images/features/cards.png" alt="">
                <div class="relative z-10 max-w-sm text-center mx-auto">
                  <h2 class="mb-6 text-7xl text-white tracking-tighter">Making credit history</h2>
                  <p class="text-white text-opacity-60">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i</p>
                </div><img class="absolute bottom-0 right-0" src="template-assets/images/features/bg-gray-2.png" alt="">
              </div>
            </div>
            <div class="w-full md:w-1/2 p-5">
              <div class="relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900 border-opacity-30 rounded-5xl">
                <div class="mb-14 max-w-sm mx-auto">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-auto p-2">
                      <div class="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl"><img src="template-assets/logos/brands/figma.svg" alt=""></div>
                    </div>
                    <div class="w-auto p-2">
                      <div class="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl"><img src="template-assets/logos/brands/notion.svg" alt=""></div>
                    </div>
                    <div class="w-auto p-2">
                      <div class="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl"><img src="template-assets/logos/brands/slack.svg" alt=""></div>
                    </div>
                    <div class="w-auto p-2">
                      <div class="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl"><img src="template-assets/logos/brands/spotify.svg" alt=""></div>
                    </div>
                    <div class="w-auto p-2">
                      <div class="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl"><img src="template-assets/logos/brands/twitter.svg" alt=""></div>
                    </div>
                    <div class="w-auto p-2">
                      <div class="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl"><img src="template-assets/logos/brands/desktop.svg" alt=""></div>
                    </div>
                  </div>
                </div>
                <div class="relative z-10 max-w-sm text-center mx-auto">
                  <h2 class="mb-6 text-7xl text-white tracking-tighter">Making credit history</h2>
                  <p class="text-white text-opacity-60">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i</p>
                </div><img class="absolute bottom-0 right-0" src="template-assets/images/features/bg-gray-2.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-24 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center -m-8">
            <div class="w-full md:w-1/2 p-8">
              <div class="relative z-10 md:max-w-md"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Secure Access</span>
                <h2 class="font-heading mb-6 text-6xl md:text-7xl text-white tracking-tighter-xl">Making credit history</h2>
                <p class="mb-8 text-white text-opacity-60">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i</p>
                <ul>
                  <li class="inline-flex mb-3.5"><img class="mr-3.5" src="template-assets/images/features/checked.svg" alt=""><span class="text-white">Real-time usager, credits and running balance</span></li>
                  <li class="inline-flex mb-3.5"><img class="mr-3.5" src="template-assets/images/features/checked.svg" alt=""><span class="text-white">Webhooks to power altering use cases for customers</span></li>
                  <li class="inline-flex"><img class="mr-3.5" src="template-assets/images/features/checked.svg" alt=""><span class="text-white">Cost grouping functionality to organize invoices</span></li>
                </ul>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-8"><img class="mx-auto" src="template-assets/images/features/card2.png" alt=""></div>
          </div>
        </div><img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="template-assets/images/features/bg-blur.png" alt="">
      </section>
      <section class="relative py-24 overflow-hidden" x-data="{ showContent: false }">
        <div class="container px-4 mx-auto">
          <div class="text-center"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">24/7 Security</span>
            <h2 class="font-heading mb-6 text-7xl lg:text-8xl text-white tracking-8xl md:max-w-md mx-auto">Protecting you and your money</h2>
            <p class="mb-20 text-gray-300 md:max-w-md mx-auto">Global Bank is a strategic branding agency focused on brand creation, rebrands, and brand</p>
          </div>
          <div class="flex flex-wrap -m-3">
            <div class="w-full md:w-1/2 lg:w-1/4 p-3">
              <div class="flex flex-wrap -m-3">
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar2.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Leslie Alexander</h2>
                        <p class="text-sm text-gray-300">@lesliealexnader</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">Finances are very important to me. I regularly plan my expensesand save for the future.</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar3.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Kristin Watson</h2>
                        <p class="text-sm text-gray-300">@kristinawatson</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">Finances are very important to me. I regularly plan my expensesand save for the future.</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar4.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Marvin McKinney</h2>
                        <p class="text-sm text-gray-300">@marvinmckinney</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">Finances are a part of life that needs constant attention. I try to regularly analyze my expenses</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hidden" :class="{ 'hidden': !showContent }">
                  <div class="w-full p-3">
                    <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                      <div class="flex flex-wrap items-center -m-3 mb-3">
                        <div class="w-auto p-3"><img src="template-assets/images/cards/avatar3.png" alt=""></div>
                        <div class="w-auto p-3">
                          <h2 class="text-2xl text-white">Rob Mason</h2>
                          <p class="text-sm text-gray-300">@robmason</p>
                        </div>
                      </div>
                      <p class="mb-4 text-white">Prioritizing finances is a constant for me. I regularly budget and save, emphasizing the importance of planning for the future.</p>
                      <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">5:48 PM</p>
                        </div>
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">Sep 15, 2023</p>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center -m-2.5">
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">232 like</p>
                        </div>
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">81 com.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-3">
              <div class="flex flex-wrap -m-3">
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar5.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Kathryn Murphy</h2>
                        <p class="text-sm text-gray-300">@kathrynmurphy</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">Finances are one of the most important things in life. I have to be careful not to spend too much and have enough money for everything</p>
                    <p class="mb-4 text-white">I'm not very knowledgeable about finances, but I try to stay on top of my expenses and take advice from experts."</p>
                    <p class="mb-4 text-white">I don't like thinking about finances, but I know I have to take care of them. I try to take care of my savings and control my expenses.</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar6.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Brooklyn Simm..</h2>
                        <p class="text-sm text-gray-300">@brooklynsimmons</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">Finances are a matter of responsibility and discipline for me. I try to monitor my expenses and savings on an ongoing basis to avoid financial problem</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hidden" :class="{ 'hidden': !showContent }">
                  <div class="w-full p-3">
                    <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                      <div class="flex flex-wrap items-center -m-3 mb-3">
                        <div class="w-auto p-3"><img src="template-assets/images/cards/avatar2.png" alt=""></div>
                        <div class="w-auto p-3">
                          <h2 class="text-2xl text-white">Lucas Floe</h2>
                          <p class="text-sm text-gray-300">@lucasfloe</p>
                        </div>
                      </div>
                      <p class="mb-4 text-white">I firmly believe that investing in education and acquiring new skills is pivotal for a secure financial future. It's a strategic move that aligns with my commitment to financial stability.</p>
                      <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">5:48 PM</p>
                        </div>
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">Sep 15, 2023</p>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center -m-2.5">
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">232 like</p>
                        </div>
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">81 com.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-3">
              <div class="flex flex-wrap -m-3">
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar7.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Devon Lane</h2>
                        <p class="text-sm text-gray-300">@devonlane</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">Finances are a part of life that needs constant attention. I try to regularly analyze my expenses</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar8.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Arlene McCoy</h2>
                        <p class="text-sm text-gray-300">@arlenemccoy</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">Finances are a part of life that needs constant attention. I try to regularly analyze my expenses</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar9.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Bessie Cooper</h2>
                        <p class="text-sm text-gray-300">@bessiecooper</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">I'm interested in new technologies in the field of finance, such as blockchain or robo-advisors. I believe these new tools can help manage money more efficiently.</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hidden" :class="{ 'hidden': !showContent }">
                  <div class="w-full p-3">
                    <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                      <div class="flex flex-wrap items-center -m-3 mb-3">
                        <div class="w-auto p-3"><img src="template-assets/images/cards/avatar9.png" alt=""></div>
                        <div class="w-auto p-3">
                          <h2 class="text-2xl text-white">Mike Rochs</h2>
                          <p class="text-sm text-gray-300">@mikerochs</p>
                        </div>
                      </div>
                      <p class="mb-4 text-white">Financial management can be a source of stress. Balancing budgets and making prudent decisions requires careful consideration, but it's a challenge I navigate diligently.</p>
                      <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">5:48 PM</p>
                        </div>
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">Sep 15, 2023</p>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center -m-2.5">
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">232 like</p>
                        </div>
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">81 com.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-3">
              <div class="flex flex-wrap -m-3">
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar10.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Jerome Bell</h2>
                        <p class="text-sm text-gray-300">@jeromebell</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">I'm convinced that investing in education and acquiring new skills is a key factor in building a stable financial future.</p>
                    <p class="mb-4 text-white">Managing finances can be stressful.</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3"><img src="template-assets/images/cards/avatar11.png" alt=""></div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">Ronald Richards</h2>
                        <p class="text-sm text-gray-300">@ronaldrichards</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">I'm convinced that investing in education and acquiring new skills is a key factor in building a stable financial future.</p>
                    <p class="mb-4 text-white">Managing finances can be stressful.</p>
                    <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">5:48 PM</p>
                      </div>
                      <div class="w-auto p-2.5">
                        <p class="text-sm text-gray-300">Sep 15, 2023</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center -m-2.5">
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">232 like</p>
                      </div>
                      <div class="flex flex-wrap items-center w-auto p-2.5">
                        <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-sm text-gray-300">81 com.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hidden" :class="{ 'hidden': !showContent }">
                  <div class="w-full p-3">
                    <div class="px-6 py-8 border border-gray-800 rounded-5xl">
                      <div class="flex flex-wrap items-center -m-3 mb-3">
                        <div class="w-auto p-3"><img src="template-assets/images/cards/avatar8.png" alt=""></div>
                        <div class="w-auto p-3">
                          <h2 class="text-2xl text-white">Kevin Roland</h2>
                          <p class="text-sm text-gray-300">@kevinroland</p>
                        </div>
                      </div>
                      <p class="mb-4 text-white">Responsibility and discipline drive my approach to finances. Regularly monitoring expenses and savings is a routine for me, ensuring a proactive stance to prevent potential financial issues.</p>
                      <p class="mb-4 text-white">Managing finances can be stressful.</p>
                      <div class="flex flex-wrap items-center -m-2.5 mb-1.5">
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">5:48 PM</p>
                        </div>
                        <div class="w-auto p-2.5">
                          <p class="text-sm text-gray-300">Sep 15, 2023</p>
                        </div>
                      </div>
                      <div class="flex flex-wrap items-center -m-2.5">
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.41398 13.8731C8.18732 13.9531 7.81398 13.9531 7.58732 13.8731C5.65398 13.2131 1.33398 10.4597 1.33398 5.79307C1.33398 3.73307 2.99398 2.06641 5.04065 2.06641C6.25398 2.06641 7.32732 2.65307 8.00065 3.55974C8.67398 2.65307 9.75398 2.06641 10.9607 2.06641C13.0073 2.06641 14.6673 3.73307 14.6673 5.79307C14.6673 10.4597 10.3473 13.2131 8.41398 13.8731Z" stroke="#9F9FA0" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">232 like</p>
                        </div>
                        <div class="flex flex-wrap items-center w-auto p-2.5">
                          <svg class="mr-2.5" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.247 8.07345C12.8137 10.7001 10.8604 12.7201 8.24702 13.2135C6.81369 13.4868 5.45368 13.2735 4.28035 12.7201C4.08701 12.6268 3.77367 12.5868 3.56701 12.6335C3.12701 12.7401 2.38703 12.9201 1.76037 13.0668C1.16037 13.2135 0.78704 12.8401 0.933706 12.2401L1.36702 10.4401C1.42035 10.2335 1.37368 9.91345 1.28035 9.72012C0.747012 8.60012 0.533693 7.30012 0.753693 5.93345C1.18036 3.30678 3.30037 1.18012 5.92703 0.746784C10.2604 0.0467841 13.9537 3.74012 13.247 8.07345Z" stroke="#9F9FA0" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <p class="text-sm text-gray-300">81 com.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 z-10 py-32 lg:py-64 flex items-center justify-center w-full bg-gradient-radial-darker3" :class="{ 'hidden': showContent }"><a class="inline-block px-8 py-4 font-medium tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300" x-on:click.prevent="showContent = true" href="#">Show more</a></div>
      </section>
      <section class="relative py-24 overflow-hidden" x-data="{ active: 'introduction' }">
        <div class="container px-4 mx-auto">
          <div class="mb-12 md:max-w-4xl text-center mx-auto"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">More about our features</span>
            <h2 class="font-heading text-7xl lg:text-8xl text-white tracking-tighter-xl">Billing infrastucture that keeps up with your business</h2>
          </div>
          <ul class="mb-20 flex flex-wrap justify-center">
            <li><a class="inline-block px-5 py-5 font-medium text-green-300 tracking-tighter border border-green-400 rounded-full transition duration-200 text-green-400" x-on:click.prevent="active = 'introduction'" :class="{'text-green-400 border-green-400': active === 'introduction', 'text-gray-300 border-transparent': active !== 'introduction'}" href="#">Introduction</a></li>
            <li><a class="inline-block px-5 py-5 font-medium text-gray-300 tracking-tighter border border-transparent rounded-full transition duration-200" x-on:click.prevent="active = 'aggregation'" :class="{'text-green-400 border-green-400': active === 'aggregation', 'text-gray-300 border-transparent': active !== 'aggregation'}" href="#">Aggregation</a></li>
            <li><a class="inline-block px-5 py-5 font-medium text-gray-300 tracking-tighter border border-transparent rounded-full transition duration-200" x-on:click.prevent="active = 'pricing'" :class="{'text-green-400 border-green-400': active === 'pricing', 'text-gray-300 border-transparent': active !== 'pricing'}" href="#">Pricing &amp; Credits</a></li>
            <li><a class="inline-block px-5 py-5 font-medium text-gray-300 tracking-tighter border border-transparent rounded-full transition duration-200" x-on:click.prevent="active = 'integrations'" :class="{'text-green-400 border-green-400': active === 'integrations', 'text-gray-300 border-transparent': active !== 'integrations'}" href="#">Integrations</a></li>
            <li><a class="inline-block px-5 py-5 font-medium text-gray-300 tracking-tighter border border-transparent rounded-full transition duration-200" x-on:click.prevent="active = 'api'" :class="{'text-green-400 border-green-400': active === 'api', 'text-gray-300 border-transparent': active !== 'api'}" href="#">API &amp; Webhooks</a></li>
          </ul><img class="mx-auto" :class="{ 'hidden': active != 'introduction' }" src="template-assets/images/features/dashboard2.png" alt=""><img class="hidden mx-auto" :class="{ 'hidden': active != 'aggregation' }" src="template-assets/images/features/dashboard3.png" alt=""><img class="hidden mx-auto" :class="{ 'hidden': active != 'pricing' }" src="template-assets/images/features/dashboard2.png" alt=""><img class="hidden mx-auto" :class="{ 'hidden': active != 'integrations' }" src="template-assets/images/features/dashboard3.png" alt=""><img class="hidden mx-auto" :class="{ 'hidden': active != 'api' }" src="template-assets/images/features/dashboard2.png" alt="">
        </div>
      </section>
      <section class="py-12">
        <div class="container px-4 mx-auto">
          <div class="relative pt-20 px-4 bg-gray-900 bg-opacity-20 overflow-hidden rounded-6xl">
            <div class="text-center md:max-w-xl mx-auto removed pb-20"><span class="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Learn to code</span>
              <h2 class="font-heading mb-6 text-7xl text-white tracking-8xl">Want to build templates like this one?</h2><a class="mb-8 text-gray-300 relative z-10" href="https://www.pixelrocket.store">Visit www.pixelrocket.store and learn to become a frontend web developer today</a><img class="absolute -bottom-24 right-0 z-0" src="template-assets/images/application-section/lines2.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="bg-gray-50 overflow-hidden">
        <div class="py-14 bg-black rounded-b-7xl"></div>
        <div class="py-24">
          <div class="container px-4 mx-auto">
            <div class="flex flex-wrap justify-center -m-8 mb-28">
              <div class="w-full md:w-1/2 lg:w-4/12 p-8">
                <div class="md:max-w-xs"><img class="mb-7" src="images/logo-dark.svg" alt="">
                  <p class="text-gray-400 font-medium">Global Bank is a strategic branding agency focused on brand creation, rebrands, and brand</p>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 class="mb-6 text-lg text-black font-medium">About</h3>
                <ul>
                  <li class="mb-2.5"><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Contact</a></li>
                  <li class="mb-2.5"><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Blog</a></li>
                  <li class="mb-2.5"><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Our Story</a></li>
                  <li><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Careers</a></li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 class="mb-6 text-lg text-black font-medium">Company</h3>
                <ul>
                  <li class="mb-2.5"><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Contact</a></li>
                  <li class="mb-2.5"><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Blog</a></li>
                  <li class="mb-2.5"><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Our Story</a></li>
                  <li><a class="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300" href="#">Careers</a></li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:flex-1 p-8">
                <div class="flex flex-wrap -m-2">
                  <div class="w-full p-2"><a class="block py-5 px-8 bg-white rounded-full" href="#">
                      <div class="flex flex-wrap items-center -m-2">
                        <div class="w-auto p-2"><img src="template-assets/images/footers/twitter.svg" alt=""></div>
                        <div class="flex-1 p-2">
                          <p class="text-black">Follow us on Twitter for updates</p>
                        </div>
                      </div></a></div>
                  <div class="w-full p-2"><a class="block py-5 px-8 bg-white rounded-full" href="#">
                      <div class="flex flex-wrap items-center -m-2">
                        <div class="w-auto p-2"><img src="template-assets/images/footers/instagram.svg" alt=""></div>
                        <div class="flex-1 p-2">
                          <p class="text-black">Follow us on Instagram for updates</p>
                        </div>
                      </div></a></div>
                  <div class="w-full p-2"><a class="block py-5 px-8 bg-white rounded-full" href="#">
                      <div class="flex flex-wrap items-center -m-2">
                        <div class="w-auto p-2"><img src="template-assets/images/footers/tiktok.svg" alt=""></div>
                        <div class="flex-1 p-2">
                          <p class="text-black">Follow us on TikTok for updates</p>
                        </div>
                      </div></a></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-between -m-2">
              <div class="w-auto p-2">
                <p class="inline-block text-sm font-medium text-black text-opacity-60">© 2023 Global Bank</p>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-wrap items-center -m-2 sm:-m-7">
                  <div class="w-auto p-2 sm:p-7"><a class="inline-block text-sm text-black text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Terms of Use</a></div>
                  <div class="w-auto p-2 sm:p-7"><a class="inline-block text-sm text-black text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Privacy Policy</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  
</body></html>
\`\`\`
`
const template3 = `
\`\`\`html
<html lang="en"><head>
    <title>Visit www.pixelrocket.store to learn how to become a frontend web developer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Readex+Pro:400,500,600,700&amp;subset=latin">
    <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/tailwind/tailwind.min.css">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon.png">
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js" defer="defer"></script>
  </head>
  <body class="antialiased bg-body text-body font-body">
    <div>
      <div>
        <p class="mb-0 py-3 bg-lime-500 text-center">Want to learn how to build templates like this one? Visit <a href="https://www.pixelrocket.store">www.pixelrocket.store</a></p>
      </div>
      <div>
        <section class="bg-orange-50" x-data="{ mobileNavOpen: false }">
          <nav class="py-6 border-b">
            <div class="container mx-auto px-4">
              <div class="relative flex items-center justify-between"><a class="inline-block" href="index.html"><img class="h-8" src="images/logo-2.svg" alt=""></a>
                <ul class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                  <li class="mr-8"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">About Us</a></li>
                  <li class="mr-8"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">Pricing</a></li>
                  <li class="mr-8"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">Blog</a></li>
                  <li><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">Contact Us</a></li>
                </ul>
                <div class="flex items-center justify-end">
                  <div class="hidden md:block"><a class="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="register.html">Get Started</a></div>
                  <button class="md:hidden navbar-burger text-teal-900 hover:text-teal-800" x-on:click="mobileNavOpen = !mobileNavOpen">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.19995 23.2H26.7999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.19995 16H26.7999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.19995 8.79999H26.7999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div class="relative pt-18"><img class="hidden md:block absolute top-0 left-0 mt-28 w-32 lg:w-64 xl:w-auto" src="quantam-assets/headers/header-4-left-top.png" alt=""><img class="hidden md:block absolute top-0 right-0 mt-20 w-32 lg:w-64 xl:w-auto" src="quantam-assets/headers/header-4-right-top.png" alt="">
            <div class="container mx-auto px-4 relative">
              <div class="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
                <div class="flex mb-6 items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                    <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
                  </svg><span class="ml-2 text-sm font-medium">Powering Tomorrow</span>
                </div>
                <h1 class="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight mb-8 font-semibold">The Future of Green Energy</h1>
                <p class="text-lg text-gray-700 mb-10">Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p>
                <div class="flex flex-col sm:flex-row justify-center"><a class="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200" href="#">See our solutions</a><a class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="#">Get in touch</a></div>
              </div>
              <div class="flex -mx-4 items-end relative">
                <div class="w-1/3 xs:w-1/2 lg:w-auto px-4"><img class="block h-32 lg:h-48" src="quantam-assets/headers/header-4-bottom-lleft.png" alt=""></div>
                <div class="w-2/3 xs:w-1/2 lg:w-auto ml-auto px-4"><img class="block w-1/2 md:w-64 lg:w-auto ml-auto" src="quantam-assets/headers/header-4-bottom-right.png" alt=""></div>
                <div class="absolute bottom-0 left-0 w-full py-32 bg-gradient-to-t from-orange-50 to-transparent"></div>
              </div>
            </div>
          </div>
          <div class="hidden fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50" :class="{'block': mobileNavOpen, 'hidden': !mobileNavOpen}">
            <div class="fixed inset-0 bg-violet-900 opacity-20" x-on:click="mobileNavOpen = !mobileNavOpen"></div>
            <nav class="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
              <div class="flex items-center justify-between"><a class="inline-block" href="#"><img class="h-8" src="images/logo-2.svg" alt=""></a>
                <div class="flex items-center"><a class="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="#">Login</a>
                  <button x-on:click="mobileNavOpen = !mobileNavOpen">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2" stroke="#1D1F1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="pt-20 pb-12 mb-auto">
                <ul class="flex-col">
                  <li class="mb-6"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">About Us</a></li>
                  <li class="mb-6"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">Pricing</a></li>
                  <li class="mb-6"><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">Blog</a></li>
                  <li><a class="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">Contact Us</a></li>
                </ul>
              </div>
              <div class="flex items-center justify-between"><a class="inline-flex items-center text-lg font-medium text-teal-900" href="#"><span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.4 6.39999H25.6C26.92 6.39999 28 7.47999 28 8.79999V23.2C28 24.52 26.92 25.6 25.6 25.6H6.4C5.08 25.6 4 24.52 4 23.2V8.79999C4 7.47999 5.08 6.39999 6.4 6.39999Z" stroke="#646A69" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M28 8.8L16 17.2L4 8.8" stroke="#646A69" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></span>                  <span class="ml-2">Newsletter</span></a>
                <div class="flex items-center"><a class="inline-block mr-4" href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_282_7847)">
                        <path d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z" fill="#022C22"></path>
                      </g>
                    </svg></a>                  <a class="inline-block mr-4" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"></path>
                    </svg></a>                  <a class="inline-block" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path>
                    </svg></a></div>
              </div>
            </nav>
          </div>
        </section>
      </div>
      <section class="py-12 lg:py-24">
        <div class="container mx-auto px-4">
          <div class="max-w-lg mx-auto lg:max-w-none">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div class="max-w-lg">
                  <p class="text-2xl font-medium mb-20">Our commitment to green energy is paving the way for a cleaner, healthier planet. </p>
                  <div>
                    <div class="cursor-pointer text-gray-500 mb-0" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion" :class="{'text-black mb-8': accordion, 'text-gray-500 mb-0': !accordion }">
                      <div class="relative">
                        <div class="inline-block relative">
                          <h4 class="text-5xl">EV charging</h4>
                          <div class="relative transition duration-250" x-ref="container" :style="accordion ? 'width: ' + $refs.container.scrollWidth + 'px' : 'opacity: 0'" style="opacity: 0">
                            <div class="absolute bottom-0 left-0 -mb-6 transform translate-y-1/2 w-full border-b-2 border-gray-100"></div>
                          </div>
                        </div>
                      </div>
                      <div class="relative overflow-hidden h-0 pr-5 mt-12 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''" style="">
                        <p class="text-lg text-gray-600 mb-12">Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p><a class="absolute bottom-0 left-0 inline-block text-lg font-medium text-black hover:text-lime-600" href="#">Learn more</a>
                      </div>
                    </div>
                    <div class="cursor-pointer text-gray-500 mb-0" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion" :class="{'text-black mb-8': accordion, 'text-gray-500 mb-0': !accordion }">
                      <div class="relative">
                        <div class="inline-block relative">
                          <h4 class="text-5xl">Solar Energy</h4>
                          <div class="relative transition duration-250" x-ref="container" :style="accordion ? 'width: ' + $refs.container.scrollWidth + 'px' : 'opacity: 0'" style="opacity: 0">
                            <div class="absolute bottom-0 left-0 -mb-6 transform translate-y-1/2 w-full border-b-2 border-gray-100"></div>
                          </div>
                        </div>
                      </div>
                      <div class="relative overflow-hidden h-0 pr-5 mt-12 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''" style="">
                        <p class="text-lg text-gray-600 mb-12">Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p><a class="absolute bottom-0 left-0 inline-block text-lg font-medium text-black hover:text-lime-600" href="#">Learn more</a>
                      </div>
                    </div>
                    <div class="cursor-pointer text-gray-500 mb-0" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion" :class="{'text-black mb-8': accordion, 'text-gray-500 mb-0': !accordion }">
                      <div class="relative">
                        <div class="inline-block relative">
                          <h4 class="text-5xl">Wind Energy</h4>
                          <div class="relative transition duration-250" x-ref="container" :style="accordion ? 'width: ' + $refs.container.scrollWidth + 'px' : 'opacity: 0'" style="opacity: 0">
                            <div class="absolute bottom-0 left-0 -mb-6 transform translate-y-1/2 w-full border-b-2 border-gray-100"></div>
                          </div>
                        </div>
                      </div>
                      <div class="relative overflow-hidden h-0 pr-5 mt-12 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''" style="">
                        <p class="text-lg text-gray-600 mb-12">Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p><a class="absolute bottom-0 left-0 inline-block text-lg font-medium text-black hover:text-lime-600" href="#">Learn more</a>
                      </div>
                    </div>
                    <div class="cursor-pointer text-gray-500 mb-0" x-data="{ accordion: false }" x-on:click.prevent="accordion = !accordion" :class="{'text-black mb-8': accordion, 'text-gray-500 mb-0': !accordion }">
                      <div class="relative">
                        <div class="inline-block relative">
                          <h4 class="text-5xl">Hydropower</h4>
                          <div class="relative transition duration-250" x-ref="container" :style="accordion ? 'width: ' + $refs.container.scrollWidth + 'px' : 'opacity: 0'" style="opacity: 0">
                            <div class="absolute bottom-0 left-0 -mb-6 transform translate-y-1/2 w-full border-b-2 border-gray-100"></div>
                          </div>
                        </div>
                      </div>
                      <div class="relative overflow-hidden h-0 pr-5 mt-12 duration-500" x-ref="container" :style="accordion ? 'height: ' + $refs.container.scrollHeight + 'px' : ''" style="">
                        <p class="text-lg text-gray-600 mb-12">Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p><a class="absolute bottom-0 left-0 inline-block text-lg font-medium text-black hover:text-lime-600" href="#">Learn more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-4"><img class="block w-full lg:max-w-md h-full lg:ml-auto" src="quantam-assets/features/image-right.png" alt=""></div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 lg:py-24 bg-teal-900">
        <div class="container mx-auto px-4">
          <div class="text-center mb-20">
            <h2 class="font-heading text-6xl text-white mb-6">Our results</h2>
            <p class="text-lg text-white opacity-80">We are committed to a sustainable future</p>
          </div>
          <div class="max-w-md mx-auto lg:max-w-none">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div class="h-full py-10 px-5 xs:px-10 bg-white rounded-2xl shadow-md">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22"></rect>
                    <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22"></rect>
                    <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22"></rect>
                    <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22"></rect>
                    <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22"></rect>
                    <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22"></rect>
                    <rect x="26.1213" y="27.5356" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5356)" fill="#022C22"></rect>
                    <rect x="11.9792" y="13.3936" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3936)" fill="#022C22"></rect>
                  </svg>
                  <h5 class="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">5,000 Mwh</h5><span class="block mb-6 text-base lg:text-xl font-medium">Renewable Energy Generated</span>
                  <p class="text-gray-700">Our commitment to sustainability shines through as we proudly announce the generation of 5,000 megawatt-hours of renewable energy, contributing to a greener and more environmentally friendly future.</p>
                </div>
              </div>
              <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div class="h-full py-10 px-5 xs:px-10 bg-white rounded-2xl shadow-md">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 10.6667C20.6863 10.6667 18 13.353 18 16.6667C18 19.9805 20.6863 22.6667 24 22.6667C27.3137 22.6667 30 19.9805 30 16.6667C30 13.353 27.3137 10.6667 24 10.6667Z" fill="#022C22"></path>
                    <path d="M24 24.0001C17.6563 24.0001 13.2222 28.6949 12.6725 34.542C12.6374 34.9156 12.7613 35.2868 13.014 35.5644C13.2667 35.8419 13.6246 36.0001 14 36.0001H34C34.3753 36.0001 34.7332 35.8419 34.9859 35.5644C35.2386 35.2868 35.3626 34.9156 35.3274 34.542C34.7778 28.6949 30.3437 24.0001 24 24.0001Z" fill="#022C22"></path>
                  </svg>
                  <h5 class="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">10,000+</h5><span class="block mb-6 text-base lg:text-xl font-medium">Customers Served</span>
                  <p class="text-gray-700">With gratitude, we celebrate the trust of over 10,000 satisfied customers. Your confidence fuels our dedication to providing exceptional service and forging lasting partnerships.</p>
                </div>
              </div>
              <div class="w-full lg:w-1/3 px-4">
                <div class="h-full py-10 px-5 xs:px-10 bg-white rounded-2xl shadow-md">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M13.3333 12C12.597 12 12 12.597 12 13.3333V14.6667C12 20.5577 16.7756 25.3333 22.6667 25.3333V34.6667C22.6667 35.403 23.2636 36 24 36C24.7364 36 25.3333 35.403 25.3333 34.6667V29.3333C31.2244 29.3333 36 24.5577 36 18.6667V17.3333C36 16.597 35.403 16 34.6667 16H33.3333C29.961 16 26.9541 17.565 24.9994 20.0084C23.8183 15.4035 19.6399 12 14.6667 12H13.3333Z" fill="#022C22"></path>
                  </svg>
                  <h5 class="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">15%</h5><span class="block mb-6 text-base lg:text-xl font-medium">Avg. Energy Saved</span>
                  <p class="text-gray-700">Embracing efficiency, we are delighted to report an average energy savings of 15%. This milestone reflects our ongoing efforts to optimize resources and promote a more sustainable energy landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 lg:py-24 overflow-hidden" x-data="{ activeSlide: 1, slideCount: 2 }">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center mb-12 md:mb-20 -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div>
                <h1 class="font-heading text-5xl sm:text-6xl mb-4">Meet our experts</h1>
                <p class="text-gray-700">Our team boasts top green energy experts, driving innovation in sustainability.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-4">
              <div class="flex items-center justify-end">
                <button class="inline-block text-gray-800 mr-1" x-on:click.prevent="activeSlide = 1">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <path d="M17.5 29.1667L8.33333 20.0001L17.5 10.8334" stroke="currentColor" stroke-width="1.5"></path>
                      <path d="M8.33329 20L31.6666 20" stroke="currentColor" stroke-width="1.5"></path>
                    </g>
                  </svg>
                </button>
                <button class="inline-block text-black hover:text-lime-500" x-on:click.prevent="activeSlide = 2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 10.8333L31.6667 19.9999L22.5 29.1666" stroke="currentColor" stroke-width="1.5"></path>
                    <path d="M31.6666 20H8.33331" stroke="currentColor" stroke-width="1.5"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="flex transition-transform duration-1000 ease-in-out" :style="'transform: translateX(-' + (activeSlide - 1) * 100.5 + '%)'" style="transform: translateX(-0%)">
            <div class="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden">
              <div class="absolute bottom-0 left-0 w-full p-4">
                <div class="p-4 bg-white rounded-xl"><span class="block font-medium">Jenny Wilson</span>                                  <span class="text-sm text-gray-700">Senior Sustainability Consultant</span></div>
              </div><img class="block w-full h-full object-cover rounded-2xl" src="quantam-assets/team/photo-worker-1.png" alt="">
            </div>
            <div class="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden">
              <div class="absolute bottom-0 left-0 w-full p-4">
                <div class="p-4 bg-white rounded-xl"><span class="block font-medium">Cameron Williamson</span>                                  <span class="text-sm text-gray-700">Senior Sustainability Consultant</span></div>
              </div><img class="block w-full h-full object-cover rounded-2xl" src="quantam-assets/team/photo-worker-2.png" alt="">
            </div>
            <div class="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden">
              <div class="absolute bottom-0 left-0 w-full p-4">
                <div class="p-4 bg-white rounded-xl"><span class="block font-medium">Courtney Henry</span>                                  <span class="text-sm text-gray-700">Energy Analysts</span></div>
              </div><img class="block w-full h-full object-cover rounded-2xl" src="quantam-assets/team/photo-worker-3.png" alt="">
            </div>
            <div class="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden">
              <div class="absolute bottom-0 left-0 w-full p-4">
                <div class="p-4 bg-white rounded-xl"><span class="block font-medium">Dianne Russell</span>                                  <span class="text-sm text-gray-700">Senior Renewable Energy Engineer</span></div>
              </div><img class="block w-full h-full object-cover rounded-2xl" src="quantam-assets/team/photo-worker-4.png" alt="">
            </div>
            <div class="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden">
              <div class="absolute bottom-0 left-0 w-full p-4">
                <div class="p-4 bg-white rounded-xl"><span class="block font-medium">Jenny Wilson</span>                                  <span class="text-sm text-gray-700">Senior Sustainability Consultant</span></div>
              </div><img class="block w-full h-full object-cover rounded-2xl" src="quantam-assets/team/photo-worker-1.png" alt="">
            </div>
            <div class="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden">
              <div class="absolute bottom-0 left-0 w-full p-4">
                <div class="p-4 bg-white rounded-xl"><span class="block font-medium">Cameron Williamson</span>                                  <span class="text-sm text-gray-700">Senior Sustainability Consultant</span></div>
              </div><img class="block w-full h-full object-cover rounded-2xl" src="quantam-assets/team/photo-worker-2.png" alt="">
            </div>
            <div class="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden">
              <div class="absolute bottom-0 left-0 w-full p-4">
                <div class="p-4 bg-white rounded-xl"><span class="block font-medium">Courtney Henry</span>                                  <span class="text-sm text-gray-700">Energy Analysts</span></div>
              </div><img class="block w-full h-full object-cover rounded-2xl" src="quantam-assets/team/photo-worker-3.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-12 lg:py-24" x-data="{ showContent: false }">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center justify-between mb-20 -mx-4">
            <div class="w-full sm:w-1/2 px-4 mb-10 sm:mb-0">
              <h1 class="font-heading text-5xl sm:text-6xl">Blog</h1>
            </div>
            <div class="w-full sm:w-1/2 px-4 sm:text-right"><a class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-300" x-on:click.prevent="showContent = true" :class="{'hidden': showContent}" href="#"><span class="mr-2">See all</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.75 10H15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></a></div>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0">
              <div><img class="block w-full mb-8" src="quantam-assets/blog/image-lg-post.png" alt="">
                <div class="mb-6"><a class="inline-block mr-2 px-2 text-sm font-medium hover:bg-gray-50 border rounded-full" href="#">Solar Power</a>                                  <a class="inline-block px-2 text-sm font-medium hover:bg-gray-50 border rounded-full" href="#">Solutions</a></div><a class="block group max-w-2xl" href="#">
                  <h3 class="text-3xl font-medium group-hover:text-teal-600 transition duration-200 mb-4">Harnessing the Power of the Sun: Exploring the World of Solar Energy</h3>
                  <p class="text-lg text-gray-700 mb-6">Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental...</p>
                  <div class="flex items-center"><img class="w-10 h-10 rounded-full" src="quantam-assets/blog/avatar-1.png" alt="">
                    <div class="flex items-center ml-4"><span class="text-sm font-medium">Leslie Alexander</span>                                          <span class="mx-2 sm:mx-4">
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                        </svg></span>                                          <span class="text-sm font-medium">9 min read</span></div>
                  </div></a>
              </div>
            </div>
            <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div class="max-w-lg"><a class="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#"><img class="block" src="quantam-assets/blog/image-sm-1.png" alt="">
                  <div class="mt-6 sm:mt-0 sm:ml-8">
                    <h3 class="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts</h3>
                    <div class="flex items-center"><img class="w-8 h-8 rounded-full" src="quantam-assets/blog/circle-avatar-1.png" alt="">
                      <div class="flex items-center ml-4"><span class="text-sm font-medium">Wade Warren</span>                                              <span class="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg></span>                                              <span class="text-sm font-medium">7 min read</span></div>
                    </div>
                  </div></a>                              <a class="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#"><img class="block" src="quantam-assets/blog/image-sm-2.png" alt="">
                  <div class="mt-6 sm:mt-0 sm:ml-8">
                    <h3 class="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">From Trash to Treasure: The Promising World of Biomass Energy</h3>
                    <div class="flex items-center"><img class="w-8 h-8 rounded-full" src="quantam-assets/blog/circle-avatar-2.png" alt="">
                      <div class="flex items-center ml-4"><span class="text-sm font-medium">Jenny Wilson</span>                                              <span class="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg></span>                                              <span class="text-sm font-medium">7 min read</span></div>
                    </div>
                  </div></a>                              <a class="flex flex-wrap sm:flex-nowrap group items-center" href="#"><img class="block" src="quantam-assets/blog/image-sm-3.png" alt="">
                  <div class="mt-6 sm:mt-0 sm:ml-8">
                    <h3 class="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">Hydrogen: Fueling the Green Energy Revolution</h3>
                    <div class="flex items-center"><img class="w-8 h-8 rounded-full" src="quantam-assets/blog/circle-avatar-3.png" alt="">
                      <div class="flex items-center ml-4"><span class="text-sm font-medium">Leslie Alexander</span>                                              <span class="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg></span>                                              <span class="text-sm font-medium">5 min read</span></div>
                    </div>
                  </div></a></div>
            </div>
          </div>
          <div class="hidden flex flex-wrap mt-16 -mx-4" :class="{'hidden': !showContent}">
            <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div class="max-w-lg"><a class="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#"><img class="block" src="quantam-assets/blog/image-sm-1.png" alt="">
                  <div class="mt-6 sm:mt-0 sm:ml-8">
                    <h3 class="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts</h3>
                    <div class="flex items-center"><img class="w-8 h-8 rounded-full" src="quantam-assets/blog/circle-avatar-1.png" alt="">
                      <div class="flex items-center ml-4"><span class="text-sm font-medium">Wade Warren</span>                                              <span class="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg></span>                                              <span class="text-sm font-medium">7 min read</span></div>
                    </div>
                  </div></a>                              <a class="flex flex-wrap sm:flex-nowrap group items-center" href="#"><img class="block" src="quantam-assets/blog/image-sm-2.png" alt="">
                  <div class="mt-6 sm:mt-0 sm:ml-8">
                    <h3 class="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">From Trash to Treasure: The Promising World of Biomass Energy</h3>
                    <div class="flex items-center"><img class="w-8 h-8 rounded-full" src="quantam-assets/blog/circle-avatar-2.png" alt="">
                      <div class="flex items-center ml-4"><span class="text-sm font-medium">Jenny Wilson</span>                                              <span class="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg></span>                                              <span class="text-sm font-medium">7 min read</span></div>
                    </div>
                  </div></a></div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-lg"><a class="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#"><img class="block" src="quantam-assets/blog/image-sm-1.png" alt="">
                  <div class="mt-6 sm:mt-0 sm:ml-8">
                    <h3 class="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts</h3>
                    <div class="flex items-center"><img class="w-8 h-8 rounded-full" src="quantam-assets/blog/circle-avatar-1.png" alt="">
                      <div class="flex items-center ml-4"><span class="text-sm font-medium">Wade Warren</span>                                              <span class="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg></span>                                              <span class="text-sm font-medium">7 min read</span></div>
                    </div>
                  </div></a>                              <a class="flex flex-wrap sm:flex-nowrap group items-center" href="#"><img class="block" src="quantam-assets/blog/image-sm-2.png" alt="">
                  <div class="mt-6 sm:mt-0 sm:ml-8">
                    <h3 class="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">From Trash to Treasure: The Promising World of Biomass Energy</h3>
                    <div class="flex items-center"><img class="w-8 h-8 rounded-full" src="quantam-assets/blog/circle-avatar-2.png" alt="">
                      <div class="flex items-center ml-4"><span class="text-sm font-medium">Jenny Wilson</span>                                              <span class="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg></span>                                              <span class="text-sm font-medium">7 min read</span></div>
                    </div>
                  </div></a></div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-12 lg:py-24 xl:py-32 bg-teal-900 relative overflow-hidden"><img class="absolute top-0 left-0 w-full h-full" src="quantam-assets/cta/bg-light-lines.png" alt="">
        <div class="container mx-auto px-4 relative">
          <div class="max-w-6xl mx-auto text-center">
            <h1 class="font-heading text-4xl sm:text-6xl md:text-7xl text-white tracking-sm mb-16">Want to learn how to build templates like this one?</h1><a class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" href="https://www.pixelrocket.store">Visit Pixel Rocket</a>
          </div>
        </div>
      </section>
      <div>
        <section class="relative py-12 lg:py-24 bg-orange-50 overflow-hidden"><img class="absolute bottom-0 left-0" src="quantam-assets/footer/waves-lines-left-bottom.png" alt="">
          <div class="container px-4 mx-auto relative">
            <div class="flex flex-wrap mb-16 -mx-4">
              <div class="w-full lg:w-2/12 xl:w-2/12 px-4 mb-16 lg:mb-0"><a class="inline-block mb-4" href="#"><img src="images/logo-2.svg" alt=""></a></div>
              <div class="w-full md:w-7/12 lg:w-6/12 px-4 mb-16 lg:mb-0">
                <div class="flex flex-wrap -mx-4">
                  <div class="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                    <h3 class="mb-6 font-bold">Platform</h3>
                    <ul>
                      <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Solutions</a></li>
                      <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">How it works</a></li>
                      <li><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Pricing</a></li>
                    </ul>
                  </div>
                  <div class="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                    <h3 class="mb-6 font-bold">Resources</h3>
                    <ul>
                      <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Blog</a></li>
                      <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Help Center</a></li>
                      <li><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Support</a></li>
                    </ul>
                  </div>
                  <div class="w-full xs:w-1/3 px-4">
                    <h3 class="mb-6 font-bold">Company</h3>
                    <ul>
                      <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">About</a></li>
                      <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Our Mission</a></li>
                      <li class="mb-4"><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Careers</a></li>
                      <li><a class="inline-block text-gray-600 hover:text-lime-500 font-medium" href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-5/12 lg:w-4/12 px-4">
                <div class="max-w-sm p-8 bg-teal-900 rounded-2xl mx-auto md:mr-0">
                  <h5 class="text-xl font-medium text-white mb-4">Your Source for Green Energy Updates</h5>
                  <p class="text-sm text-white opacity-80 leading-normal mb-10">Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.</p>
                  <div class="flex flex-col">
                    <input class="h-12 w-full px-4 py-1 placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full" type="email" placeholder="Your e-mail..."><a class="h-12 inline-flex mt-3 py-1 px-5 items-center justify-center font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" href="#">Get in touch</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mb-3 justify-between">
              <div class="flex items-center mb-3"><a class="inline-block mr-4 text-black hover:text-lime-500" href="#">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_230_4832)">
                      <path d="M11.5481 19.9999V10.8776H14.6088L15.068 7.32147H11.5481V5.05138C11.5481 4.02211 11.8327 3.32067 13.3104 3.32067L15.1919 3.3199V0.139138C14.8665 0.0968538 13.7496 -9.15527e-05 12.4496 -9.15527e-05C9.735 -9.15527e-05 7.87654 1.65687 7.87654 4.69918V7.32147H4.80652V10.8776H7.87654V19.9999H11.5481Z" fill="currentColor"></path>
                    </g>
                  </svg></a>                <a class="inline-block mr-4 text-black hover:text-lime-500" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"></path>
                  </svg></a>                <a class="inline-block text-black hover:text-lime-500" href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path>
                  </svg></a></div>
              <p class="text-sm text-gray-500 mb-3">Tailwind Template created by <a href="https://www.pixelrocket.store">Pixel Rocket</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  
</body></html>
\`\`\`
`
const template4 = `
\`\`\`html
<html lang="en" style="scroll-behavior: smooth;"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jamie Portfolio</title>
        <meta name="description" content="">
        <link rel="shortcut icon" href="./assets/logo.png" type="image/x-icon">

        <!-- Open Graph / Facebook -->
        <meta property="og:title" content="Title of the project">
        <meta property="og:description" content="">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://github.com/PaulleDemon">
        <!--Replace with the current website url-->
        <meta property="og:image" content="">

        <!-- <link rel="stylesheet" href="../../tailwind-css/tailwind-runtime.css" /> -->
        <link rel="stylesheet" href="./css/tailwind-build.css">
        <link rel="stylesheet" href="css/index.css">

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ==" crossorigin="anonymous" referrerpolicy="no-referrer">
    </head>
    <body class="tw-flex tw-min-h-[100dvh] tw-flex-col tw-bg-[#fff] tw-font-mono" style="">
        <header class="tw-absolute tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-bg-opacity-0 tw-px-[5%] max-lg:tw-mr-auto max-lg:tw-px-4 lg:tw-justify-around">
            <a class="tw-h-[50px] tw-p-[4px] tw-text-2xl tw-font-medium" href="">
                Jamie
            </a>
            <div class="collapsible-header animated-collapse max-lg:tw-shadow-md" id="collapsed-header-items">
                <div class="tw-flex tw-h-full tw-w-max tw-gap-5 tw-text-base tw-text-black max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-place-items-end max-lg:tw-gap-5 lg:tw-mx-auto lg:tw-place-items-center">
                    <a class="header-links" href=""> About Me </a>
                    <a class="header-links" href="#pricing"> Work </a>
                    <a class="header-links" href=""> Blog </a>
                    <a class="header-links" href=""> Contact me </a>
                </div>
                <div class="tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center">
                    <a href="https://tally.so/r/woO0Kx" aria-label="signup" class="tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-rounded-full tw-bg-black tw-p-1 tw-pl-4 tw-text-white">
                        <span>Get in touch</span>
                        <div class="tw-flex tw-h-[30px] tw-w-[30px] tw-place-content-center tw-place-items-center tw-rounded-full tw-bg-white tw-font-semibold tw-text-black">
                            <i class="bi bi-arrow-up-right"></i>
                        </div>
                    </a>
                </div>
            </div>
            <button class="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-black lg:tw-hidden" onclick="toggleHeader()" aria-label="menu" id="collapse-btn"></button>
        </header>

        <section class="tw-relative tw-flex tw-min-h-[100dvh] tw-w-full tw-max-w-[100dvw] tw-flex-col tw-overflow-hidden max-lg:tw-p-4 max-md:tw-mt-[50px]">
            <div class="tw-flex tw-h-full tw-min-h-[100dvh] tw-w-full tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-flex-col">
                <div class="tw-flex tw-flex-col tw-place-content-center">
                    <div class="tw-flex tw-flex-wrap tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[85px] max-lg:tw-text-4xl max-md:tw-leading-snug">
                        <span class="reveal-hero-text tw-bg-green-200 tw-p-1 tw-px-6" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                            Jamie
                        </span>
                        <br>
                        <span class="reveal-hero-text" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                            Designer. AI engineer</span>
                    </div>
                    <div class="reveal-hero-text tw-mt-2 tw-max-w-[450px] tw-p-2 tw-text-justify max-lg:tw-max-w-full" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Error adipisci corrupti accusamus reiciendis
                        similique assumenda nostrum fuga dicta vitae ipsum.
                    </div>

                    <div class="reveal-hero-text tw-mt-4 tw-flex tw-place-items-center tw-gap-4 tw-overflow-hidden tw-p-2" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        <a href="https://tally.so/r/woO0Kx" aria-label="signup" class="tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-rounded-full tw-border-[1px] tw-border-solid tw-border-black tw-bg-white tw-p-1 tw-pl-4 tw-text-black tw-transition-colors tw-duration-[0.5s] hover:tw-bg-black hover:tw-text-white">
                            <span>Get in touch</span>
                            <div class="tw-flex tw-h-[30px] tw-w-[30px] tw-place-content-center tw-place-items-center tw-rounded-full tw-bg-black tw-font-semibold tw-text-white">
                                <i class="bi bi-arrow-up-right"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="tw-flex tw-w-full tw-max-w-[50%] tw-place-content-center tw-place-items-center tw-overflow-hidden max-lg:tw-max-w-[unset]">
                    <div class="tw-relative tw-flex tw-max-h-[580px] tw-min-h-[450px] tw-min-w-[350px] tw-max-w-[650px] tw-overflow-hidden max-lg:tw-h-fit max-lg:tw-max-h-[320px] max-lg:tw-min-h-[180px] max-lg:tw-w-[320px] max-lg:tw-min-w-[320px]">
                        <img src="./assets/images/home/man.jpg" alt="app" class="reveal-hero-img tw-z-[1] tw-h-full tw-w-full tw-object-contain" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    </div>
                </div>
            </div>
        </section>

        <section class="tw-relative tw-flex tw-min-h-[100dvh] tw-w-full tw-max-w-[100dvw] tw-flex-col tw-place-items-center tw-overflow-hidden tw-p-6 tw-py-5">
            <h3 class="reveal-up tw-text-6xl tw-font-medium max-lg:tw-text-3xl" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                Past works
            </h3>
            <div class="reveal-up tw-my-4 tw-h-[1px] tw-w-[80%] tw-bg-black" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;"></div>
            <div class="tw-mt-8 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3">
                <div class="reveal-up tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg tw-bg-[#f3f3f3b4] tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px]" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div class="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                            <img src="./assets/images/home/design.jpg" class="tw-h-full tw-w-full tw-object-cover" alt="design">
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col tw-gap-2">
                        <h3 class="tw-text-xl tw-font-medium">Lorem</h3>
                        <p class="tw-text-gray-600">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Beatae, vero.
                        </p>
                        <a href="http://" class="tw-mt-4">
                            <span>Learn more</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="reveal-up tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg tw-bg-[#f3f3f3b4] tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px]" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div class="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                            <img src="./assets/images/home/editing.jpg" class="tw-h-full tw-w-full tw-object-cover" alt="design">
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col tw-gap-2">
                        <h3 class="tw-text-xl tw-font-medium">Fortune 500</h3>
                        <p class="tw-text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eum dolorum unde voluptatibus fuga soluta
                            consequuntur!
                        </p>
                        <a href="http://" class="tw-mt-4">
                            <span>Learn more</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="reveal-up tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg tw-bg-[#f3f3f3b4] tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px]" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div class="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                            <img src="./assets/images/home/photography.jpg" class="tw-h-full tw-w-full tw-object-cover" alt="design">
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col tw-gap-2">
                        <h3 class="tw-text-xl tw-font-medium">Apple</h3>
                        <p class="tw-text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aut dolorem, optio totam perspiciatis,
                            perferendis assumenda nulla eaque autem ad magnam
                            quisquam voluptates dolor nostrum quae odit numquam
                            voluptas in atque.
                        </p>
                        <a href="http://" class="tw-mt-4">
                            <span>Learn more</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="reveal-up tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg tw-bg-[#f3f3f3b4] tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px]" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div class="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                            <img src="./assets/images/home/forest.jpg" class="tw-h-full tw-w-full tw-object-cover" alt="design">
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col tw-gap-2">
                        <h3 class="tw-text-xl tw-font-medium">Amazon</h3>
                        <p class="tw-text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa, tempora.
                        </p>
                        <a href="http://" class="tw-mt-4">
                            <span>Learn more</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="reveal-up tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg tw-bg-[#f3f3f3b4] tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px]" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div class="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                            <img src="./assets/images/home/mountain.jpg" class="tw-h-full tw-w-full tw-object-cover" alt="design">
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col tw-gap-2">
                        <h3 class="tw-text-xl tw-font-medium">Ipsum</h3>
                        <p class="tw-text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Velit, voluptates.
                        </p>
                        <a href="http://" class="tw-mt-4">
                            <span>Learn more</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="reveal-up tw-flex tw-h-fit tw-w-[450px] tw-break-inside-avoid tw-flex-col tw-gap-2 tw-rounded-lg tw-bg-[#f3f3f3b4] tw-p-4 tw-shadow-lg max-lg:tw-w-full max-lg:tw-max-w-[400px]" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div class="tw-h-[300px] tw-w-full tw-overflow-hidden tw-rounded-lg">
                            <img src="./assets/images/home/mountain.jpg" class="tw-h-full tw-w-full tw-object-cover" alt="design">
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col tw-gap-2">
                        <h3 class="tw-text-xl tw-font-medium">Google</h3>
                        <p class="tw-text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Velit, voluptates.
                        </p>
                        <a href="http://" class="tw-mt-4">
                            <span>Learn more</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="tw-relative tw-mt-10 tw-flex tw-min-h-[100dvh] tw-w-full tw-max-w-[100dvw] tw-flex-col tw-place-content-center tw-place-items-center lg:tw-p-6">
            <div class="tw-flex tw-h-full tw-w-full tw-justify-around tw-gap-8 tw-rounded-xl tw-bg-[#e7e6e685] tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col">
                <div class="reveal-up tw-flex tw-h-full tw-w-[50%] tw-place-content-center max-lg:tw-w-full lg:tw-sticky lg:tw-top-[20%]" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <h3 class="tw-text-center tw-text-6xl tw-font-medium max-lg:tw-text-3xl">
                        What my colleagues say
                    </h3>
                </div>

                <div class="reveal-up tw-flex tw-w-[30%] tw-flex-col tw-place-items-center tw-gap-4 tw-p-2 max-lg:tw-w-full" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <div class="tw-flex tw-h-fit tw-w-full tw-flex-col tw-gap-4 tw-border-2 tw-border-black tw-bg-white tw-p-4">
                        <div class="tw-flex tw-w-full tw-place-items-center tw-gap-4 tw-p-2">
                            <div class="tw-flex tw-h-[60px] tw-w-[60px] tw-overflow-hidden tw-rounded-full">
                                <img src="./assets/images/people/women.jpg" alt="women" class="tw-h-full tw-w-full tw-object-cover">
                            </div>

                            <div>
                                <p class="tw-text-xl tw-font-semibold">Lamie</p>
                                <p class="tw-text-lg tw-text-gray-600">
                                    Product manager, Apple
                                </p>
                            </div>
                        </div>
                        <div class="tw-text-justify tw-text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere voluptates pariatur, sequi dignissimos
                            aliquam, amet dolorem nobis deleniti qui nulla
                            accusamus voluptatibus quo impedit eligendi? Vel
                            perferendis nobis aut quasi?
                        </div>
                    </div>

                    <div class="tw-flex tw-h-fit tw-w-full tw-flex-col tw-gap-4 tw-border-2 tw-border-black tw-bg-white tw-p-4">
                        <div class="tw-flex tw-w-full tw-place-items-center tw-gap-4 tw-p-2">
                            <div class="tw-flex tw-h-[60px] tw-w-[60px] tw-overflow-hidden tw-rounded-full">
                                <img src="./assets/images/people/man.jpg" alt="women" class="tw-h-full tw-w-full tw-object-cover">
                            </div>

                            <div>
                                <p class="tw-text-xl tw-font-semibold">Joy</p>
                                <p class="tw-text-lg tw-text-gray-600">
                                    Head of AI, Apple
                                </p>
                            </div>
                        </div>
                        <div class="tw-text-justify tw-text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus, suscipit vitae doloribus et
                            nesciunt officiis nisi laboriosam odit expedita
                            impedit ipsum ea hic optio odio in, esse quibusdam
                            doloremque sint explicabo nobis iste, aspernatur
                            voluptates facere ipsa? Tempora, in. Dignissimos?
                        </div>
                    </div>

                    <div class="tw-flex tw-h-fit tw-w-full tw-flex-col tw-gap-4 tw-border-2 tw-border-black tw-bg-white tw-p-4">
                        <div class="tw-flex tw-w-full tw-place-items-center tw-gap-4 tw-p-2">
                            <div class="tw-flex tw-h-[60px] tw-w-[60px] tw-overflow-hidden tw-rounded-full">
                                <img src="./assets/images/people/man2.jpg" alt="women" class="tw-h-full tw-w-full tw-object-cover">
                            </div>

                            <div>
                                <p class="tw-text-xl tw-font-semibold">Ben</p>
                                <p class="tw-text-lg tw-text-gray-600">
                                    Senior manager, Google
                                </p>
                            </div>
                        </div>
                        <div class="tw-text-justify tw-text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta doloremque alias accusamus veniam sequi
                            vero ex! Necessitatibus molestias, consectetur fuga
                            quasi dolorum vitae mollitia sequi deserunt itaque
                            optio rem maxime?
                        </div>
                    </div>

                    <div class="tw-flex tw-h-fit tw-w-full tw-flex-col tw-gap-4 tw-border-2 tw-border-black tw-bg-white tw-p-4">
                        <div class="tw-flex tw-w-full tw-place-items-center tw-gap-4 tw-p-2">
                            <div class="tw-flex tw-h-[60px] tw-w-[60px] tw-overflow-hidden tw-rounded-full">
                                <img src="./assets/images/people/women.jpg" alt="women" class="tw-h-full tw-w-full tw-object-cover">
                            </div>

                            <div>
                                <p class="tw-text-xl tw-font-semibold">Laura</p>
                                <p class="tw-text-lg tw-text-gray-600">
                                    UI &amp; UX, Apple
                                </p>
                            </div>
                        </div>
                        <div class="tw-text-justify tw-text-gray-800">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere voluptates pariatur, sequi dignissimos
                            aliquam, amet dolorem nobis deleniti qui nulla
                            accusamus voluptatibus quo impedit eligendi? Vel
                            perferendis nobis aut quasi?
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tw-relative tw-flex tw-min-h-[80dvh] tw-w-full tw-max-w-[100dvw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6" id="">
            <div class="tw-mt-8 tw-flex tw-flex-col tw-place-items-center tw-gap-5">
                <div class="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <h2 class="tw-text-4xl tw-font-semibold">
                        Work with an expert
                    </h2>
                </div>
                <div class="tw-mt-6 tw-flex tw-max-w-[60%] tw-flex-wrap tw-place-content-center tw-gap-2 max-lg:tw-flex-col">
                    <div class="reveal-up tw-flex tw-h-[150px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        <!-- <img src="./assets/images/home/sample.jpg" 
                                alt="feature1"> -->
                        <div class="tw-flex tw-gap-1">
                            <i class="bi bi-boombox-fill tw-text-2xl"></i>
                            <h3 class="tw-text-2xl tw-font-semibold">
                                Frontend developer
                            </h3>
                        </div>
                        <div class="tw-text-[#595959]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </div>
                    </div>
                    <div class="reveal-up tw-flex tw-h-[150px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        <!-- <img src="./assets/images/home/sample.jpg" 
                                alt="feature1"> -->
                        <div class="tw-flex tw-gap-1">
                            <i class="bi bi-0-circle-fill tw-text-2xl"></i>
                            <h3 class="tw-text-2xl tw-font-semibold">
                                ML &amp; AI
                            </h3>
                        </div>
                        <div class="tw-text-[#595959]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </div>
                    </div>
                    <div class="reveal-up tw-flex tw-h-[150px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        <!-- <img src="./assets/images/home/sample.jpg" 
                                alt="feature1"> -->
                        <div class="tw-flex tw-gap-1">
                            <i class="bi bi-0-square-fill tw-text-2xl"></i>
                            <h3 class="tw-text-2xl tw-font-semibold">
                                Backend developer
                            </h3>
                        </div>
                        <div class="tw-text-[#595959]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </div>
                    </div>
                    <div class="reveal-up tw-flex tw-h-[150px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        <!-- <img src="./assets/images/home/sample.jpg" 
                                alt="feature1"> -->
                        <div class="tw-flex tw-gap-1">
                            <i class="bi bi-database-fill tw-text-2xl"></i>
                            <h3 class="tw-text-2xl tw-font-semibold">
                                Database
                            </h3>
                        </div>
                        <div class="tw-text-[#595959]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </div>
                    </div>
                    <div class="reveal-up tw-flex tw-h-[150px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        <!-- <img src="./assets/images/home/sample.jpg" 
                                alt="feature1"> -->
                        <div class="tw-flex tw-gap-1">
                            <i class="bi bi-cake-fill tw-text-2xl"></i>
                            <h3 class="tw-text-2xl tw-font-semibold">Redis</h3>
                        </div>
                        <div class="tw-text-[#595959]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </div>
                    </div>
                    <div class="reveal-up tw-flex tw-h-[150px] tw-w-[350px] tw-flex-col tw-gap-2 tw-p-4" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                        <!-- <img src="./assets/images/home/sample.jpg" 
                                alt="feature1"> -->
                        <div class="tw-flex tw-gap-1">
                            <i class="bi bi-shield-fill tw-text-2xl"></i>
                            <h3 class="tw-text-2xl tw-font-semibold">Figma</h3>
                        </div>
                        <div class="tw-text-[#595959]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </div>
                    </div>
                </div>

                <a href="https://tally.so/r/woO0Kx" aria-label="signup" class="reveal-up tw-flex tw-h-[40px] tw-place-items-center tw-gap-2 tw-rounded-full tw-bg-black tw-p-1 tw-pl-4 tw-text-white" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%); opacity: 1;">
                    <span>Get in touch</span>
                    <div class="tw-flex tw-h-[30px] tw-w-[30px] tw-place-content-center tw-place-items-center tw-rounded-full tw-bg-white tw-font-semibold tw-text-black">
                        <i class="bi bi-arrow-up-right"></i>
                    </div>
                </a>
            </div>
        </section>

        <section class="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-place-items-center tw-p-[2%] max-lg:tw-p-3">
            <h3 class="reveal-up tw-text-center tw-text-4xl tw-font-medium max-md:tw-text-2xl" style="translate: none; rotate: none; scale: none; transform: translate(0px, 100%); opacity: 0;">
                Read my articles for more insights ✨
            </h3>
            <!-- pricing -->
            <div class="reveal-up tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-10 max-lg:tw-flex-col" style="translate: none; rotate: none; scale: none; transform: translate(0px, 100%); opacity: 0;">
                <a href="" class="tw-flex tw-h-[400px] tw-w-[350px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-bg-[#edecec79] tw-p-4 tw-shadow-xl max-lg:tw-w-[300px]">
                    <div class="tw-h-[200px] tw-w-full tw-overflow-hidden tw-rounded-md">
                        <img src="./assets/images/home/forest.jpg" alt="article image" class="tw-h-full tw-w-full tw-object-cover" srcset="">
                    </div>
                    <h3 class="tw-text-2xl tw-font-semibold max-md:tw-text-xl">
                        Article 1
                    </h3>
                    <p class="tw-mt-2 tw-text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i class="bi bi-arrow-right"></i>
                    </span>
                </a>
                <a href="" class="tw-flex tw-h-[400px] tw-w-[350px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-bg-[#edecec79] tw-p-4 tw-shadow-xl max-lg:tw-w-[300px]">
                    <div class="tw-h-[200px] tw-w-full tw-overflow-hidden tw-rounded-md">
                        <img src="./assets/images/home/mountain.jpg" alt="article image" class="tw-h-full tw-w-full tw-object-cover" srcset="">
                    </div>
                    <h3 class="tw-text-2xl tw-font-semibold max-md:tw-text-xl">
                        Article 2
                    </h3>
                    <p class="tw-mt-2 tw-text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i class="bi bi-arrow-right"></i>
                    </span>
                </a>
                <a href="" class="tw-flex tw-h-[400px] tw-w-[350px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-bg-[#edecec79] tw-p-4 tw-shadow-xl max-lg:tw-w-[300px]">
                    <div class="tw-h-[200px] tw-w-full tw-overflow-hidden tw-rounded-md">
                        <img src="./assets/images/home/photography.jpg" alt="article image" class="tw-h-full tw-w-full tw-object-cover" srcset="">
                    </div>
                    <h3 class="tw-text-2xl tw-font-semibold max-md:tw-text-xl">
                        Article 3
                    </h3>
                    <p class="tw-mt-2 tw-text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i class="bi bi-arrow-right"></i>
                    </span>
                </a>
            </div>
        </section>

        <hr class="tw-mt-4">

        <footer class="tw-mt-auto tw-flex tw-min-h-[100px] tw-w-full tw-place-content-around tw-place-items-center tw-gap-3 tw-p-[2%] tw-px-[10%] tw-text-black max-md:tw-flex-col">
            <div class="tw-flex tw-gap-6 tw-text-2xl">
                <a href="" aria-label="Github">
                    <i class="bi bi-github"></i>
                </a>
                <a href="https://twitter.com/@pauls_freeman" aria-label="Twitter">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="https://stackoverflow.com/" class="tw-h-[40px] tw-w-[40px]" aria-label="stackoverflow">
                    <i class="bi bi-stack-overflow"></i>
                </a>
            </div>
        </footer>
    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js" integrity="sha512-B1lby8cGcAUU3GR+Fd809/ZxgHbfwJMp0jLTVfHiArTuUt++VqSlJpaJvhNtRf3NERaxDNmmxkdx2o+aHd4bvw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js" integrity="sha512-AY2+JxnBETJ0wcXnLPCcZJIJx0eimyhz3OJ55k2Jx4RtYC+XdIi2VtJQ+tP3BaTst4otlGG1TtPJ9fKrAUnRdQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="./index.js"></script>

</body></html>
\`\`\`
`
const template5 = `
\`\`\`html
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      Agencia - Creative Landing Page HTML5 Template using Tailwind CSS
    </title>
    <link rel="stylesheet" href="output.css">
  </head>
  <body>
    <header>
      <nav class="flex items-center justify-between p-6 container mx-auto">
        <!-- Logo -->
        <a href="/" class="relative text-2xl font-extrabold">
          <span class="absolute w-10 h-2 bg-indigo-400 bottom-1 right-0"></span><span class="relative z-10">Agencia</span>
        </a>

        <!-- Menu items -->
        <div class="text-base text-gray-900 hidden lg:flex">
          <a href="#" class="block font-bold mt-4 lg:inline-block text-indigo-600 lg:mt-0 mr-10">
            Home
          </a>
          <a href="#" class="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
            Services
          </a>
          <a href="#" class="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
            Portfolio
          </a>
          <a href="#" class="block font-bold hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10">
            Company
          </a>
          <a href="/index_dark.html" class="block font-bold hover:text-gray-700 mt-4 lg:inline-block lg:mt-0">
            Dark version
          </a>
        </div>

        <!-- CTA and Hamburger icon -->
        <div class="flex items-center">
          <div class="mr-5 lg:mr-0">
            <button class="font-bold py-2 px-6 text-gray-600 hover:text-gray-700 text-base hidden lg:inline-flex">
              Sign in
            </button>
            <button class="hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-500">
              Sign up
            </button>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-4 py-3 border focus:outline-none">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div class="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
        <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
          <div class="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
            <h1 class="text-gray-900 md:text-6xl lg:text-8xl mb-8 text-4xl font-extrabold leading-none tracking-tighter">
              Provide Solution to your Business.
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-600">
              Themeptation helping enterprises to create great Templates
              websites perfectly.
            </p>
            <div class="lg:mt-6 max-w-7xl sm:flex mt-0">
              <div class="sm:mt-0 mt-3">
                <button class="hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-500">
                  Let's Talk
                </button>
              </div>
              <div class="sm:mt-0 sm:ml-3 mt-3">
                <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-indigo-500 transition duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
          <div class="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
            <div class="relative">
              <img src="https://html.creativegigstf.com/vCamp/vCamp/images/media/img_69.png" alt="themeptation" class="relative z-10 transform rotate-6 shadow-2xl">
              <div class="absolute -top-10 -left-24 w-full h-full bg-indigo-500 transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="container px-5 py-24 mx-auto lg:px-16">
        <div class="flex flex-col w-full mb-8 text-center">
          <h3 class="mb-4 text-lg font-medium tracking-wide text-gray-800">
            Over 32K+ software businesses growing with Themeptation
          </h3>
        </div>
        <div class="mx-auto text-center">
          <div class="grid grid-cols-5 gap-4 mx-auto lg:grid-cols-5">
            <div>
              <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/5a364f2e7cfeadd0f603cdfeda83f5cd0509770d/3f0ae/images/logos/logoone.svg" alt="Figma">
            </div>
            <div>
              <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/ab0d1eeefb9cddb55f05f1601b2ae3fbae9317a9/5bfbe/images/logos/logotwo.svg" alt="Framer">
            </div>
            <div>
              <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/2fea2d550675d7cf3bb77a515487bce6c086051b/951f5/images/logos/logothree.svg" alt="Sketch ">
            </div>
            <div>
              <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/f9b8da8b1442382848d30275dc2d0337d14a04c9/dc8f4/images/logos/logofour.svg" alt="Sketch ">
            </div>
            <div>
              <img class="h-4 mx-auto lg:h-12" src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg" alt="Invision">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-indigo-50">
      <div class="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
        <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
          <div class="lg:w-2/5 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
            <h3 class="text-xl font-bold mb-6 text-indigo-500">WHAT WE DO</h3>
            <h2 class="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter">
              Our included service.
            </h2>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-600">
              Themeptation helping enterprises to create great Templates
              websites perfectly.
            </p>
            <div class="lg:mt-6 max-w-7xl sm:flex mt-0">
              <div class="sm:mt-0 mt-3">
                <button class="hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-500">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
          <div class="lg:w-3/5 xl:mt-0 w-full mt-12">
            <div class="relative items-center w-full px-5 py-12">
              <div class="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
                <div class="p-6">
                  <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-indigo-700 rounded-xl border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                    </svg>
                  </div>
                  <h3 class="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                    Core Themeptation
                  </h3>
                  <p class="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit's, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div class="p-6">
                  <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-indigo-700 rounded-xl border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                    </svg>
                  </div>
                  <h3 class="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                    Plugin Development
                  </h3>
                  <p class="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit's, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div class="p-6">
                  <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-indigo-700 rounded-xl border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                    </svg>
                  </div>
                  <h3 class="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                    Core Themeptation
                  </h3>
                  <p class="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit's, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div class="p-6">
                  <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-indigo-700 rounded-xl border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                    </svg>
                  </div>
                  <h3 class="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl">
                    Core Themeptation
                  </h3>
                  <p class="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit's, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div>
          <div class="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 rounded-xl">
            <div class="relative flex flex-col p-8 bg-white">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-neutral-600">
                  Starter
                </h3>
                <p class="flex items-baseline mt-4 text-neutral-600">
                  <span class="text-6xl font-extrabold tracking-tight">$0</span>
                  <span class="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p class="mt-6 text-gray-500">
                  The essentials to provide your best work for clients.
                </p>
                <!-- Feature list -->
                <span class="pt-6 mt-6 text-lg font-semibold text-neutral-600">
                  What's included?
                </span>
                <ul class="pt-6 mt-6 space-y-6">
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-indigo-500 rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-neutral-600">Up to 10 credit cards</span>
                  </li>
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-indigo-500 rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-neutral-600">Up to 1,000 credits</span>
                  </li>
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-indigo-500 rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-neutral-600">Tacky wallet</span>
                  </li>
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-indigo-500 rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-neutral-600">Personal profile only</span>
                  </li>
                </ul>
              </div>
              <div class="mt-6 rounded-lg">
                <a href="#" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-indigo-500 transition duration-500 ease-in-out transform border-2 border-white shadow-2xl rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">
                  Try it for free
                </a>
              </div>
            </div>
            <div class="relative flex flex-col p-8 bg-indigo-500 rounded-2xl">
              <div class="relative flex-1">
                <h3 class="text-xl font-semibold text-white">Pro</h3>
                <p class="flex items-baseline mt-4 text-white">
                  <span class="text-6xl font-extrabold tracking-tight">$19</span>
                  <span class="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p class="mt-6 text-white">
                  A plan that scales with your rapidly growing business.
                </p>
                <!-- Feature list -->
                <span class="pt-6 mt-6 text-lg font-semibold text-white">What's included?</span>
                <ul class="pt-6 mt-6 space-y-6">
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-white">Up to 10 credit cards</span>
                  </li>
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-white">Up to 10,000 credits</span>
                  </li>
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-white">Less tacky wallet </span>
                  </li>
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-white">Profile and portafolio</span>
                  </li>
                  <li class="flex">
                    <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                      <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="ml-3 text-white">Support</span>
                  </li>
                </ul>
              </div>
              <div class="z-50 mt-6 rounded-lg">
                <a href="/" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-indigo-500 transition duration-500 ease-in-out transform border-2 border-indigo-50 shadow-2xl rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">
                  Try it for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="xl:col-span-1">
            <a href="/" class="relative text-2xl font-extrabold">
              <span class="absolute w-10 h-2 bg-indigo-400 bottom-1 right-0"></span><span class="relative z-10">Agencia</span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-xl font-bold text-indigo-500">
                  Links
                </h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      All Templates
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Landing Pages
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Next.js Templates
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-xl font-bold text-indigo-500">
                  UI/UX &amp; Dev
                </h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Blocks
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Backgrounds
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Popup's
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-xl font-bold text-indigo-500">
                  Legal
                </h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Refund
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-xl font-bold text-indigo-500">
                  Socials
                </h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Dribbble
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-base font-semibold text-gray-600 hover:text-indigo-500">
                      Indie Hackers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div class="flex flex-wrap items-baseline">
          <span class="mt-2 text-sm text-gray-300">
            Copyright © 2021
            <a href="https://themeptation.net" class="mx-2 font-semibbold text-black hover:text-indigo-500" rel="noopener noreferrer">@Themeptation</a>
          </span>
        </div>
      </div>
    </footer>
  

</body></html>
\`\`\`
`
export const templates = [template1, template2, template3, template4, template5]