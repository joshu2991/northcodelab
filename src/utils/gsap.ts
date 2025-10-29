import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { CustomBounce } from 'gsap/CustomBounce'
import { CustomWiggle } from 'gsap/CustomWiggle'
import { RoughEase, ExpoScaleEase, SlowMo } from 'gsap/EasePack'
import { Draggable } from 'gsap/Draggable'
import { Flip } from 'gsap/Flip'
import { Observer } from 'gsap/Observer'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'

// Register all GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    ScrollTrigger,
    TextPlugin,
    CustomEase,
    CustomBounce,
    CustomWiggle,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    Draggable,
    Flip,
    Observer,
    ScrollToPlugin,
    SplitText
  )
}

// Common animation presets
export const animations = {
  // Fade in from bottom
  fadeInUp: (element: gsap.TweenTarget, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' }
    )
  },

  // Fade in from left
  fadeInLeft: (element: gsap.TweenTarget, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, delay, ease: 'power3.out' }
    )
  },

  // Fade in from right
  fadeInRight: (element: gsap.TweenTarget, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay, ease: 'power3.out' }
    )
  },

  // Scale in
  scaleIn: (element: gsap.TweenTarget, delay = 0) => {
    return gsap.fromTo(element, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay, ease: 'back.out(1.7)' }
    )
  },

  // Stagger animation for multiple elements
  staggerIn: (elements: gsap.TweenTarget, stagger = 0.1) => {
    return gsap.fromTo(elements, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger,
        ease: 'power3.out' 
      }
    )
  },

  // Typewriter effect
  typewriter: (element: gsap.TweenTarget, text: string, speed = 0.05) => {
    return gsap.to(element, {
      text: text,
      duration: text.length * speed,
      ease: 'none'
    })
  },

  // Floating animation
  float: (element: gsap.TweenTarget, distance = 10, duration = 2) => {
    return gsap.to(element, {
      y: -distance,
      duration,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
  },

  // Pulse animation
  pulse: (element: gsap.TweenTarget, scale = 1.05, duration = 1) => {
    return gsap.to(element, {
      scale,
      duration,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
  },

  // Rotate animation
  rotate: (element: gsap.TweenTarget, rotation = 360, duration = 2) => {
    return gsap.to(element, {
      rotation,
      duration,
      ease: 'power2.inOut',
      repeat: -1
    })
  },

  // Morphing animation
  morph: (element: gsap.TweenTarget, morphTo: Record<string, unknown>, duration = 1) => {
    return gsap.to(element, {
      ...morphTo,
      duration,
      ease: 'power2.inOut'
    })
  }
}

// ScrollTrigger helpers
export const scrollTriggers = {
  // Trigger animation when element enters viewport
  onEnter: (element: string | Element, animation: () => gsap.core.Timeline, options = {}) => {
    return ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: animation,
      ...options
    })
  },

  // Trigger animation when element leaves viewport
  onLeave: (element: string | Element, animation: () => gsap.core.Timeline, options = {}) => {
    return ScrollTrigger.create({
      trigger: element,
      start: 'top 20%',
      end: 'bottom 20%',
      onLeave: animation,
      ...options
    })
  },

  // Pin element during scroll
  pin: (element: string | Element, duration: string | number, options = {}) => {
    return ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: duration,
      pin: true,
      ...options
    })
  },

  // Parallax effect
  parallax: (element: gsap.TweenTarget, speed = 0.5, options = {}) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element as string | Element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...options
      }
    })
  }
}

// Timeline helpers
export const timelines = {
  // Create a master timeline
  master: () => gsap.timeline(),

  // Create a timeline with default settings
  create: (defaults = {}) => gsap.timeline({ defaults }),

  // Chain animations
  chain: (animations: Array<() => gsap.core.Timeline>) => {
    const tl = gsap.timeline()
    animations.forEach(animation => tl.add(animation()))
    return tl
  }
}

// Utility functions
export const utils = {
  // Get random number between min and max
  random: (min: number, max: number) => Math.random() * (max - min) + min,

  // Get random integer between min and max
  randomInt: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,

  // Convert degrees to radians
  degToRad: (degrees: number) => degrees * (Math.PI / 180),

  // Convert radians to degrees
  radToDeg: (radians: number) => radians * (180 / Math.PI),

  // Clamp value between min and max
  clamp: (value: number, min: number, max: number) => Math.min(Math.max(value, min), max),

  // Linear interpolation
  lerp: (start: number, end: number, factor: number) => start + (end - start) * factor,

  // Ease functions
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeIn: (t: number) => t * t * t
}

// Export gsap instance
export { gsap }
