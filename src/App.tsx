/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Folder, 
  User, 
  Briefcase, 
  ChevronDown, 
  ShoppingCart, 
  ArrowRight,
  Layout,
  Smartphone,
  Watch,
  Search,
  Video,
  ExternalLink,
  History,
  X
} from 'lucide-react';

// TODO: To use your own portrait:
// 1. Add your image file (e.g., portrait.jpg) to the 'src/assets' folder.
// 2. Uncomment the line below:
import portraitImage from './assets/portrait.jpg';
import aboutMeImage from './assets/about_me.jpg';
import idCardImage from './assets/id_card.png';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="bg-white brutal-border brutal-shadow rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-4 border-black flex items-center justify-center font-bold text-xl">
            O
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-black text-xl">
          <a href="#home" className="hover:text-brutal-pink transition-colors">首页</a>
          <a href="#about" className="hover:text-brutal-pink transition-colors">关于我</a>
          <a href="#services" className="hover:text-brutal-pink transition-colors">我的作品</a>
        </div>

        <a 
          href="/成婧铱6.12.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brutal-yellow text-black border-2 border-black px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
        >
          简历
        </a>
      </div>
    </nav>
  );
};

// TODO: 3. Uncomment the line below and comment out the placeholder URL
const HERO_IMAGE = portraitImage;
// const HERO_IMAGE = "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=ffc107&beard=medium&beardColor=2c3e50&clothingColor=ff6b8b&top=shortHair&hairColor=2c3e50";

