const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-[#252525] text-[#f5f5f5]">
        <div className="max-w-5xl xl:max-w-6xl px-4 sm:px-6 py-10 mx-auto min-h-screen">
          <h2 className="poppin text-3xl lg:text-4xl font-bold tracking-wide">
            Privacy Policy - Smokenjoy
          </h2>

          <p className="mb-4 mt-3">
            Smokenjoy is committed to protecting the privacy of our clients and
            users. We understand that your personal information is important to
            you, and we take our responsibility to protect it seriously.
          </p>

          {/* FIRST DETAILS */}
          <h2 className="mt-6 text-2xl font-bold mb-2">
            What information do we collect?
          </h2>
          <p className="mb-4">
            We collect information from our clients and users in order to
            provide our services. This information may include:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>
              Contact information, such as your name, email address, and phone
              number. We need this information to communicate with you about
              your account and to provide you with support.
            </li>
            <li>
              Billing information, such as your credit card or bank account
              details. We need this information to process payments for our
              services.
            </li>
            <li>
              Technical information, such as your IP address, device type, and
              operating system. We collect this information to help us improve
              our services and to troubleshoot any problems you may encounter.
            </li>
            <li>
              Usage data, such as the pages you visit on our website and the
              services you use. We collect this information to help us
              understand how our services are being used and to improve our user
              experience.
            </li>
          </ul>

          {/* SECOND DETAILS */}
          <h2 className="mt-6 text-2xl font-bold mb-2">
            How do we use your information?
          </h2>
          <p className="mb-4">We use the information we collect to:</p>

          <ul className="list-disc list-inside mb-4">
            <li>Provide our services to you</li>
            <li>Process payments</li>
            <li>Send you updates and notifications</li>
            <li>Improve our services</li>
            <li>Protect our clients and users from fraud and abuse</li>
          </ul>

          {/* THIRD DETAILS */}
          <h2 className="mt-6 text-2xl font-bold mb-2">
            Do we share your information with third parties?
          </h2>
          <p className="mb-4">
            We do not share your information with third parties except in the
            following cases:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>
              With your consent. We will only share your information with third
              parties if you give us your explicit consent to do so.
            </li>
            <li>
              To comply with legal requirements. We may be required to share
              your information with third parties in order to comply with legal
              requirements, such as a subpoena or court order.
            </li>
            <li>
              To protect our clients and users from fraud and abuse. We may
              share your information with third parties in order to protect our
              clients and users from fraud and abuse, such as by reporting
              fraudulent activity to law enforcement.
            </li>
          </ul>

          <h2 className="mt-6 text-2xl font-bold mb-2">
            How do we protect your information?
          </h2>
          <p className="mb-4">
            We take reasonable steps to protect your information from
            unauthorized access, use, or disclosure. However, no security
            measures are perfect, and we cannot guarantee the security of your
            information.
          </p>

          <h2 className="mt-6 text-2xl font-bold mb-2">
            Changes to this Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated Privacy Policy on our
            website.
          </p>

          <h2 className="mt-6 text-2xl font-bold mb-2">Contact us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at <a href="mailto:info@smokenjoyhoustons.com" target="_blank" className="underline underline-offset-4">info@smokenjoyhoustons.com</a>
          </p>
        </div>
      </section>


      {/* DIVIDER */}
      <span className="relative flex justify-center bg-[#252525]">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>
        <span className="relative z-10 bg-[#252525] px-6"></span>
      </span>
    </>
  );
};

export default PrivacyPolicy;
