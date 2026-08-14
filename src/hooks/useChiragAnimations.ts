import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

gsap.config({ force3D: true, nullTargetWarn: false });

const ANIMATED =
  ".Fade_Up, .Fade_Stagger, .Project_Stagger, .Fade_Down_Header, #avatarImage, .Hero_Trail";

function initAnimations() {
  // Always start visible — never rely on opacity tweens for above-the-fold content
  gsap.set(ANIMATED, { opacity: 1 });

  gsap.from(".Fade_Down_Header", {
    y: -40,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.15,
    immediateRender: false,
  });

  gsap.from("#home .Fade_Stagger", {
    y: 40,
    duration: 0.9,
    stagger: 0.12,
    ease: "power2.out",
    delay: 0.3,
    immediateRender: false,
  });

  const avatar = document.querySelector("#avatarImage");
  const trails = gsap.utils.toArray<HTMLElement>(".Hero_Trail");
  const orbitEls = [avatar, ...trails].filter(Boolean) as HTMLElement[];

  if (orbitEls.length) {
    orbitEls.forEach((el) => {
      el.classList.add("spring-element-performance");
      gsap.set(el, { transformOrigin: "center center", opacity: 1 });
    });

    gsap.from(orbitEls, {
      scale: 0.75,
      duration: 2,
      delay: 0.8,
      ease: "elastic.out(0.8, 0.2)",
      stagger: 0.12,
      immediateRender: false,
      onStart() {
        trails.forEach((trail, i) => {
          const cfg = [
            { duration: 6, dir: 1 },
            { duration: 8, dir: -1 },
            { duration: 10, dir: 1 },
            { duration: 12, dir: -1 },
          ][i];
          if (!cfg) return;
          gsap.to(trail, {
            rotation: `+=${360 * cfg.dir}`,
            duration: cfg.duration,
            repeat: -1,
            ease: "linear",
          });
        });
      },
    });

    const avatarEl = avatar as HTMLElement | null;
    if (avatarEl) {
      let pressed = false;
      const springBack = () =>
        gsap.to(orbitEls, {
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(0.8, 0.2)",
          stagger: 0.08,
        });
      const pressDown = () => {
        pressed = true;
        gsap.to(orbitEls, {
          scale: 0.75,
          duration: 0.15,
          ease: "power2.out",
          stagger: { amount: 0.06 },
        });
      };
      const pressUp = () => {
        if (!pressed) return;
        pressed = false;
        springBack();
      };
      avatarEl.addEventListener("mousedown", pressDown);
      avatarEl.addEventListener("mouseup", pressUp);
      avatarEl.addEventListener("mouseleave", pressUp);
      avatarEl.addEventListener("touchstart", pressDown, { passive: true });
      avatarEl.addEventListener("touchend", pressUp, { passive: true });
    }
  }

  gsap.utils.toArray<HTMLElement>(".Fade_Up").forEach((el) => {
    if (el.closest("#home")) return;
    gsap.from(el, {
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.utils.toArray<HTMLElement>(".Project_Stagger").forEach((el) => {
    gsap.from(el, {
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
}

function clearAnimationStyles() {
  document.querySelectorAll(ANIMATED).forEach((el) => {
    gsap.set(el, { clearProps: "all" });
  });
}

export function useChiragAnimations() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;
    let ctx: gsap.Context | null = null;
    const anchors: Element[] = [];
    let onAnchor: ((e: Event) => void) | null = null;

    const timer = window.setTimeout(() => {
      lenis = new Lenis({ lerp: 0.08 });
      lenis.on("scroll", ScrollTrigger.update);

      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);

      ctx = gsap.context(() => initAnimations());

      onAnchor = (e: Event) => {
        const el = e.currentTarget as HTMLElement;
        const href = el.getAttribute("href") ?? el.getAttribute("data-href");
        if (!href?.startsWith("#")) return;
        e.preventDefault();
        const target = document.getElementById(href.slice(1));
        if (target && lenis) lenis.scrollTo(target);
      };

      document
        .querySelectorAll('a[href^="#"], button[data-href^="#"]')
        .forEach((el) => {
          anchors.push(el);
          el.addEventListener("click", onAnchor!);
        });

      ScrollTrigger.refresh();
    }, 50);

    return () => {
      window.clearTimeout(timer);
      if (onAnchor) {
        anchors.forEach((el) => el.removeEventListener("click", onAnchor!));
      }
      ctx?.revert();
      clearAnimationStyles();
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}

export function useActiveNav() {
  useEffect(() => {
    const header = document.getElementById("header");
    const sections: Record<string, HTMLElement | null> = {
      "#home": document.getElementById("home"),
      "#about": document.getElementById("about"),
      "#skills": document.getElementById("skills"),
      "#projects": document.getElementById("projects"),
      "#experience": document.getElementById("experience"),
      "#contact": document.getElementById("contact"),
    };

    const onScroll = () => {
      const h = header?.offsetHeight ?? 64;
      for (const [href, section] of Object.entries(sections)) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const link = document.querySelector(
          `#header a[href="${href}"], #header button[data-href="${href}"]`,
        );
        if (rect.top <= h && rect.bottom >= h) link?.classList.add("active");
        else link?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
