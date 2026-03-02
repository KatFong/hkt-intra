import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  LayoutGrid, 
  Network, 
  BarChart2, 
  Lock, 
  FileText, 
  HelpCircle, 
  BookOpen, 
  Zap, 
  Database, 
  Calendar, 
  Mail, 
  ShieldAlert, 
  Users, 
  Gift, 
  HeartHandshake, 
  Globe, 
  ShieldCheck, 
  Briefcase, 
  HandHeart, 
  MessageCircle,
  Leaf,
  Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#00A4E0]/20 pb-20">
      {/* === Header === */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6">
          <div 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setSearchQuery('');
            }} 
            className="flex items-center gap-2 cursor-pointer shrink-0 group" 
            title="Back to Home"
          >
            <div className="flex items-center gap-1.5 select-none">
              <span className="text-2xl font-black text-[#00338D] tracking-tighter">PCCW</span>
              <span className="text-2xl font-black text-[#00A4E0] tracking-tighter">HKT</span>
            </div>
            <div className="h-4 w-[1px] bg-slate-300 mx-1 hidden sm:block"></div>
            <span className="hidden sm:block text-[11px] font-bold tracking-[0.2em] text-orange-500 uppercase">
              Intranet
            </span>
          </div>

          <nav className="hidden xl:flex items-center gap-4 text-[13px] font-bold text-slate-600">
            <button className="flex items-center gap-1.5 hover:text-[#00A4E0] transition-colors py-2 px-3 group">
              Department <ChevronRight className="w-3.5 h-3.5 rotate-90 text-slate-400 group-hover:text-[#00A4E0]" />
            </button>
            <a href="#policies" className="flex items-center gap-1.5 hover:text-[#00A4E0] transition-colors py-2 px-3">
              Group policies & procedures
            </a>
            <a href="#connect" className="flex items-center gap-1.5 hover:text-[#00A4E0] transition-colors py-2 px-3">
              Connect
            </a>
            <a href="#news" className="flex items-center gap-1.5 hover:text-[#00A4E0] transition-colors py-2 px-3">
              News & announcements
            </a>
          </nav>

          <div className="hidden md:flex relative max-w-xs w-full ml-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A4E0]/30 focus:bg-white text-[13px] transition-all"
            />
          </div>
        </div>
      </header>

      <main className="py-8 sm:py-10 flex flex-col gap-10 sm:gap-14">
        
        {/* === Bento Grid Hero Section === */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-auto lg:h-[400px]">
            
            {/* Main Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-[300px] md:h-[250px] lg:h-full relative overflow-hidden rounded-[24px] shadow-lg group bg-gradient-to-br from-[#00a099] to-[#005955] cursor-pointer"
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="absolute top-6 right-6 z-20">
                <button className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30 transition-colors">
                  BU/Functional Unit Specific News
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 lg:px-20 py-6 md:py-8 lg:py-10 text-white z-20">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-2 drop-shadow-lg">The HotSpot BNK Soft Opening</h2>
              </div>
              <div className="absolute top-6 left-6 flex space-x-2 z-20">
                <button className="w-1.5 h-1.5 rounded-full bg-white ring-1 ring-white ring-offset-2 ring-offset-transparent scale-110"></button>
                <button className="w-1.5 h-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors"></button>
                <button className="w-1.5 h-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors"></button>
              </div>
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20">
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Sub Banner 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="h-[200px] md:h-[180px] lg:h-full relative overflow-hidden rounded-[24px] shadow-md group cursor-pointer bg-[#5fb2e3]"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-end relative z-10">
                  <button className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20 transition-colors">
                    Corporate Announcements
                  </button>
                </div>
                <div className="relative z-10 mb-2">
                  <h3 className="text-white text-xl font-bold leading-snug line-clamp-4">123chloe testing</h3>
                </div>
              </div>
            </motion.div>

            {/* Sub Banner 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="h-[200px] md:h-[180px] lg:h-full relative overflow-hidden rounded-[24px] shadow-md group cursor-pointer bg-gradient-to-br from-[#00a099] to-[#005955]"
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
              <div className="absolute top-4 right-4 z-20">
                <button className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/30 transition-colors">
                  Award
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full px-6 py-5 text-white z-20">
                <h3 className="text-lg font-bold leading-snug line-clamp-3 drop-shadow-md">Service Excellence Awards 2.0<br/>卓越服務獎勵計劃 2.0</h3>
              </div>
            </motion.div>

            {/* Sub Banner 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="h-[200px] md:h-[180px] lg:h-full relative overflow-hidden rounded-[24px] shadow-md group cursor-pointer bg-[#fdb913]"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-end relative z-10">
                  <button className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20 transition-colors">
                    Media Releases
                  </button>
                </div>
                <div className="relative z-10 mb-2">
                  <h3 className="text-white text-lg font-bold leading-snug line-clamp-4">The Club launches "Reward Your Moments" campaign, offering over HK$20 million worth of Clubpoints...</h3>
                </div>
              </div>
            </motion.div>

            {/* Sub Banner 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-[200px] md:h-[180px] lg:h-full relative overflow-hidden rounded-[24px] shadow-md group cursor-pointer bg-[#f58220]"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-end relative z-10">
                  <button className="bg-white/20 hover:bg-white/30 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20 transition-colors">
                    Staff Offer
                  </button>
                </div>
                <div className="relative z-10 mb-2">
                  <h3 className="text-white text-xl font-bold leading-snug line-clamp-4">Staff Offer - Mira Dining Chinese New Year Cake</h3>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* === Tools Section (Background changed to White) === */}
        <section className="relative w-full bg-white border-y border-slate-100 py-10 sm:py-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A4E0]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            
            <div className="flex items-center gap-3 mb-6 px-1">
              <div className="bg-white p-2 rounded-xl flex items-center justify-center shadow-sm border border-slate-200">
                <LayoutGrid className="w-6 h-6 text-[#00A4E0]" strokeWidth={2.5} />
              </div>
              <h3 className="text-[16px] sm:text-[20px] font-black text-slate-900 tracking-tight uppercase drop-shadow-sm">
                Tools & Resources
              </h3>
            </div>

            <div className="flex overflow-x-auto scrollbar-hide rounded-[1.5rem] shadow-[0_12px_40px_rgba(0,51,141,0.1)] ring-1 ring-black/5 relative z-10">
              <div className="flex w-full min-w-[700px] lg:min-w-0 h-[140px] sm:h-[150px]">
                
                {/* Tool 1 */}
                <a href="#lis" className="group relative flex-1 flex flex-col items-center justify-center bg-white text-slate-700 transition-all duration-500 ease-out overflow-hidden border-r border-slate-100">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00A4E0]/10 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out z-0 pointer-events-none"></div>
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full border border-slate-200 flex items-center justify-center mb-3 group-hover:-translate-y-2 group-hover:bg-[#00338D] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(0,51,141,0.2)] group-hover:scale-110 group-hover:border-transparent transition-all duration-400 z-10">
                    <Network className="w-6 h-6 text-[#00338D] group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-bold text-[14px] sm:text-[15px] text-center leading-snug px-2 z-10 group-hover:-translate-y-1 transition-transform duration-400">
                    LIS/FIN/HRS
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00A4E0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
                </a>

                {/* Tool 2 */}
                <a href="#sap" className="group relative flex-1 flex flex-col items-center justify-center bg-white text-slate-700 transition-all duration-500 ease-out overflow-hidden border-r border-slate-100">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00A4E0]/10 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out z-0 pointer-events-none"></div>
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full border border-slate-200 flex items-center justify-center mb-3 group-hover:-translate-y-2 group-hover:bg-[#00338D] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(0,51,141,0.2)] group-hover:scale-110 group-hover:border-transparent transition-all duration-400 z-10">
                    <BarChart2 className="w-6 h-6 text-[#00338D] group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-bold text-[14px] sm:text-[15px] text-center leading-snug px-2 z-10 group-hover:-translate-y-1 transition-transform duration-400">
                    Service Application Portal
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00A4E0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
                </a>

                {/* Tool 3 */}
                <a href="#pwd" className="group relative flex-1 flex flex-col items-center justify-center bg-white text-slate-700 transition-all duration-500 ease-out overflow-hidden border-r border-slate-100">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00A4E0]/10 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out z-0 pointer-events-none"></div>
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full border border-slate-200 flex items-center justify-center mb-3 group-hover:-translate-y-2 group-hover:bg-[#00338D] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(0,51,141,0.2)] group-hover:scale-110 group-hover:border-transparent transition-all duration-400 z-10">
                    <Lock className="w-6 h-6 text-[#00338D] group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-bold text-[14px] sm:text-[15px] text-center leading-snug px-2 z-10 group-hover:-translate-y-1 transition-transform duration-400">
                    Password Reset
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00A4E0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
                </a>

                {/* Tool 4 */}
                <a href="#forms" className="group relative flex-1 flex flex-col items-center justify-center bg-white text-slate-700 transition-all duration-500 ease-out overflow-hidden border-r border-slate-100">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00A4E0]/10 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out z-0 pointer-events-none"></div>
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full border border-slate-200 flex items-center justify-center mb-3 group-hover:-translate-y-2 group-hover:bg-[#00338D] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(0,51,141,0.2)] group-hover:scale-110 group-hover:border-transparent transition-all duration-400 z-10">
                    <FileText className="w-6 h-6 text-[#00338D] group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-bold text-[14px] sm:text-[15px] text-center leading-snug px-2 z-10 group-hover:-translate-y-1 transition-transform duration-400">
                    Forms/ Templates
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00A4E0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
                </a>

                {/* Tool 5 */}
                <a href="#askit" className="group relative flex-1 flex flex-col items-center justify-center bg-white text-slate-700 transition-all duration-500 ease-out overflow-hidden">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00A4E0]/10 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out z-0 pointer-events-none"></div>
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full border border-slate-200 flex items-center justify-center mb-3 group-hover:-translate-y-2 group-hover:bg-[#00A4E0] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(0,164,224,0.2)] group-hover:scale-110 group-hover:border-transparent transition-all duration-400 z-10">
                    <HelpCircle className="w-6 h-6 text-[#00A4E0] group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-bold text-[14px] sm:text-[15px] text-center leading-snug px-2 z-10 group-hover:-translate-y-1 transition-transform duration-400">
                    AskIT
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#00A4E0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* === Bottom Resources Grid === */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1: Useful Resources */}
            <div className="flex flex-col">
              <div className="mb-6 pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-[20px] tracking-tight">Useful Resources</h3>
              </div>
              
              <ul className="space-y-1">
                <ResourceItem icon={<BookOpen className="w-5 h-5" />} label="Daily News Monitoring Report" color="rose" />
                <ResourceItem icon={<Zap className="w-5 h-5" />} label="IT Support" color="amber" />
                <ResourceItem icon={<Database className="w-5 h-5" />} label="Facilities Management" color="blue" />
                <ResourceItem icon={<Calendar className="w-5 h-5" />} label="Business Travel Information" color="emerald" />
                <ResourceItem icon={<Mail className="w-5 h-5" />} label="Mailing Customer Guide" color="indigo" />
                <ResourceItem icon={<ShieldAlert className="w-5 h-5" />} label="Report Risk or Incident" color="red" />
              </ul>
            </div>

            {/* Column 2: Employee Support */}
            <div className="flex flex-col">
              <div className="mb-6 pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-[20px] tracking-tight">Employee Support</h3>
              </div>
              
              <ul className="space-y-1">
                <ResourceItem icon={<Users className="w-5 h-5" />} label="Staff Activities" color="sky" />
                <ResourceItem icon={<Gift className="w-5 h-5" />} label="Staff Offers" color="purple" />
                <ResourceItem icon={<HeartHandshake className="w-5 h-5" />} label="EAP Programme" color="rose" />
                
                <li className="relative group my-1.5">
                  <a href="#" className="flex items-center w-full gap-3.5 py-2 px-3 -mx-3 rounded-xl bg-gradient-to-r from-[#00A4E0]/10 via-[#00A4E0]/5 to-transparent border border-[#00A4E0]/20 shadow-sm transition-all hover:bg-[#00A4E0]/15">
                    <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                      <img src="https://picsum.photos/seed/cu/44/44" className="w-7 h-7 object-contain rounded-md" alt="CU" />
                    </div>
                    <span className="text-[15px] font-bold leading-snug text-slate-800">Credit Union</span>
                  </a>
                </li>

                <li className="relative group my-1.5">
                  <a href="#" className="flex items-center w-full gap-3.5 py-2 px-3 -mx-3 rounded-xl bg-gradient-to-r from-[#00A4E0]/10 via-[#00A4E0]/5 to-transparent border border-[#00A4E0]/20 shadow-sm transition-all hover:bg-[#00A4E0]/15">
                    <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-teal-100 text-teal-500">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <span className="text-[15px] font-bold leading-snug text-[#00338D]">Wellbeing Community</span>
                    <div className="ml-auto flex items-center gap-1.5 px-2 py-0.5 bg-gradient-to-r from-[#F37021] to-[#FF8A40] text-white rounded-lg shadow-sm shrink-0">
                      <span className="text-[9px] font-black uppercase tracking-widest">Join</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Safety & Community */}
            <div className="flex flex-col">
              <div className="mb-6 pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-[20px] tracking-tight">Safety & Community</h3>
              </div>
              
              <ul className="space-y-1">
                <ResourceItem icon={<Globe className="w-5 h-5" />} label="Sustainability & Community" color="emerald" />
                <ResourceItem icon={<ShieldCheck className="w-5 h-5" />} label="Safety & Health" color="cyan" />
                <ResourceItem icon={<Briefcase className="w-5 h-5" />} label="Work Arrangement Notice" color="indigo" />
                <ResourceItem icon={<HandHeart className="w-5 h-5" />} label="HR Support" color="blue" />
              </ul>
            </div>

            {/* Column 4: Viva Engage */}
            <div className="flex flex-col bg-slate-50/50 rounded-3xl p-6 border border-slate-200 shadow-sm h-fit">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <h3 className="font-black text-slate-900 text-xl tracking-tight flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-[#00A4E0]" />
                  Viva Engage
                </h3>
                <a href="#" className="text-xs font-bold text-[#00A4E0] hover:underline">Go to feed</a>
              </div>

              <div className="flex flex-col gap-5 max-h-[400px] overflow-y-auto pr-2">
                <VivaPost 
                  author="Gail Wright" 
                  date="May 22" 
                  content="Excited to announce the launch of our new sustainability initiative! Join us this Friday for the kickoff event. 🌱"
                  image="https://picsum.photos/seed/post1/400/250"
                />
                <VivaPost 
                  author="Annie Kim" 
                  date="May 22" 
                  content="Just finished the Q3 Town Hall presentation. Great job to everyone involved in hitting our milestones! 🚀"
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-100 mt-10 py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-[13px] font-bold text-slate-400 text-center md:text-left">
            © PCCW-HKT DataCom Services Limited 2026. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[13px] font-bold text-slate-500">
            <a href="#" className="hover:text-[#00A4E0] transition-colors">Site Map</a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#00A4E0] transition-colors">Privacy Statement</a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-[#00A4E0] transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ResourceItem({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
  const colorClasses: Record<string, string> = {
    rose: 'bg-rose-100 text-rose-500',
    amber: 'bg-amber-100 text-amber-500',
    blue: 'bg-blue-100 text-[#00338D]',
    emerald: 'bg-emerald-100 text-emerald-600',
    indigo: 'bg-indigo-100 text-indigo-500',
    red: 'bg-red-100 text-red-500',
    sky: 'bg-sky-100 text-sky-500',
    purple: 'bg-purple-100 text-purple-500',
    cyan: 'bg-cyan-100 text-cyan-600',
  };

  return (
    <li className="relative group my-1.5">
      <a href="#" className="flex items-center w-full gap-3.5 py-2 px-3 -mx-3 rounded-xl transition-all hover:bg-slate-50">
        <div className={`shrink-0 w-11 h-11 flex items-center justify-center rounded-xl transition-all ${colorClasses[color] || 'bg-slate-100'}`}>
          {icon}
        </div>
        <span className="text-[15px] font-bold leading-snug text-slate-800">{label}</span>
      </a>
    </li>
  );
}

function VivaPost({ author, date, content, image }: { author: string, date: string, content: string, image?: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="text-[14px] font-bold text-slate-900 leading-tight">{author}</h4>
          <span className="text-[11px] font-semibold text-slate-400">{date}</span>
        </div>
      </div>
      <p className="text-[13px] text-slate-700 font-medium leading-relaxed mb-3">{content}</p>
      {image && (
        <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-slate-100">
          <img src={image} alt="Post" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
