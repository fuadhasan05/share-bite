export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full">
      <div className="container mx-auto px-4 py-16">
        <h1
          className="text-3xl font-semibold text-center mb-4"
          style={{ wordSpacing: "8px" }}
        >
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Last updated: August 10, 2025
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Introduction
            </h2>
            <p>
              We value your privacy and are committed to protecting your
              personal data. This policy outlines how we collect, use, and
              safeguard your information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and location when you sign up or interact
              with our services. We also collect non-personal data like device
              type and browsing patterns to improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and manage our food donation platform.</li>
              <li>To communicate with you about updates or issues.</li>
              <li>To improve our services and user experience.</li>
              <li>To ensure the safety and authenticity of listed items.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Data Sharing
            </h2>
            <p>
              We do not sell or rent your personal information. Data may be
              shared with trusted service providers only when necessary to
              operate our platform or comply with legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data. However, no method of transmission or storage is completely
              secure, and we cannot guarantee absolute safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. To exercise these rights, please contact our support
              team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last Updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@foodshare.com"
                className="text-green-700 underline hover:text-green-900"
              >
                support@foodshare.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
