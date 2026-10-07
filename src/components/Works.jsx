import React, { useRef, useLayoutEffect } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='shrink-0 sm:w-[360px] w-full'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            draggable={false}
            className='w-full h-full object-cover rounded-2xl pointer-events-none'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto'
            >
              <img
                src={github}
                alt='source code'
                draggable={false}
                className='w-1/2 h-1/2 object-contain pointer-events-none'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  // Width of ONE full copy of the project list (measured after mount).
  // With 3 copies rendered back-to-back, this is scrollWidth / 3.
  const setWidth = useRef(0);

  // Custom scrollbar refs. Updated directly (not via state) so scrolling
  // doesn't re-render all the cards on every frame.
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const ghostRef = useRef(null);
  const barRef = useRef(null);
  const isThumbDragging = useRef(false);

  // Render 3 copies: [buffer-before] [real list] [buffer-after].
  // This gives room to drag past either end of the "real" middle copy
  // before we need to silently snap back into range.
  const tripled = [...projects, ...projects, ...projects];

  // Position the scrollbar thumb based on where we are within ONE set of
  // projects, so the loop's invisible jumps never show up in the bar.
  // When the view wraps from the last project back to the first, the thumb
  // wraps too: part of it is cut off on the right and the "ghost" copy
  // shows the rest entering from the left.
  const updateThumb = () => {
    const el = scrollRef.current;
    const w = setWidth.current;
    if (!el || !w || !thumbRef.current || !ghostRef.current) return;

    const pos = ((el.scrollLeft % w) + w) % w;
    const frac = pos / w;
    // Thumb is drawn at 75% of the visible fraction so it reads as a
    // slimmer indicator. Lower for shorter, raise toward 1 for longer.
    const size = Math.min(el.clientWidth / w, 1) * 0.5;

    thumbRef.current.style.width = `${size * 100}%`;
    thumbRef.current.style.left = `${frac * 100}%`;
    ghostRef.current.style.width = `${size * 100}%`;
    ghostRef.current.style.left = `${(frac - 1) * 100}%`;
  };

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    setWidth.current = el.scrollWidth / 3;
    // Start scrolled into the middle copy so there's a full set of
    // cards worth of drag room on both the left and right.
    el.scrollLeft = setWidth.current;
    updateThumb();

    // Card widths change at the sm breakpoint, so re-measure on resize
    // while keeping the same relative position in the list.
    const onResize = () => {
      const old = setWidth.current;
      const frac = old ? (((el.scrollLeft % old) + old) % old) / old : 0;
      setWidth.current = el.scrollWidth / 3;
      el.scrollLeft = setWidth.current * (1 + frac);
      updateThumb();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // If dragging (or native scrolling) has pushed us past the middle
  // copy's bounds, jump by exactly one set-width in the opposite
  // direction. Because the sets are identical, this jump is visually
  // invisible — the same card sits in the same screen position before
  // and after the jump.
  const wrapIfNeeded = () => {
    const el = scrollRef.current;
    const w = setWidth.current;
    if (!el || !w) return;

    if (el.scrollLeft < w * 0.5) {
      el.scrollLeft += w;
      startScrollLeft.current += w;
    } else if (el.scrollLeft > w * 1.5) {
      el.scrollLeft -= w;
      startScrollLeft.current -= w;
    }
  };

  const handlePointerDown = (e) => {
    if (e.target.closest(".pointer-events-auto")) return;
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    // Dragging right (positive dx) should scroll left, so subtract.
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = startScrollLeft.current - dx;
    wrapIfNeeded();
  };

  const stopDragging = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  // Dragging the scrollbar thumb. Moving the thumb across the whole track
  // scrolls through one full set of projects, like a normal scrollbar.
  // Dragging right scrolls right (opposite of dragging the cards).
  const handleThumbDown = (e) => {
    e.preventDefault();
    isThumbDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    e.currentTarget.setPointerCapture(e.pointerId);
    // Keep the bar thick while dragging, even if the pointer leaves it.
    if (barRef.current) barRef.current.style.height = "8px";
  };

  const handleThumbMove = (e) => {
    if (!isThumbDragging.current) return;
    const trackWidth = trackRef.current.offsetWidth;
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft =
      startScrollLeft.current + (dx / trackWidth) * setWidth.current;
    wrapIfNeeded();
  };

  const stopThumbDragging = () => {
    isThumbDragging.current = false;
    if (barRef.current) barRef.current.style.height = "";
  };

  // Also wrap on native scroll (trackpad/shift-wheel), so that loops
  // too — not just click-drag. Every scroll, from any source, moves the thumb.
  const handleScroll = () => {
    if (!isDragging.current && !isThumbDragging.current) wrapIfNeeded();
    updateThumb();
  };

  const thumbClass =
    "absolute top-0 h-full rounded-full bg-gradient-to-r from-[#915EFF] to-[#bf61ff] cursor-grab active:cursor-grabbing touch-none";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div
        ref={scrollRef}
        className='mt-20 flex overflow-x-auto overflow-y-hidden gap-7 pb-4 no-scrollbar cursor-grab select-none'
        style={{ scrollBehavior: "auto" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        onScroll={handleScroll}
      >
        {tripled.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index % projects.length} {...project} />
        ))}
      </div>

      {/* Custom scrollbar. The outer div's padding gives a taller grab area
          than the visible bar, and hovering anywhere in it thickens the bar. */}
      <div className='group mt-4 py-3'>
        <div
          ref={barRef}
          role='scrollbar'
          aria-label='Projects scroll position'
          aria-orientation='horizontal'
          className='relative h-1.5 w-full transition-[height] duration-200 group-hover:h-2'
        >
          {/* Track */}
          <div className='absolute inset-0 rounded-full bg-white/[0.08]' />

          {/* Glow sits on a wrapper outside the clipping layer, so the
              overflow-hidden that clips the wrapping thumb doesn't clip
              the glow. */}
          <div
            className='absolute inset-0'
            style={{ filter: "drop-shadow(0 0 6px rgba(145, 94, 255, 0.7))" }}
          >
            <div
              ref={trackRef}
              className='absolute inset-0 rounded-full overflow-hidden'
            >
              {[thumbRef, ghostRef].map((ref, i) => (
                <div
                  key={i}
                  ref={ref}
                  className={thumbClass}
                  onPointerDown={handleThumbDown}
                  onPointerMove={handleThumbMove}
                  onPointerUp={stopThumbDragging}
                  onPointerCancel={stopThumbDragging}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");