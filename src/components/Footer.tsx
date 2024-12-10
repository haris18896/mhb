export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MHB Pvt. Ltd.</h3>
            <p className="text-gray-400">
              Leading innovation in Building Automation, Software Solutions, and
              Architecture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Building Automation</li>
              <li>Software Solutions</li>
              <li>Architecture</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@mhb.com</li>
              <li>Phone: +92 XXX XXXXXXX</li>
              <li>Location: Pakistan</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MHB Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