const Hero = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  return (
    <section id="home" className="pt-40 pb-20 px-4 w-full" style={{
      backgroundImage: 'radial-gradient(circle, #e5e7eb 2px, transparent 2px)',
      backgroundSize: '24px 24px'
    }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
        <h1 className="text-6xl md:text-8xl font-black leading-tight">
            我是 <motion.span 
              className="bg-brutal-pink text-white px-4 inline-block cursor-pointer brutal-border brutal-shadow-sm"
              initial={{ rotate: -1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              成婧铱
            </motion.span>
            <br />
            一名<motion.span 
              className="bg-brutal-blue text-white px-4 inline-block cursor-pointer brutal-border brutal-shadow-sm"
              initial={{ rotate: 1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: -2,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              销售
            </motion.span>
            <br />
            预备役
          </h1>
        
        <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            hallo～这里是一个准销售的成长记录👋<br />
            如果你也对AI、商业、出海感兴趣<br />
            welcome to my channel!<br />
            不妨来随便逛逛，说不定我们会是彼此想要认识的那个人
          </p>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setShowEmailModal(true)}
            className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Mail size={20} /> 我的邮箱
          </button>
          <button 
            onClick={() => setShowPhoneModal(true)}
            className="bg-white text-black px-8 py-4 rounded-xl font-bold brutal-border brutal-shadow flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Smartphone size={20} /> 联系方式
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="bg-brutal-yellow brutal-border brutal-shadow-lg rounded-[40px] aspect-square flex items-end justify-end relative">
          <motion.img 
            src={HERO_IMAGE} 
            alt="John Carter" 
            className="w-[95%] h-[109%] object-cover rounded-[40px] origin-bottom cursor-pointer"
            style={{ clipPath: 'inset(0 0 5% 0 round 40px)' }}
            whileHover={{ 
              scale: 1.05, 
              rotate: -2,
              y: -10
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
          />
        </div>
      </motion.div>
      </div>

      <AnimatePresence>
        {showEmailModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white brutal-border brutal-shadow-lg p-8 rounded-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowEmailModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-brutal-yellow rounded-full brutal-border flex items-center justify-center mx-auto">
                  <Mail size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black">我的邮箱</h3>
                  <p className="text-gray-500 font-medium">随时欢迎您的来信</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-300 font-bold text-lg break-all select-all">
                  chengjingyi202409@163.com
                </div>

                <button 
                  onClick={() => setShowEmailModal(false)}
                  className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPhoneModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPhoneModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white brutal-border brutal-shadow-lg p-8 rounded-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowPhoneModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-brutal-blue rounded-full brutal-border flex items-center justify-center mx-auto text-white">
                  <Smartphone size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black">联系方式</h3>
                  <p className="text-gray-500 font-medium">期待与您的沟通</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-300 font-bold text-lg break-all select-all">
                  中国 +86 18757913506
                </div>

                <button 
                  onClick={() => setShowPhoneModal(false)}
                  className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Services = () => {
  const [showTiktokImage, setShowTiktokImage] = useState(false);

  const services = [
    {
      title: "推送作品范例",
      links: [
        { 
          text: "1、三下乡活动宣传推送", 
          subLinks: [
            { label: "1", url: "https://mp.weixin.qq.com/s/xo5CiETBJXJmAPQRqlhGDg" },
            { label: "2", url: "https://mp.weixin.qq.com/s/5_fFCazx1lMIUrgiBwUuag" },
            { label: "3", url: "https://mp.weixin.qq.com/s/FImnMJap-UyiVX1IkLm2ug" }
          ]
        },
        { 
          text: "2、员工活动日推送", 
          subLinks: [
            { label: "1", url: "/sand1.jpg" },
            { label: "2", url: "/sand2.jpg" },
            { label: "3", url: "/sand3.jpg" }
          ]
        },
        { 
          text: "3、学院培训中心宣传推送", 
          url: "https://mp.weixin.qq.com/s/CzxYOGVPr5roLjsQnjdYyw"
        }
      ],
      icon: <Layout className="w-12 h-12" />,
      color: "bg-gray-100"
    },
    {
      title: "日常PPT制作",
      links: [
        { text: "1、活动总结PPT", url: "/ppt3.pdf" },
        { text: "2、学术汇报PPT", url: "/ppt1.pdf" },
        { text: "3、学科竞赛PPT", url: "https://pan.baidu.com/s/1F5-ebvGKii3l0N3LBgX0jQ?pwd=hjbb" }
      ],
      icon: <Smartphone className="w-12 h-12" />,
      color: "bg-white",
      featured: true
    },
    {
      title: "vlogger's works",
      titleLink: "/tiktok.png",
      desc: "主包的校园生活，欢迎围观～",
      icon: <Watch className="w-12 h-12" />,
      color: "bg-gray-100"
    },
    {
      title: "internship achievement",
      links: [
        { text: "1、小红书账号运营及转化成果", url: "/achievement.pdf" },
        { 
          text: "2、梦想改造家项目视频", 
          url: "https://pan.baidu.com/s/1GaSege5ubr02WZOYKO4M8Q?pwd=a6fe",
          suffix: "，脚本",
          suffixUrl: "/脚本.pdf"
        }
      ],
      icon: <Video className="w-12 h-12" />,
      color: "bg-white",
      featured: true
    }
  ];

  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl md:text-6xl font-black">
          <span className="bg-brutal-pink text-white px-4">MY WORKS!</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="text-lg font-medium">地球online闯关过程中不定期爆出的一些小奖品</span>
          <span className="flex items-center gap-2 text-brutal-pink font-black tracking-widest mt-2 animate-bounce">
            <span className="text-xl">✧</span>
            点击下方图标解锁成就
            <span className="text-xl">✧</span>
          </span>
          <span className="text-gray-400 text-sm">↓ Scroll down ↓</span>
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 上排：3个卡片 */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`brutal-card p-8 flex flex-col gap-6 ${s.color} ${s.featured ? 'brutal-shadow-lg' : ''}`}
            >
              <div className="bg-white brutal-border p-4 rounded-xl w-fit">
                {s.icon}
              </div>
              <div className="space-y-4">
                {s.titleLink ? (
                  <div className="relative">
                    <a 
                      href={s.titleLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl font-black hover:text-brutal-pink hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1 group w-fit"
                      onMouseEnter={() => s.title === "vlogger's works" && setShowTiktokImage(true)}
                      onMouseLeave={() => s.title === "vlogger's works" && setShowTiktokImage(false)}
                    >
                      {s.title}
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xl">↗</span>
                    </a>
                    
                    {/* Hover 图片弹出效果 */}
                    {s.title === "vlogger's works" && (
                      <AnimatePresence>
                        {showTiktokImage && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 bottom-full left-0 mb-4 brutal-border brutal-shadow-sm rounded-xl bg-white w-[250px] md:w-[320px] p-2"
                          >
                            <img 
                              src="/tiktok.png" 
                              alt="Tiktok screenshot" 
                              className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                            />
                            <div className="absolute inset-0 border-4 border-black rounded-xl pointer-events-none"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ) : (
                  <h3 className="text-2xl font-black">{s.title}</h3>
                )}
                {s.links ? (
                  <div className="flex flex-col gap-3">
                    {s.links.map((link, idx) => (
                      link.subLinks ? (
                        <div key={idx} className="flex items-center flex-wrap gap-2 text-gray-600 font-medium">
                          <span>{link.text}</span>
                          <div className="flex items-center gap-1.5">
                            {link.subLinks.map((sub, sIdx) => (
                              <a
                                key={sIdx}
                                href={sub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 flex items-center justify-center rounded-md bg-white border-2 border-black text-xs font-bold hover:bg-brutal-pink hover:text-white transition-colors"
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div key={idx} className="flex items-center">
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 font-medium hover:text-brutal-pink hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1 group"
                          >
                            {link.text}
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
                          </a>
                          {link.suffix && link.suffixUrl && (
                            <>
                              <span className="text-gray-600 font-medium">，</span>
                              <a 
                                href={link.suffixUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 font-medium hover:text-brutal-pink hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1 group"
                              >
                                {link.suffix.replace('，', '')}
                                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
                              </a>
                            </>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.desc}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 下排：第4个项目卡片 + "未完待续" 设计 */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {/* 第4个项目卡片 (靠左对齐，占据 1/3 宽度) */}
          {services.slice(3).map((s, i) => (
            <motion.div 
              key={i + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className={`brutal-card p-8 flex flex-col gap-6 ${s.color} ${s.featured ? 'brutal-shadow-lg' : ''}`}
            >
              <div className="bg-white brutal-border p-4 rounded-xl w-fit">
                {s.icon}
              </div>
              <div className="space-y-4">
                {s.titleLink ? (
                  <a 
                    href={s.titleLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-black hover:text-brutal-pink hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1 group w-fit"
                  >
                    {s.title}
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xl">↗</span>
                  </a>
                ) : (
                  <h3 className="text-2xl font-black">{s.title}</h3>
                )}
                {s.links ? (
                  <div className="flex flex-col gap-3">
                    {s.links.map((link, idx) => (
                      link.subLinks ? (
                        <div key={idx} className="flex items-center flex-wrap gap-2 text-gray-600 font-medium">
                          <span>{link.text}</span>
                          <div className="flex items-center gap-1.5">
                            {link.subLinks.map((sub, sIdx) => (
                              <a
                                key={sIdx}
                                href={sub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 flex items-center justify-center rounded-md bg-white border-2 border-black text-xs font-bold hover:bg-brutal-pink hover:text-white transition-colors"
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div key={idx} className="flex items-center">
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 font-medium hover:text-brutal-pink hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1 group"
                          >
                            {link.text}
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
                          </a>
                          {link.suffix && link.suffixUrl && (
                            <>
                              <span className="text-gray-600 font-medium">，</span>
                              <a 
                                href={link.suffixUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 font-medium hover:text-brutal-pink hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1 group"
                              >
                                {link.suffix.replace('，', '')}
                                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">↗</span>
                              </a>
                            </>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.desc}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* 右侧：未完待续 设计 (占据 2/3 宽度) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col items-center justify-center relative min-h-[250px]"
          >
            {/* 装饰元素 */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 text-brutal-yellow opacity-80"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 text-brutal-pink opacity-80"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            </motion.div>

            {/* 文字块 */}
            <div className="bg-brutal-yellow brutal-border brutal-shadow px-8 py-6 rounded-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform cursor-pointer relative group">
              <h3 className="text-3xl font-black text-black mb-2">To be continued...</h3>
              <p className="text-gray-800 font-bold text-lg">更多作品正在赶来的路上 🏃‍♀️💨</p>
              
              {/* 悬停时出现的小提示 */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap brutal-border">
                敬请期待！✨
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative flex justify-center items-center w-full"
      >
        <motion.img 
          src={idCardImage}
          alt="About Me ID Card" 
          className="w-full max-w-lg lg:max-w-xl object-contain cursor-pointer"
          style={{ filter: 'drop-shadow(12px 12px 0px rgba(0,0,0,1))' }}
          whileHover={{ 
            scale: 1.05, 
            rotate: 2,
            y: -10
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 15
          }}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-5xl md:text-6xl font-black leading-tight">
          Welcome to <br />
          Jane's <motion.span 
            className="bg-brutal-blue text-white px-4 inline-block transform -rotate-1 cursor-pointer brutal-border brutal-shadow-sm"
            whileHover={{ 
              scale: 1.1,
              rotate: 3,
              backgroundColor: "#ff6b8b",
              y: -5
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            channel!
          </motion.span>
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-8">
          <p className="indent-8 text-justify">
            我出生于2002年12月13日，土生土长浙中人，来自金华火腿的故乡（but我们家真不吃火腿，可以请你吃永康肉麦饼）。家庭氛围轻松，爸妈既开明又传统，不会对我的选择过多干涉，所以在我看似内敛的外表下生发着自由、跳脱而又炽热的灵魂。某种程度上的火象人格，可以在深思熟虑后突然梭哈一切，觉得未来人生超级光明！
          </p>
          <p className="font-bold text-xl text-black">
            Anyway，Welcome to my channel！
          </p>
          <p className="indent-8 text-justify">
            我是适应能力超强的高精力选手，同时也是一只靠独处恢复精力的死宅。这种“充电宝式”的精力分配具体表现为可以早7晚12地hold住实习、家教、论文、雅思...多线程事务，也可以用一天18个小时的睡眠恢复精力。我对游山玩水无感，但会在万籁俱寂时疯狂涌现出极佳的idea。
          </p>
          <div className="bg-white brutal-border brutal-shadow-sm p-6 rounded-xl space-y-4 font-bold text-black transform rotate-1">
            <p className="flex items-center gap-3">
              <span className="w-4 h-4 bg-brutal-pink brutal-border inline-block -rotate-6"></span>
              目前在“鼠”大读研，未来2年base全国各地实习；
            </p>
            <p className="flex items-center gap-3">
              <span className="w-4 h-4 bg-brutal-blue brutal-border inline-block rotate-3"></span>
              自媒体账号孵化者；
            </p>
            <p className="flex items-center gap-3">
              <span className="w-4 h-4 bg-brutal-yellow brutal-border inline-block -rotate-3"></span>
              伺机而动的创业者；
            </p>
            <p className="flex items-center gap-3">
              over！
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  return (
      {/* --- Projects Section (已移除) --- */}
  );
};

const Experience = () => {
  const experiences = [
    {
      date: "Jan 2023 - Present",
      title: "Mobile Product Designer",
      desc: "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: <History className="text-white" />,
      color: "bg-brutal-blue"
    },
    {
      date: "Jan 2021 - Dec 2022",
      title: "VP of Design",
      desc: "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: <Layout className="text-white" />,
      color: "bg-brutal-blue"
    },
    {
      date: "Mar 2020 - Dec 2020",
      title: "Senior UI Designer",
      desc: "Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.",
      icon: <Layout className="text-white" />,
      color: "bg-brutal-yellow"
    }
  ];

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      {/* 静态横幅 + 悬停动画 + 底部寄语 */}
      <div className="w-full mb-20 relative flex flex-col items-center gap-8">
        <motion.div 
          className="relative inline-block max-w-[90vw] cursor-default"
          whileHover={{ 
            scale: 1.05, 
            rotate: -1,
            y: -5
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 15
          }}
        >
          <div className="absolute top-0 left-0 bg-white brutal-border brutal-shadow-sm px-3 py-1 font-black text-sm z-10 -translate-y-1/2 translate-x-4">
            STATEMENT
          </div>
          <div className="bg-brutal-yellow brutal-border brutal-shadow py-6 px-8 md:px-16 flex items-center justify-center">
            <h3 className="text-3xl md:text-5xl font-black whitespace-nowrap">我的人生，要么得到，要么学到</h3>
          </div>
        </motion.div>
        
        {/* 底部静态文字 */}
        <div className="text-center mt-2 transform -rotate-2">
          <p className="text-xl md:text-2xl font-black text-gray-700 italic tracking-widest" style={{ textShadow: '2px 2px 0px rgba(255, 107, 139, 0.3)' }}>
            “ 相信自己已经做出了当下的最优解，
          </p>
          <p className="text-xl md:text-2xl font-black text-gray-700 italic tracking-widest mt-2 ml-8" style={{ textShadow: '2px 2px 0px rgba(59, 130, 246, 0.3)' }}>
            请朝着热爱的方向继续狂奔！ ”
          </p>
        </div>

        {/* 近日生活 | RECENT UPDATES */}
        <div className="w-full max-w-5xl mx-auto mt-24 mb-16 px-4 relative">
          {/* 背景可爱小图案（漂浮的星星、闪电等） */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* 左上区域 */}
            <motion.div className="absolute -top-10 left-10" animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="text-black"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/></svg>
            </motion.div>
            <motion.div className="absolute -top-4 left-1/4 text-brutal-pink text-2xl" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>●</motion.div>
            <motion.div className="absolute top-8 left-20 text-brutal-blue text-xl" animate={{ rotate: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }}>✦</motion.div>
            <motion.div className="absolute top-20 left-2 text-brutal-yellow text-3xl" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}>★</motion.div>
            
            {/* 右上区域 */}
            <motion.div className="absolute -top-16 right-20 text-brutal-pink" animate={{ rotate: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/></svg>
            </motion.div>
            <motion.div className="absolute top-4 right-1/4 text-black text-xl" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}>✦</motion.div>
            <motion.div className="absolute -top-8 right-10 text-brutal-green text-2xl" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2.8 }}>✿</motion.div>
            <motion.div className="absolute top-24 right-8 text-brutal-pink text-xl font-black" animate={{ rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3.2 }}>!</motion.div>

            {/* 左下区域 */}
            <motion.div className="absolute bottom-0 left-0 text-black text-3xl" animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>➔</motion.div>
            <motion.div className="absolute -bottom-8 left-1/4" animate={{ rotate: [0, 45, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="text-black"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/></svg>
            </motion.div>
            <motion.div className="absolute bottom-16 left-8 text-brutal-pink text-2xl" animate={{ scale: [1, 0.8, 1] }} transition={{ repeat: Infinity, duration: 2.2 }}>✖</motion.div>
            <motion.div className="absolute bottom-4 left-1/3 text-brutal-blue font-black text-xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.8 }}>?</motion.div>

            {/* 右下区域 */}
            <motion.div className="absolute -bottom-10 right-10 text-brutal-blue text-2xl" animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }}>✿</motion.div>
            <motion.div className="absolute bottom-10 right-0 text-brutal-pink" animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/></svg>
            </motion.div>
            <motion.div className="absolute -bottom-4 right-1/4 text-brutal-yellow text-3xl" animate={{ rotate: [0, -180, 0] }} transition={{ repeat: Infinity, duration: 6 }}>✺</motion.div>
            <motion.div className="absolute bottom-20 right-12 text-black text-xl" animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>✦</motion.div>

            {/* 中间穿插区域 (卡片之间的缝隙) */}
            <motion.div className="absolute top-1/2 left-[30%] text-brutal-yellow text-2xl" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}>✦</motion.div>
            <motion.div className="absolute bottom-1/4 left-[38%] text-brutal-green text-xl" animate={{ rotate: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 3 }}>▲</motion.div>
            <motion.div className="absolute top-1/4 right-[35%] text-brutal-pink text-xl" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.7 }}>●</motion.div>
            <motion.div className="absolute bottom-[40%] right-[28%] text-black text-2xl" animate={{ rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}>✖</motion.div>
          </div>

          <div className="bg-brutal-pink brutal-border brutal-shadow-sm px-6 py-2 inline-block transform -rotate-2 mb-12 relative z-10">
            <h3 className="text-2xl font-black text-white tracking-wider">
              近日生活 | RECENT UPDATES
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 md:gap-8 relative">
            {/* 卡片 1 */}
            <motion.div 
              className="bg-white brutal-border py-8 px-4 rounded-2xl relative group cursor-pointer"
              style={{ boxShadow: '6px 6px 0px 0px #3B82F6' }}
              whileHover={{ y: -5, rotate: -1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brutal-blue p-2 rounded-lg text-white brutal-border shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <span className="font-bold text-base md:text-lg">最近在读</span>
              </div>
              <div className="text-center">
                <p className="font-black text-lg md:text-xl border-b-2 border-black inline-block pb-1">
                  《皮囊》
                </p>
              </div>
              {/* 装饰星星 */}
              <div className="absolute -top-4 -left-4 text-2xl">✦</div>
              <div className="absolute -bottom-4 -right-4 text-brutal-blue text-2xl">✦</div>
            </motion.div>

            {/* 箭头 1 (仅在桌面端显示) */}
            <div className="hidden md:block absolute top-1/2 left-[25%] -translate-y-1/2 -translate-x-1/2 z-10 text-2xl font-black text-gray-400">
              ⤑
            </div>

            {/* 卡片 2 */}
            <motion.div 
              className="bg-white brutal-border py-8 px-4 rounded-2xl relative group cursor-pointer transform rotate-1"
              style={{ boxShadow: '6px 6px 0px 0px #FF6B8B' }}
              whileHover={{ y: -5, rotate: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brutal-pink p-2 rounded-lg text-white brutal-border shrink-0">
                  {/* 改为耳机的图标 */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                </div>
                <span className="font-bold text-base md:text-lg">最近在听</span>
              </div>
              <div className="text-center">
                <p className="font-black text-lg md:text-xl border-b-2 border-black inline-block pb-1">
                  《岩中花述》
                </p>
              </div>
              {/* 装饰星星 */}
              <div className="absolute -top-3 -right-3 text-brutal-pink text-xl">⚡</div>
              <div className="absolute -bottom-5 left-4 text-2xl">✦</div>
            </motion.div>

            {/* 箭头 2 (仅在桌面端显示) */}
            <div className="hidden md:block absolute top-1/2 left-[50%] -translate-y-1/2 -translate-x-1/2 z-10 text-2xl font-black text-gray-400 transform rotate-6">
              ⤑
            </div>

            {/* 卡片 3 (新增) */}
            <motion.div 
              className="bg-white brutal-border py-8 px-4 rounded-2xl relative group cursor-pointer transform -rotate-1"
              style={{ boxShadow: '6px 6px 0px 0px #FFC107' }}
              whileHover={{ y: -5, rotate: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brutal-yellow p-2 rounded-lg text-white brutal-border shrink-0">
                  {/* 视频/播放 图标 */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
                </div>
                <span className="font-bold text-base md:text-lg">最近狂刷</span>
              </div>
              <div className="text-center">
                  <p className="font-black text-lg md:text-xl border-b-2 border-black inline-block pb-1">
                    奥姐小岛销售课程
                  </p>
                </div>
              {/* 装饰星星 */}
              <div className="absolute -top-4 left-10 text-brutal-yellow text-xl">✺</div>
              <div className="absolute -bottom-2 -right-2 text-xl">✦</div>
            </motion.div>

            {/* 箭头 3 (仅在桌面端显示) */}
            <div className="hidden md:block absolute top-1/2 left-[75%] -translate-y-1/2 -translate-x-1/2 z-10 text-2xl font-black text-gray-400 transform -rotate-6">
              ⤑
            </div>

            {/* 卡片 4 */}
            <motion.div 
              className="bg-white brutal-border py-8 px-4 rounded-2xl relative group cursor-pointer transform rotate-1"
              style={{ boxShadow: '6px 6px 0px 0px #10B981' }}
              whileHover={{ y: -5, rotate: -1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brutal-green p-2 rounded-lg text-white brutal-border shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <span className="font-bold text-base md:text-lg">最近感兴趣</span>
              </div>
              <div className="text-center">
                <p className="font-black text-lg md:text-xl border-b-2 border-black inline-block pb-1">
                  AI 编程
                </p>
              </div>
              {/* 装饰星星 */}
              <div className="absolute top-2 -right-4 text-brutal-pink text-xl">⚡</div>
              <div className="absolute -bottom-4 right-4 text-2xl">✦</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* “我是谁” 核心板块 -> 改为 地球 Online 开放游戏进度 */}
      <div className="max-w-7xl mx-auto mt-24 relative">
        
        {/* 顶部标题区 (移到网格框外部，更加跳脱的排版) */}
        <div className="flex flex-col items-center justify-center mb-16 relative z-20 gap-4">
          <motion.div 
            className="relative z-10 cursor-default"
            initial={{ rotate: -3 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <h2 className="text-5xl md:text-7xl font-black bg-white px-6 py-2 border-4 border-black rounded-2xl" style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
              地球Online
            </h2>
            <div className="absolute -top-6 -left-6 text-5xl text-brutal-yellow">✦</div>
          </motion.div>
          <motion.div 
            className="bg-brutal-pink border-4 border-black px-6 py-3 z-20 cursor-default" 
            style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
            initial={{ rotate: 2 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-widest">开放游戏进度</h2>
            <div className="absolute -bottom-6 -right-6 text-4xl text-brutal-blue">⚡</div>
          </motion.div>
        </div>

        {/* 游戏进度时间轴容器 (加上了网格背景，并缩窄宽度) */}
        <div 
          className="relative max-w-5xl mx-auto pb-20 pt-16 px-4 md:px-0 border-4 border-black bg-white rounded-3xl overflow-hidden"
          style={{
            boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          {/* 中间虚线轴 (仅桌面端居中，移动端靠左) */}
          <div className="absolute left-6 md:left-1/2 top-16 bottom-0 w-1 border-l-4 border-dashed border-black transform md:-translate-x-1/2 z-10"></div>
          
          {/* 顶部锚点箭头 (改为向上箭头) */}
          <div className="absolute top-16 left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white brutal-border rounded-xl flex items-center justify-center z-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </div>

          {/* 主线/支线 标签层 (并排在顶部) */}
          <div className="relative z-20 w-full mb-20 mt-8">
            <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0">
              {/* 左侧：主线任务标签 */}
              <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-12 pl-8 md:pl-0 relative">
                <motion.div 
                  className="bg-white border-4 border-black px-8 py-3 inline-block relative cursor-pointer"
                  style={{ boxShadow: '8px 8px 0px 0px #FF6B8B' }}
                  initial={{ rotate: -3 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <span className="font-black text-3xl md:text-4xl tracking-widest text-black flex items-center gap-3">
                    <span className="text-brutal-pink text-4xl">★</span> 主线任务
                  </span>
                </motion.div>
                <div className="absolute top-12 right-6 md:right-8 text-brutal-yellow text-3xl hidden md:block">✦</div>
              </div>
              {/* 右侧：支线任务标签 */}
              <div className="w-full md:w-1/2 flex justify-start pl-8 md:pl-12 pr-0 relative">
                <motion.div 
                  className="bg-white border-4 border-black px-8 py-3 inline-block relative cursor-pointer"
                  style={{ boxShadow: '8px 8px 0px 0px #10B981' }}
                  initial={{ rotate: 3 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <span className="font-black text-3xl md:text-4xl tracking-widest text-black flex items-center gap-3">
                    <span className="text-brutal-green text-4xl">✦</span> 支线任务
                  </span>
                </motion.div>
                <div className="absolute -top-4 left-6 md:left-10 text-brutal-blue text-2xl hidden md:block">✺</div>
              </div>
            </div>
          </div>

          <div className="space-y-16 md:space-y-24 relative z-20 px-2 md:px-0">
            
            {/* --- 2026.06 第一个个人网站上线 (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #FF6B8B' }} // 粉色阴影
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brutal-pink p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      {/* 电脑/代码 图标 */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2026.06</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">个人网站上线</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">AI手搓代码的第一个小成果</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2026.06 令人心动的offer (主线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 flex justify-start md:justify-end pr-4 md:pr-12 pl-14 md:pl-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #F59E0B' }} // 琥珀色阴影
                  whileHover={{ x: -5, y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500 p-3 rounded-xl text-white brutal-border shrink-0">
                      {/* 公文包/Offer 图标 */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">主线</span>
                        <span className="font-bold text-gray-800">2026.06</span>
                      </div>
                      <p className="font-black text-lg">令人心动的offer</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">实习实习实习～未完待续</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pl-16"></div>
            </div>

            {/* --- 2026.05 tcworld志愿者 (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #10B981' }}
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brutal-green p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2026.05</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">tcworld China2026<br />技术传播大会志愿者</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">负责外宾接待，分会场主持工作</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2025.12 备考雅思 (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #3B82F6' }}
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2025.12</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">备考雅思ing</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">打牢语言基础</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2025.11 vlogger (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #F97316' }}
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2025.11</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">成为一名vlogger</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">暂时佛系更新中</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2025.09 保研苏大 (主线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 flex justify-start md:justify-end pr-4 md:pr-12 pl-14 md:pl-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #8B5CF6' }}
                  whileHover={{ x: -5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brutal-purple p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">主线</span>
                        <span className="font-bold text-gray-800">2025.09</span>
                      </div>
                      <p className="font-black text-lg">专业排名前5%，保研至苏州大学</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">任团支书</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pl-16"></div>
            </div>

            {/* --- 2025.06 本科毕业 (主线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 flex justify-start md:justify-end pr-4 md:pr-12 pl-14 md:pl-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #EC4899' }} // 粉紫色阴影
                  whileHover={{ x: -5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      {/* 学位帽/毕业 图标 */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">主线</span>
                        <span className="font-bold text-gray-800">2025.06</span>
                      </div>
                      <p className="font-black text-lg">本科毕业</p>
                      <div className="text-sm text-gray-600 font-medium mt-2 space-y-2 leading-relaxed">
                        <p>
                          <span className="bg-pink-200 text-black px-1 mr-1 rounded font-bold border border-pink-400">科研项目</span>
                          参与<span className="font-bold text-gray-900">2项国家级</span>大学生创新训练项目并顺利结项；主持并参与<span className="font-bold text-gray-900">3项校级</span>学生重点科研项目并顺利结题。
                        </p>
                        <p>
                          <span className="bg-purple-200 text-black px-1 mr-1 rounded font-bold border border-purple-400">学科竞赛</span>
                          组队并参加2次浙江省公共管理案例大赛，均获<span className="font-bold text-gray-900">省三等奖</span>；累计省、校级奖项达<span className="font-bold text-gray-900">18余项</span>。
                        </p>
                        <p>
                          <span className="bg-green-200 text-black px-1 mr-1 rounded font-bold border border-green-400">本科荣誉</span>
                          <span className="font-bold text-gray-900">宁波大学优秀毕业生</span>；优秀青年志愿者；优秀学生干部；优秀共青团干部；校级奖学金获得者。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pl-16"></div>
            </div>

            {/* --- 2025.06 梦想改造家收官 (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #06B6D4' }}
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500 p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2025.06</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">宜家梦想改造家项目收官</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">啦啦啦～剪出第一支外宣视频</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2024.11 布罗艾和TA的朋友 (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #FF6B8B' }}
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brutal-pink p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2024.11</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">布罗艾和TA的朋友</p>
                      <p className="text-sm text-gray-500 font-medium mt-1">0—1搭建部门小红书账号 上线啦～</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2024.10-2025.06 宜家助理 (主线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 flex justify-start md:justify-end pr-4 md:pr-12 pl-14 md:pl-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #3B82F6' }}
                  whileHover={{ x: -5, y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-brutal-blue p-3 rounded-xl text-white brutal-border shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 0-2.18 2.18A22 22 0 0 1 12 15Z"/><path d="m15 12-3-3"/><path d="M10.73 21a8.7 8.7 0 0 0 7.71-7.15"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">主线</span>
                        <span className="font-bold text-gray-800">2024.10-2025.06</span>
                      </div>
                      <p className="font-black text-lg">担任宜家宁波商场P&C部门助理</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pl-16"></div>
            </div>

            {/* --- 2023.07-2023.8 三下乡·暑期社会实践 (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #10B981' }} // 绿色阴影
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brutal-green p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      {/* 团队/人群 图标 */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2023.07-2023.08</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">三下乡·暑期社会实践</p>
                      <div className="text-sm text-gray-600 font-medium mt-2 space-y-2 leading-relaxed">
                        <p>
                          <span className="bg-green-200 text-black px-1 mr-1 rounded font-bold border border-green-400">实地调研</span>
                          组织十余人小队深入舟山海岛进行社会实践，调研事迹获<span className="font-bold text-gray-900">县级、校级</span>媒体主页报道。
                        </p>
                        <p>
                          <span className="bg-orange-200 text-black px-1 mr-1 rounded font-bold border border-orange-400">新媒体宣传</span>
                          团队所属微博账号文章阅读量高达<span className="font-bold text-gray-900">2万余次</span>，所属微信公众号总浏览量达<span className="font-bold text-gray-900">1200余次</span>。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2021.09-2025.06 班级班长 (支线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pr-16"></div>

              <div className="w-full md:w-1/2 flex justify-start pl-14 md:pl-12 pr-4 md:pr-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #06B6D4' }} // 青色阴影
                  whileHover={{ x: 5, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500 p-3 rounded-xl text-white brutal-border shrink-0 mt-1">
                      {/* 领导力/奖杯 图标 */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">2021.09-2025.06</span>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">支线</span>
                      </div>
                      <p className="font-black text-lg">班级班长</p>
                      <div className="text-sm text-gray-600 font-medium mt-2 space-y-2 leading-relaxed">
                        <p>
                          <span className="bg-yellow-200 text-black px-1 mr-1 rounded font-bold border border-yellow-400">志愿服务</span>
                          负责协调青年志愿活动事宜，积极对接青志基地并建立长期合作，带领班级获评<span className="font-bold text-gray-900">“十佳志愿服务集体”</span>。
                        </p>
                        <p>
                          <span className="bg-blue-200 text-black px-1 mr-1 rounded font-bold border border-blue-400">日常活动</span>
                          积极策划主题班会，链接外部资源来安排每学年的春、秋户外活动，带领班级获评<span className="font-bold text-gray-900">“宁波大学先进团支部”</span>。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 2021.09 考入宁大 (主线) --- */}
            <div className="relative flex flex-col md:flex-row items-center w-full mt-16 md:mt-24">
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white brutal-border rounded-full flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2 flex justify-start md:justify-end pr-4 md:pr-12 pl-14 md:pl-4 mt-6 md:mt-0">
                <motion.div 
                  className="bg-white brutal-border py-4 px-5 rounded-2xl relative w-full max-w-sm group"
                  style={{ boxShadow: '6px 6px 0px 0px #FFC107' }}
                  whileHover={{ x: -5, y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-brutal-yellow p-3 rounded-xl text-white brutal-border shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">主线</span>
                        <span className="font-bold text-gray-800">2021.09</span>
                      </div>
                      <p className="font-black text-base text-gray-800">浙江高考前10%，考入宁波大学</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 hidden md:block pl-16"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-black">很高兴与你见面，再会！</span>
          <span className="text-sm font-medium text-gray-500">It's nice to see you here, wish you a wonderful day!</span>
        </div>
        
        <p className="text-gray-500 font-medium">
          © 2026 by Jingyi Cheng
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brutal-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        {/* --- Portfolio Section (已移除) --- */}
      {/* <Portfolio /> */}
        <Services />
      </main>
      <Footer />
    </div>
  );
}
