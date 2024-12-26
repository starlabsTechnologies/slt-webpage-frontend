import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Footer, Navbar } from "../components";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen  text-gray-100 py-20">
        <motion.div
          className="max-w-screen-2xl mx-auto rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 md:p-8">
            <motion.h1
              className="text-2xl md:text-2xl  font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Privacy Consent Statement:
            </motion.h1>
            <div className=" pr-4 ">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.section variants={itemVariants} className="text-sm">
                  <p className="text-gray-300 leading-relaxed">
                    Your personal data will not be shared with any third parties
                    outside of the recruitment process without your explicit
                    consent, unless required by law. If your application is
                    unsuccessful, we may retain your information for a limited
                    time for future job openings unless you request otherwise.
                    You have the right to access, correct, or request the
                    deletion of your personal data at any time by contacting us
                    at administrator@starlabs.co.in
                  </p>
                  <p className="mt-10">
                    For more detailed information about how we handle your
                    personal data, please refer to our Privacy Policy and Terms
                    of Service .
                  </p>
                  <h1 className="text-2xl font-semibold mt-10 ">
                    Privacy Policy
                  </h1>
                  <p className="text-sm my-6">
                    At STARLABS , we value and respect the privacy of our users,
                    applicants, and clients. This Privacy Policy explains how we
                    collect, use, and protect your personal information when you
                    visit our website, submit job applications, or engage with
                    our services. By accessing or using our services, you agree
                    to the collection and use of your data in accordance with
                    this Privacy Polic
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">1. Information We Collect</h2>

                  <p>
                    We collect personal information that is necessary to provide
                    our services, including:
                  </p>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Personal Identifiers: Full Name, Email Address, Phone
                      Number, And Physical Address.
                    </li>
                    <li>
                      Job Application Information: Resumes, cover letters, work
                      experience, skills, education, and other information
                      submitted as part of a job application.
                    </li>
                    <li>
                      Technical Information: IP Address, Browser Type, Device
                      Information, And Usage Data When You Access And Use Our
                      Website Or Services.
                    </li>
                    <li>
                      Communication Information: Any Messages Or Correspondence
                      Sent To Us Via Email, Our Contact Forms, Or During
                      Interviews.
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">
                    2. How We Use Your Information
                  </h2>
                  <p>
                    We use the information we collect for the following
                    purposes:
                  </p>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Job Application Processing: To evaluate your
                      qualifications and eligibility for roles at [Your Company
                      Name]
                    </li>
                    <li>
                      Customer and Client Services: To communicate with clients
                      and potential clients about our consultancy and technology
                      services.
                    </li>
                    <li>
                      Improvement of Services: To improve our website and
                      services, conduct market research, and analyze website
                      usage through cookies and analytics tools.
                    </li>
                    <li>
                      Legal Compliance: To comply with applicable laws,
                      regulations, or legal obligations.
                    </li>
                    <li>
                      Marketing and Communications: To send you promotional
                      materials, newsletters, and updates (if you opt in to
                      receive them).
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">
                    3. How We Protect Your Information
                  </h2>
                  <p>
                    We are committed to protecting your personal information. We
                    implement a variety of security measures to maintain the
                    safety of your personal data, including:
                  </p>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Encryption: We use encryption protocols (e.g., SSL) to
                      protect sensitive information transmitted over the
                      internet.
                    </li>
                    <li>
                      Data Storage: Personal information is stored in secure
                      servers and databases with restricted access.
                    </li>
                    <li>
                      Access Control: Only authorized personnel within our
                      company can access your data, and we regularly audit these
                      access controls.
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">4. Sharing Your Information</h2>
                  <p>
                    We do not sell, rent, or share your personal information
                    with third parties, except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Service Providers: We may share your data with trusted
                      third-party service providers who help us process job
                      applications, perform background checks, or manage our
                      website
                    </li>
                    <li>
                      Legal Compliance: If required by law or regulation, we may
                      disclose your personal data to comply with a legal
                      obligation, such as a subpoena or court order.
                    </li>
                    <li>
                      Business Transfers: In the event of a merger, acquisition,
                      or sale of assets, your personal data may be transferred
                      as part of the transaction.
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">
                    5. Cookies and Tracking Technologies
                  </h2>
                  <p>
                    We use cookies and similar technologies to collect
                    information when you visit our website. This helps us
                    improve the user experience, track website traffic, and
                    analyze user behavior. You can control your cookie
                    preferences by adjusting the settings in your browser.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">6. Your Rights and Choices</h2>
                  <p>
                    As a user, you have the following rights regarding your
                    personal data:
                  </p>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Access: You can request a copy of the personal information
                      we have collected about you.
                    </li>
                    <li>
                      Correction: You can update or correct any inaccuracies in
                      your personal information
                    </li>
                    <li>
                      Deletion: You can request the deletion of your personal
                      data, subject to legal and contractual obligations.
                    </li>
                    <li>
                      Opt-Out: You can unsubscribe from marketing communications
                      at any time by following the unsubscribe instructions in
                      the emails we send or by contacting us directly.
                    </li>
                  </ul>
                  <p>To exercise any of these rights, please contact us at </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">7. Data Retention</h2>
                  <p>
                    We retain your personal data for as long as it is necessary
                    to fulfill the purposes outlined in this Privacy Policy or
                    as required by law. Once your personal data is no longer
                    needed, we will securely delete or anonymize it.
                  </p>
                </motion.section>
                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">
                    8. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We reserve the right to update or change this Privacy Policy
                    at any time. When we make significant changes, we will post
                    a notice on our website with the updated Privacy Policy and
                    the effective date of the changes.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">9. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy or how
                    we handle your personal information, please contact us at:
                  </p>

                  <ul>
                    <li>STARLABS</li>
                    <li>Email: administrator@starlabs.co.in</li>
                    <li>Address: Dhanbad, Jharkhand – 828111 - IN</li>
                  </ul>
                </motion.section>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
