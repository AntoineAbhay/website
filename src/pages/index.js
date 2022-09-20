import React, { useEffect } from "react"
import DevIllustration from "../images/dev.inline.svg"
import SpaceIllustration from "../images/space.inline.svg"
import CyclistIllustration from "../images/cyclist.inline.svg"

import HtmlHead from "../components/HtmlHead"

import {
  show,
  firstPanel,
  firstPanelContent,
  firstPanelHeader,
  secondPanel,
  secondPanelContent,
  secondPanelHeader,
  separator,
  profile,
  profileItem,
  title,
  description,
} from "./index.module.css"

const IndexPage = () => {
  const profileRef = React.useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(show, entry.isIntersecting)
      })
    })
    const profileItems = [...profileRef.current?.children] || []
    profileItems.forEach((profileItem) => {
      observer.observe(profileItem)
    })
  }, [])

  return (
    <>
      <div className={firstPanel}>
        <div className={firstPanelContent}>
          <div className={firstPanelHeader}>Hey,</div>
          <div className={firstPanelHeader}>I'm Antoine</div>
        </div>
      </div>
      <div className={secondPanel}>
        <div className={secondPanelContent}>
          <div className={secondPanelHeader}>Who I am</div>
          <div className={separator} />
          <div ref={profileRef} className={profile}>
            <div className={profileItem}>
              <DevIllustration width="140px" height="113px" />
              <div className={title}>Developer</div>
              <div className={description}>Building products people love</div>
            </div>
            <div className={profileItem}>
              <SpaceIllustration width="140px" height="113px" />
              <div className={title}>Space enthousiast</div>
              <div className={description}>Dreaming of the stars</div>
            </div>
            <div className={profileItem}>
              <CyclistIllustration width="140px" height="113px" />
              <div className={title}>Urban cyclist</div>
              <div className={description}>Riding in Paris</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Head = () => <HtmlHead title="Home" />

export default IndexPage
