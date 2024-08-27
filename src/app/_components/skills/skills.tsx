"use client";
import { MotionSubtitle, MotionTitle, SectionDivider } from "@/components";
import { Component } from "lucide-react";
import React, { FC } from "react";

import {
  Css,
  Express,
  Html,
  Javascript,
  Mongodb,
  NextJs,
  Nodejs,
  ReactJs,
  Tailwind,
  Typescript,
} from "./icons";

interface SkillsProps {}

export const Skills: FC<SkillsProps> = () => (
  <>
    <SectionDivider icon={<Component className="text-primary-text w-5" />} />
    <div className="flex flex-col text-center">
      <MotionTitle title="Skills That Empower Me" />
      <MotionSubtitle subtitle="Full-Stack Developer, Educator, and Prompt Engineer based in Mombasa, Kenya, with experience in front-end and back-end development. Skilled in creating user-friendly interfaces and developing robust server-side applications, I am committed to delivering high-performance web solutions through collaboration and effective communication" />
      <div className="grid grid-cols-3 md:grid-cols-5 justify-center gap-4">
        <div className="flex justify-center">
          <Javascript />
        </div>
        <div className="flex justify-center">
          <ReactJs />
        </div>
        <div className="flex justify-center">
          <NextJs />
        </div>
        <div className="flex justify-center">
          <Express />
        </div>
        <div className="flex justify-center">
          <Nodejs />
        </div>
        <div className="flex justify-center h-[100px]">
          <Typescript />
        </div>
        <div className="flex justify-center h-[100px]">
          <Html />
        </div>
        <div className="flex justify-center h-[100px]">
          <Css />
        </div>
        <div className="flex justify-center h-[100px]">
          <Tailwind />
        </div>
        <div className="flex justify-center h-[100px]">
          <Mongodb />
        </div>
      </div>
    </div>
  </>
);
