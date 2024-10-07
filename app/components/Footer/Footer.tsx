import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "www.facebook.com",
    width: 10,
  },
  {
    imgSrc: "/assets/footer/insta.svg",
    link: "www.instagram.com",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/twitter.svg",
    link: "www.twitter.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About", "Careers", "Mobile", "Blog", "How we work?"],
  },
  {
    id: 2,
    section: "Contact",
    link: ["Help/FAQ", "Press", "Affiliates", "Hotel owners", "Partners"],
  },
  {
    id: 3,
    section: "More",
    link: [
      "Airline fees",
      "Airlines",
      "Low fare tips",
      "Badges &",
      "Certificates",
    ],
  },
];

const footer = () => {
  return (
    <div className="w-full rounded-t-3xl bg-gradient-to-tl to-cornflowerblue from-paleblue py-12 lg:py-24">
      {/* <!-- Contact Section --> */}
      <div className="max-w-7xl px-4 lg:px-6 mx-auto">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-midnightblue text-4xl lg:text-5xl font-semibold mb-5">
            Contacts
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Logo and Social Links Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex justify-center lg:justify-start">
              <div
                className="flex items-center justify-center border-right h-40 w-40 rounded-full  overflow-hidden mb-6"
                style={{
                  border: "5px solid rgba(101, 86, 255)",
                }}
              >
                <img
                  src="/assets/logo/logonew.jpg"
                  alt="logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-center lg:text-left text-sm font-medium text-gunmetalgray leading-relaxed mb-6 lg:mb-10">
              Enroll Today, Master Essential Skills for a Brighter Tomorrow.
            </h3>
            <div className="flex gap-4 justify-center lg:justify-start">
              <div className="flex gap-4">
                {socialLinks.map((items, i) => (
                  <Link href={items.link} key={i}>
                    <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                      <Image
                        src={items.imgSrc}
                        alt={items.imgSrc}
                        width={items.width}
                        height={2}
                        className="sepiaa"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- End Logo and Social Links Section --> */}

          {/* Address and Contact Information Section */}
          <div className="space-y-12 lg:space-y-16">
            {/* Address */}
            <div>
              <h3 className="mb-5 font-semibold text-black text-lg lg:text-xl">
                Our Address
              </h3>
              <div className="flex gap-4">
                <svg
                  className="shrink-0 h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Kumkum Mobile Ara</p>
                  <address className="mt-1 text-black not-italic">
                    In front of Nawada Thana,
                    <br />
                    Ara Bihar
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-5 font-semibold text-black text-lg lg:text-xl">
                Our Contacts
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg
                    className="shrink-0 h-6 w-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Email us</p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:left-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black transition-colors"
                        href="mailto:himanshuyadavji904@gmail.com"
                      >
                        himanshuyadavji904@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <svg
                    className="shrink-0 h-6 w-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Call us</p>
                    <p>
                      <a
                        className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:left-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black transition-colors"
                        href="tel:+917352425479"
                      >
                        +917352425479
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Address and Contact Information Section --> */}
        </div>
      </div>
    </div>
  );

  {
    /* <!-- End Contact --> */
  }
  {
    /* 
        // <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        //     <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

        //         COLUMN-1 */
  }

  <div className="sm:col-span-6 lg:col-span-5">
    <div className="flex flex-shrink-0 items-center border-right">
      <Image src="/assets/logo/logo.svg" alt="logo" width={214} height={66} />
    </div>
    <h3 className="text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16">
      {" "}
      Open an account in minutes, get full financial <br /> control for much
      longer.
    </h3>
    <div className="flex gap-4">
      {socialLinks.map((items, i) => (
        <Link href={items.link} key={i}>
          <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
            <Image
              src={items.imgSrc}
              alt={items.imgSrc}
              width={items.width}
              height={2}
              className="sepiaa"
            />
          </div>
        </Link>
      ))}
    </div>
  </div>;

  {
    /* CLOUMN-2/3/4 */
  }

  {
    /* {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-lg font-medium mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link: string, index: number) => (
                                <li key={index} className='mb-5'>
                                    <Link href="/" className="text-darkgray text-base font-normal mb-6 space-links">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))} */
  }

  {
    /* <div>
                    <h3 className="mb-5 font-semibold text-black dark:text-white">
                        Our contacts
                    </h3>

                   
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                        <div className="flex gap-4">
                            <svg className="shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>

                            <div className="grow">
                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                    Email us
                                </p>
                                <p>
                                    <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="mailto:example@site.so">
                                        hello@example.so
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <svg className="shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>

                            <div className="grow">
                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                    Call us
                                </p>
                                <p>
                                    <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="mailto:example@site.so">
                                        +44 222 777-000
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    </div> */
  }
  {
    /* </div> */
  }

  {
    /* All Rights Reserved */
  }

  {
    /* <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                        <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>@2023.E-learnings.All rights reserved</h4>
                        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                            <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                            <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                            <h4 className='text-dark-red opacity-75 text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                        </div>
                    </div>
                </div> */
  }

  // {/* </div> */}
  // </div>
  // )
};

export default footer;
