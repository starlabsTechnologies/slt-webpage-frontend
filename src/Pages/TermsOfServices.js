import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Footer, Navbar } from "../components";

const TermsOfServices = () => {
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
              Terms of Service
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
                    These Terms of Service govern your access to and use of the
                    website, services, and products provided by starlabs . By
                    using our website or engaging with our services, you agree
                    to comply with these Terms.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">1. General Terms of Use</h2>

                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Eligibility: By using our website or services, you
                      represent that you are at least 18 years old or have the
                      legal authority to enter into this agreement
                    </li>
                    <li>
                      Account Registration: If you create an account with us
                      (e.g., for job applications), you agree to provide
                      accurate, current, and complete information. You are
                      responsible for maintaining the confidentiality of your
                      account and password
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">
                    2. Job Applications and Recruitment
                  </h2>

                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Job Applications: When you apply for a job through our
                      website, you agree that all information provided is
                      truthful, accurate, and complete. You give us consent to
                      process and store your personal information for
                      recruitment purposes.
                    </li>
                    <li>
                      Employment Disclaimer: Submission of an application or
                      acceptance of an offer does not guarantee employment.
                      Employment decisions are at the sole discretion of
                      starlabs .
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">
                    3. Intellectual Property Rights
                  </h2>

                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Ownership: All content, logos, designs, text, graphics,
                      and other materials on the website are owned by [Your
                      Company Name] or our licensors. You agree not to copy,
                      distribute, or use this content without our express
                      permission.
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">4. Acceptable Use</h2>

                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Prohibited Conduct: You agree not to engage in any conduct
                      that could damage, disable, overburden, or impair the
                      functionality of our website or services, including
                      attempts to gain unauthorized access to our systems
                    </li>
                    <li>
                      Content: You are responsible for any content you upload,
                      post, or share on our website, including job applications,
                      resumes, or comments. You agree that all content is lawful
                      and does not infringe on any intellectual property rights.
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">5. Limitation of Liability</h2>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      No Warranty: We make no representations or warranties
                      regarding the accuracy or completeness of the information
                      provided on the website or the suitability of our services
                      for any particular purpose.
                    </li>
                    <li>
                      Limitation of Damages: To the fullest extent permitted by
                      law, starlabs shall not be liable for any indirect,
                      incidental, or consequential damages resulting from your
                      use of the website or our services.
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">6. Termination</h2>

                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Termination of Access: We reserve the right to suspend or
                      terminate your access to our website or services at any
                      time, for any reason, including violations of these Terms.
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">7. Governing Law</h2>
                  <ul className="list-disc pl-6 mt-1 text-sm text-gray-300 space-y-2">
                    <li>
                      Jurisdiction: These Terms shall be governed by and
                      construed in accordance with the laws of [Your
                      Jurisdiction], without regard to its conflict of law
                      principles. Any disputes will be resolved in the courts
                      located in [Your Jurisdiction]
                    </li>
                  </ul>
                </motion.section>
                <motion.section variants={itemVariants}>
                  <h2 className="text-lg mb-1">
                    8. Changes to Terms of Service
                  </h2>
                  <p>
                    We reserve the right to update or modify these Terms at any
                    time. When we make significant changes, we will notify you
                    via email or a notice on the website. You are encouraged to
                    review these Terms periodically to stay informed about how
                    we operate.
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

export default TermsOfServices;
