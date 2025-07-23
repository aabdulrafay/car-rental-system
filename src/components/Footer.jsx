import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-600 mt-10 px-6 md:px-18 py-8">
      {/* Top Section */}
      <div className="px-1 md:px-12 flex flex-col lg:flex-row justify-between gap-8 border-b pb-6">
        {/* Logo & Description */}
        <div className="max-w-sm md:">
          <a href="/">
            <h2 className="text-lg md:text-2xl font-bold text-blue-600 mb-2">
              MORENT
            </h2>
          </a>
          <p className="text-gray-500">
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-20">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">About</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#">How it works</Link>
              </li>
              <li>
                <Link href="#">Featured</Link>
              </li>
              <li>
                <Link href="#">Partnership</Link>
              </li>
              <li>
                <Link href="#">Business Relation</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#">Events</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Podcast</Link>
              </li>
              <li>
                <Link href="#">Invite a friend</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Socials</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#">Discord</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
              <li>
                <Link href="#">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-xs text-black">
        <p className="font-semibold">&copy;2022 MORENT. All rights reserved</p>
        <div className="px-3 md:px-6 flex gap-10 mt-4 sm:mt-0">
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}
