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

  // Render 3 copies: [buffer-before] [real list] [buffer-after].
  // This gives room to drag past either end of the "real" middle copy
  // before we need to silently snap back into range.
  const tripled = [...projects, ...projects, ...projects];

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    setWidth.current = el.scrollWidth / 3;
    // Start scrolled into the middle copy so there's a full set of
    // cards worth of drag room on both the left and right.
    el.scrollLeft = setWidth.current;
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

  // Also wrap on native scroll (trackpad/shift-wheel), so that loops
  // too — not just click-drag.
  const handleScroll = () => {
    if (!isDragging.current) wrapIfNeeded();
  };

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
    </>
  );
};

export default SectionWrapper(Works, "projects");