import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/alpharez_white_logo.svg"
                alt="Alpharez Logo"
                width={96}
                height={96}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-300 max-w-md">
              Transforming network infrastructure through intelligent automation and AI-driven solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-white">Network Automation</Link></li>
              <li><Link href="/services" className="hover:text-white">AI Infrastructure</Link></li>
              <li><Link href="/services" className="hover:text-white">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/alpharez_minimalist_logo.html" className="hover:text-white">Brand Guide</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2024 Alpharez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}