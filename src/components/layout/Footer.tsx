
import { Link } from 'react-router-dom';
import { Mail, Twitter, Instagram, Facebook, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-bold tracking-tight">
                <span className="text-primary">RBT</span>Practice
              </h3>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs">
              We provide free comprehensive practice exams to help you prepare for and pass your RBT examination.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="mailto:contact@rbtpractice.com" icon={<Mail size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-slate-900 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/exams">Practice Exams</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-slate-900 mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/guides">Study Guides</FooterLink>
              <FooterLink href="/tips">Exam Tips</FooterLink>
              <FooterLink href="/flashcards">Flashcards</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col space-y-4 text-sm text-slate-500">
          <p className="text-center md:text-left">© {currentYear} RBT Practice. All rights reserved.</p>
          <p className="text-center md:text-left text-xs">
            Registered Behavior Technician® (RBT®) is a registered trademark of the Behavior Analyst Certification Board, Inc.® (BACB®), which does not sponsor or endorse this website.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-slate-600 hover:text-primary transition-colors flex items-center group"
    >
      <ChevronRight size={16} className="mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
      {children}
    </Link>
  </li>
);

export default Footer;
