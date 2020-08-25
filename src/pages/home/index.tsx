import React, { useLayoutEffect, useState } from "react"
import { Link } from "gatsby";

import AnchorNav, { Anchored, dataAttribute } from '@components/AnchorNav';

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import useAnchorNav from '@hooks/useAnchorNav';

import "./home.scss"
import AnchorNavView from "@components/AnchorNav";

const generateRandomIndex = (a: Array<any>) => {
  return Math.floor(Math.random() * a.length);
}

const resumeIcons = [
  "fa-book-dead",
  "fa-book",
  "fa-file-prescription",
  "fa-file-pdf",
  "fa-file-signature"
]

const projectIcons = [
  "fa-bug",
  "fa-code-branch",
  "fa-coffee",
  "fa-heart-broken",
  "fa-pencil-ruler",
  "fa-tools",
  "fa-crow"
]

const HomePage: React.FC = () => {
  const [resumeIndex, setResumeIndex] = useState<number>(0);
  const [projectsIndex, setProjectsIndex] = useState<number>(0);

  useLayoutEffect(() => {
    setResumeIndex(generateRandomIndex(resumeIcons));
    setProjectsIndex(generateRandomIndex(projectIcons));
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <AnchorNavView containerClassName="sf-home-content">
        <Anchored className="sf-home-content__anchored" id="1" anchorLabel="Section 1">
          <h1>ONE</h1>
          <Anchored className="sf-home-content__anchored" id="1.1" anchorLabel="Section 1.1">
            <h2>ONE ONE</h2>
            Enim pariatur excepteur proident excepteur eu ex. Nostrud mollit duis reprehenderit quis minim minim culpa eiusmod. Commodo ut ut enim commodo consequat incididunt ut laboris eiusmod laborum mollit commodo duis.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="1.2" anchorLabel="Section 1.2">
            <h2>ONE TWO</h2>
            Consequat non labore ea eu. Est ea pariatur amet elit ex sunt deserunt in amet pariatur est occaecat. Nisi sunt qui eiusmod ea consequat reprehenderit. Ex exercitation qui veniam veniam nostrud in commodo nulla dolor cupidatat ea aute. Velit commodo quis deserunt aliquip nulla. Proident elit laborum fugiat id eiusmod non exercitation. Ad exercitation veniam sit minim in non anim incididunt eu.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="1.3" anchorLabel="Section 1.3">
            <h2>ONE THREE</h2>
            Irure ad fugiat sunt est enim esse anim non veniam eu. Commodo officia cupidatat proident eiusmod mollit culpa fugiat nostrud laborum eiusmod. Ipsum aute eu dolor voluptate reprehenderit voluptate consequat enim dolor ipsum voluptate esse. Anim mollit labore in tempor sint in sunt ut do elit non. Voluptate consequat dolor cillum sunt aliqua sit exercitation et pariatur do exercitation cillum. Veniam tempor quis nostrud tempor ut veniam quis amet culpa mollit mollit deserunt et. Sit fugiat labore nostrud mollit dolor duis tempor magna dolor excepteur in esse.
          </Anchored>
        </Anchored>
        <Anchored className="sf-home-content__anchored" id="2" anchorLabel="Section 2">
          <h1>TWO</h1>
          <Anchored className="sf-home-content__anchored" id="2.1" anchorLabel="Section 2.1">
            <h2>TWO ONE</h2>
            Enim pariatur excepteur proident excepteur eu ex. Nostrud mollit duis reprehenderit quis minim minim culpa eiusmod. Commodo ut ut enim commodo consequat incididunt ut laboris eiusmod laborum mollit commodo duis.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="2.2" anchorLabel="Section 2.2">
            <h2>TWO TWO</h2>
            Consequat non labore ea eu. Est ea pariatur amet elit ex sunt deserunt in amet pariatur est occaecat. Nisi sunt qui eiusmod ea consequat reprehenderit. Ex exercitation qui veniam veniam nostrud in commodo nulla dolor cupidatat ea aute. Velit commodo quis deserunt aliquip nulla. Proident elit laborum fugiat id eiusmod non exercitation. Ad exercitation veniam sit minim in non anim incididunt eu.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="2.3" anchorLabel="Section 2.3">
            <h2>TWO THREE</h2>
            Irure ad fugiat sunt est enim esse anim non veniam eu. Commodo officia cupidatat proident eiusmod mollit culpa fugiat nostrud laborum eiusmod. Ipsum aute eu dolor voluptate reprehenderit voluptate consequat enim dolor ipsum voluptate esse. Anim mollit labore in tempor sint in sunt ut do elit non. Voluptate consequat dolor cillum sunt aliqua sit exercitation et pariatur do exercitation cillum. Veniam tempor quis nostrud tempor ut veniam quis amet culpa mollit mollit deserunt et. Sit fugiat labore nostrud mollit dolor duis tempor magna dolor excepteur in esse.
          </Anchored>
        </Anchored>
        <Anchored className="sf-home-content__anchored" id="3" anchorLabel="Section 3">
          <h1>THREE</h1>
          <Anchored className="sf-home-content__anchored" id="3.1" anchorLabel="Section 3.1">
            <h2>THREE ONE</h2>
            Enim pariatur excepteur proident excepteur eu ex. Nostrud mollit duis reprehenderit quis minim minim culpa eiusmod. Commodo ut ut enim commodo consequat incididunt ut laboris eiusmod laborum mollit commodo duis.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="3.2" anchorLabel="Section 3.2">
            <h2>THREE TWO</h2>
            Consequat non labore ea eu. Est ea pariatur amet elit ex sunt deserunt in amet pariatur est occaecat. Nisi sunt qui eiusmod ea consequat reprehenderit. Ex exercitation qui veniam veniam nostrud in commodo nulla dolor cupidatat ea aute. Velit commodo quis deserunt aliquip nulla. Proident elit laborum fugiat id eiusmod non exercitation. Ad exercitation veniam sit minim in non anim incididunt eu.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="3.3" anchorLabel="Section 3.3">
            <h2>THREE THREE</h2>
            Irure ad fugiat sunt est enim esse anim non veniam eu. Commodo officia cupidatat proident eiusmod mollit culpa fugiat nostrud laborum eiusmod. Ipsum aute eu dolor voluptate reprehenderit voluptate consequat enim dolor ipsum voluptate esse. Anim mollit labore in tempor sint in sunt ut do elit non. Voluptate consequat dolor cillum sunt aliqua sit exercitation et pariatur do exercitation cillum. Veniam tempor quis nostrud tempor ut veniam quis amet culpa mollit mollit deserunt et. Sit fugiat labore nostrud mollit dolor duis tempor magna dolor excepteur in esse.
          </Anchored>
        </Anchored>
        <Anchored className="sf-home-content__anchored" id="4" anchorLabel="Section 4">
          <h1>FOUR</h1>
          <Anchored className="sf-home-content__anchored" id="4.1" anchorLabel="Section 4.1">
            <h2>FOUR ONE</h2>
            Enim pariatur excepteur proident excepteur eu ex. Nostrud mollit duis reprehenderit quis minim minim culpa eiusmod. Commodo ut ut enim commodo consequat incididunt ut laboris eiusmod laborum mollit commodo duis.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="4.2" anchorLabel="Section 4.2">
            <h2>FOUR TWO</h2>
            Consequat non labore ea eu. Est ea pariatur amet elit ex sunt deserunt in amet pariatur est occaecat. Nisi sunt qui eiusmod ea consequat reprehenderit. Ex exercitation qui veniam veniam nostrud in commodo nulla dolor cupidatat ea aute. Velit commodo quis deserunt aliquip nulla. Proident elit laborum fugiat id eiusmod non exercitation. Ad exercitation veniam sit minim in non anim incididunt eu.
          </Anchored>
          <Anchored className="sf-home-content__anchored" id="4.3" anchorLabel="Section 4.3">
            <h2>FOUR THREE</h2>
            Irure ad fugiat sunt est enim esse anim non veniam eu. Commodo officia cupidatat proident eiusmod mollit culpa fugiat nostrud laborum eiusmod. Ipsum aute eu dolor voluptate reprehenderit voluptate consequat enim dolor ipsum voluptate esse. Anim mollit labore in tempor sint in sunt ut do elit non. Voluptate consequat dolor cillum sunt aliqua sit exercitation et pariatur do exercitation cillum. Veniam tempor quis nostrud tempor ut veniam quis amet culpa mollit mollit deserunt et. Sit fugiat labore nostrud mollit dolor duis tempor magna dolor excepteur in esse.
          </Anchored>
        </Anchored>
      </AnchorNavView>
      {/* ¯\_(ツ)_/¯ */}
    </Layout>
  );
}

export default HomePage
